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

    useEffect(() => {
        if (count <= 1) return;
        const next = (0 + 1) % count;
        const img = new Image();
        img.src = images[next];
    }, []);

    useEffect(() => {
        if (count <= 1) return;

        const tick = () => {
        const next = (current + 1) % count;
        setPrev(current);
        setCurrent(next);
        setFading(true);

        const afterNext = (next + 1) % count;
        const preload = new Image();
        preload.src = images[afterNext];

        fadeRef.current = setTimeout(() => {
            setFading(false);
            setPrev(null);
        }, fade);

        changeRef.current = setTimeout(tick, interval);
        };

        changeRef.current = setTimeout(tick, interval);

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
        <img
            key={`curr-${current}`}
            src={images[current]}
            alt=""
            loading={current === 0 ? "eager" : "lazy"}
            fetchPriority={current === 0 ? "high" : "auto"}
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover z-10"
            draggable={false}
        />

        {prev !== null && (
            <img
            key={`prev-${prev}`}
            src={images[prev]}
            alt=""
            loading="lazy"
            decoding="async"
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
