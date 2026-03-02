// src/components/Global/HyperSkeletonGate.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";

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
    // Si el fondo es blanco el logo (blanco) sería invisible → usar oscuro de respaldo
    const isWhite =
        tintHex === "#fff" ||
        tintHex === "#ffffff" ||
        tintHex.toLowerCase() === "#fff" ||
        tintHex.toLowerCase() === "#ffffff";
    const bgColor = isWhite ? "#1C1C1C" : tintHex;

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
            `}</style>
            <img
                src="/Logos/Logo.svg"
                alt="Guatemalan Coffees"
                style={{
                    width: "180px",
                    maxWidth: "45vw",
                    height: "auto",
                    animation: exiting
                        ? "logoExit 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards"
                        : "logoPulse 1.6s ease-in-out infinite",
                }}
            />
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
    graceMs = 2000,
    variant = "cover",
    renderSkeleton,
    children
}) {
    const assetsReady = usePreloadAssets(assets);
    const [phase, setPhase] = useState("loading"); // "loading" | "exiting" | "done"
    const timerRef = useRef(null);

    useEffect(() => {
        if (!assetsReady || phase !== "loading") return;
        timerRef.current = setTimeout(() => {
            setPhase("exiting");
        }, Math.max(0, Number(graceMs) || 0));
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [assetsReady, graceMs, phase]);

    // Después de la animación de salida → mostrar contenido
    useEffect(() => {
        if (phase !== "exiting") return;
        const t = setTimeout(() => {
            setPhase("done");
            // Doble raf para que el browser ya haya pintado el children
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                });
            });
        }, 1000);
        return () => clearTimeout(t);
    }, [phase]);

    // Forzar scroll al tope cuando arranca la carga
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    if (phase === "done") {
        return <>{children}</>;
    }

    if (renderSkeleton && phase === "loading") {
        return renderSkeleton({ tintHex, SkeletonBlock });
    }

    // Renderizar children detrás del loader durante "exiting" para evitar flash blanco
    return (
        <>
            {phase === "exiting" && children}
            <LogoPulseLoader tintHex={tintHex} exiting={phase === "exiting"} />
        </>
    );
}