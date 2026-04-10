import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView  } from 'framer-motion';
import { useTranslation } from 'react-i18next';


// Assets específicos de la región
// Acatenango
import PDRAcate from '../../../assets/C2/PerfilDeRegion/AcateT.svg';
import AcateG from '../../../assets/C2/Graficas/AcateG.svg';
import AcateG_es from '../../../assets/C2/Graficas/acateG_español.png'
import FondoAcate from '../../../assets/C2/FR/Acate.jpg';
import AcateR from '../../../assets/C2/Region/AcatenangoR.svg';

// Antigua
import PDRAntigua from '../../../assets/C2/PerfilDeRegion/AntiguaT.svg';
import AntiguaG from '../../../assets/C2/Graficas/AntiguaG.svg';
import AntiguaG_es from '../../../assets/C2/Graficas/antiguaG_español.png'
import FondoAntigua from '../../../assets/C2/FR/Antigua.jpg';
import AntiguaR from '../../../assets/C2/Region/AntiguaR.svg';

//San Marcos
import PDRSanMarcos from '../../../assets/C2/PerfilDeRegion/SanMarcosT.svg';
import SanMarcosG from '../../../assets/C2/Graficas/SanMarcosG.png';
import SanMarcosG_es from '../../../assets/C2/Graficas/sanmarcosG_español.png'
import FondoSanMarcos from '../../../assets/C2/FR/SanMarcos.jpg';
import SanMarcosR from '../../../assets/C2/Region/SanMarcosR.svg';

// Atitlán
import PDRAtitlan from '../../../assets/C2/PerfilDeRegion/AtitlanT.svg';
import AtitlanG from '../../../assets/C2/Graficas/AtitlanG.svg';
import AtitlanG_es from '../../../assets/C2/Graficas/atlitanG_español.png'
import FondoAtitlan from '../../../assets/C2/FR/Atitlan.jpg';
import AtitlanR from '../../../assets/C2/Region/AtitlanR.svg';

// Cobán
import PDRCoban from '../../../assets/C2/PerfilDeRegion/CobanT.svg';
import CobanG from '../../../assets/C2/Graficas/CobanG.png';
import CobanG_es from '../../../assets/C2/Graficas/cobanG_español.png'
import FondoCoban from '../../../assets/C2/FR/Coban.svg';
import CobanR from '../../../assets/C2/Region/CobanR.svg';

// Fraijanes
import PDRFraijanes from '../../../assets/C2/PerfilDeRegion/FraijanesT.svg';
import FraijanesG from '../../../assets/C2/Graficas/FraijanesG.svg';
import FraijanesG_es from '../../../assets/C2/Graficas/frajinesG_español.png'
import FondoFraijanes from '../../../assets/C2/FR/Fraijanes.jpg';
import FraijanesR from '../../../assets/C2/Region/FraijanesR.svg';

// Huehuetenango
import PDRHuehue from '../../../assets/C2/PerfilDeRegion/HuehueT.svg';
import HuehueG from '../../../assets/C2/Graficas/HuehueG.png';
import HuehueG_es from '../../../assets/C2/Graficas/huehueG_español.png'
import FondoHuehue from '../../../assets/C2/FR/Huehue.svg';
import HuehueR from '../../../assets/C2/Region/HuehueR.svg';

// Oriente
import PDROriente from '../../../assets/C2/PerfilDeRegion/OrienteT.svg';
import OrienteG from '../../../assets/C2/Graficas/OrienteG.png';
import OrienteG_es from '../../../assets/C2/Graficas/orienteG_español.png'
import FondoOriente from '../../../assets/C2/FR/Oriente.jpeg';
import OrienteR from '../../../assets/C2/Region/OrienteR.svg';

import ZoomButton from '../../Global/ZoomButton';
import CloseButton from '../../Global/CloseButton';

