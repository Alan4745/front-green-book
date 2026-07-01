// DiversidadC.jsx
// Infografía base + títulos + ALTITUD + LLUVIA + TEMPERATURA + HUMEDAD + HARVEST (todas sin lupa)
// Indentación: 4 espacios. UTF-8.

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SmartImage from '../../Global/SmartImage';

// ⚠️ Rutas de los SVGs — Español
import BaseDiversidad from '../../../assets/C2/ui/DiversidadSVG.svg';

// 🇰🇷 Coreano
import BaseDiversidad_ko from '../../../assets/C2/DiversidadKo/DiversidadSVG.svg';
import TituloG_ko from '../../../assets/C2/DiversidadKo/TituloG.svg';
import TitAcatenango_ko from '../../../assets/C2/DiversidadKo/TitAcatenango.svg';
import TitAntigua_ko from '../../../assets/C2/DiversidadKo/TitAntigua.svg';
import TitAtitlan_ko from '../../../assets/C2/DiversidadKo/TitAtitlan.svg';
import TitCoban_ko from '../../../assets/C2/DiversidadKo/TitCoban.svg';
import TitFraijanes_ko from '../../../assets/C2/DiversidadKo/TitFraijanes.svg';
import TitHuehue_ko from '../../../assets/C2/DiversidadKo/TitHuehue.svg';
import TitOriente_ko from '../../../assets/C2/DiversidadKo/TitOriente.svg';
import TitSanMarcos_ko from '../../../assets/C2/DiversidadKo/TitSanMarcos.svg';
import AltAcatenango_ko from '../../../assets/C2/DiversidadKo/AltAcatenango.svg';
import AltAntigua_ko from '../../../assets/C2/DiversidadKo/AltAntigua.svg';
import AltAtitlan_ko from '../../../assets/C2/DiversidadKo/AltAtitlan.svg';
import AltCoban_ko from '../../../assets/C2/DiversidadKo/AltCoban.svg';
import AltFraijanes_ko from '../../../assets/C2/DiversidadKo/AltFraijanes.svg';
import AltHuehue_ko from '../../../assets/C2/DiversidadKo/AltHuehue.svg';
import AltOriente_ko from '../../../assets/C2/DiversidadKo/AltOriente.svg';
import AltSanMarcos_ko from '../../../assets/C2/DiversidadKo/AltSanMarcos.svg';
import LluAcatenango_ko from '../../../assets/C2/DiversidadKo/LluAcatenango.svg';
import LluAntigua_ko from '../../../assets/C2/DiversidadKo/LluAntigua.svg';
import LluAtitlan_ko from '../../../assets/C2/DiversidadKo/LluAtitlan.svg';
import LluCoban_ko from '../../../assets/C2/DiversidadKo/LluCoban.svg';
import LluFraijanes_ko from '../../../assets/C2/DiversidadKo/LluFraijanes.svg';
import LluHuehue_ko from '../../../assets/C2/DiversidadKo/LluHuehue.svg';
import LluOriente_ko from '../../../assets/C2/DiversidadKo/LluOriente.svg';
import LluSanMarcos_ko from '../../../assets/C2/DiversidadKo/LluSanMarcos.svg';
import TempAcatenango_ko from '../../../assets/C2/DiversidadKo/TempAcatenango.svg';
import TempAntigua_ko from '../../../assets/C2/DiversidadKo/TempAntigua.svg';
import TempAtitlan_ko from '../../../assets/C2/DiversidadKo/TempAtitlan.svg';
import TempCoban_ko from '../../../assets/C2/DiversidadKo/TempCoban.svg';
import TempFraijanes_ko from '../../../assets/C2/DiversidadKo/TempFraijanes.svg';
import TempHuehue_ko from '../../../assets/C2/DiversidadKo/TempHuehue.svg';
import TempOriente_ko from '../../../assets/C2/DiversidadKo/TempOriente.svg';
import TempSanMarcos_ko from '../../../assets/C2/DiversidadKo/TempSanMarcos.svg';
import HumAcatenango_ko from '../../../assets/C2/DiversidadKo/HumAcatenango.svg';
import HumAntigua_ko from '../../../assets/C2/DiversidadKo/HumAntigua.svg';
import HumAtitlan_ko from '../../../assets/C2/DiversidadKo/HumAtitlan.svg';
import HumCoban_ko from '../../../assets/C2/DiversidadKo/HumCoban.svg';
import HumFraijanes_ko from '../../../assets/C2/DiversidadKo/HumFraijanes.svg';
import HumHuehue_ko from '../../../assets/C2/DiversidadKo/HumHuehue.svg';
import HumOriente_ko from '../../../assets/C2/DiversidadKo/HumOriente.svg';
import HumSanMarcos_ko from '../../../assets/C2/DiversidadKo/HumSanMarcos.svg';

