import React, { useMemo } from "react";

export default function CircleFeature({
    number = "",
    text = "",
    position = "top",     // top | right | bottom | left
    size = 240,
    thickness = 8,
    arcDeg = 120,
    // velocidad fija (todos giran igual)
    speedSec = 6,
    // desfase opcional EXTRA (en grados) si algún día dos comparten misma posición
    phaseShiftDeg = 0,
    className = "",
    }) {
    // Geometría
    const r  = useMemo(() => (size - thickness) / 2, [size, thickness]);
    const cx = useMemo(() => size / 2, [size]);
    const cy = useMemo(() => size / 2, [size]);
    const C  = useMemo(() => 2 * Math.PI * r, [r]);

    // Longitud del arco
    const seg = useMemo(() => (arcDeg / 360) * C, [arcDeg, C]);

    // Ángulo base según posición (respecto a las 3 en punto)
    const baseRotate = useMemo(() => {
        switch (position) {
        case "right":  return 0;
        case "bottom": return 90;
        case "left":   return 180;
        case "top":
        default:       return 270;
        }
    }, [position]);

    return (
        <div className={`relative inline-flex items-center justify-center ${className}`}>
        {/* Número de fondo */}
        <span
            className="absolute z-0 font-extrabold select-none pointer-events-none"
            style={{
            color: "#073E58",
            opacity: 0.5,
            fontFamily: "GothamBold",
            fontSize: Math.round(size * 0.55),
            transform: "translate(100%, 0%)",
            }}
        >
            {number}
        </span>

        {/* Círculo + texto */}
        <div className="relative z-10 flex items-center justify-center" style={{ width: size, height: size }}>
            <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="absolute inset-0"
            aria-hidden="true"
            >
            {/* aro claro */}
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="#7AD7DD" strokeWidth={thickness} />

            {/* grupo 1: fija la posición inicial del arco */}
            <g style={{ transformBox: "fill-box", transformOrigin: "50% 50%", transform: `rotate(${baseRotate}deg)` }}>
                {/* grupo 2: rota infinitamente SINCRONIZADO para todos */}
                <g
                style={{
                    transformBox: "fill-box",
                    transformOrigin: "50% 50%",
                    // pequeño desfase extra opcional sin tocar la posición inicial visual
                    // (aplicamos antes de la animación, así el offset se mantiene constante)
                    transform: `rotate(${phaseShiftDeg}deg)`,
                    animation: `cf_spin ${speedSec}s linear infinite`,
                    willChange: "transform",
                }}
                >
                <circle
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill="none"
                    stroke="#00333B"
                    strokeWidth={thickness}
                    strokeLinecap="round"
                    strokeDasharray={`${seg} ${C - seg}`}
                    strokeDashoffset={0}
                />
                </g>
            </g>
            </svg>

            {/* texto */}
            <div
            className="text-center px-3"
            style={{
                maxWidth: size * 0.75,
                color: "#00333B",
                fontWeight: 200,
                lineHeight: 1.1,
                fontSize: Math.round(size * 0.11),
                fontFamily: "GothamBold",
            }}
            >
            {text}
            </div>
        </div>

        {/* keyframes (globales para el componente) */}
        <style>{`
            @keyframes cf_spin { to { transform: rotate(360deg); } }
        `}</style>
        </div>
    );
}