// DiversidadC.jsx
// Infografía base + títulos + ALTITUD + LLUVIA + TEMPERATURA + HUMEDAD + HARVEST (todas sin lupa)
// Indentación: 4 espacios. UTF-8.

import { motion } from 'framer-motion';

// ⚠️ Rutas de los SVGs
import BaseDiversidad from '../../../assets/C2/ui/DiversidadSVG.svg';

import TituloG from '../../../assets/C2/ui/TituloG.svg';

import TitAcatenango from '../../../assets/C2/ui/TitAcatenango.svg';
import TitAntigua from '../../../assets/C2/ui/TitAntigua.svg';
import TitAtitlan from '../../../assets/C2/ui/TitAtitlan.svg';
import TitCoban from '../../../assets/C2/ui/TitCoban.svg';
import TitFraijanes from '../../../assets/C2/ui/TitFraijanes.svg';
import TitHuehue from '../../../assets/C2/ui/TitHuehue.svg';
import TitOriente from '../../../assets/C2/ui/TitOriente.svg';
import TitSanMarcos from '../../../assets/C2/ui/TitSanMarcos.svg';

import AltAcatenango from '../../../assets/C2/ui/AltAcatenango.svg';
import AltAntigua from '../../../assets/C2/ui/AltAntigua.svg';
import AltAtitlan from '../../../assets/C2/ui/AltAtitlan.svg';
import AltCoban from '../../../assets/C2/ui/AltCoban.svg';
import AltFraijanes from '../../../assets/C2/ui/AltFraijanes.svg';
import AltHuehue from '../../../assets/C2/ui/AltHuehue.svg';
import AltOriente from '../../../assets/C2/ui/AltOriente.svg';
import AltSanMarcos from '../../../assets/C2/ui/AltSanMarcos.svg';

import LluAcatenango from '../../../assets/C2/ui/LluAcatenango.svg';
import LluAntigua from '../../../assets/C2/ui/LluAntigua.svg';
import LluAtitlan from '../../../assets/C2/ui/LluAtitlan.svg';
import LluCoban from '../../../assets/C2/ui/LluCoban.svg';
import LluFraijanes from '../../../assets/C2/ui/LluFraijanes.svg';
import LluHuehue from '../../../assets/C2/ui/LluHuehue.svg';
import LluOriente from '../../../assets/C2/ui/LluOriente.svg';
import LluSanMarcos from '../../../assets/C2/ui/LluSanMarcos.svg';

import TempAcatenango from '../../../assets/C2/ui/TempAcatenango.svg';
import TempAntigua from '../../../assets/C2/ui/TempAntigua.svg';
import TempAtitlan from '../../../assets/C2/ui/TempAtitlan.svg';
import TempCoban from '../../../assets/C2/ui/TempCoban.svg';
import TempFraijanes from '../../../assets/C2/ui/TempFraijanes.svg';
import TempHuehue from '../../../assets/C2/ui/TempHuehue.svg';
import TempOriente from '../../../assets/C2/ui/TempOriente.svg';
import TempSanMarcos from '../../../assets/C2/ui/TempSanMarcos.svg';

import HumAcatenango from '../../../assets/C2/ui/HumAcatenango.svg';
import HumAntigua from '../../../assets/C2/ui/HumAntigua.svg';
import HumAtitlan from '../../../assets/C2/ui/HumAtitlan.svg';
import HumCoban from '../../../assets/C2/ui/HumCoban.svg';
import HumFraijanes from '../../../assets/C2/ui/HumFraijanes.svg';
import HumHuehue from '../../../assets/C2/ui/HumHuehue.svg';
import HumOriente from '../../../assets/C2/ui/HumOriente.svg';
import HumSanMarcos from '../../../assets/C2/ui/HumSanMarcos.svg';

import PointAcatenango from '../../../assets/C2/ui/PointAntigua.svg';
import PointAntigua from '../../../assets/C2/ui/PointAcatenango.svg';
import PointAtitlan from '../../../assets/C2/ui/PointAtitlan.svg';
import PointCoban from '../../../assets/C2/ui/PointCoban.svg';
import PointFraijanes from '../../../assets/C2/ui/PointFraijanes.svg';
import PointHuehue from '../../../assets/C2/ui/PointHuehue.svg';
import PointOriente from '../../../assets/C2/ui/PointOriente.svg';
import PointSanMarcos from '../../../assets/C2/ui/PointSanMarcos.svg';