// 🇯🇵 Japonés
import BaseDiversidad_jp from '../../../assets/C2/DiversidadJp/DiversidadSVG.svg';
import TituloG_jp from '../../../assets/C2/DiversidadJp/TituloG.svg';
import TitAcatenango_jp from '../../../assets/C2/DiversidadJp/TitAcatenango.svg';
import TitAntigua_jp from '../../../assets/C2/DiversidadJp/TitAntigua.svg';
import TitAtitlan_jp from '../../../assets/C2/DiversidadJp/TitAtitlan.svg';
import TitCoban_jp from '../../../assets/C2/DiversidadJp/TitCoban.svg';
import TitFraijanes_jp from '../../../assets/C2/DiversidadJp/TitFraijanes.svg';
import TitHuehue_jp from '../../../assets/C2/DiversidadJp/TitHuehue.svg';
import TitOriente_jp from '../../../assets/C2/DiversidadJp/TitOriente.svg';
import TitSanMarcos_jp from '../../../assets/C2/DiversidadJp/TitSanMarcos.svg';
import AltAcatenango_jp from '../../../assets/C2/DiversidadJp/AltAcatenango.svg';
import AltAntigua_jp from '../../../assets/C2/DiversidadJp/AltAntigua.svg';
import AltAtitlan_jp from '../../../assets/C2/DiversidadJp/AltAtitlan.svg';
import AltCoban_jp from '../../../assets/C2/DiversidadJp/AltCoban.svg';
import AltFraijanes_jp from '../../../assets/C2/DiversidadJp/AltFraijanes.svg';
import AltHuehue_jp from '../../../assets/C2/DiversidadJp/AltHuehue.svg';
import AltOriente_jp from '../../../assets/C2/DiversidadJp/AltOriente.svg';
import AltSanMarcos_jp from '../../../assets/C2/DiversidadJp/AltSanMarcos.svg';
import LluAcatenango_jp from '../../../assets/C2/DiversidadJp/LluAcatenango.svg';
import LluAntigua_jp from '../../../assets/C2/DiversidadJp/LluAntigua.svg';
import LluAtitlan_jp from '../../../assets/C2/DiversidadJp/LluAtitlan.svg';
import LluCoban_jp from '../../../assets/C2/DiversidadJp/LluCoban.svg';
import LluFraijanes_jp from '../../../assets/C2/DiversidadJp/LluFraijanes.svg';
import LluHuehue_jp from '../../../assets/C2/DiversidadJp/LluHuehue.svg';
import LluOriente_jp from '../../../assets/C2/DiversidadJp/LluOriente.svg';
import LluSanMarcos_jp from '../../../assets/C2/DiversidadJp/LluSanMarcos.svg';
import TempAcatenango_jp from '../../../assets/C2/DiversidadJp/TempAcatenango.svg';
import TempAntigua_jp from '../../../assets/C2/DiversidadJp/TempAntigua.svg';
import TempAtitlan_jp from '../../../assets/C2/DiversidadJp/TempAtitlan.svg';
import TempCoban_jp from '../../../assets/C2/DiversidadJp/TempCoban.svg';
import TempFraijanes_jp from '../../../assets/C2/DiversidadJp/TempFraijanes.svg';
import TempHuehue_jp from '../../../assets/C2/DiversidadJp/TempHuehue.svg';
import TempOriente_jp from '../../../assets/C2/DiversidadJp/TempOriente.svg';
import TempSanMarcos_jp from '../../../assets/C2/DiversidadJp/TempSanMarcos.svg';
import HumAcatenango_jp from '../../../assets/C2/DiversidadJp/HumAcatenango.svg';
import HumAntigua_jp from '../../../assets/C2/DiversidadJp/HumAntigua.svg';
import HumAtitlan_jp from '../../../assets/C2/DiversidadJp/HumAtitlan.svg';
import HumCoban_jp from '../../../assets/C2/DiversidadJp/HumCoban.svg';
import HumFraijanes_jp from '../../../assets/C2/DiversidadJp/HumFraijanes.svg';
import HumHuehue_jp from '../../../assets/C2/DiversidadJp/HumHuehue.svg';
import HumOriente_jp from '../../../assets/C2/DiversidadJp/HumOriente.svg';
import HumSanMarcos_jp from '../../../assets/C2/DiversidadJp/HumSanMarcos.svg';

