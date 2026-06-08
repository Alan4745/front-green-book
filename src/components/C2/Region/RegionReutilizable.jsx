import { useEffect, useRef, useState } from 'react';
import { motion, useInView  } from 'framer-motion';
import { useTranslation } from 'react-i18next';


// Assets específicos de la región
// Acatenango
import PDRAcate from '../../../assets/C2/PerfilDeRegion/AcateT.svg';
import PDRAcate_en from '../../../assets/C2/PerfilRegionIngles/AcateT_en.svg';
import PDRAcate_ko from '../../../assets/C2/PerfilDeRegionesKo/AcateT_ko.svg';
import AcateG from '../../../assets/C2/Graficas/AcateG.svg';
import AcateG_es from '../../../assets/C2/Graficas/acateG_español.webp'
import FondoAcate from '../../../assets/C2/FR/Acate.webp';
import AcateR from '../../../assets/C2/Region/AcatenangoR.svg';

// Antigua
import PDRAntigua from '../../../assets/C2/PerfilDeRegion/AntiguaT.svg';
import PDRAntigua_en from '../../../assets/C2/PerfilRegionIngles/AntiguaT_en.svg';
import PDRAntigua_ko from '../../../assets/C2/PerfilDeRegionesKo/AntiguaT_ko.svg';
import AntiguaG from '../../../assets/C2/Graficas/AntiguaG.svg';
import AntiguaG_es from '../../../assets/C2/Graficas/antiguaG_español.webp'
import FondoAntigua from '../../../assets/C2/FR/Antigua.webp';
import AntiguaR from '../../../assets/C2/Region/AntiguaR.svg';

//San Marcos
import PDRSanMarcos from '../../../assets/C2/PerfilDeRegion/SanMarcosT.svg';
import PDRSanMarcos_en from '../../../assets/C2/PerfilRegionIngles/SanMarcosT_en.svg';
import PDRSanMarcos_ko from '../../../assets/C2/PerfilDeRegionesKo/SanMarcosT_ko.svg';
import SanMarcosG from '../../../assets/C2/Graficas/SanMarcosG.webp';
import SanMarcosG_es from '../../../assets/C2/Graficas/sanmarcosG_español.webp'
import FondoSanMarcos from '../../../assets/C2/FR/SanMarcos.webp';
import SanMarcosR from '../../../assets/C2/Region/SanMarcosR.svg';

// Atitlán
import PDRAtitlan from '../../../assets/C2/PerfilDeRegion/AtitlanT.svg';
import PDRAtitlan_en from '../../../assets/C2/PerfilRegionIngles/AtitlanT_en.svg';
import PDRAtitlan_ko from '../../../assets/C2/PerfilDeRegionesKo/AtitlanT_ko.svg';
import AtitlanG from '../../../assets/C2/Graficas/AtitlanG.svg';
import AtitlanG_es from '../../../assets/C2/Graficas/atlitanG_español.webp'
import FondoAtitlan from '../../../assets/C2/FR/Atitlan.webp';
import AtitlanR from '../../../assets/C2/Region/AtitlanR.svg';

// Cobán
import PDRCoban from '../../../assets/C2/PerfilDeRegion/CobanT.svg';
import PDRCoban_en from '../../../assets/C2/PerfilRegionIngles/CobanT_en.svg';
import PDRCoban_ko from '../../../assets/C2/PerfilDeRegionesKo/CobanT_ko.svg';
import CobanG from '../../../assets/C2/Graficas/CobanG.webp';
import CobanG_es from '../../../assets/C2/Graficas/cobanG_español.webp'
import FondoCoban from '../../../assets/C2/FR/Coban.svg';
import CobanR from '../../../assets/C2/Region/CobanR.svg';

// Fraijanes
import PDRFraijanes from '../../../assets/C2/PerfilDeRegion/FraijanesT.svg';
import PDRFraijanes_en from '../../../assets/C2/PerfilRegionIngles/FraijanesT_en.svg';
import PDRFraijanes_ko from '../../../assets/C2/PerfilDeRegionesKo/FraijanesT_ko.svg';
import FraijanesG from '../../../assets/C2/Graficas/FraijanesG.svg';
import FraijanesG_es from '../../../assets/C2/Graficas/frajinesG_español.webp'
import FondoFraijanes from '../../../assets/C2/FR/Fraijanes.webp';
import FraijanesR from '../../../assets/C2/Region/FraijanesR.svg';

