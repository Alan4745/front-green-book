import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import PDROriente from '../../../assets/C2/PerfilDeRegion/OrienteT.svg';
import OrienteG from '../../../assets/C2/Graficas/OrienteG.svg';
import FondoOriente from '../../../assets/C2/FR/Oriente.svg';
import OrienteR from '../../../assets/C2/Region/OrienteR.svg';

import BackButton from '../../Global/BackButton';
import ZoomButton from '../../Global/ZoomButton';
import CloseButton from '../../Global/CloseButton';

const Oriente = () => {
    const navigate = useNavigate();
    const [showZoom, setShowZoom] = useState(false);
    const [bgReady, setBgReady] = useState(false);
    const { t } = useTranslation();

    const keys = {
        alts: {
            bg: 'c2.section1.oriente.alts.bg',
            regionLogo: 'c2.section1.oriente.alts.regionLogo',
            profile: 'c2.section1.oriente.alts.profile',
            chart: 'c2.section1.oriente.alts.chart',
            modalImage: 'c2.section1.oriente.alts.modalImage'
        },
        buttons: {
            back: 'c2.section1.oriente.buttons.back',
            openZoom: 'c2.section1.oriente.buttons.openZoom',
            close: 'c2.section1.oriente.buttons.close'
        },
        desc: {
            l1: 'c2.section1.oriente.desc.line1',
            l2: 'c2.section1.oriente.desc.line2'
        },
        features: {
            f1: 'c2.section1.oriente.features.f1',
            f2: 'c2.section1.oriente.features.f2',
            f3: 'c2.section1.oriente.features.f3'
        }
    };

    // Animación del logo (patrón aprobado): cae, 3 rebotes y giro solo en el primero
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

    return (
        <div className="flex w-screen h-screen overflow-hidden">
            {/* Columna izquierda con imagen y overlay */}
            <div className="w-[58%] h-full relative">
                {/* Animación de la imagen entrando desde la izquierda con opacidad 0 */}
                <motion.img
                    src={FondoOriente}
                    alt={t(keys.alts.bg)}
                    title={t(keys.alts.bg)}
                    className="w-full h-full object-cover"
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    onAnimationComplete={() => setBgReady(true)}
                />

                {/* Overlay negro con 50% de opacidad */}
                <div className="absolute inset-0 bg-black opacity-50 z-10" />

                {/* Botón regresar */}
                <div className="absolute top-[3vh] left-[3vh] z-20">
                    <BackButton
                        onClick={() => navigate('/c2')}
                        aria-label={t(keys.buttons.back)}
                        title={t(keys.buttons.back)}
                    />
                </div>

                {/* Animación del logo de región Oriente */}
                <motion.div
                    className="absolute top-[30vh] left-[48vh] z-20 will-change-transform"
                    style={{ transformOrigin: '50% 100%' }}
                    variants={logoMotion}
                    initial="hidden"
                    animate={bgReady ? 'show' : 'hidden'}
                >
                    <img
                        src={OrienteR}
                        alt={t(keys.alts.regionLogo)}
                        title={t(keys.alts.regionLogo)}
                        className="w-[28vh] h-auto"
                    />
                </motion.div>

                {/* Descripción con animación */}
                <motion.p
                    className="absolute bottom-[34vh] left-[2%] w-full text-center text-white text-[2.3vh] z-20"
                    style={{ fontFamily: 'GothamNormal' }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 2.2 }}
                >
                    {t(keys.desc.l1)} <br />
                    {t(keys.desc.l2)}
                </motion.p>

                {/* Botón de zoom en esquina inferior derecha */}
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
                {/* Animación del perfil de la región Oriente */}
                <motion.div
                    className="absolute top-[5%] left-[28%] flex items-start h-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 2.5 }}
                >
                    <img
                        src={PDROriente}
                        alt={t(keys.alts.profile)}
                        title={t(keys.alts.profile)}
                        className="w-full h-auto object-contain"
                    />
                </motion.div>

                {/* Gráficas de Oriente */}
                <motion.div
                    className="absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-[60%]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 2.8 }}
                >
                    <img
                        src={OrienteG}
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
                    <ul className="space-y-2 text-[2.3vh]" style={{ fontFamily: 'GothamNormal' }}>
                        <motion.li
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 3.2 }}
                        >
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#5A3C9D] inline-block"></span>
                            {t(keys.features.f1)}
                        </motion.li>
                        <motion.li
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 3.4 }}
                        >
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#5A3C9D] inline-block"></span>
                            {t(keys.features.f2)}
                        </motion.li>
                        <motion.li
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 3.6 }}
                        >
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#5A3C9D] inline-block"></span>
                            {t(keys.features.f3)}
                        </motion.li>
                    </ul>
                </motion.div>
            </div>

            {/* Modal zoom */}
            {showZoom && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                    <div className="relative overflow-auto" role="dialog" aria-modal="true" aria-label={t(keys.alts.modalImage)}>
                        <img
                            src={FondoOriente}
                            alt={t(keys.alts.modalImage)}
                            title={t(keys.alts.modalImage)}
                            className="w-[90%] h-auto object-contain"
                        />
                    </div>
                    <div className="absolute top-[4vh] right-[4vh] z-50">
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

export default Oriente;