// 🇨🇳 Chino
import BaseDiversidad_zh from '../../../assets/C2/DiversidadZh/DiversidadSVG.svg';
import TituloG_zh from '../../../assets/C2/DiversidadZh/TituloG.svg';
import TitAcatenango_zh from '../../../assets/C2/DiversidadZh/TitAcatenango.svg';
import TitAntigua_zh from '../../../assets/C2/DiversidadZh/TitAntigua.svg';
import TitAtitlan_zh from '../../../assets/C2/DiversidadZh/TitAtitlan.svg';
import TitCoban_zh from '../../../assets/C2/DiversidadZh/TitCoban.svg';
import TitFraijanes_zh from '../../../assets/C2/DiversidadZh/TitFraijanes.svg';
import TitHuehue_zh from '../../../assets/C2/DiversidadZh/TitHuehue.svg';
import TitOriente_zh from '../../../assets/C2/DiversidadZh/TitOriente.svg';
import TitSanMarcos_zh from '../../../assets/C2/DiversidadZh/TitSanMarcos.svg';
import AltAcatenango_zh from '../../../assets/C2/DiversidadZh/AltAcatenango.svg';
import AltAntigua_zh from '../../../assets/C2/DiversidadZh/AltAntigua.svg';
import AltAtitlan_zh from '../../../assets/C2/DiversidadZh/AltAtitlan.svg';
import AltCoban_zh from '../../../assets/C2/DiversidadZh/AltCoban.svg';
import AltFraijanes_zh from '../../../assets/C2/DiversidadZh/AltFraijanes.svg';
import AltHuehue_zh from '../../../assets/C2/DiversidadZh/AltHuehue.svg';
import AltOriente_zh from '../../../assets/C2/DiversidadZh/AltOriente.svg';
import AltSanMarcos_zh from '../../../assets/C2/DiversidadZh/AltSanMarcos.svg';
import LluAcatenango_zh from '../../../assets/C2/DiversidadZh/LluAcatenango.svg';
import LluAntigua_zh from '../../../assets/C2/DiversidadZh/LluAntigua.svg';
import LluAtitlan_zh from '../../../assets/C2/DiversidadZh/LluAtitlan.svg';
import LluCoban_zh from '../../../assets/C2/DiversidadZh/LluCoban.svg';
import LluFraijanes_zh from '../../../assets/C2/DiversidadZh/LluFraijanes.svg';
import LluHuehue_zh from '../../../assets/C2/DiversidadZh/LluHuehue.svg';
import LluOriente_zh from '../../../assets/C2/DiversidadZh/LluOriente.svg';
import LluSanMarcos_zh from '../../../assets/C2/DiversidadZh/LluSanMarcos.svg';
import TempAcatenango_zh from '../../../assets/C2/DiversidadZh/TempAcatenango.svg';
import TempAntigua_zh from '../../../assets/C2/DiversidadZh/TempAntigua.svg';
import TempAtitlan_zh from '../../../assets/C2/DiversidadZh/TempAtitlan.svg';
import TempCoban_zh from '../../../assets/C2/DiversidadZh/TempCoban.svg';
import TempFraijanes_zh from '../../../assets/C2/DiversidadZh/TempFraijanes.svg';
import TempHuehue_zh from '../../../assets/C2/DiversidadZh/TempHuehue.svg';
import TempOriente_zh from '../../../assets/C2/DiversidadZh/TempOriente.svg';
import TempSanMarcos_zh from '../../../assets/C2/DiversidadZh/TempSanMarcos.svg';
import HumAcatenango_zh from '../../../assets/C2/DiversidadZh/HumAcatenango.svg';
import HumAntigua_zh from '../../../assets/C2/DiversidadZh/HumAntigua.svg';
import HumAtitlan_zh from '../../../assets/C2/DiversidadZh/HumAtitlan.svg';
import HumCoban_zh from '../../../assets/C2/DiversidadZh/HumCoban.svg';
import HumFraijanes_zh from '../../../assets/C2/DiversidadZh/HumFraijanes.svg';
import HumHuehue_zh from '../../../assets/C2/DiversidadZh/HumHuehue.svg';
import HumOriente_zh from '../../../assets/C2/DiversidadZh/HumOriente.svg';
import HumSanMarcos_zh from '../../../assets/C2/DiversidadZh/HumSanMarcos.svg';

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
            {/* Métrica infografía — lazy */}
            <SmartImage
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
    const { i18n } = useTranslation();
    const isKo = i18n.language === 'ko';
    const isJp = i18n.language === 'jp';
    const isZh = i18n.language === 'zh';

    // Posiciones por idioma. Korean: cada barra alineada al centro de su columna y escalada
    // para que la barra coloreada tenga el MISMO tamaño visual que en español (las barras KO
    // son idénticas en proporción a las ES; solo el viewBox tiene distinto espacio en blanco).
    // Cada métrica tiene su propio array porque el viewBox y el centro de la barra varían por SVG.
    const L = isKo  // Títulos (KO: escala 0.9 sobre rejilla del base)
        ? ['25.2vh', '39.4vh', '52.3vh', '66.2vh', '79.6vh', '92.3vh', '106.1vh', '118.6vh']
        : isJp  // centrado por el texto (el diamante viene del base)
        ? ['30.3vh', '40.9vh', '52.3vh', '62.8vh', '72.8vh', '84.3vh', '95.1vh',  '105.7vh']
        : isZh
        ? ['30.1vh', '40.9vh', '51.6vh', '62.2vh', '73.1vh', '84.1vh', '95.0vh',  '105.5vh']
        : ['34vh',   '44vh',   '55vh',   '66vh',   '76vh',   '87vh',   '98vh',    '109vh'];
    const LA = isKo  // Altitud
        ? ['21.8vh', '36.2vh', '49.4vh', '63.9vh', '77.1vh', '90.1vh', '104.2vh', '117.3vh']
        : isJp
        ? ['29.6vh', '40.5vh', '51.2vh', '62.3vh', '72.7vh', '83.5vh', '94.3vh',  '105.2vh']
        : isZh
        ? ['30.2vh', '40.9vh', '51.7vh', '62.4vh', '73.1vh', '83.8vh', '94.8vh',  '105.5vh']
        : ['33vh',   '44vh',   '55vh',   '65.5vh', '76vh',   '87vh',   '98vh',    '109vh'];
    const LL = isKo  // Lluvia
        ? ['22.5vh', '35.9vh', '49.5vh', '62.8vh', '76.6vh', '89.3vh', '102.8vh', '116.4vh']
        : isJp
        ? ['29.8vh', '40.6vh', '51.0vh', '61.9vh', '72.6vh', '83.4vh', '94.3vh',  '105.2vh']
        : isZh
        ? ['29.9vh', '40.8vh', '51.5vh', '62.2vh', '73.2vh', '83.7vh', '94.5vh',  '105.3vh']
        : ['33vh',   '44vh',   '55vh',   '65.5vh', '76vh',   '87vh',   '98vh',    '109vh'];
    const LT = isKo  // Temperatura
        ? ['24.0vh', '37.2vh', '50.4vh', '63.8vh', '78.3vh', '91.5vh', '104.2vh', '118.9vh']
        : isJp
        ? ['30.0vh', '40.7vh', '51.2vh', '62.0vh', '73.1vh', '83.7vh', '94.6vh',  '105.2vh']
        : isZh
        ? ['30.0vh', '40.9vh', '51.2vh', '62.2vh', '73.2vh', '83.9vh', '94.5vh',  '105.3vh']
        : ['34vh',   '45vh',   '56vh',   '66.5vh', '77vh',   '88vh',   '99vh',    '110vh'];
    const LH = isKo  // Humedad
        ? ['23.2vh', '37.7vh', '50.6vh', '65.2vh', '77.9vh', '91.3vh', '104.7vh', '118.5vh']
        : isJp  // centros reales del pastel (círculo, no bbox)
        ? ['29.1vh', '39.7vh', '50.5vh', '61.7vh', '72.2vh', '83.0vh', '93.9vh',  '104.8vh']
        : isZh
        ? ['29.1vh', '40.0vh', '50.6vh', '61.7vh', '72.3vh', '83.0vh', '94.0vh',  '104.5vh']
        : ['33vh',   '44vh',   '55vh',   '65.5vh', '76vh',   '87vh',   '98vh',    '109vh'];

    // Alturas calibradas (barra coloreada igual a español).
    const TH = isKo ? 0.9 : 1;        // Title Height scale (KO)
    const hTitJp = 19;                // Altura uniforme títulos japoneses
    const hTitZh = 19;                // Altura uniforme títulos chinos
    const fTitle = isKo ? 4 : isJp ? -2 : isZh ? -2 : 0;   // subir/bajar títulos
    const hAlt  = isKo ? 22 : isJp ? 16.1 : isZh ? 16.1 : 15;  // Altitud
    const hLlu  = isKo ? 20 : isJp ? 16.1 : isZh ? 15.5 : 15;  // Lluvia
    const hTemp = isKo ? 22 : isJp ? 17   : isZh ? 17   : 15;  // Temperatura
    const hHum  = isKo ? 11 : isJp ? 11   : isZh ? 11   : 8;   // Humedad
    // Ajuste de baseline por idioma
    const fAlt = isKo ? 2.6 : 0, fLlu = isKo ? -2 : 0, fTemp = isKo ? -6 : 0;
    const fHum = isKo ? -10 : isJp ? -2 : isZh ? -2 : 0;   // bajar pasteles (KO/JP/ZH)

    // El base chino tiene toda la tabla ~4vh más abajo que el español/japonés.
    const zhShift = isZh ? 4.1 : 0;

    // Banda de cosecha (KO): calendario del base coreano en ~128-142vh.
    const harBandTop  = (isKo ? 107.8 : HAR_BAND_TOP_VH) + zhShift;
    const harMonthOff = isKo
        ? { apr: -1.8, mar: 1.4, feb: 4.6, jan: 7.8, dec: 11.0 }
        : HAR_MONTH_OFFSET_VH;

    // Títulos de regiones
    const titles = [
        { key: 'acatenango', src: isKo ? TitAcatenango_ko : isJp ? TitAcatenango_jp : isZh ? TitAcatenango_zh : TitAcatenango, alt: 'Acatenango', left: L[0], heightVh: isJp ? hTitJp : isZh ? hTitZh : 19 * TH, bottomFixVh: 0.0 },
        { key: 'antigua',    src: isKo ? TitAntigua_ko    : isJp ? TitAntigua_jp    : isZh ? TitAntigua_zh    : TitAntigua,    alt: 'Antigua',    left: L[1], heightVh: isJp ? hTitJp : isZh ? hTitZh : 14.5 * TH, bottomFixVh: 0.0 },
        { key: 'atitlan',    src: isKo ? TitAtitlan_ko    : isJp ? TitAtitlan_jp    : isZh ? TitAtitlan_zh    : TitAtitlan,    alt: 'Atitlán',    left: L[2], heightVh: isJp ? hTitJp : isZh ? hTitZh : 17.5 * TH, bottomFixVh: 0.2 },
        { key: 'coban',      src: isKo ? TitCoban_ko      : isJp ? TitCoban_jp      : isZh ? TitCoban_zh      : TitCoban,      alt: 'Cobán',      left: L[3], heightVh: isJp ? hTitJp : isZh ? hTitZh : 16.8 * TH, bottomFixVh: -0.1 },
        { key: 'fraijanes',  src: isKo ? TitFraijanes_ko  : isJp ? TitFraijanes_jp  : isZh ? TitFraijanes_zh  : TitFraijanes,  alt: 'Fraijanes',  left: L[4], heightVh: isJp ? hTitJp : isZh ? hTitZh : 16 * TH, bottomFixVh: 0.0 },
        { key: 'huehue',     src: isKo ? TitHuehue_ko     : isJp ? TitHuehue_jp     : isZh ? TitHuehue_zh     : TitHuehue,     alt: 'Huehue',     left: L[5], heightVh: isJp ? hTitJp : isZh ? hTitZh : 16.0 * TH, bottomFixVh: 0.0 },
        { key: 'oriente',    src: isKo ? TitOriente_ko    : isJp ? TitOriente_jp    : isZh ? TitOriente_zh    : TitOriente,    alt: 'Oriente',    left: L[6], heightVh: isJp ? hTitJp : isZh ? hTitZh : 14.2 * TH, bottomFixVh: 0.0 },
        { key: 'sanmarcos',  src: isKo ? TitSanMarcos_ko  : isJp ? TitSanMarcos_jp  : isZh ? TitSanMarcos_zh  : TitSanMarcos,  alt: 'San Marcos', left: L[7], heightVh: isJp ? hTitJp : isZh ? hTitZh : 19 * TH, bottomFixVh: 0.1 }
    ];

    // ALTITUD
    const altItems = [
        { key: 'alt-acatenango', src: isKo ? AltAcatenango_ko : isJp ? AltAcatenango_jp : isZh ? AltAcatenango_zh : AltAcatenango, alt: 'Altitud Acatenango', left: LA[0], heightVh: hAlt, bottomFixVh: fAlt },
        { key: 'alt-antigua',    src: isKo ? AltAntigua_ko    : isJp ? AltAntigua_jp    : isZh ? AltAntigua_zh    : AltAntigua,    alt: 'Altitud Antigua',    left: LA[1], heightVh: hAlt, bottomFixVh: fAlt },
        { key: 'alt-atitlan',    src: isKo ? AltAtitlan_ko    : isJp ? AltAtitlan_jp    : isZh ? AltAtitlan_zh    : AltAtitlan,    alt: 'Altitud Atitlán',    left: LA[2], heightVh: hAlt, bottomFixVh: fAlt },
        { key: 'alt-coban',      src: isKo ? AltCoban_ko      : isJp ? AltCoban_jp      : isZh ? AltCoban_zh      : AltCoban,      alt: 'Altitud Cobán',      left: LA[3], heightVh: hAlt, bottomFixVh: fAlt },
        { key: 'alt-fraijanes',  src: isKo ? AltFraijanes_ko  : isJp ? AltFraijanes_jp  : isZh ? AltFraijanes_zh  : AltFraijanes,  alt: 'Altitud Fraijanes',  left: LA[4], heightVh: hAlt, bottomFixVh: fAlt },
        { key: 'alt-huehue',     src: isKo ? AltHuehue_ko     : isJp ? AltHuehue_jp     : isZh ? AltHuehue_zh     : AltHuehue,     alt: 'Altitud Huehue',     left: LA[5], heightVh: hAlt, bottomFixVh: fAlt },
        { key: 'alt-oriente',    src: isKo ? AltOriente_ko    : isJp ? AltOriente_jp    : isZh ? AltOriente_zh    : AltOriente,    alt: 'Altitud Oriente',    left: LA[6], heightVh: hAlt, bottomFixVh: fAlt },
        { key: 'alt-sanmarcos',  src: isKo ? AltSanMarcos_ko  : isJp ? AltSanMarcos_jp  : isZh ? AltSanMarcos_zh  : AltSanMarcos,  alt: 'Altitud San Marcos', left: LA[7], heightVh: hAlt, bottomFixVh: fAlt }
    ];

    // LLUVIA
    const lluItems = [
        { key: 'llu-acatenango', src: isKo ? LluAcatenango_ko : isJp ? LluAcatenango_jp : isZh ? LluAcatenango_zh : LluAcatenango, alt: 'Lluvia Acatenango', left: LL[0], heightVh: hLlu, bottomFixVh: fLlu },
        { key: 'llu-antigua',    src: isKo ? LluAntigua_ko    : isJp ? LluAntigua_jp    : isZh ? LluAntigua_zh    : LluAntigua,    alt: 'Lluvia Antigua',    left: LL[1], heightVh: hLlu, bottomFixVh: fLlu },
        { key: 'llu-atitlan',    src: isKo ? LluAtitlan_ko    : isJp ? LluAtitlan_jp    : isZh ? LluAtitlan_zh    : LluAtitlan,    alt: 'Lluvia Atitlán',    left: LL[2], heightVh: hLlu, bottomFixVh: fLlu },
        { key: 'llu-coban',      src: isKo ? LluCoban_ko      : isJp ? LluCoban_jp      : isZh ? LluCoban_zh      : LluCoban,      alt: 'Lluvia Cobán',      left: LL[3], heightVh: hLlu, bottomFixVh: fLlu },
        { key: 'llu-fraijanes',  src: isKo ? LluFraijanes_ko  : isJp ? LluFraijanes_jp  : isZh ? LluFraijanes_zh  : LluFraijanes,  alt: 'Lluvia Fraijanes',  left: LL[4], heightVh: hLlu, bottomFixVh: fLlu },
        { key: 'llu-huehue',     src: isKo ? LluHuehue_ko     : isJp ? LluHuehue_jp     : isZh ? LluHuehue_zh     : LluHuehue,     alt: 'Lluvia Huehue',     left: LL[5], heightVh: hLlu, bottomFixVh: fLlu },
        { key: 'llu-oriente',    src: isKo ? LluOriente_ko    : isJp ? LluOriente_jp    : isZh ? LluOriente_zh    : LluOriente,    alt: 'Lluvia Oriente',    left: LL[6], heightVh: hLlu, bottomFixVh: fLlu },
        { key: 'llu-sanmarcos',  src: isKo ? LluSanMarcos_ko  : isJp ? LluSanMarcos_jp  : isZh ? LluSanMarcos_zh  : LluSanMarcos,  alt: 'Lluvia San Marcos', left: LL[7], heightVh: hLlu, bottomFixVh: fLlu - (isJp ? 1 : 0) }
    ];

    // 🌡️ TEMPERATURA
    const tempItems = [
        { key: 'temp-acatenango', src: isKo ? TempAcatenango_ko : isJp ? TempAcatenango_jp : isZh ? TempAcatenango_zh : TempAcatenango, alt: 'Temperatura Acatenango', left: LT[0], heightVh: hTemp, bottomFixVh: fTemp },
        { key: 'temp-antigua',    src: isKo ? TempAntigua_ko    : isJp ? TempAntigua_jp    : isZh ? TempAntigua_zh    : TempAntigua,    alt: 'Temperatura Antigua',    left: LT[1], heightVh: hTemp, bottomFixVh: fTemp },
        { key: 'temp-atitlan',    src: isKo ? TempAtitlan_ko    : isJp ? TempAtitlan_jp    : isZh ? TempAtitlan_zh    : TempAtitlan,    alt: 'Temperatura Atitlán',    left: LT[2], heightVh: hTemp, bottomFixVh: fTemp },
        { key: 'temp-coban',      src: isKo ? TempCoban_ko      : isJp ? TempCoban_jp      : isZh ? TempCoban_zh      : TempCoban,      alt: 'Temperatura Cobán',      left: LT[3], heightVh: hTemp, bottomFixVh: fTemp },
        { key: 'temp-fraijanes',  src: isKo ? TempFraijanes_ko  : isJp ? TempFraijanes_jp  : isZh ? TempFraijanes_zh  : TempFraijanes,  alt: 'Temperatura Fraijanes',  left: LT[4], heightVh: hTemp, bottomFixVh: fTemp },
        { key: 'temp-huehue',     src: isKo ? TempHuehue_ko     : isJp ? TempHuehue_jp     : isZh ? TempHuehue_zh     : TempHuehue,     alt: 'Temperatura Huehue',     left: LT[5], heightVh: hTemp, bottomFixVh: fTemp },
        { key: 'temp-oriente',    src: isKo ? TempOriente_ko    : isJp ? TempOriente_jp    : isZh ? TempOriente_zh    : TempOriente,    alt: 'Temperatura Oriente',    left: LT[6], heightVh: hTemp, bottomFixVh: fTemp },
        { key: 'temp-sanmarcos',  src: isKo ? TempSanMarcos_ko  : isJp ? TempSanMarcos_jp  : isZh ? TempSanMarcos_zh  : TempSanMarcos,  alt: 'Temperatura San Marcos', left: LT[7], heightVh: hTemp, bottomFixVh: fTemp }
    ];

    // 💧 HUMEDAD
    const humItems = [
        { key: 'hum-acatenango', src: isKo ? HumAcatenango_ko : isJp ? HumAcatenango_jp : isZh ? HumAcatenango_zh : HumAcatenango, alt: 'Humedad Acatenango', left: LH[0], heightVh: hHum, bottomFixVh: fHum },
        { key: 'hum-antigua',    src: isKo ? HumAntigua_ko    : isJp ? HumAntigua_jp    : isZh ? HumAntigua_zh    : HumAntigua,    alt: 'Humedad Antigua',    left: LH[1], heightVh: hHum, bottomFixVh: fHum },
        { key: 'hum-atitlan',    src: isKo ? HumAtitlan_ko    : isJp ? HumAtitlan_jp    : isZh ? HumAtitlan_zh    : HumAtitlan,    alt: 'Humedad Atitlán',    left: LH[2], heightVh: hHum, bottomFixVh: fHum },
        { key: 'hum-coban',      src: isKo ? HumCoban_ko      : isJp ? HumCoban_jp      : isZh ? HumCoban_zh      : HumCoban,      alt: 'Humedad Cobán',      left: LH[3], heightVh: hHum, bottomFixVh: fHum },
        { key: 'hum-fraijanes',  src: isKo ? HumFraijanes_ko  : isJp ? HumFraijanes_jp  : isZh ? HumFraijanes_zh  : HumFraijanes,  alt: 'Humedad Fraijanes',  left: LH[4], heightVh: hHum, bottomFixVh: fHum },
        { key: 'hum-huehue',     src: isKo ? HumHuehue_ko     : isJp ? HumHuehue_jp     : isZh ? HumHuehue_zh     : HumHuehue,     alt: 'Humedad Huehue',     left: LH[5], heightVh: hHum, bottomFixVh: fHum },
        { key: 'hum-oriente',    src: isKo ? HumOriente_ko    : isJp ? HumOriente_jp    : isZh ? HumOriente_zh    : HumOriente,    alt: 'Humedad Oriente',    left: LH[6], heightVh: hHum, bottomFixVh: fHum },
        { key: 'hum-sanmarcos',  src: isKo ? HumSanMarcos_ko  : isJp ? HumSanMarcos_jp  : isZh ? HumSanMarcos_zh  : HumSanMarcos,  alt: 'Humedad San Marcos', left: LH[7], heightVh: hHum, bottomFixVh: fHum }
    ];

    // 🍒 HARVEST: puntos por mes y región
    const HAR_LEFT = isKo ? {
        acatenango: '27.9vh',
        antigua: '41.4vh',
        atitlan: '54.9vh',
        coban: '68.4vh',
        fraijanes: '81.8vh',
        huehue: '95.3vh',
        oriente: '108.8vh',
        sanmarcos: '122.4vh'
    } : (isJp || isZh) ? {
        acatenango: '33.6vh',
        antigua: '44.3vh',
        atitlan: '55.1vh',
        coban: '65.9vh',
        fraijanes: '76.7vh',
        huehue: '87.4vh',
        oriente: '98.2vh',
        sanmarcos: '109.1vh'
    } : {
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
                bottomFixVh: harMonthOff[m]
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
            {/* Imagen base infografía — lazy */}
            <SmartImage
                src={isKo ? BaseDiversidad_ko : isJp ? BaseDiversidad_jp : isZh ? BaseDiversidad_zh : BaseDiversidad}
                alt="Diversidad cafetalera"
                className="block select-none pointer-events-none"
                style={{ width: `${baseWidthVh}vh`, height: 'auto' }}
                draggable={false}
            />

            {/* Título morado */}
            <motion.img
                src={isKo ? TituloG_ko : isJp ? TituloG_jp : isZh ? TituloG_zh : TituloG}
                alt="Diversidad cafetalera (título)"
                className="absolute select-none pointer-events-none"
                style={{
                    top: `${TITLE_TOP_VH}vh`,
                    left: (isJp || isZh) ? '50%' : '22%',
                    transform: 'translateX(-50%)',
                    height: `${(isJp || isZh) ? 11 : TITLE_HEIGHT_VH}vh`,
                    width: 'auto',
                    transformOrigin: '50% 100%'
                }}
                initial={{ opacity: 0, y: -140, scaleY: 1, x: (isJp || isZh) ? '-50%' : 0 }}
                animate={{
                    opacity: [0, 1, 1, 1, 1, 1, 1, 1],
                    y: [-140, 0, -14, 0, -8, 0, -3, 0],
                    scaleY: [1, 0.92, 1.05, 0.98, 1.03, 0.995, 1.01, 1],
                    x: (isJp || isZh) ? '-50%' : 0
                }}
                transition={{ duration: 1.9, ease: EASE, times: [0, 0.55, 0.7, 0.78, 0.86, 0.93, 0.975, 1] }}
                draggable={false}
            />

            {/* BANDA TÍTULOS (sin interacción) */}
            <div
                className="absolute left-0"
                style={{
                    top: `${BAND_TOP_VH + zhShift}vh`,
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
                            bottom: `${BASELINE_IN_BAND_VH + (t.bottomFixVh ?? 0) + fTitle}vh`,
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
                    top: `${ALT_BAND_TOP_VH + zhShift}vh`,
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
                    top: `${LLU_BAND_TOP_VH + zhShift}vh`,
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
                    top: `${TEMP_BAND_TOP_VH + zhShift}vh`,
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
                    top: `${HUM_BAND_TOP_VH + zhShift}vh`,
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
                    top: `${harBandTop}vh`,
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