// Huehuetenango
import PDRHuehue from '../../../assets/C2/PerfilDeRegion/HuehueT.svg';
import PDRHuehue_en from '../../../assets/C2/PerfilRegionIngles/HuehueT_en.svg';
import PDRHuehue_ko from '../../../assets/C2/PerfilDeRegionesKo/HuehueT_ko.svg';
import HuehueG from '../../../assets/C2/Graficas/HuehueG.webp';
import HuehueG_es from '../../../assets/C2/Graficas/huehueG_español.webp'
import FondoHuehue from '../../../assets/C2/FR/Huehue.svg';
import HuehueR from '../../../assets/C2/Region/HuehueR.svg';

// Oriente
import PDROriente from '../../../assets/C2/PerfilDeRegion/OrienteT.svg';
import PDROriente_en from '../../../assets/C2/PerfilRegionIngles/OrienteT_en.svg';
import PDROriente_ko from '../../../assets/C2/PerfilDeRegionesKo/OrienteT_ko.svg';
import OrienteG from '../../../assets/C2/Graficas/OrienteG.webp';
import OrienteG_es from '../../../assets/C2/Graficas/orienteG_español.webp'
import FondoOriente from '../../../assets/C2/FR/Oriente.webp';
import OrienteR from '../../../assets/C2/Region/OrienteR.svg';

import ZoomButton from '../../Global/ZoomButton';
import CloseButton from '../../Global/CloseButton';
import SmartImage from '../../Global/SmartImage';

