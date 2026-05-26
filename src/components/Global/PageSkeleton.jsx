// src/components/Global/HyperSkeletonGate.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SmartImage from "./SmartImage";

/* =========================
 * Utilidades de color
 * ========================= */
function hexToRgb(hex) {
    const h = hex.replace("#", "");
    const v = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
    const i = parseInt(v, 16);
    return { r: (i >> 16) & 255, g: (i >> 8) & 255, b: i & 255 };
}

function hexToRgba(hex, alpha = 1) {
    const { r, g, b } = hexToRgb(hex);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function darkenHex(hex, factor = 0.25) {
    const { r, g, b } = hexToRgb(hex);
    const nr = Math.round(r * (1 - factor));
    const ng = Math.round(g * (1 - factor));
    const nb = Math.round(b * (1 - factor));
    return `#${[nr, ng, nb].map((n) => n.toString(16).padStart(2, "0")).join("")}`;
}

/* =========================
 * Bloque Skeleton atómico
 * ========================= */
export function SkeletonBlock({
    className = "",
    rounded = "rounded-md",
    tintHex = "#DA2F7D",
    darken = 0.25,
    alpha = 0.55,
    as: Tag = "div",
    style,
    ...rest
}) {
    const darker = useMemo(() => darkenHex(tintHex, darken), [tintHex, darken]);
    return (
        <Tag
            className={["animate-pulse", rounded, className].join(" ")}
            style={{ backgroundColor: hexToRgba(darker, alpha), ...style }}
            {...rest}
        />
    );
}

/* =========================
 * Layout de carga: logo palpitante con salida cinematográfica
 * ========================= */
function LogoPulseLoader({ tintHex = "#DA2F7D", exiting = false }) {
    const { t } = useTranslation();
    // Si el fondo es blanco el logo (blanco) sería invisible → usar oscuro de respaldo
    const isWhite =
        tintHex === "#fff" ||
        tintHex === "#ffffff" ||
        tintHex.toLowerCase() === "#fff" ||
        tintHex.toLowerCase() === "#ffffff";
    const bgColor = isWhite ? "#1C1C1C" : tintHex;

    const [entered, setEntered] = useState(false);
    useEffect(() => {
        // Activar la transición de entrada en el siguiente frame
        const raf = requestAnimationFrame(() => setEntered(true));
        return () => cancelAnimationFrame(raf);
    }, []);

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-[9999]"
            style={{
                backgroundColor: bgColor,
                opacity: exiting ? 0 : 1,
                transition: "opacity 0.8s ease-in-out",
                pointerEvents: exiting ? "none" : "auto",
            }}
        >
            <style>{`
                @keyframes logoPulse {
                    0%, 100% { transform: scale(1); opacity: 0.6; }
                    50% { transform: scale(1.18); opacity: 1; }
                }
                @keyframes logoExit {
                    0% { transform: scale(1); opacity: 1; filter: blur(0px); }
                    100% { transform: scale(3.5); opacity: 0; filter: blur(12px); }
                }
                @keyframes logoEnter {
                    0% { transform: scale(0.5); opacity: 0; }
                    100% { transform: scale(1); opacity: 0.6; }
                }
                @keyframes dot { 0%, 80%, 100% { opacity: 0.2; transform: translateY(0); } 40% { opacity: 1; transform: translateY(-5px); } }
            `}</style>
            <div className="flex flex-col items-center gap-5">
                {/* Logo skeleton de carga — lazy */}
                <SmartImage
                    src="/Logos/Logo.svg"
                    alt="Guatemalan Coffees"
                    style={{
                        width: "180px",
                        maxWidth: "45vw",
                        height: "auto",
                        animation: exiting
                            ? "logoExit 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards"
                            : entered
                                ? "logoEnter 0.6s ease-out forwards, logoPulse 1.6s ease-in-out 0.6s infinite"
                                : "none",
                    }}
                />
                {/* Texto + puntos */}
                {!exiting && (
                    <div style={{ opacity: entered ? 1 : 0, transition: "opacity 0.5s ease", textAlign: "center" }}>
                        <p style={{ color: "rgba(255,255,255,0.75)", fontFamily: "GothamBold", fontSize: "0.75rem", letterSpacing: "0.2em", marginBottom: "8px" }}>
                            {t('app.loading')}
                        </p>
                        <div style={{ display: "flex", gap: "6px", justifyContent: "center" }}>
                            {[0, 1, 2].map((i) => (
                                <span key={i} style={{
                                    width: "6px", height: "6px", borderRadius: "50%",
                                    backgroundColor: "rgba(255,255,255,0.75)",
                                    display: "inline-block",
                                    animation: `dot 1.4s ease-in-out ${i * 0.2}s infinite`,
                                }} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

/* =========================
 * Hook: precarga de assets
 * ========================= */
function usePreloadAssets(assets) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!assets || assets.length === 0) {
            setLoaded(true);
            return;
        }
        let cancelled = false;
        let done = 0;

        const onOne = () => {
            if (cancelled) return;
            done += 1;
            if (done >= assets.length) {
                setLoaded(true);
            }
        };

        const trackers = assets.map((src) => {
            const img = new Image();
            img.onload = onOne;
            img.onerror = onOne;
            img.src = src;
            return img;
        });

        return () => {
            cancelled = true;
            trackers.forEach((im) => {
                im.onload = null;
                im.onerror = null;
            });
        };
    }, [assets]);

    return loaded;
}

/* =========================
 * Componente principal
 * ========================= */
/**
 * HyperSkeletonGate
 * Props:
 * - assets: string[] -> rutas a precargar
 * - tintHex: string  -> color base del skeleton (fondo sólido)
 * - graceMs: number  -> milisegundos de holgura tras cargar (default 2000)
 * - variant: "cover" | "custom"
 * - renderSkeleton?: ({ tintHex, SkeletonBlock }) => JSX (si variant="custom" o quieres override)
 * - children: contenido real (se muestra cuando termina la precarga + holgura)
 */
export default function PageSkeleton({
    assets = [],
    tintHex = "#DA2F7D",
    graceMs = 300,
    variant = "cover",
    renderSkeleton,
    children
}) {
    const [phase, setPhase] = useState("loading"); // "loading" | "exiting" | "done"

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        const t1 = setTimeout(() => setPhase("exiting"), Math.max(0, Number(graceMs) || 0));
        return () => clearTimeout(t1);
    }, [graceMs]);

    useEffect(() => {
        if (phase !== "exiting") return;
        const t2 = setTimeout(() => setPhase("done"), 400);
        return () => clearTimeout(t2);
    }, [phase]);

    if (phase === "done") {
        return <>{children}</>;
    }

    if (renderSkeleton && phase === "loading") {
        return renderSkeleton({ tintHex, SkeletonBlock });
    }

    return (
        <>
            {/* Placeholder que mantiene la altura del cover durante la carga,
                evita que el browser haga scroll anchoring hacia Section1 */}
            <div className="min-h-screen" aria-hidden="true" />
            {phase === "exiting" && children}
            <LogoPulseLoader tintHex={tintHex} exiting={phase === "exiting"} />
        </>
    );
}