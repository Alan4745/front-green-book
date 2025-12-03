import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import PDRCoban from '../../../assets/C2/PerfilDeRegion/CobanT.svg';
import CobanG from '../../../assets/C2/Graficas/CobanG.png';
import FondoCoban from '../../../assets/C2/FR/Coban.svg';
import CobanR from '../../../assets/C2/Region/CobanR.svg';

import ZoomButton from '../../Global/ZoomButton';
import CloseButton from '../../Global/CloseButton';

const Coban = () => {
    const navigate = useNavigate();
    const [showZoom, setShowZoom] = useState(false);
    const [bgReady, setBgReady] = useState(false);
    const { t } = useTranslation();

    const keys = {
        alts: {
            bg: 'c2.section1.coban.alts.bg',
            regionLogo: 'c2.section1.coban.alts.regionLogo',
            profile: 'c2.section1.coban.alts.profile',
            chart: 'c2.section1.coban.alts.chart',
            modalImage: 'c2.section1.coban.alts.modalImage'
        },
        buttons: {
            back: 'c2.section1.coban.buttons.back',
            openZoom: 'c2.section1.coban.buttons.openZoom',
            close: 'c2.section1.coban.buttons.close'
        },
        desc: {
            l1: 'c2.section1.coban.desc.line1',
            l2: 'c2.section1.coban.desc.line2'
        },
        features: {
            f1: 'c2.section1.coban.features.f1',
            f2: 'c2.section1.coban.features.f2',
            f3: 'c2.section1.coban.features.f3'
        }
    };

    // Logo: caída desde arriba con 3 rebotes (decrecientes)
    // giro SOLO en el primer rebote y opacidad fija en 1
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
                    src={FondoCoban}
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



                {/* Logo de región Cobán — misma animación fiable */}
                <motion.div
                    className="absolute top-[30vh] left-[50vh] z-20"
                    style={{ transformOrigin: '50% 100%', willChange: 'transform' }}
                    variants={logoMotion}
                    initial="hidden"
                    animate={bgReady ? 'show' : 'hidden'}
                >
                    <img
                        src={CobanR}
                        alt={t(keys.alts.regionLogo)}
                        title={t(keys.alts.regionLogo)}
                        className="w-[25vh] h-auto"
                    />
                </motion.div>

                {/* Descripción con animación */}
                <motion.p
                    className="absolute bottom-[36vh] left-[3%] w-full text-center text-white text-[2.3vh] z-20"
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

            {/* Columna derecha (idéntica al original) */}
            <div className="w-[42%] h-full bg-white">
                {/* Animación del perfil de la región Cobán */}
                <motion.div
                    className="relative w-full h-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 2.5 }}
                >
                    <div className="absolute top-[5%] left-[20%] flex items-start h-full">
                        <img
                            src={PDRCoban}
                            alt={t(keys.alts.profile)}
                            title={t(keys.alts.profile)}
                            className="w-[100%] h-auto object-contain"
                        />
                    </div>
                </motion.div>

                {/* Gráficas de Cobán */}
                <motion.div
                    className="relative left-[79%] transform -translate-x-[54%] -translate-y-[215%]"
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 2.8 }}
                >
                    <img
                        src={CobanG}
                        alt={t(keys.alts.chart)}
                        title={t(keys.alts.chart)}
                        className="w-[50vh] h-auto object-contain"
                        style={{ width: '50%', height: '50%', transform: 'scale(1.25)' }} 
                    />
                </motion.div>

                {/* Lista de características */}
                <motion.div
                    className="relative left-[79%] transform -translate-x-[60%] -translate-y-[470%]"
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
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#10AD8F] inline-block"></span>
                            {t(keys.features.f1)}
                        </motion.li>
                        <motion.li
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 3.4 }}
                        >
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#10AD8F] inline-block"></span>
                            {t(keys.features.f2)}
                        </motion.li>
                        <motion.li
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 3.6 }}
                        >
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#10AD8F] inline-block"></span>
                            {t(keys.features.f3)}
                        </motion.li>
                    </ul>
                </motion.div>
            </div>

            {/* Modal de imagen ampliada */}
            {showZoom && (
                <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50" onClick={() => setShowZoom(false)} >

                    
                    <div className="absolute top-0 right-0">
                        <CloseButton
                            onClick={() => setShowZoom(false)}
                            aria-label={t(keys.buttons.close)}
                            title={t(keys.buttons.close)}
                        />
                    </div>


                    <div className="relative overflow-auto" role="dialog" aria-modal="true" aria-label={t(keys.alts.modalImage)}>
                        <img
                            src={FondoCoban}
                            alt={t(keys.alts.modalImage)}
                            title={t(keys.alts.modalImage)}
                            className="w-[90%] h-auto object-contain"
                            onClick={(e) => e.stopPropagation()}

                        />
                    </div>

                    
                </div>
            )}
        </div>
    );
};

export default Coban;