const RegionReutilizable = ({tipo, isActive}) => {
    const [showZoom, setShowZoom] = useState(false);
    const [bgReady, setBgReady] = useState(false);
    const { t, i18n } = useTranslation();
    const lang = i18n.language; // 'es' | 'en'
    const ref = useRef(null);

    //manejo de scroll para iniciar animaciones(una sola vez)
   const hasScrolledIn = useInView(ref, {
    amount: 0.4,
    once: true,
  });

  const shouldAnimate = isActive || hasScrolledIn;

   useEffect(() => {
     if (isActive) {
       setBgReady(false);
     }
   }, [isActive]);

    const getColorRegion = (tipo) => {
  switch (tipo) {
    case 'sanmarcos': return 'bg-[#DC4C65]';
    case 'huehue': return 'bg-[#87247A]';
    case 'fraijanes': return 'bg-[#208DCB]';
    case 'coban': return 'bg-[#10AD8F]';
    case 'atitlan': return 'bg-[#123A88]';
    case 'antigua': return 'bg-[#F7942D]';
    case 'acatenango': return 'bg-[#F7941D]';
    case 'oriente': return 'bg-[#6B3A2A]';
    default: return 'bg-gray-400';
  }
};

const regionImages = {
  acatenango: {
    fondo: FondoAcate,
    logo: AcateR,
    perfil: { es: PDRAcate, en: PDRAcate_en, ko: PDRAcate_ko },
    grafica: { es: AcateG_es, en: AcateG },
  },
  antigua: {
    fondo: FondoAntigua,
    logo: AntiguaR,
    perfil: { es: PDRAntigua, en: PDRAntigua_en, ko: PDRAntigua_ko },
    grafica: { es: AntiguaG_es, en: AntiguaG },
  },
  sanmarcos: {
    fondo: FondoSanMarcos,
    logo: SanMarcosR,
    perfil: { es: PDRSanMarcos, en: PDRSanMarcos_en, ko: PDRSanMarcos_ko },
    grafica: { es: SanMarcosG_es, en: SanMarcosG },
  },
  atitlan: {
    fondo: FondoAtitlan,
    logo: AtitlanR,
    perfil: { es: PDRAtitlan, en: PDRAtitlan_en, ko: PDRAtitlan_ko },
    grafica: { es: AtitlanG_es, en: AtitlanG },
  },
  coban: {
    fondo: FondoCoban,
    logo: CobanR,
    perfil: { es: PDRCoban, en: PDRCoban_en, ko: PDRCoban_ko },
    grafica: { es: CobanG_es, en: CobanG },
  },
  fraijanes: {
    fondo: FondoFraijanes,
    logo: FraijanesR,
    perfil: { es: PDRFraijanes, en: PDRFraijanes_en, ko: PDRFraijanes_ko },
    grafica: { es: FraijanesG_es, en: FraijanesG },
  },
  huehue: {
    fondo: FondoHuehue,
    logo: HuehueR,
    perfil: { es: PDRHuehue, en: PDRHuehue_en, ko: PDRHuehue_ko },
    grafica: { es: HuehueG_es, en: HuehueG },
  },
  oriente: {
    fondo: FondoOriente,
    logo: OrienteR,
    perfil: { es: PDROriente, en: PDROriente_en, ko: PDROriente_ko },
    grafica: { es: OrienteG_es, en: OrienteG },
  },
};


const region = regionImages[tipo];

if (!region) {
  console.warn('Tipo de región inválido:', tipo);
  return null;
}


    const keys = {
  alts: {
    bg: `c2.section1.${tipo}.alts.bg`,
    regionLogo: `c2.section1.${tipo}.alts.regionLogo`,
    profile: `c2.section1.${tipo}.alts.profile`,
    chart: `c2.section1.${tipo}.alts.chart`,
    modalImage: `c2.section1.${tipo}.alts.modalImage`,
  },
  buttons: {
    back: `c2.section1.${tipo}.buttons.back`,
    openZoom: `c2.section1.${tipo}.buttons.openZoom`,
    close: `c2.section1.${tipo}.buttons.close`,
  },
  desc: {
    l1: `c2.section1.${tipo}.desc.line1`,
    l2: `c2.section1.${tipo}.desc.line2`,
  },
  features: {
    f1: `c2.section1.${tipo}.features.f1`,
    f2: `c2.section1.${tipo}.features.f2`,
    f3: `c2.section1.${tipo}.features.f3`,
    f4: `c2.section1.${tipo}.features.f4`,
  },
};

    const featureKeys = [
        keys.features.f1,
        keys.features.f2,
        keys.features.f3,
        ...(i18n.exists(keys.features.f4) ? [keys.features.f4] : []),
    ];
    const hasFourFeatures = featureKeys.length === 4;
    const isKorean = lang === 'ko';

    const desktopProfileClassName = `absolute left-1/2 -translate-x-1/2 flex items-start h-full will-change-transform ${
        isKorean ? 'top-[4%]' : 'top-[5%]'
    } max-lg:hidden`;

    const desktopGraphClassName = `absolute left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform ${
        hasFourFeatures
            ? 'top-[44%] w-[34vw] min-[1024px]:max-[1200px]:top-[46%] min-[1024px]:max-[1200px]:w-[28vw]'
            : 'top-[48%] w-[38vw] min-[1024px]:max-[1200px]:top-[46%] min-[1024px]:max-[1200px]:w-[32vw]'
    } min-[768px]:max-[1023px]:w-[38vw] max-lg:hidden`;

    const desktopFeaturesClassName = `absolute left-[20%] bottom-[6vh] z-20 min-[1024px]:max-[1200px]:bottom-[4vh] min-[1024px]:max-[1200px]:left-[12%] min-[768px]:max-[1023px]:bottom-[4%] min-[768px]:max-[1023px]:left-[10%] max-lg:hidden`;

    const desktopFeaturesListClassName = `space-y-1 min-[768px]:max-[1023px]:text-[1.8vh] max-lg:text-[2.2vh] max-lg:landscape:text-sm ${
        hasFourFeatures
            ? 'text-[2.45vh] min-[1024px]:max-[1200px]:text-[2.05vh]'
            : 'text-[2.8vh] min-[1024px]:max-[1200px]:text-[2.3vh]'
    }`;


    // Logo: cae desde fuera de pantalla, 3 rebotes decrecientes,
    // giro SOLO en el primer rebote, opacidad siempre 1
    const logoMotion = {
        hidden: {
            opacity: 0,
            y: -640,
            rotate: 0,
            scaleX: 1,
            scaleY: 1
        },
        show: {
            y: [-640, 0, -30, 0, -16, 0, -8, 0],
            rotate: [0, 0, 6, 0, 2, 0, 0, 0],
            scaleY: [1, 0.96, 1, 0.985, 1, 0.993, 1, 1],
            scaleX: [1, 1.05, 1, 1.018, 1, 1.007, 1, 1],
            opacity: [1, 1, 1, 1, 1, 1, 1, 1],
            transition: {
                duration: 1.2,
                times: [0, 0.70, 0.84, 0.92, 0.97, 0.985, 0.995, 1],
                ease: [
                    'easeIn',
                    'easeOut',
                    'easeInOut',
                    'easeOut',
                    'easeInOut',
                    'easeOut',
                    'easeOut'
                ]
            }
        }
    };

    const descVariants = {
        hidden: {
            opacity: 0,
            y: 18,
            clipPath: 'inset(0 100% 0 0)'
        },
        show: {
            opacity: 1,
            y: 0,
            clipPath: 'inset(0 0% 0 0)',
            transition: {
                delay: 2.15,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };



    return (
        <div ref={ref} className="flex w-screen h-screen overflow-hidden max-lg:flex-col max-lg:h-auto max-lg:overflow-visible max-lg:overflow-x-hidden max-lg:landscape:flex-row max-lg:landscape:h-screen max-lg:landscape:overflow-hidden">
            {/* Columna izquierda con imagen y overlay */}
            <div className="w-[58%] h-full relative max-lg:w-full max-lg:h-[55vh] min-[768px]:max-[1023px]:h-[48vh] max-lg:landscape:w-[58%] max-lg:landscape:h-full">
                {/* Imagen de fondo con animación */}
                {/* Imagen de fondo de región — lazy: carga al entrar al viewport */}
                <motion.img
                    key={`bg-${tipo}-${isActive}`}
                    src={region.fondo}
                    alt={t(keys.alts.bg)}
                    title={t(keys.alts.bg)}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={shouldAnimate ? { x: 0, opacity: 1 } : { x: '-100%', opacity: 0 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    onAnimationComplete={() => shouldAnimate && setBgReady(true)}
                />

                {/* Overlay negro */}
                <div className="absolute inset-0 bg-black opacity-50 z-10" />

                {/* Botón de regreso */}
                <div className="absolute top-[3vh] left-[3vh] z-20">
                   
                </div>

                {/* Logo región  — entra después del fondo */}
                <motion.div
                    className="absolute top-[30vh] left-1/2 -translate-x-1/2 z-20 will-change-transform min-[768px]:max-[1023px]:hidden max-lg:top-[15vh]"
                    style={{ transformOrigin: '50% 100%' }}
                    variants={logoMotion}
                    initial="hidden"
                    animate={shouldAnimate && bgReady ? 'show' : 'hidden'}
                >
                    {/* Logo de la región — lazy */}
                    <SmartImage
                        src={region.logo}
                        alt={t(keys.alts.regionLogo)}
                        title={t(keys.alts.regionLogo)}
                        className="w-[28vh] h-auto select-none min-[1024px]:max-[1200px]:w-[22vh] max-lg:w-[20vh]"
                        draggable={false}
                    />
                </motion.div>

                {/* Descripción */}
                <motion.p
                    className="absolute bottom-[34vh] left-[2%] w-full text-center text-white text-[2.3vh] z-20 min-[1024px]:max-[1200px]:bottom-[28vh] min-[1024px]:max-[1200px]:text-[2vh] min-[768px]:max-[1023px]:hidden max-lg:bottom-[14vh] max-lg:text-[1.8vh] max-lg:landscape:text-xs"
                    style={{ fontFamily: 'GothamNormal' }}
                    variants={descVariants}
                    initial="hidden"
                    animate={shouldAnimate ? 'show' : 'hidden'}
                >
                    {t(keys.desc.l1)} <br />
                    {t(keys.desc.l2)}
                </motion.p>

                {/* Botón de zoom */}
                <div className="absolute left-1/2 top-1/2 z-20 hidden w-[86%] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center min-[768px]:max-[1023px]:flex" style={{ rowGap: '10px' }}>
                    <motion.div
                        className="will-change-transform"
                        style={{ transformOrigin: '50% 100%' }}
                        variants={logoMotion}
                        initial="hidden"
                        animate={shouldAnimate && bgReady ? 'show' : 'hidden'}
                    >
                        {/* Logo de la región (tablet) — lazy */}
                        <SmartImage
                            src={region.logo}
                            alt={t(keys.alts.regionLogo)}
                            title={t(keys.alts.regionLogo)}
                            className="w-[19vh] h-auto select-none"
                            draggable={false}
                        />
                    </motion.div>

                    <motion.p
                        className="w-full text-center text-white text-[2.1vh]"
                        style={{ fontFamily: 'GothamNormal' }}
                        variants={descVariants}
                        initial="hidden"
                        animate={shouldAnimate ? 'show' : 'hidden'}
                    >
                        {t(keys.desc.l1)} <br />
                        {t(keys.desc.l2)}
                    </motion.p>
                </div>

                <div className="absolute bottom-[3vh] right-[3vh] z-20">
                    <div
                        onClick={() => setShowZoom(true)}
                        role="button"
                        tabIndex={0}
                        aria-label={t(keys.buttons.openZoom)}
                        title={t(keys.buttons.openZoom)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') setShowZoom(true);
                        }}
                    >
                        <ZoomButton />
                    </div>
                </div>
            </div>

            {/* Columna derecha */}
            <div className="w-[42%] h-full bg-white relative max-lg:w-full max-[767px]:h-auto max-[767px]:min-h-[65vh] max-[767px]:pb-[4vh] min-[768px]:max-[1023px]:h-auto min-[768px]:max-[1023px]:pb-[2vh] max-lg:landscape:w-[42%] max-lg:landscape:h-full max-lg:landscape:min-h-0 max-lg:landscape:pb-0">
                {/* Perfil de la región */}
                <motion.div
                    className={desktopProfileClassName}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 2.5 }}
                >
                    {/* Perfil de la región (desktop) — lazy */}
                    <SmartImage
                        src={region.perfil[lang] || region.perfil.es}
                        alt={t(keys.alts.profile)}
                        title={t(keys.alts.profile)}
                        className="w-full h-auto object-contain"
                    />
                </motion.div>

                {/* Gráficas */}
                <motion.div
                    className={desktopGraphClassName}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 2.8 }}
                >
                    {/* Gráfica de la región (desktop) — lazy */}
                    <SmartImage
                        src={region.grafica[lang] || region.grafica.es}
                        alt={t(keys.alts.chart)}
                        title={t(keys.alts.chart)}
                        className="w-full h-auto object-contain"
                    />
                </motion.div>

                {/* Lista de características */}
                <motion.div
                    className={desktopFeaturesClassName}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 1.3, ease: 'easeOut', delay: 3 }}
                >
                    <ul
                        className={desktopFeaturesListClassName}
                        style={{ fontFamily: 'GothamNormal' }}
                    >
                        {featureKeys.map((featureKey, index) => (
                            <motion.li
                                key={featureKey}
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.6, delay: 3.2 + index * 0.2 }}
                            >
                                <span className={`w-[1.8vh] h-[1.8vh] rounded-full ${getColorRegion(tipo)} inline-block`}></span>
                                {t(featureKey)}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                <div className="hidden h-full flex-col justify-start px-[8%] py-[4vh] max-lg:flex max-lg:h-auto min-[768px]:max-[1023px]:py-[2.5vh] max-lg:landscape:px-[6%] max-lg:landscape:py-[3.5vh]">
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 2.5 }}
                    >
                        {/* Perfil de la región (mobile) — lazy */}
                        <SmartImage
                            src={region.perfil[lang] || region.perfil.es}
                            alt={t(keys.alts.profile)}
                            title={t(keys.alts.profile)}
                            className="w-[50vw] h-auto object-contain max-lg:landscape:w-[28vh]"
                        />
                    </motion.div>

                    <motion.div
                        className="mt-[3vh] flex justify-center min-[768px]:max-[1023px]:mt-[1.8vh] max-lg:landscape:mt-[2.5vh]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 2.8 }}
                    >
                        {/* Gráfica de la región (mobile) — lazy */}
                        <SmartImage
                            src={region.grafica[lang] || region.grafica.es}
                            alt={t(keys.alts.chart)}
                            title={t(keys.alts.chart)}
                            className="w-[78vw] h-auto object-contain max-lg:landscape:w-[38vh]"
                        />
                    </motion.div>

                    <motion.div
                        className="mt-[3vh] w-full min-[768px]:max-[1023px]:mt-[1.8vh] max-lg:landscape:mt-[2vh]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 1.3, ease: 'easeOut', delay: 3 }}
                    >
                        <ul
                            className="space-y-2 text-[2vh] max-lg:landscape:space-y-1 max-lg:landscape:text-[0.82rem]"
                            style={{ fontFamily: 'GothamNormal' }}
                        >
                            {featureKeys.map((featureKey, index) => (
                                <motion.li
                                    key={`mobile-${featureKey}`}
                                    className="flex items-start gap-2 leading-tight"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                                    transition={{ duration: 0.6, delay: 3.2 + index * 0.2 }}
                                >
                                    <span className={`mt-[0.35em] h-[1.2vh] w-[1.2vh] shrink-0 rounded-full ${getColorRegion(tipo)} inline-block max-lg:landscape:h-[0.55rem] max-lg:landscape:w-[0.55rem]`}></span>
                                    <span>{t(featureKey)}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

            </div>

            {/* Modal zoom */}
                {showZoom && (
                    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50" onClick={() => setShowZoom(false)}>
                        <div className="relative" onClick={(e) => e.stopPropagation()}>
                            {/* Modal zoom: priority=false está bien, el usuario abre el modal conscientemente */}
                            <SmartImage
                                src={region.fondo}
                                alt={t(keys.alts.modalImage)}
                                title={t(keys.alts.modalImage)}
                                className="max-h-[95vh] max-w-[95vw] object-contain block"
                            />
                            <CloseButton
                                onClick={() => setShowZoom(false)}
                                aria-label={t(keys.buttons.close)}
                                title={t(keys.buttons.close)}
                            />
                        </div>
                    </div>
                )}
        </div>
    );
};

export default RegionReutilizable;
