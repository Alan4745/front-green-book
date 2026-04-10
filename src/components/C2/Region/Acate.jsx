import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import PDRAcate from '../../../assets/C2/PerfilDeRegion/AcateT.svg';
import AcateG from '../../../assets/C2/Graficas/AcateG.svg';
import FondoAcate from '../../../assets/C2/FR/Acate.jpg';
import AcateR from '../../../assets/C2/Region/AcatenangoR.svg';

import ZoomButton from '../../Global/ZoomButton';
import CloseButton from '../../Global/CloseButton';

const Acate = () => {
    const navigate = useNavigate();
    const [showZoom, setShowZoom] = useState(false);
    const [bgReady, setBgReady] = useState(false);
    const { t } = useTranslation();

    const keys = {
        alts: {
            bg: 'c2.section1.acatenango.alts.bg',
            regionLogo: 'c2.section1.acatenango.alts.regionLogo',
            profile: 'c2.section1.acatenango.alts.profile',
            chart: 'c2.section1.acatenango.alts.chart',
            modalImage: 'c2.section1.acatenango.alts.modalImage'
        },
        buttons: {
            back: 'c2.section1.acatenango.buttons.back',
            openZoom: 'c2.section1.acatenango.buttons.openZoom',
            close: 'c2.section1.acatenango.buttons.close'
        },
        desc: {
            l1: 'c2.section1.acatenango.desc.line1',
            l2: 'c2.section1.acatenango.desc.line2'
        },
        features: {
            f1: 'c2.section1.acatenango.features.f1',
            f2: 'c2.section1.acatenango.features.f2',
            f3: 'c2.section1.acatenango.features.f3',
            f4: 'c2.section1.acatenango.features.f4'
        }
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
                duration: 2.2,
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
        <div className="flex w-screen h-screen overflow-hidden">
            {/* Columna izquierda con imagen y overlay */}
            <div className="w-[58%] h-full relative">
                {/* Imagen de fondo con animación */}
                <motion.img
                    src={FondoAcate}
                    alt={t(keys.alts.bg)}
                    title={t(keys.alts.bg)}
                    className="w-full h-full object-cover"
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    onAnimationComplete={() => setBgReady(true)}
                />

                {/* Overlay negro */}
                <div className="absolute inset-0 bg-black opacity-50 z-10" />

                {/* Botón de regreso */}
                <div className="absolute top-[3vh] left-[3vh] z-20">
                   
                </div>

                {/* Logo región Acatenango — entra después del fondo */}
                <motion.div
                    className="absolute top-[30vh] left-[45vh] z-20 will-change-transform"
                    style={{ transformOrigin: '50% 100%' }}
                    variants={logoMotion}
                    initial="hidden"
                    animate={bgReady ? 'show' : 'hidden'}
                >
                    <img
                        src={AcateR}
                        alt={t(keys.alts.regionLogo)}
                        title={t(keys.alts.regionLogo)}
                        className="w-[28vh] h-auto select-none"
                        draggable={false}
                    />
                </motion.div>

                {/* Descripción */}
                <motion.p
                    className="absolute bottom-[34vh] left-[2%] w-full text-center text-white text-[2.3vh] z-20"
                    style={{ fontFamily: 'GothamNormal' }}
                    variants={descVariants}
                    initial="hidden"
                    animate="show"
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
            <div className="w-[42%] h-full bg-white relative">
                {/* Perfil de la región */}
                <motion.div
                    className="absolute top-[5%] left-[20%] flex items-start h-full will-change-transform"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 2.5 }}
                >
                    <img
                        src={PDRAcate}
                        alt={t(keys.alts.profile)}
                        title={t(keys.alts.profile)}
                        className="w-full h-auto object-contain"
                    />
                </motion.div>

                {/* Gráficas */}
                <motion.div
                    className="absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-[60%] will-change-transform"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 2.8 }}
                >
                    <img
                        src={AcateG}
                        alt={t(keys.alts.chart)}
                        title={t(keys.alts.chart)}
                        className="w-[100vh] h-auto object-contain"
                        style={{ width: '100%', height: '100%', transform: 'scale(1.25)' }} 
                    />
                </motion.div>

                {/* Lista de características */}
                <motion.div
                    className="absolute bottom-[10vh] left-[20%] z-20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.3, ease: 'easeOut', delay: 3 }}
                >
                    <ul
                        className="space-y-2 text-[2.3vh]"
                        style={{ fontFamily: 'GothamNormal' }}
                    >
                        <motion.li
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 3.2 }}
                        >
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#F7941D] inline-block"></span>
                            {t(keys.features.f1)}
                        </motion.li>
                        <motion.li
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 3.4 }}
                        >
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#F7941D] inline-block"></span>
                            {t(keys.features.f2)}
                        </motion.li>
                        <motion.li
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 3.6 }}
                        >
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#F7941D] inline-block"></span>
                            {t(keys.features.f3)}
                        </motion.li>
                        <motion.li
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 3.8 }}
                        >
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#F7941D] inline-block"></span>
                            {t(keys.features.f4)}
                        </motion.li>
                    </ul>
                </motion.div>
            </div>

            {/* Modal zoom */}
                {showZoom && (
                    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50" onClick={() => setShowZoom(false)}>
                        <div className="relative" onClick={(e) => e.stopPropagation()}>
                            <img
                                src={FondoAcate}
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

export default Acate;