const RegionReutilizable = ({tipo, isActive}) => {
    const navigate = useNavigate();
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
    perfil: PDRAcate,
    grafica: {
      es: AcateG_es,
      en: AcateG,
    },
  },
  antigua: {
    fondo: FondoAntigua,
    logo: AntiguaR,
    perfil: PDRAntigua,
    grafica: {
      es: AntiguaG_es,
      en: AntiguaG,
    },
  },
  sanmarcos: {
    fondo: FondoSanMarcos,
    logo: SanMarcosR,
    perfil: PDRSanMarcos,
    grafica: {
      es: SanMarcosG_es,
      en: SanMarcosG,
    },
  },
  atitlan: {
    fondo: FondoAtitlan,
    logo: AtitlanR,
    perfil: PDRAtitlan,
    grafica: {
      es: AtitlanG_es,
      en: AtitlanG,
    },
  },
  coban: {
    fondo: FondoCoban,
    logo: CobanR,
    perfil: PDRCoban,
    grafica: {
      es: CobanG_es,
      en: CobanG,
    },
  },
  fraijanes: {
    fondo: FondoFraijanes,
    logo: FraijanesR,
    perfil: PDRFraijanes,
    grafica: {
      es: FraijanesG_es,
      en: FraijanesG,
    },
  },
  huehue: {
    fondo: FondoHuehue,
    logo: HuehueR,
    perfil: PDRHuehue,
    grafica: {
      es: HuehueG_es,
      en: HuehueG,
    },
  },
  oriente: {
    fondo: FondoOriente,
    logo: OrienteR,
    perfil: PDROriente,
    grafica: {
      es: OrienteG_es,
      en: OrienteG,
    },
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
        <div ref={ref} className="flex w-screen h-screen overflow-hidden max-lg:flex-col max-lg:h-auto max-lg:landscape:flex-row max-lg:landscape:h-screen">
            {/* Columna izquierda con imagen y overlay */}
            <div className="w-[58%] h-full relative max-lg:w-full max-lg:h-[60vh] max-lg:landscape:w-[58%] max-lg:landscape:h-full">
                {/* Imagen de fondo con animación */}
                <motion.img
                    key={`bg-${tipo}-${isActive}`}//FUERZA EL INICIO DE LA ANIMACION AL CAMBIAR isActive
                    src={region.fondo}
                    alt={t(keys.alts.bg)}
                    title={t(keys.alts.bg)}
                    className="w-full h-full object-cover"
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
                    className="absolute top-[30vh] left-1/2 -translate-x-1/2 z-20 will-change-transform max-lg:top-[18vh]"
                    style={{ transformOrigin: '50% 100%' }}
                    variants={logoMotion}
                    initial="hidden"
                    animate={shouldAnimate && bgReady ? 'show' : 'hidden'}
                >
                    <img
                        src={region.logo}
                        alt={t(keys.alts.regionLogo)}
                        title={t(keys.alts.regionLogo)}
                        className="w-[28vh] h-auto select-none min-[1024px]:max-[1200px]:w-[22vh] max-lg:w-[20vh]"
                        draggable={false}
                    />
                </motion.div>

                {/* Descripción */}
                <motion.p
                    className="absolute bottom-[34vh] left-[2%] w-full text-center text-white text-[2.3vh] z-20 min-[1024px]:max-[1200px]:bottom-[28vh] min-[1024px]:max-[1200px]:text-[2vh] max-lg:bottom-[14vh] max-lg:text-[1.8vh] max-lg:landscape:text-xs"
                    style={{ fontFamily: 'GothamNormal' }}
                    variants={descVariants}
                    initial="hidden"
                    animate={shouldAnimate ? 'show' : 'hidden'}
                >
                    {t(keys.desc.l1)} <br />
                    {t(keys.desc.l2)}
                </motion.p>

                {/* Botón de zoom */}
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
            <div className="w-[42%] h-full bg-white relative max-lg:w-full max-lg:h-[70vh] max-lg:landscape:w-[42%] max-lg:landscape:h-full">
                {/* Perfil de la región */}
                <motion.div
                    className="absolute top-[5%] left-[20%] flex items-start h-full will-change-transform min-[1024px]:max-[1200px]:left-[12%] max-lg:left-[8%] max-lg:h-[80%]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 2.5 }}
                >
                    <img
                        src={region.perfil}
                        alt={t(keys.alts.profile)}
                        title={t(keys.alts.profile)}
                        className="w-full h-auto object-contain"
                    />
                </motion.div>

                {/* Gráficas */}
                <motion.div
                    className="absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-[60%] will-change-transform min-[1024px]:max-[1200px]:top-[45%] max-lg:top-[45%]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}//depende de active
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 2.8 }}
                >
                    <img
                        src={region.grafica[lang] || region.grafica.es}
                        alt={t(keys.alts.chart)}
                        title={t(keys.alts.chart)}
                        className="w-[100vh] h-auto object-contain scale-125 min-[1024px]:max-[1200px]:scale-100 max-lg:scale-95"
                        style={{ width: '100%', height: '100%' }}
                    />
                </motion.div>

                {/* Lista de características */}
                <motion.div
                    className="absolute bottom-[10vh] left-[20%] z-20 min-[1024px]:max-[1200px]:bottom-[6vh] min-[1024px]:max-[1200px]:left-[12%] max-lg:bottom-[5vh] max-lg:left-[8%]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 1.3, ease: 'easeOut', delay: 3 }}
                >
                    <ul
                        className="space-y-2 text-[2.3vh] min-[1024px]:max-[1200px]:text-[2vh] max-lg:text-[1.8vh] max-lg:landscape:text-xs"
                        style={{ fontFamily: 'GothamNormal' }}
                    >
                        <motion.li
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.6, delay: 3.2 }}
                        >
                            <span className={`w-[1.2vh] h-[1.2vh] rounded-full ${getColorRegion(tipo)} inline-block`}></span>
                            {t(keys.features.f1)}
                        </motion.li>
                        <motion.li
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.6, delay: 3.4 }}
                        >
                            <span className={`w-[1.2vh] h-[1.2vh] rounded-full ${getColorRegion(tipo)} inline-block`}></span>
                            {t(keys.features.f2)}
                        </motion.li>
                        <motion.li
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.6, delay: 3.6 }}
                        >
                            <span className={`w-[1.2vh] h-[1.2vh] rounded-full ${getColorRegion(tipo)}  inline-block`}></span>
                            {t(keys.features.f3)}
                        </motion.li>
                        {i18n.exists(keys.features.f4) && (
                        <motion.li
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={shouldAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.6, delay: 3.8 }}
                        >
                            <span className={`w-[1.2vh] h-[1.2vh] rounded-full ${getColorRegion(tipo)} inline-block`}></span>
                            {t(keys.features.f4)}
                        </motion.li>
                        )}
                    </ul>
                </motion.div>
            </div>

            {/* Modal zoom */}
                {showZoom && (
                    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50" onClick={() => setShowZoom(false)}>
                        <div className="relative" onClick={(e) => e.stopPropagation()}>
                            <img
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