const EASE = [0.5, 1, 0.36, 1];

// 🟪 Banda superior para alinear títulos por abajo
const BAND_TOP_VH = 25;
const BAND_HEIGHT_VH = 22;
const BASELINE_IN_BAND_VH = 1.2;
const DEBUG_GUIDES = false;

// 🟣 Título morado
const TITLE_TOP_VH = 7;
const TITLE_HEIGHT_VH = 8;

// 🏔️ Banda ALTITUD
const ALT_BAND_TOP_VH = 33;
const ALT_BAND_HEIGHT_VH = 36;
const ALT_BASELINE_IN_BAND_VH = 3;

// 🌧️ Banda LLUVIA
const LLU_BAND_TOP_VH = 49.5;
const LLU_BAND_HEIGHT_VH = 36;
const LLU_BASELINE_IN_BAND_VH = 3;

// 🌡️ Banda TEMPERATURA (animación diferente: wipe + skew/rotate)
const TEMP_BAND_TOP_VH = 68;
const TEMP_BAND_HEIGHT_VH = 36;
const TEMP_BASELINE_IN_BAND_VH = 3;

// 💧 Banda HUMEDAD (animación diferente: radial reveal)
const HUM_BAND_TOP_VH = 79;
const HUM_BAND_HEIGHT_VH = 36;
const HUM_BASELINE_IN_BAND_VH = 3;

// 🍒 Banda HARVEST (puntitos por mes)
const HAR_BAND_TOP_VH = 107.8;
const HAR_BAND_HEIGHT_VH = 36;
const HAR_BASELINE_IN_BAND_VH = 2.8;
const HAR_DOT_HEIGHT_VH = 1.5;
// Posiciones verticales de los meses (desde la baseline hacia arriba)
const HAR_MONTH_OFFSET_VH = {
    apr: 10.7,
    mar: 13.2,
    feb: 15.8,
    jan: 18.5,
    dec: 21
};
const HAR_MONTH_LABEL = {
    dec: 'Diciembre',
    jan: 'Enero',
    feb: 'Febrero',
    mar: 'Marzo',
    apr: 'Abril'
};

/* ────────────────────────────────────────────────────────────────
    MetricItem: columna/ítem sin lupa
    variant:
        - 'bounce' → ALTITUD y LLUVIA
        - 'wipe'   → TEMPERATURA (reveal + skew/rotate)
        - 'radial' → HUMEDAD (clipPath: circle + giro)
        - 'dot'    → HARVEST (pop-in)
   ──────────────────────────────────────────────────────────────── */
function MetricItem({
    src,
    alt,
    left,
    bottom,
    heightVh,
    delay,
    ease = EASE,
    variant = 'bounce'
}) {
    const initialAnim =
        variant === 'wipe'
            ? { opacity: 0, clipPath: 'inset(100% 0% 0% 0%)', skewY: 6, rotate: 2, x: -10 }
            : variant === 'radial'
            ? { opacity: 0, clipPath: 'circle(0% at 50% 50%)', rotate: -15, scale: 0.9 }
            : variant === 'dot'
            ? { opacity: 0, scale: 0, y: 10 }
            : { opacity: 0, y: 12, scaleY: 0.6 };

    const animateAnim =
        variant === 'wipe'
            ? {
                    opacity: 1,
                    clipPath: 'inset(0% 0% 0% 0%)',
                    skewY: [6, -2, 0],
                    rotate: [2, -1, 0],
                    x: 0
                }
            : variant === 'radial'
            ? {
                    opacity: 1,
                    clipPath: 'circle(75% at 50% 50%)',
                    rotate: [-15, 6, 0],
                    scale: [0.9, 1.06, 1]
                }
            : variant === 'dot'
            ? { opacity: 1, scale: [0, 1.15, 1], y: [10, -2, 0] }
            : { opacity: 1, y: [12, -2, 0], scaleY: [0.6, 1.05, 1] };

    const transitionAnim =
        variant === 'wipe'
            ? { delay, duration: 0.9, ease }
            : variant === 'radial'
            ? { delay, duration: 0.95, ease }
            : variant === 'dot'
            ? { delay, duration: 0.6, ease }
            : { delay, duration: 0.75, ease };

    return (
        <motion.div
            className="absolute"
            style={{
                left,
                bottom,
                height: `${heightVh}vh`,
                width: 'auto',
                transformOrigin: '50% 100%',
                overflow: variant === 'wipe' || variant === 'radial' ? 'hidden' : 'visible',
                willChange: 'transform, opacity, clip-path'
            }}
            initial={initialAnim}
            animate={animateAnim}
            transition={transitionAnim}
        >
            <img
                src={src}
                alt={alt}
                className="block select-none"
                style={{ height: '100%', width: 'auto' }}
                draggable={false}
            />
        </motion.div>
    );
}

