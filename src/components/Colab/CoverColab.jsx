import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTransitionNavigate } from '../Global/PageTransition';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import BackButton from '../Global/BackButton';
import MainMenu from '../Global/MainMenu';
import LanguageSelector from '../Global/LanguageSelector';
import CloseButton from '../Global/CloseButton';

import LogoGC from '../../assets/Colab/LogoGC.svg';
import LogoAC from '../../assets/Colab/LogoAC.svg';
import LogoACV from '../../assets/Colab/LogoACV.svg';
import LogotipoGC from '../../assets/Colab/LogotipoGC.svg';
import LogotipoAC from '../../assets/Colab/LogotipoAC.svg';

import VideoAC from '../../assets/Colab/Videos/AC.mp4';
import VideoGC from '../../assets/Colab/Videos/GC.mp4';
import 'animate.css';

const EXTERNAL_URL_GC = 'https://www.guatemalancoffees.com/';
const EXTERNAL_URL_AC = 'https://www.anacafe.org/';

const CoverColab = () => {
    const navigate = useNavigate();
    const navigateTo = useTransitionNavigate();
    const sectionRef = useRef(null);
    const { t } = useTranslation();

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });


    const groupScale = useTransform(
        scrollYProgress,
        [0, 0.4, 0.9, 1],
        [1, 0.88, 0.88, 1.30]
    );

    const brandsScale = useTransform(
        scrollYProgress,
        [0.8, 0.9, 1],
        [1, 4.2, 1.50]
    );


    const groupY = useTransform(scrollYProgress,
        [0, 0.18, 1],
        ['0vh', '-18vh', '-22vh']
    );


    const leftX = useTransform(
        scrollYProgress,
        [0, 0.18, 0.36, 0.41, 1],
        ['0vw', '5vw', '-10vw', '-5vw', '0vw']
    );

    const rightX = useTransform(
        scrollYProgress,
        [0, 0.18, 0.36, 0.41, 1],
        ['0vw', '-5vw', '10vw', '5vw', '0vw']
    );


    const leftY = useTransform(
        scrollYProgress,
        [0, 0.18, 0.36, 0.41, 1],
        ['0vh', '36vh', '0vh', '16vh', '0vh']
    );

    const rightY = useTransform(
        scrollYProgress,
        [0, 0.18, 0.36, 0.41, 1],
        ['0vh', '32vh', '0vh', '14vh', '0vh']
    );

    const logosOpacity = useTransform(scrollYProgress,
        [0, 0.18, 0.36],
        [1, 0.15, 0]
    );

    const brandLeftX = useTransform(scrollYProgress,
        [0.23, 0.34],
        ['0vw', '-3vw']
    );

    const brandRightX = useTransform(scrollYProgress,
        [0.23, 0.36],
        ['0vw', '2vw']
    );

    const brandLeftY = useTransform(scrollYProgress,
        [0.27, 0.36],
        ['0vh', '-20vh']
    );

    const brandRightY = useTransform(scrollYProgress,
        [0.27, 0.36],
        ['0vh', '-20vh']
    );

    const cardOpacity = useTransform(scrollYProgress,
        [0, 0.12],
        [0, 1]
    );


    const handleGoToSectionGC = () => {
        if (EXTERNAL_URL_GC !== '#') window.open(EXTERNAL_URL_GC, '_blank', 'noopener noreferrer');
    };

    const handleGoToSectionAC = () => {
        if (EXTERNAL_URL_AC !== '#') window.open(EXTERNAL_URL_AC, '_blank', 'noopener noreferrer');
    };

    const [activeVideo, setActiveVideo] = useState(null);


    const [showIndicator, setShowIndicator] = useState(true);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setShowIndicator(latest < 0.);
    });


    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-[#046C7F] bg-no-repeat bg-center bg-cover z-10 min-h-screen lg:min-h-[260vh]"
            role="region"
            aria-label={t('colab.cover.aria.section')}
        >
            {/* ===== BOTONES FIJOS ===== */}
            <div className="fixed top-6 left-6 md:top-8 md:left-8 z-50 pointer-events-auto">
                <BackButton onClick={() => navigateTo('/')} />
            </div>

            <div className="absolute top-[2vh] right-6.5 z-50">
                <MainMenu />
            </div>

            <div className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-50 pointer-events-auto">
                <LanguageSelector alignment='left' />
            </div>


            {/* Indicador de Sigue Bajando */}


            {showIndicator && (
                <div className="hidden lg:block fixed bottom-0 left-[48%] z-50 pointer-events animate__bounce">
                    <div className="animate__animated animate__bounce animate__infinite">
                        <div style={{ width: "5rem" }}>
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <div className="fixed bottom-8" style={{ width: "5rem" }}>
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            )}





            {/* ===== ESCENA STICKY — solo desktop (lg+) ===== */}
            <div className="hidden lg:block sticky top-0 h-screen w-full">
                <div className="h-full w-full flex justify-center items-start">
                    {/* Contenedor general: escala + SUBE */}
                    <motion.div
                        style={{ scale: groupScale, y: groupY, transformOrigin: 'top center' }}
                        className="mt-[12vw] flex items-center justify-center gap-8 px-6 py-4 will-change-transform z-20"
                    >
                        {/* IZQUIERDA: Guatemalan Coffees */}
                        <motion.div
                            style={{ x: leftX, y: leftY }}
                            className="flex flex-col items-center justify-center mr-42 will-change-transform"
                        >
                            <motion.img
                                src={LogoGC}
                                alt={t('colab.cover.alts.gcLogo')}
                                title={t('colab.cover.alts.gcLogo')}
                                className="w-[10vw] h-auto mb-6"
                                style={{ opacity: logosOpacity }}
                            />
                            <motion.img
                                src={LogotipoGC}
                                alt={t('colab.cover.alts.gcLogotype')}
                                title={t('colab.cover.alts.gcLogotype')}
                                className="w-[20vw] h-auto"
                                style={{ scale: brandsScale, x: brandLeftX, y: brandLeftY }}
                            />
                        </motion.div>

                        {/* Línea centrada (decorativa) */}
                        <div className="w-[0.6vh] h-64 rounded-full bg-white" aria-hidden="true" />

                        {/* DERECHA: ANACAFÉ */}
                        <motion.div
                            style={{ x: rightX, y: rightY }}
                            className="flex flex-col items-center justify-center ml-42 will-change-transform"
                        >
                            <motion.img
                                src={LogoAC}
                                alt={t('colab.cover.alts.acLogo')}
                                title={t('colab.cover.alts.acLogo')}
                                className="w-[10vw] h-auto mb-6"
                                style={{ opacity: logosOpacity }}
                            />
                            <motion.img
                                src={LogotipoAC}
                                alt={t('colab.cover.alts.acLogotype')}
                                title={t('colab.cover.alts.acLogotype')}
                                className="w-[20vw] h-auto"
                                style={{ scale: brandsScale, x: brandRightX, y: brandRightY }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* ===== MOBILE / TABLET: contenedor único h-svh, logos + tarjetas sin scroll ===== */}
            <div className="lg:hidden flex flex-col h-svh w-full overflow-hidden px-4 [@media(orientation:portrait)]:pt-16 [@media(orientation:landscape)]:pt-12 pb-4 gap-3">

                {/* Logos — tamaño natural, no crecen */}
                <div className="shrink-0 flex justify-center items-center py-4 px-4 gap-0">
                    <div className="flex flex-col items-center justify-center flex-1">
                        <img src={LogoGC} alt={t('colab.cover.alts.gcLogo')} title={t('colab.cover.alts.gcLogo')} className="w-14 sm:w-18 h-auto mb-2" />
                        <img src={LogotipoGC} alt={t('colab.cover.alts.gcLogotype')} title={t('colab.cover.alts.gcLogotype')} className="w-28 sm:w-36 h-auto" />
                    </div>
                    <div className="w-px h-20 rounded-full bg-white mx-4 shrink-0" aria-hidden="true" />
                    <div className="flex flex-col items-center justify-center flex-1">
                        <img src={LogoAC} alt={t('colab.cover.alts.acLogo')} title={t('colab.cover.alts.acLogo')} className="w-14 sm:w-18 h-auto mb-2" />
                        <img src={LogotipoAC} alt={t('colab.cover.alts.acLogotype')} title={t('colab.cover.alts.acLogotype')} className="w-28 sm:w-36 h-auto" />
                    </div>
                </div>

                {/* Tarjetas — llenan el espacio restante exacto */}
                <div className="flex-1 min-h-0 grid grid-cols-2 [@media(orientation:landscape)]:grid-cols-4 gap-3">

                    {/* GC logo */}
                    <div
                        className="relative w-full h-full rounded-xl bg-[#FFFFFF] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={handleGoToSectionGC}
                        role="button"
                        title={t('colab.cover.buttons.toGC')}
                    >
                        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full bg-[#562E91] flex items-center justify-center shadow-md" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                        <img src={LogoGC} alt={t('colab.cover.alts.gcLogo')} title={t('colab.cover.alts.gcLogo')} className="w-1/2 h-auto" />
                    </div>

                    {/* GC video */}
                    <div
                        className="relative w-full h-full rounded-xl bg-[#FFFFFF] cursor-pointer overflow-hidden group"
                        onClick={() => setActiveVideo('gc')}
                        title="Reproducir video"
                    >
                        <video className="w-full h-full object-cover rounded-xl" autoPlay loop muted aria-label="GC video">
                            <source src={VideoGC} type="video/mp4" />
                            {t('colab.cover.videoFallback')}
                        </video>
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* AC video — portrait: col izq fila 2, landscape: col 4 */}
                    <div
                        className="[@media(orientation:portrait)]:order-3 [@media(orientation:landscape)]:order-4 relative w-full h-full rounded-xl bg-[#FFFFFF] cursor-pointer overflow-hidden group"
                        onClick={() => setActiveVideo('ac')}
                        title="Reproducir video"
                    >
                        <video className="w-full h-full object-cover rounded-xl" autoPlay loop muted aria-label="AC video">
                            <source src={VideoAC} type="video/mp4" />
                            {t('colab.cover.videoFallback')}
                        </video>
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* AC logo (verde) — portrait: col der fila 2 (última), landscape: col 3 */}
                    <div
                        className="[@media(orientation:portrait)]:order-4 [@media(orientation:landscape)]:order-3 relative w-full h-full rounded-xl bg-[#0B312C] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={handleGoToSectionAC}
                        role="button"
                        title={t('colab.cover.buttons.toAC')}
                    >
                        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full bg-[#738720] flex items-center justify-center shadow-md" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                        <img src={LogoACV} alt={t('colab.cover.alts.acLogo')} title={t('colab.cover.alts.acLogo')} className="w-1/2 h-auto" />
                    </div>

                </div>
            </div>

            {/* ===== TARJETAS DESKTOP (layout original intacto) ===== */}
            <div className="hidden lg:block">
                <div className="absolute bottom-26 left-1/2 -translate-x-1/2 flex gap-8">
                    <motion.div
                        className="relative w-[42vh] h-[48vh] rounded-xl bg-[#FFFFFF] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300"
                        style={{ opacity: cardOpacity }}
                        onClick={handleGoToSectionGC}
                        role="button"
                        title={t('colab.cover.buttons.toGC')}
                    >
                        <div
                            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#562E91] flex items-center justify-center shadow-md"
                            aria-hidden="true"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                        <img src={LogoGC} alt={t('colab.cover.alts.gcLogo')} title={t('colab.cover.alts.gcLogo')} className="w-54 h-auto" />
                    </motion.div>

                    <motion.div
                        className="relative w-[42vh] h-[48vh] rounded-xl bg-[#FFFFFF] cursor-pointer overflow-hidden group"
                        style={{ opacity: cardOpacity }}
                        onClick={() => setActiveVideo('gc')}
                        title="Reproducir video"
                    >
                        <video className="w-full h-full object-cover rounded-xl" autoPlay loop muted aria-label="GC video">
                            <source src={VideoGC} type="video/mp4" />
                            {t('colab.cover.videoFallback')}
                        </video>
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative w-[42vh] h-[48vh] rounded-xl bg-[#0B312C] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300"
                        style={{ opacity: cardOpacity }}
                        onClick={handleGoToSectionAC}
                        role="button"
                        title={t('colab.cover.buttons.toAC')}
                    >
                        <div
                            className="absolute top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full bg-[#738720] flex items-center justify-center shadow-md"
                            aria-hidden="true"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                        <img src={LogoACV} alt={t('colab.cover.alts.acLogo')} title={t('colab.cover.alts.acLogo')} className="w-54 h-auto" />
                    </motion.div>

                    <motion.div
                        className="relative w-[42vh] h-[48vh] rounded-xl bg-[#FFFFFF] cursor-pointer overflow-hidden group"
                        style={{ opacity: cardOpacity }}
                        onClick={() => setActiveVideo('ac')}
                        title="Reproducir video"
                    >
                        <video className="w-full h-full object-cover rounded-xl" autoPlay loop muted aria-label="AC video">
                            <source src={VideoAC} type="video/mp4" />
                            {t('colab.cover.videoFallback')}
                        </video>
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-14 h-14 rounded-full bg-white/80 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ===== LIGHTBOX DE VIDEO ===== */}
            {activeVideo && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100]"
                    onClick={() => setActiveVideo(null)}
                >
                    <div onClick={(e) => e.stopPropagation()} className="relative w-[90vw] max-w-5xl">
                        <video
                            className="w-full max-h-[90vh] h-auto rounded-xl block"
                            autoPlay
                            controls
                            controlsList="nodownload noplaybackrate"
                            disablePictureInPicture
                            key={activeVideo}
                        >
                            <source src={activeVideo === 'gc' ? VideoGC : VideoAC} type="video/mp4" />
                        </video>
                        <CloseButton onClick={() => setActiveVideo(null)} />
                    </div>
                </div>
            )}
        </section>
    );
};

export default CoverColab;