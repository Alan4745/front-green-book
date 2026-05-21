import { motion } from 'framer-motion';

/**
 * Anillo de progreso animado (inline SVG).
 * Dibuja un aro de fondo tenue y un aro blanco que "carga" de 0 a `percent`
 * cuando entra en vista. Se reinicia al cambiar `replayKey` (carrusel móvil).
 */
const ProgressRing = ({
    percent = 98,
    label = '',
    labelClassName = '',
    trackColor = 'rgba(255,255,255,0.45)',
    progressColor = '#ffffff',
    strokeWidth = 5,
    duration = 1.4,
    delay = 0.25,
    replayKey,
}) => {
    const VB = 100;
    const r = (VB - strokeWidth) / 2 - 1;
    const circumference = 2 * Math.PI * r;
    const clamped = Math.min(Math.max(percent, 0), 100);
    // Hueco mínimo de 8% para que se note visualmente que no completa el círculo
    const visual = Math.min(clamped, 92);
    const target = circumference * (1 - visual / 100);

    return (
        <div className="relative h-full w-full">
            <svg viewBox={`0 0 ${VB} ${VB}`} className="h-full w-full">
                {/* Aro de fondo tenue */}
                <circle
                    cx={VB / 2}
                    cy={VB / 2}
                    r={r}
                    fill="none"
                    stroke={trackColor}
                    strokeWidth={strokeWidth}
                />
                {/* Aro de progreso que se "carga" */}
                <motion.circle
                    key={replayKey}
                    cx={VB / 2}
                    cy={VB / 2}
                    r={r}
                    fill="none"
                    stroke={progressColor}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    transform={`rotate(-90 ${VB / 2} ${VB / 2})`}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset: target }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration, delay, ease: 'easeInOut' }}
                />
            </svg>
            {/* Texto centrado (ej. "98%") */}
            <div className="absolute inset-0 flex items-center justify-center">
                <span
                    className={`text-white text-center ${labelClassName}`}
                    style={{ fontFamily: 'GothamBold' }}
                >
                    {label}
                </span>
            </div>
        </div>
    );
};

export default ProgressRing;
