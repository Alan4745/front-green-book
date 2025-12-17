import { useState, useEffect, useMemo } from "react";

export default function CircleFeature({
    number = "",
    text = "",
    position = "top",     // top | right | bottom | left
    size = 240,           // Tamaño inicial del círculo
    thickness = 8,
    arcDeg = 120,
    speedSec = 6,
    phaseShiftDeg = 0,
    className = "",
    transform = "",
    colorNumero = "",
    colorAro = "",
    colorMovimiento = "",

}) {
    // Estado para el tamaño dinámico basado en el ancho de la ventana
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Actualizar el tamaño de la ventana al cambiar el tamaño de la pantalla
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Calcular el tamaño dinámico: 240px por defecto, pero con un cambio basado en el ancho de la ventana
    const dynamicSize = windowWidth > 1600 ? size : size * 0.8; // Ajuste de tamaño si la pantalla es mayor a 1600px

    // Geometría
    const r = useMemo(() => (dynamicSize - thickness) / 2, [dynamicSize, thickness]);
    const cx = useMemo(() => dynamicSize / 2, [dynamicSize]);
    const cy = useMemo(() => dynamicSize / 2, [dynamicSize]);
    const C = useMemo(() => 2 * Math.PI * r, [r]);

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
                    color: {colorNumero},
                    opacity: 0.5,
                    fontFamily: "GothamBold",
                    fontSize: Math.round(dynamicSize * 0.55),
                    transform,
                }}
            >
                {number}
            </span>

            {/* Círculo + texto */}
            <div className="relative z-10 flex items-center justify-center" style={{ width: dynamicSize, height: dynamicSize }}>
                <svg
                    width={dynamicSize}
                    height={dynamicSize}
                    viewBox={`0 0 ${dynamicSize} ${dynamicSize}`}
                    className="absolute inset-0 "
                    aria-hidden="true"
                >
                    {/* Aro claro */}
                    <circle cx={cx} cy={cy} r={r} fill="none" stroke={colorAro} strokeWidth={thickness} />

                    {/* Grupo 1: Fija la posición inicial del arco */}
                    <g style={{ transformBox: "fill-box", transformOrigin: "50% 50%", transform: `rotate(${baseRotate}deg)` }}>
                        {/* Grupo 2: Rota infinitamente sincronizado para todos */}
                        <g
                            style={{
                                transformBox: "fill-box",
                                transformOrigin: "50% 50%",
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
                                stroke={colorMovimiento}
                                strokeWidth={thickness}
                                strokeLinecap="round"
                                strokeDasharray={`${seg} ${C - seg}`}
                                strokeDashoffset={0}
                            />
                        </g>
                    </g>
                </svg>

                {/* Texto dentro del círculo */}
                <div
                    className="text-center px-3"
                    style={{
                        maxWidth: dynamicSize * 0.75,
                        color: "#00333B",
                        fontWeight: 200,
                        lineHeight: 1.1,
                        fontSize: Math.round(dynamicSize * 0.11),
                        fontFamily: "GothamBold",
                    }}
                >
                    {text}
                </div>
            </div>

            {/* Keyframes para la animación */}
            <style>{`
                @keyframes cf_spin { to { transform: rotate(360deg); } }
            `}</style>
        </div>
    );
}