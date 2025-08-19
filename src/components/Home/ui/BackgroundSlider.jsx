import React, { useEffect, useRef, useState } from "react";

export default function BackgroundSlider({
    images = [],
    interval = 5000,
    fade = 1000,
    className = "",
    }) {
    const [current, setCurrent] = useState(0);
    const [prev, setPrev] = useState(null);
    const [fading, setFading] = useState(false);
    const changeRef = useRef(null);
    const fadeRef = useRef(null);

    const count = images.length;
    if (count === 0) return null;

    // Preload defensivo
    useEffect(() => {
        images.forEach((src) => {
        const img = new Image();
        img.src = src;
        });
    }, [images]);

    // Ciclo con setTimeout (evita drift)
    useEffect(() => {
        if (count <= 1) return;

        const tick = () => {
        const next = (current + 1) % count;
        setPrev(current);
        setCurrent(next);
        setFading(true);

        // fin de fade
        fadeRef.current = setTimeout(() => {
            setFading(false);
            setPrev(null);
        }, fade);

        // siguiente cambio
        changeRef.current = setTimeout(tick, interval);
        };

        changeRef.current = setTimeout(tick, interval);

        // manejar visibilidad de pestaña
        const onVisibility = () => {
        clearTimeout(changeRef.current);
        clearTimeout(fadeRef.current);
        if (!document.hidden) {
            changeRef.current = setTimeout(tick, interval);
        }
        };
        document.addEventListener("visibilitychange", onVisibility);

        return () => {
        clearTimeout(changeRef.current);
        clearTimeout(fadeRef.current);
        document.removeEventListener("visibilitychange", onVisibility);
        };
    }, [current, count, interval, fade]);

    return (
        <div className={`relative overflow-hidden ${className}`}>
        {/* Imagen actual */}
        <img
            key={`curr-${current}`}
            src={images[current]}
            alt=""
            className="absolute inset-0 h-full w-full object-cover z-10"
            draggable={false}
        />

        {/* Imagen anterior (se desvanece a 0) */}
        {prev !== null && (
            <img
            key={`prev-${prev}`}
            src={images[prev]}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-opacity z-20"
            style={{
                opacity: fading ? 0 : 1,
                transitionDuration: `${fade}ms`,
            }}
            draggable={false}
            />
        )}
        </div>
    );
}