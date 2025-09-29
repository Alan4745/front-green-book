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
 * Layout Skeleton: "cover"
 * (coincide con tu portada C1)
 * ========================= */
function CoverSkeletonLayout({ tintHex = "#DA2F7D" }) {
    return (
        <div
            className="relative min-h-screen w-screen overflow-hidden"
            style={{ backgroundColor: tintHex }}
        >
            {/* Velo sutil para contraste */}
            <div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(0deg, ${hexToRgba("#000000", 0.06)}, ${hexToRgba("#000000", 0.06)})`
                }}
            />

            {/* Número de capítulo */}
            <div className="absolute top-[20vh] right-[30vh]">
                <SkeletonBlock
                    className="w-[50vh] h-[28vh]"
                    rounded="rounded-xl"
                    tintHex={tintHex}
                    darken={0.22}
                    alpha={0.55}
                />
            </div>

            {/* Título + descripción */}
            <div className="absolute top-[35vh] right-[45vh] max-w-[60vw]">
                <SkeletonBlock
                    className="h-[8vh] w-[30vw]"
                    rounded="rounded-lg"
                    tintHex={tintHex}
                    darken={0.25}
                    alpha={0.6}
                />
                <div className="h-[2vh]" />
                <SkeletonBlock
                    className="h-[8vh] w-[28vw]"
                    rounded="rounded-lg"
                    tintHex={tintHex}
                    darken={0.25}
                    alpha={0.6}
                />

                <div className="mt-[5vh] space-y-3">
                    <SkeletonBlock
                        className="h-[3vh] w-[48vw]"
                        tintHex={tintHex}
                        darken={0.3}
                        alpha={0.5}
                    />
                    <SkeletonBlock
                        className="h-[3vh] w-[52vw]"
                        tintHex={tintHex}
                        darken={0.3}
                        alpha={0.5}
                    />
                    <SkeletonBlock
                        className="h-[3vh] w-[40vw]"
                        tintHex={tintHex}
                        darken={0.3}
                        alpha={0.5}
                    />
                </div>

                <div className="mt-[6vh] space-y-2">
                    <SkeletonBlock
                        className="h-[4vh] w-[22vw]"
                        tintHex={tintHex}
                        darken={0.25}
                        alpha={0.6}
                    />
                    <SkeletonBlock
                        className="h-[1.5vh] w-[7.2vw]"
                        rounded="rounded-sm"
                        tintHex={tintHex}
                        darken={0.15}
                        alpha={0.8}
                    />
                </div>
            </div>

            {/* Logo inferior izquierdo */}
            <div className="absolute bottom-[5vh] left-[5vh]">
                <SkeletonBlock
                    className="w-[22vh] h-[8vh]"
                    rounded="rounded-lg"
                    tintHex={tintHex}
                    darken={0.22}
                    alpha={0.55}
                />
            </div>

            {/* Selector de idioma */}
            <div className="absolute bottom-[5vh] right-15">
                <SkeletonBlock
                    className="h-[6vh] w-[24vh]"
                    rounded="rounded-xl"
                    tintHex={tintHex}
                    darken={0.22}
                    alpha={0.55}
                />
            </div>

            {/* Menú */}
            <div className="absolute top-[2vh] right-10 flex gap-3">
                <SkeletonBlock
                    className="h-[6vh] w-[6vh]"
                    rounded="rounded-xl"
                    tintHex={tintHex}
                    darken={0.22}
                    alpha={0.55}
                />
                <SkeletonBlock
                    className="h-[6vh] w-[20vh]"
                    rounded="rounded-xl"
                    tintHex={tintHex}
                    darken={0.22}
                    alpha={0.55}
                />
            </div>

            {/* CTA */}
            <div className="absolute top-10 left-10">
                <SkeletonBlock
                    className="h-[6.5vh] w-[36vh]"
                    rounded="rounded-2xl"
                    tintHex={tintHex}
                    darken={0.18}
                    alpha={0.65}
                />
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
    graceMs = 2000,
    variant = "cover",
    renderSkeleton,
    children
}) {
    const assetsReady = usePreloadAssets(assets);
    const [showContent, setShowContent] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        if (!assetsReady) return;
        timerRef.current = setTimeout(() => {
            setShowContent(true);
        }, Math.max(0, Number(graceMs) || 0));
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [assetsReady, graceMs]);

    if (!showContent) {
        if (renderSkeleton) {
            return renderSkeleton({ tintHex, SkeletonBlock });
        }
        if (variant === "cover") {
            return <CoverSkeletonLayout tintHex={tintHex} />;
        }
        // Fallback muy básico en caso de otra variant sin renderSkeleton:
        return (
            <div
                className="min-h-screen w-screen"
                style={{ backgroundColor: tintHex }}
            >
                <div className="p-8">
                    <SkeletonBlock
                        className="h-10 w-1/3"
                        tintHex={tintHex}
                    />
                    <div className="mt-4 space-y-3">
                        <SkeletonBlock className="h-6 w-2/3" tintHex={tintHex} />
                        <SkeletonBlock className="h-6 w-1/2" tintHex={tintHex} />
                        <SkeletonBlock className="h-6 w-1/3" tintHex={tintHex} />
                    </div>
                </div>
            </div>
        );
    }

    return <>{children}</>;
}