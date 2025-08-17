import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function ImageSlider({
    slides = [],
    interval = 7000,            // ⏱️ 5 s por defecto
    autoPlay = true,
    loop = true,
    showIndicators = true,
    showArrows = true,          // (disponible si lo quieres usar luego)
    aspect = "aspect-[9/16]",
    primaryColor = "bg-cyan-400",
    className = "",
    }) {
    const data = useMemo(
        () => slides.map((s) => (typeof s === "string" ? { src: s } : s)),
        [slides]
    );
    const count = data.length;

    const [index, setIndex] = useState(0);
    const [progress, setProgress] = useState(0); // 0..1 (solo para la barra visual)
    const rafRef = useRef(0);
    const startRef = useRef(0);
    const pausedRef = useRef(false);
    const containerRef = useRef(null);
    const progressRef = useRef(0);               // ✅ progreso en un ref para no reiniciar el efecto

    // 🖼️ Lightbox
    const [isLightboxOpen, setLightboxOpen] = useState(false);

    const goTo = useCallback(
        (i) => {
        if (count === 0) return;
        setIndex((prev) => {
            const raw = typeof i === "number" ? i : prev + i;
            if (loop) return ((raw % count) + count) % count;
            return Math.max(0, Math.min(raw, count - 1));
        });
        },
        [count, loop]
    );

    const next = useCallback(() => goTo(index + 1), [goTo, index]);
    const prev = useCallback(() => goTo(index - 1), [goTo, index]);

    // ⏯️ Autoplay + barra (requestAnimationFrame) — SIN dependencia de `progress`
    useEffect(() => {
        if (!autoPlay || count <= 1) return;

        cancelAnimationFrame(rafRef.current);
        progressRef.current = 0;
        setProgress(0);
        startRef.current = performance.now();

        const tick = (now) => {
        const paused = pausedRef.current || isLightboxOpen;
        if (paused) {
            // mantener el offset del tiempo mientras está en pausa
            startRef.current = now - progressRef.current * interval;
        } else {
            const elapsed = now - startRef.current;
            const p = Math.min(1, elapsed / interval);
            progressRef.current = p;
            setProgress(p);

            if (p >= 1) {
            setIndex((i) => {
                if (!loop && i >= count - 1) return i;
                return (i + 1) % count;
            });
            startRef.current = now;
            progressRef.current = 0;
            setProgress(0);
            }
        }
        rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafRef.current);
    }, [autoPlay, interval, loop, index, count, isLightboxOpen]);

    const onMouseEnter = () => { pausedRef.current = true; };
    const onMouseLeave = () => { pausedRef.current = false; };
    const onFocus = () => { pausedRef.current = true; };
    const onBlur = () => { pausedRef.current = false; };

    // teclado para el slider (fuera del lightbox)
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const handler = (e) => {
        if (e.key === "ArrowRight") { e.preventDefault(); next(); }
        if (e.key === "ArrowLeft")  { e.preventDefault(); prev(); }
        };
        el.addEventListener("keydown", handler);
        return () => el.removeEventListener("keydown", handler);
    }, [next, prev]);

    // swipe
    const touchStartX = useRef(0);
    const deltaX = useRef(0);
    const onTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
        deltaX.current = 0;
    };
    const onTouchMove = (e) => {
        deltaX.current = e.touches[0].clientX - touchStartX.current;
    };
    const onTouchEnd = () => {
        const th = 50;
        if (deltaX.current > th) prev();
        if (deltaX.current < -th) next();
        touchStartX.current = 0; deltaX.current = 0;
    };

    // Lightbox
    const openLightbox = () => setLightboxOpen(true);
    const closeLightbox = () => setLightboxOpen(false);

    // teclado dentro del lightbox
    useEffect(() => {
        if (!isLightboxOpen) return;
        const handler = (e) => {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
        };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [isLightboxOpen, next, prev]);

    if (count === 0) {
        return (
        <div className={`w-full ${aspect} rounded-xl bg-gray-200 grid place-items-center ${className}`}>
            <span className="text-gray-500 text-sm">Sin imágenes</span>
        </div>
        );
    }

    return (
        <section
        ref={containerRef}
        tabIndex={0}
        className={`relative w-full ${className}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onFocus}
        onBlur={onBlur}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        aria-roledescription="carrusel"
        aria-label="Galería de imágenes"
        >
        {/* Viewport */}
        <div className={`overflow-hidden ${aspect} w-full`}>
            <div
            className="h-full w-full flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
            >
            {data.map((s, i) => (
                <figure key={i} className="relative h-full w-full shrink-0 grow-0 basis-full">
                <img
                    src={s.src}
                    alt={s.alt ?? s.title ?? ""}
                    className="h-full w-full object-cover"
                    draggable={false}
                />

                {/* overlays (solo en el slider) */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-black/35" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/30 to-black/65" />
                </div>

                {/* botón expandir */}
                <button
                    type="button"
                    onClick={openLightbox}
                    title="Agrandar"
                    className="absolute right-8 top-10 h-9 w-9 rounded-full hover:bg-white/25 border-2 border-white text-white grid place-items-center backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/70"
                >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 3H3v5" />
                    <path d="M3 3l7 7" />
                    <path d="M16 21h5v-5" />
                    <path d="M21 21l-7-7" />
                    </svg>
                </button>

                {/* encabezado */}
                {(s.title || s.subtitle) && (
                    <div className="absolute left-8 top-10 right-16 text-white">
                    <h2 className="text-5xl font-bold leading-tight drop-shadow-sm" style={{ fontFamily: "GothamBold" }}>
                        {s.title}
                    </h2>
                    {s.subtitle && (
                        <p className="text-white/85 text-xl mt-0.5 italic" style={{ fontFamily: "GothamNormal" }}>
                        ({s.subtitle})
                        </p>
                    )}
                    <div className="mt-2 h-[8px] w-35 bg-[#00B3BD] overflow-hidden">
                        <div className={`h-full ${primaryColor}`}/>
                    </div>
                    </div>
                )}

                {/* descripción */}
                {s.description && (
                    <figcaption
                    className="absolute left-8 right-8 bottom-24 text-white text-lg text-justify leading-relaxed"
                    style={{ fontFamily: "GothamNormal" }}
                    >
                    {s.description}
                    </figcaption>
                )}
                </figure>
            ))}
            </div>
        </div>

        {/* dots */}
        {count > 1 && showIndicators && (
            <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
            {data.map((_, i) => (
                <button
                key={i}
                aria-label={`Ir al slide ${i + 1}`}
                aria-current={i === index ? "true" : "false"}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-white" : "bg-white/60 hover:bg-white/80"
                }`}
                />
            ))}
            </div>
        )}

        {/* LIGHTBOX */}
        {isLightboxOpen && (
            <div
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-[1px] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Vista ampliada de la imagen"
            onClick={closeLightbox}
            >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
                <button
                onClick={closeLightbox}
                aria-label="Cerrar"
                className="absolute -top-3 -right-3 h-9 w-9 rounded-full bg-white/90 hover:bg-white shadow-md grid place-items-center focus:outline-none focus:ring-2 focus:ring-slate-300"
                title="Cerrar"
                >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 6l12 12M18 6L6 18" />
                </svg>
                </button>

                <img
                src={data[index].src}
                alt={data[index].alt ?? data[index].title ?? ""}
                className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
                draggable={false}
                />
            </div>
            </div>
        )}
        </section>
    );
}