const DiversidadC = ({
    className = '',
    baseWidthVh = 420,
    delayStart = 0.5,
    stagger = 0.15
}) => {
    // Títulos de regiones
    const titles = [
        { key: 'acatenango', src: TitAcatenango, alt: 'Acatenango', left: '34vh', heightVh: 19, bottomFixVh: 0.0 },
        { key: 'antigua', src: TitAntigua, alt: 'Antigua', left: '44vh', heightVh: 14.5, bottomFixVh: 0.0 },
        { key: 'atitlan', src: TitAtitlan, alt: 'Atitlán', left: '55vh', heightVh: 17.5, bottomFixVh: 0.2 },
        { key: 'coban', src: TitCoban, alt: 'Cobán', left: '66vh', heightVh: 16.8, bottomFixVh: -0.1 },
        { key: 'fraijanes', src: TitFraijanes, alt: 'Fraijanes', left: '76vh', heightVh: 16, bottomFixVh: 0.0 },
        { key: 'huehue', src: TitHuehue, alt: 'Huehue', left: '87vh', heightVh: 16.0, bottomFixVh: 0.0 },
        { key: 'oriente', src: TitOriente, alt: 'Oriente', left: '98vh', heightVh: 14.2, bottomFixVh: 0.0 },
        { key: 'sanmarcos', src: TitSanMarcos, alt: 'San Marcos', left: '109vh', heightVh: 19, bottomFixVh: 0.1 }
    ];

    // ALTITUD: label + columnas
    const altItems = [
        { key: 'alt-acatenango', src: AltAcatenango, alt: 'Altitud Acatenango', left: '33vh', heightVh: 15, bottomFixVh: 0 },
        { key: 'alt-antigua', src: AltAntigua, alt: 'Altitud Antigua', left: '44vh', heightVh: 15, bottomFixVh: 0 },
        { key: 'alt-atitlan', src: AltAtitlan, alt: 'Altitud Atitlán', left: '55vh', heightVh: 15, bottomFixVh: 0 },
        { key: 'alt-coban', src: AltCoban, alt: 'Altitud Cobán', left: '65.5vh', heightVh: 15, bottomFixVh: 0 },
        { key: 'alt-fraijanes', src: AltFraijanes, alt: 'Altitud Fraijanes', left: '76vh', heightVh: 15, bottomFixVh: 0 },
        { key: 'alt-huehue', src: AltHuehue, alt: 'Altitud Huehue', left: '87vh', heightVh: 15, bottomFixVh: 0 },
        { key: 'alt-oriente', src: AltOriente, alt: 'Altitud Oriente', left: '98vh', heightVh: 15, bottomFixVh: 0 },
        { key: 'alt-sanmarcos', src: AltSanMarcos, alt: 'Altitud San Marcos', left: '109vh', heightVh: 15, bottomFixVh: 0 }
    ];

    // LLUVIA: label + columnas (mismos tamaños/left que altitud)
    const lluItems = [
        { key: 'llu-acatenango', src: LluAcatenango, alt: 'Lluvia Acatenango', left: '33vh', heightVh: 15, bottomFixVh: 0 },
        { key: 'llu-antigua', src: LluAntigua, alt: 'Lluvia Antigua', left: '44vh', heightVh: 15, bottomFixVh: 0 },
        { key: 'llu-atitlan', src: LluAtitlan, alt: 'Lluvia Atitlán', left: '55vh', heightVh: 15, bottomFixVh: 0 },
        { key: 'llu-coban', src: LluCoban, alt: 'Lluvia Cobán', left: '65vh', heightVh: 15, bottomFixVh: 0 },
        { key: 'llu-fraijanes', src: LluFraijanes, alt: 'Lluvia Fraijanes', left: '76vh', heightVh: 15, bottomFixVh: 0 },
        { key: 'llu-huehue', src: LluHuehue, alt: 'Lluvia Huehue', left: '87vh', heightVh: 15, bottomFixVh: 0 },
        { key: 'llu-oriente', src: LluOriente, alt: 'Lluvia Oriente', left: '98vh', heightVh: 15, bottomFixVh: 0 },
        { key: 'llu-sanmarcos', src: LluSanMarcos, alt: 'Lluvia San Marcos', left: '109vh', heightVh: 15, bottomFixVh: 0 }
    ];

    // 🌡️ TEMPERATURA: label + columnas (mismos tamaños/left que altitud/lluvia) con animación diferente
    const tempItems = [
        { key: 'temp-acatenango', src: TempAcatenango, alt: 'Temperatura Acatenango', left: '34vh', heightVh: 15, bottomFixVh: 0 },
        { key: 'temp-antigua', src: TempAntigua, alt: 'Temperatura Antigua', left: '45vh', heightVh: 15, bottomFixVh: 0 },
        { key: 'temp-atitlan', src: TempAtitlan, alt: 'Temperatura Atitlán', left: '56vh', heightVh: 15, bottomFixVh: 0 },
        { key: 'temp-coban', src: TempCoban, alt: 'Temperatura Cobán', left: '66.5vh', heightVh: 15, bottomFixVh: 0 },
        { key: 'temp-fraijanes', src: TempFraijanes, alt: 'Temperatura Fraijanes', left: '77vh', heightVh: 15, bottomFixVh: 0 },
        { key: 'temp-huehue', src: TempHuehue, alt: 'Temperatura Huehue', left: '88vh', heightVh: 15, bottomFixVh: 0 },
        { key: 'temp-oriente', src: TempOriente, alt: 'Temperatura Oriente', left: '99vh', heightVh: 15, bottomFixVh: 0 },
        { key: 'temp-sanmarcos', src: TempSanMarcos, alt: 'Temperatura San Marcos', left: '110vh', heightVh: 15, bottomFixVh: 0 }
    ];

    // 💧 HUMEDAD: label + columnas (gráfico circular) con animación radial
    const humItems = [
        { key: 'hum-acatenango', src: HumAcatenango, alt: 'Humedad Acatenango', left: '33vh', heightVh: 8, bottomFixVh: 0 },
        { key: 'hum-antigua', src: HumAntigua, alt: 'Humedad Antigua', left: '44vh', heightVh: 8, bottomFixVh: 0 },
        { key: 'hum-atitlan', src: HumAtitlan, alt: 'Humedad Atitlán', left: '55vh', heightVh: 8, bottomFixVh: 0 },
        { key: 'hum-coban', src: HumCoban, alt: 'Humedad Cobán', left: '65.5vh', heightVh: 8, bottomFixVh: 0 },
        { key: 'hum-fraijanes', src: HumFraijanes, alt: 'Humedad Fraijanes', left: '76vh', heightVh: 8, bottomFixVh: 0 },
        { key: 'hum-huehue', src: HumHuehue, alt: 'Humedad Huehue', left: '87vh', heightVh: 8, bottomFixVh: 0 },
        { key: 'hum-oriente', src: HumOriente, alt: 'Humedad Oriente', left: '98vh', heightVh: 8, bottomFixVh: 0 },
        { key: 'hum-sanmarcos', src: HumSanMarcos, alt: 'Humedad San Marcos', left: '109vh', heightVh: 8, bottomFixVh: 0 }
    ];

    // 🍒 HARVEST: puntos por mes y región
    const HAR_LEFT = {
        acatenango: '35vh',
        antigua: '46vh',
        atitlan: '57vh',
        coban: '67.5vh',
        fraijanes: '78vh',
        huehue: '89vh',
        oriente: '100vh',
        sanmarcos: '111vh'
    };
    const REGION_LABEL = {
        acatenango: 'Acatenango',
        antigua: 'Antigua',
        atitlan: 'Atitlán',
        coban: 'Cobán',
        fraijanes: 'Fraijanes',
        huehue: 'Huehue',
        oriente: 'Oriente',
        sanmarcos: 'San Marcos'
    };
    const HAR_SRC = {
        acatenango: PointAcatenango,
        antigua: PointAntigua,
        atitlan: PointAtitlan,
        coban: PointCoban,
        fraijanes: PointFraijanes,
        huehue: PointHuehue,
        oriente: PointOriente,
        sanmarcos: PointSanMarcos
    };
    // Meses por región (a partir de tu referencia)
    const HAR_PATTERN = {
        acatenango: ['dec', 'jan', 'feb', 'mar'],
        antigua: ['jan', 'feb', 'mar'],
        atitlan: ['dec', 'jan', 'feb', 'mar'],
        coban: ['dec', 'jan', 'feb'],
        fraijanes: ['jan', 'feb', 'mar', 'apr'],
        huehue: ['dec', 'jan', 'feb', 'mar'],
        oriente: ['dec', 'jan', 'feb', 'mar'],
        sanmarcos: ['dec', 'jan', 'feb', 'mar']
    };
    const harItems = [];
    Object.keys(HAR_PATTERN).forEach((key) => {
        const months = HAR_PATTERN[key];
        months.forEach((m) => {
            harItems.push({
                key: `har-${key}-${m}`,
                src: HAR_SRC[key],
                alt: `Harvest ${REGION_LABEL[key]} – ${HAR_MONTH_LABEL[m]}`,
                left: HAR_LEFT[key],
                heightVh: HAR_DOT_HEIGHT_VH,
                bottomFixVh: HAR_MONTH_OFFSET_VH[m]
            });
        });
    });

    // Timings
    const altDelayStart = delayStart + titles.length * stagger + 0.25;
    const lluDelayStart = altDelayStart + altItems.length * 0.12 + 0.4;
    const tempDelayStart = lluDelayStart + lluItems.length * 0.12 + 0.4;
    const humDelayStart = tempDelayStart + tempItems.length * 0.12 + 0.4;
    const harDelayStart = humDelayStart + humItems.length * 0.12 + 0.4;

    return (
        <figure
            className={`relative ${className}`}
            role="region"
            aria-label="Diversidad cafetalera – títulos + altitud + lluvia + temperatura + humedad + harvest"
            style={{ width: `${baseWidthVh}vh` }}
        >
            {/* 🖼️ Base */}
            <img
                src={BaseDiversidad}
                alt="Diversidad cafetalera"
                className="block select-none pointer-events-none"
                style={{ width: `${baseWidthVh}vh`, height: 'auto' }}
                draggable={false}
            />

            {/* Título morado */}
            <motion.img
                src={TituloG}
                alt="Diversidad cafetalera (título)"
                className="absolute select-none pointer-events-none"
                style={{
                    top: `${TITLE_TOP_VH}vh`,
                    left: '22%',
                    transform: 'translateX(-50%)',
                    height: `${TITLE_HEIGHT_VH}vh`,
                    width: 'auto',
                    transformOrigin: '50% 100%'
                }}
                initial={{ opacity: 0, y: -140, scaleY: 1 }}
                animate={{
                    opacity: [0, 1, 1, 1, 1, 1, 1, 1],
                    y: [-140, 0, -14, 0, -8, 0, -3, 0],
                    scaleY: [1, 0.92, 1.05, 0.98, 1.03, 0.995, 1.01, 1]
                }}
                transition={{ duration: 1.9, ease: EASE, times: [0, 0.55, 0.7, 0.78, 0.86, 0.93, 0.975, 1] }}
                draggable={false}
            />

            {/* BANDA TÍTULOS (sin interacción) */}
            <div
                className="absolute left-0"
                style={{
                    top: `${BAND_TOP_VH}vh`,
                    width: `${baseWidthVh}vh`,
                    height: `${BAND_HEIGHT_VH}vh`,
                    pointerEvents: 'none',
                    zIndex: 2
                }}
            >
                {DEBUG_GUIDES && (
                    <>
                        <div style={{ position: 'absolute', inset: 0, outline: '1px dashed rgba(0,0,0,0.25)' }} />
                        <div style={{ position: 'absolute', left: 0, right: 0, bottom: `${BASELINE_IN_BAND_VH}vh`, height: 0, borderBottom: '2px dashed rgba(255,0,128,0.6)' }} />
                    </>
                )}

                {titles.map((t, i) => (
                    <motion.img
                        key={t.key}
                        src={t.src}
                        alt={t.alt}
                        className="absolute select-none"
                        style={{
                            left: t.left,
                            bottom: `${BASELINE_IN_BAND_VH + (t.bottomFixVh ?? 0)}vh`,
                            height: `${t.heightVh}vh`,
                            width: 'auto',
                            transformOrigin: '50% 100%'
                        }}
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: delayStart + i * stagger, duration: 0.6, ease: EASE }}
                        whileHover={{ scale: 1.02 }}
                        draggable={false}
                    />
                ))}
            </div>

            {/* 🏔️ BANDA ALTITUD (sin interacción) */}
            <div
                className="absolute left-0"
                style={{
                    top: `${ALT_BAND_TOP_VH}vh`,
                    width: `${baseWidthVh}vh`,
                    height: `${ALT_BAND_HEIGHT_VH}vh`,
                    pointerEvents: 'none',
                    zIndex: 3
                }}
            >
                {DEBUG_GUIDES && (
                    <div style={{ position: 'absolute', left: 0, right: 0, bottom: `${ALT_BASELINE_IN_BAND_VH}vh`, height: 0, borderBottom: '2px dashed rgba(0,128,255,0.6)' }} />
                )}

                {/* Label */}
                <motion.img
                    key="altitud-label"
                    src={altItems[0].src}
                    alt={altItems[0].alt}
                    className="absolute select-none"
                    style={{
                        left: altItems[0].left,
                        bottom: `${ALT_BASELINE_IN_BAND_VH + (altItems[0].bottomFixVh ?? 0)}vh`,
                        height: `${altItems[0].heightVh}vh`,
                        width: 'auto',
                        transformOrigin: '50% 100%'
                    }}
                    initial={{ opacity: 0, y: 12, scaleY: 0.6 }}
                    animate={{ opacity: 1, y: [12, -2, 0], scaleY: [0.6, 1.05, 1] }}
                    transition={{ delay: altDelayStart, duration: 0.75, ease: EASE }}
                    draggable={false}
                />

                {/* Columnas */}
                {altItems.slice(1).map((a, i) => (
                    <MetricItem
                        key={a.key}
                        src={a.src}
                        alt={a.alt}
                        left={a.left}
                        bottom={`${ALT_BASELINE_IN_BAND_VH + (a.bottomFixVh ?? 0)}vh`}
                        heightVh={a.heightVh}
                        delay={altDelayStart + (i + 1) * 0.12}
                        variant="bounce"
                    />
                ))}
            </div>

            {/* 🌧️ BANDA LLUVIA (sin interacción) */}
            <div
                className="absolute left-0"
                style={{
                    top: `${LLU_BAND_TOP_VH}vh`,
                    width: `${baseWidthVh}vh`,
                    height: `${LLU_BAND_HEIGHT_VH}vh`,
                    pointerEvents: 'none',
                    zIndex: 3
                }}
            >
                {DEBUG_GUIDES && (
                    <div style={{ position: 'absolute', left: 0, right: 0, bottom: `${LLU_BASELINE_IN_BAND_VH}vh`, height: 0, borderBottom: '2px dashed rgba(0,200,120,0.6)' }} />
                )}

                {/* Label */}
                <motion.img
                    key="lluvia-label"
                    src={lluItems[0].src}
                    alt={lluItems[0].alt}
                    className="absolute select-none"
                    style={{
                        left: lluItems[0].left,
                        bottom: `${LLU_BASELINE_IN_BAND_VH + (lluItems[0].bottomFixVh ?? 0)}vh`,
                        height: `${lluItems[0].heightVh}vh`,
                        width: 'auto',
                        transformOrigin: '50% 100%'
                    }}
                    initial={{ opacity: 0, y: 12, scaleY: 0.6 }}
                    animate={{ opacity: 1, y: [12, -2, 0], scaleY: [0.6, 1.05, 1] }}
                    transition={{ delay: lluDelayStart, duration: 0.75, ease: EASE }}
                    draggable={false}
                />

                {/* Columnas */}
                {lluItems.slice(1).map((a, i) => (
                    <MetricItem
                        key={a.key}
                        src={a.src}
                        alt={a.alt}
                        left={a.left}
                        bottom={`${LLU_BASELINE_IN_BAND_VH + (a.bottomFixVh ?? 0)}vh`}
                        heightVh={a.heightVh}
                        delay={lluDelayStart + (i + 1) * 0.12}
                        variant="bounce"
                    />
                ))}
            </div>

            {/* 🌡️ BANDA TEMPERATURA (wipe + skew/rotate) */}
            <div
                className="absolute left-0"
                style={{
                    top: `${TEMP_BAND_TOP_VH}vh`,
                    width: `${baseWidthVh}vh`,
                    height: `${TEMP_BAND_HEIGHT_VH}vh`,
                    pointerEvents: 'none',
                    zIndex: 3
                }}
            >
                {DEBUG_GUIDES && (
                    <div style={{ position: 'absolute', left: 0, right: 0, bottom: `${TEMP_BASELINE_IN_BAND_VH}vh`, height: 0, borderBottom: '2px dashed rgba(255,128,0,0.6)' }} />
                )}

                {/* Label (reveal tipo "cortina") */}
                <motion.img
                    key="temp-label"
                    src={tempItems[0].src}
                    alt={tempItems[0].alt}
                    className="absolute select-none"
                    style={{
                        left: tempItems[0].left,
                        bottom: `${TEMP_BASELINE_IN_BAND_VH + (tempItems[0].bottomFixVh ?? 0)}vh`,
                        height: `${tempItems[0].heightVh}vh`,
                        width: 'auto',
                        transformOrigin: '50% 100%',
                        overflow: 'hidden',
                        willChange: 'transform, opacity, clip-path'
                    }}
                    initial={{ opacity: 0, clipPath: 'inset(100% 0% 0% 0%)', y: 8 }}
                    animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', y: 0 }}
                    transition={{ delay: tempDelayStart, duration: 0.8, ease: EASE }}
                    draggable={false}
                />

                {/* Columnas con animación distinta (wipe) */}
                {tempItems.slice(1).map((a, i) => (
                    <MetricItem
                        key={a.key}
                        src={a.src}
                        alt={a.alt}
                        left={a.left}
                        bottom={`${TEMP_BASELINE_IN_BAND_VH + (a.bottomFixVh ?? 0)}vh`}
                        heightVh={a.heightVh}
                        delay={tempDelayStart + (i + 1) * 0.12}
                        variant="wipe"
                    />
                ))}
            </div>

            {/* 💧 BANDA HUMEDAD (radial reveal) */}
            <div
                className="absolute left-0"
                style={{
                    top: `${HUM_BAND_TOP_VH}vh`,
                    width: `${baseWidthVh}vh`,
                    height: `${HUM_BAND_HEIGHT_VH}vh`,
                    pointerEvents: 'none',
                    zIndex: 3
                }}
            >
                {DEBUG_GUIDES && (
                    <div style={{ position: 'absolute', left: 0, right: 0, bottom: `${HUM_BASELINE_IN_BAND_VH}vh`, height: 0, borderBottom: '2px dashed rgba(64,182,224,0.7)' }} />
                )}

                {/* Label (usando el primer item) */}
                <MetricItem
                    key="humedad-label"
                    src={humItems[0].src}
                    alt={humItems[0].alt}
                    left={humItems[0].left}
                    bottom={`${HUM_BASELINE_IN_BAND_VH + (humItems[0].bottomFixVh ?? 0)}vh`}
                    heightVh={humItems[0].heightVh}
                    delay={humDelayStart}
                    variant="radial"
                />

                {/* Círculos por región (radial) */}
                {humItems.slice(1).map((h, i) => (
                    <MetricItem
                        key={h.key}
                        src={h.src}
                        alt={h.alt}
                        left={h.left}
                        bottom={`${HUM_BASELINE_IN_BAND_VH + (h.bottomFixVh ?? 0)}vh`}
                        heightVh={h.heightVh}
                        delay={humDelayStart + (i + 1) * 0.12}
                        variant="radial"
                    />
                ))}
            </div>

            {/* 🍒 BANDA HARVEST (puntitos por mes) */}
            <div
                className="absolute left-0"
                style={{
                    top: `${HAR_BAND_TOP_VH}vh`,
                    width: `${baseWidthVh}vh`,
                    height: `${HAR_BAND_HEIGHT_VH}vh`,
                    pointerEvents: 'none',
                    zIndex: 3
                }}
            >
                {DEBUG_GUIDES && (
                    <div style={{ position: 'absolute', left: 0, right: 0, bottom: `${HAR_BASELINE_IN_BAND_VH}vh`, height: 0, borderBottom: '2px dashed rgba(200,100,150,0.6)' }} />
                )}

                {harItems.map((d, i) => (
                    <MetricItem
                        key={d.key}
                        src={d.src}
                        alt={d.alt}
                        left={d.left}
                        bottom={`${HAR_BASELINE_IN_BAND_VH + (d.bottomFixVh ?? 0)}vh`}
                        heightVh={d.heightVh}
                        delay={harDelayStart + i * 0.06}
                        variant="dot"
                    />
                ))}
            </div>

            
        </figure>
    );
};

export default DiversidadC;