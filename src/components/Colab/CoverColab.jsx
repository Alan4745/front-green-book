import { useRef, useState } from 'react';
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
    const navigateTo = useTransitionNavigate();
    const sectionRef = useRef(null);
    const { t } = useTranslation();
    const [activeVideo, setActiveVideo] = useState(null);
    const [showIndicator, setShowIndicator] = useState(true);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });

    const groupScale = useTransform(
        scrollYProgress,
        [0, 0.32, 0.58, 1],
        [1, 0.998, 0.97, 0.95]
    );

    const brandsScale = useTransform(
        scrollYProgress,
        [0, 0.32, 0.58, 1],
        [1, 1.02, 1.08, 1.06]
    );

    const heroOpacity = useTransform(
        scrollYProgress,
        [0, 0.48, 0.62, 0.74],
        [1, 1, 0.28, 0]
    );

    const groupY = useTransform(
        scrollYProgress,
        [0, 0.32, 0.58, 1],
        ['0vh', '0vh', '-1vh', '-2vh']
    );

    const leftX = useTransform(
        scrollYProgress,
        [0, 0.12, 0.24, 0.42, 0.58],
        ['0vw', '1.4vw', '-1.8vw', '-0.8vw', '0vw']
    );

    const rightX = useTransform(
        scrollYProgress,
        [0, 0.12, 0.24, 0.42, 0.58],
        ['0vw', '-1.4vw', '1.8vw', '0.8vw', '0vw']
    );

    const leftY = useTransform(
        scrollYProgress,
        [0, 0.12, 0.24, 0.42, 0.58],
        ['0vh', '2vh', '0.4vh', '1vh', '0vh']
    );

    const rightY = useTransform(
        scrollYProgress,
        [0, 0.12, 0.24, 0.42, 0.58],
        ['0vh', '2vh', '0.4vh', '1vh', '0vh']
    );

    const logosOpacity = useTransform(
        scrollYProgress,
        [0, 0.14, 0.28, 0.4],
        [1, 0.4, 0.1, 0]
    );

    const brandLeftX = useTransform(
        scrollYProgress,
        [0, 0.18, 0.38, 0.58],
        ['0vw', '-0.3vw', '-1vw', '-0.8vw']
    );

    const brandRightX = useTransform(
        scrollYProgress,
        [0, 0.18, 0.38, 0.58],
        ['0vw', '0.3vw', '1vw', '0.8vw']
    );

    const brandLeftY = useTransform(
        scrollYProgress,
        [0, 0.18, 0.38, 0.58],
        ['0vh', '-0.4vh', '-1.8vh', '-1.8vh']
    );

    const brandRightY = useTransform(
        scrollYProgress,
        [0, 0.18, 0.38, 0.58],
        ['0vh', '-0.4vh', '-1.8vh', '-1.8vh']
    );

    const finalStageOpacity = useTransform(
        scrollYProgress,
        [0.56, 0.7, 1],
        [0, 1, 1]
    );

    const finalStageY = useTransform(
        scrollYProgress,
        [0.56, 0.7, 1],
        ['12vh', '0vh', '0vh']
    );

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        setShowIndicator(latest < 0.08);
    });

    const handleGoToSectionGC = () => {
        if (EXTERNAL_URL_GC !== '#') window.open(EXTERNAL_URL_GC, '_blank', 'noopener noreferrer');
    };

    const handleGoToSectionAC = () => {
        if (EXTERNAL_URL_AC !== '#') window.open(EXTERNAL_URL_AC, '_blank', 'noopener noreferrer');
    };

    return (
        <section
            ref={sectionRef}
            className="relative h-[195vh] lg:h-[210vh] w-full overflow-hidden bg-[#046C7F] bg-no-repeat bg-center bg-cover z-10"
            role="region"
            aria-label={t('colab.cover.aria.section')}
        >
            <div className="fixed top-6 left-6 md:top-8 md:left-8 z-50 pointer-events-auto">
                <BackButton onClick={() => navigateTo('/')} />
            </div>

            <div className="absolute top-[2vh] right-6.5 z-50">
                <MainMenu />
            </div>

            <div className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-50 pointer-events-auto">
                <LanguageSelector alignment="left" />
            </div>

            {showIndicator && (
                <div className="fixed md:bottom-0 md:left-[48%] z-50 pointer-events-none animate__bounce">
                    <div className="animate__animated animate__bounce animate__infinite">
                        <div style={{ width: '5rem' }}>
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <div className="fixed bottom-8" style={{ width: '5rem' }}>
                            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            )}

            <div className="sticky top-0 h-screen w-full">
                <div className="h-full w-full flex items-center justify-center">
                    <motion.div
                        style={{ scale: groupScale, y: groupY, opacity: heroOpacity, transformOrigin: 'top center' }}
                        className="flex items-center justify-center gap-4 lg:gap-8 px-2 lg:px-6 py-4 will-change-transform z-20"
                    >
                        <motion.div
                            style={{ x: leftX, y: leftY }}
                            className="flex flex-col items-center justify-center mr-0 lg:mr-42 will-change-transform"
                        >
                            <motion.img
                                src={LogoGC}
                                alt={t('colab.cover.alts.gcLogo')}
                                title={t('colab.cover.alts.gcLogo')}
                                className="w-[20vw] lg:w-[10vw] h-auto mb-6"
                                style={{ opacity: logosOpacity }}
                            />
                            <motion.img
                                src={LogotipoGC}
                                alt={t('colab.cover.alts.gcLogotype')}
                                title={t('colab.cover.alts.gcLogotype')}
                                className="w-[35vw] lg:w-[20vw] h-auto"
                                style={{ scale: brandsScale, x: brandLeftX, y: brandLeftY }}
                            />
                        </motion.div>

                        <div className="w-[0.6vh] h-24 lg:h-64 rounded-full bg-white" aria-hidden="true" />

                        <motion.div
                            style={{ x: rightX, y: rightY }}
                            className="flex flex-col items-center justify-center ml-0 lg:ml-42 will-change-transform"
                        >
                            <motion.img
                                src={LogoAC}
                                alt={t('colab.cover.alts.acLogo')}
                                title={t('colab.cover.alts.acLogo')}
                                className="w-[20vw] lg:w-[10vw] h-auto mb-6"
                                style={{ opacity: logosOpacity }}
                            />
                            <motion.img
                                src={LogotipoAC}
                                alt={t('colab.cover.alts.acLogotype')}
                                title={t('colab.cover.alts.acLogotype')}
                                className="w-[35vw] lg:w-[20vw] h-auto"
                                style={{ scale: brandsScale, x: brandRightX, y: brandRightY }}
                            />
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    style={{ opacity: finalStageOpacity, y: finalStageY }}
                    className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
                >
                    <div className="w-[92vw] lg:w-auto flex flex-col items-center gap-4 lg:gap-5">
                        <div className="w-full grid grid-cols-2 lg:flex lg:items-end gap-4 lg:gap-6">
                            <div className="w-full lg:w-[18vw] xl:w-[17vw] h-[10vw] lg:h-[4vw] xl:h-[3.5vw] flex items-end justify-center">
                                <img
                                    src={LogotipoGC}
                                    alt={t('colab.cover.alts.gcLogotype')}
                                    title={t('colab.cover.alts.gcLogotype')}
                                    className="w-[26vw] lg:w-[9vw] xl:w-[8.5vw] h-auto"
                                />
                            </div>

                            <div className="w-full lg:w-[18vw] xl:w-[17vw] h-[10vw] lg:h-[4vw] xl:h-[3.5vw]" aria-hidden="true" />

                            <div className="w-full lg:w-[18vw] xl:w-[17vw] h-[10vw] lg:h-[4vw] xl:h-[3.5vw] flex items-end justify-center">
                                <img
                                    src={LogotipoAC}
                                    alt={t('colab.cover.alts.acLogotype')}
                                    title={t('colab.cover.alts.acLogotype')}
                                    className="w-[28vw] lg:w-[9.5vw] xl:w-[9vw] h-auto"
                                />
                            </div>

                            <div className="w-full lg:w-[18vw] xl:w-[17vw] h-[10vw] lg:h-[4vw] xl:h-[3.5vw]" aria-hidden="true" />
                        </div>

                        <div className="w-full grid grid-cols-2 lg:flex gap-4 lg:gap-6 pointer-events-auto">
                            <motion.div
                                className="relative w-full h-[42vw] lg:w-[18vw] lg:h-[18vw] xl:w-[17vw] xl:h-[17vw] rounded-xl bg-[#FFFFFF] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300"
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
                                className="relative w-full h-[42vw] lg:w-[18vw] lg:h-[18vw] xl:w-[17vw] xl:h-[17vw] rounded-xl bg-[#FFFFFF] cursor-pointer overflow-hidden group"
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
                                className="relative w-full h-[42vw] lg:w-[18vw] lg:h-[18vw] xl:w-[17vw] xl:h-[17vw] rounded-xl bg-[#0B312C] flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300"
                                onClick={handleGoToSectionAC}
                                role="button"
                                title={t('colab.cover.buttons.toAC')}
                            >
                                <div
                                    className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#738720] flex items-center justify-center shadow-md"
                                    aria-hidden="true"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                                <img src={LogoACV} alt={t('colab.cover.alts.acLogo')} title={t('colab.cover.alts.acLogo')} className="w-54 h-auto" />
                            </motion.div>

                            <motion.div
                                className="relative w-full h-[42vw] lg:w-[18vw] lg:h-[18vw] xl:w-[17vw] xl:h-[17vw] rounded-xl bg-[#FFFFFF] cursor-pointer overflow-hidden group"
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
                </motion.div>
            </div>

            {activeVideo && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100]"
                    onClick={() => setActiveVideo(null)}
                >
                    <CloseButton onClick={() => setActiveVideo(null)} />
                    <div onClick={(e) => e.stopPropagation()} className="w-[90vw] max-w-5xl">
                        <video
                            className="w-full h-auto rounded-xl"
                            autoPlay
                            controls
                            controlsList="nodownload noplaybackrate"
                            disablePictureInPicture
                            key={activeVideo}
                        >
                            <source src={activeVideo === 'gc' ? VideoGC : VideoAC} type="video/mp4" />
                        </video>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CoverColab;
