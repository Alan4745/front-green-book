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

    const heroScale = useTransform(
        scrollYProgress,
        [0, 0.3, 0.5, 0.68, 1],
        [1, 1, 1.02, 1.08, 1.08]
    );

    const heroY = useTransform(
        scrollYProgress,
        [0, 0.34, 0.5, 0.62, 0.74, 1],
        ['0vh', '0vh', '-4vh', '-14vh', '-30vh', '-30vh']
    );

    const heroOpacity = useTransform(
        scrollYProgress,
        [0, 0.54, 0.66, 0.76, 1],
        [1, 1, 0.72, 0.18, 0]
    );

    const iconOpacity = useTransform(
        scrollYProgress,
        [0, 0.18, 0.34, 0.48],
        [1, 0.72, 0.32, 0]
    );

    const iconY = useTransform(
        scrollYProgress,
        [0, 0.32, 0.56, 0.72],
        ['0vh', '-0.5vh', '-2vh', '-4vh']
    );

    const leftWordmarkY = useTransform(
        scrollYProgress,
        [0, 0.42, 0.58, 0.7],
        ['0vh', '0vh', '-2vh', '-5vh']
    );

    const rightWordmarkY = useTransform(
        scrollYProgress,
        [0, 0.42, 0.58, 0.7],
        ['0vh', '0vh', '-2vh', '-5vh']
    );

    const wordmarkScale = useTransform(
        scrollYProgress,
        [0, 0.42, 0.62, 0.74],
        [1, 1, 1.07, 1.12]
    );

    const finalStageOpacity = useTransform(
        scrollYProgress,
        [0.58, 0.68, 0.78, 1],
        [0, 0.18, 1, 1]
    );

    const finalStageY = useTransform(
        scrollYProgress,
        [0.58, 0.68, 0.78, 1],
        ['20vh', '12vh', '0vh', '0vh']
    );

    const finalStageScale = useTransform(
        scrollYProgress,
        [0.58, 0.78, 1],
        [0.96, 1, 1]
    );

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        setShowIndicator(latest < 0.08);
    });

    const handleGoToSectionGC = () => {
        if (EXTERNAL_URL_GC !== '#') {
            window.open(EXTERNAL_URL_GC, '_blank', 'noopener noreferrer');
        }
    };

    const handleGoToSectionAC = () => {
        if (EXTERNAL_URL_AC !== '#') {
            window.open(EXTERNAL_URL_AC, '_blank', 'noopener noreferrer');
        }
    };

    return (
        <section
            ref={sectionRef}
            className="relative h-[220vh] lg:h-[240vh] xl:h-[250vh] w-full overflow-hidden bg-[#046C7F] bg-no-repeat bg-center bg-cover z-10"
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
                <motion.div
                    style={{ opacity: heroOpacity, scale: heroScale, y: heroY, transformOrigin: 'center center' }}
                    className="absolute inset-0 z-20 flex items-center justify-center px-4 lg:px-8 pointer-events-none"
                >
                    <div className="flex items-center justify-center gap-4 lg:gap-10 xl:gap-14">
                        <div className="flex flex-col items-center justify-center w-[40vw] lg:w-[24vw] max-w-[420px]">
                            <motion.img
                                src={LogoGC}
                                alt={t('colab.cover.alts.gcLogo')}
                                title={t('colab.cover.alts.gcLogo')}
                                className="w-[22vw] lg:w-[10vw] max-w-[176px] h-auto mb-5 lg:mb-6"
                                style={{ opacity: iconOpacity, y: iconY }}
                            />
                            <motion.img
                                src={LogotipoGC}
                                alt={t('colab.cover.alts.gcLogotype')}
                                title={t('colab.cover.alts.gcLogotype')}
                                className="w-[40vw] lg:w-[20vw] max-w-[340px] h-auto"
                                style={{ scale: wordmarkScale, y: leftWordmarkY }}
                            />
                        </div>

                        <div className="w-[1px] lg:w-[3px] h-24 lg:h-64 rounded-full bg-white" aria-hidden="true" />

                        <div className="flex flex-col items-center justify-center w-[40vw] lg:w-[24vw] max-w-[420px]">
                            <motion.img
                                src={LogoAC}
                                alt={t('colab.cover.alts.acLogo')}
                                title={t('colab.cover.alts.acLogo')}
                                className="w-[22vw] lg:w-[10vw] max-w-[176px] h-auto mb-5 lg:mb-6"
                                style={{ opacity: iconOpacity, y: iconY }}
                            />
                            <motion.img
                                src={LogotipoAC}
                                alt={t('colab.cover.alts.acLogotype')}
                                title={t('colab.cover.alts.acLogotype')}
                                className="w-[40vw] lg:w-[20vw] max-w-[340px] h-auto"
                                style={{ scale: wordmarkScale, y: rightWordmarkY }}
                            />
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    style={{ opacity: finalStageOpacity, y: finalStageY, scale: finalStageScale, transformOrigin: 'center bottom' }}
                    className="absolute inset-0 z-30 flex items-end justify-center pb-10 lg:pb-14 xl:pb-16"
                >
                    <div className="w-[92vw] max-w-[1160px] flex flex-col items-center gap-4 lg:gap-6 pointer-events-none">
                        <div className="w-full max-w-[1040px] grid grid-cols-[1fr_auto_1fr] items-end gap-4 lg:gap-6">
                            <div className="h-10 lg:h-14 flex items-end justify-center">
                                <img
                                    src={LogotipoGC}
                                    alt={t('colab.cover.alts.gcLogotype')}
                                    title={t('colab.cover.alts.gcLogotype')}
                                    className="w-[30vw] max-w-[170px] lg:w-[10vw] lg:max-w-none h-auto"
                                />
                            </div>

                            <div className="w-[1px] lg:w-[2px] h-8 lg:h-12 bg-white rounded-full self-end" aria-hidden="true" />

                            <div className="h-10 lg:h-14 flex items-end justify-center">
                                <img
                                    src={LogotipoAC}
                                    alt={t('colab.cover.alts.acLogotype')}
                                    title={t('colab.cover.alts.acLogotype')}
                                    className="w-[32vw] max-w-[180px] lg:w-[11vw] lg:max-w-none h-auto"
                                />
                            </div>
                        </div>

                        <div className="w-full max-w-[1040px] grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 pointer-events-auto">
                            <motion.div
                                className="relative aspect-[0.92] rounded-xl bg-[#FFFFFF] flex items-center justify-center cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                                onClick={handleGoToSectionGC}
                                role="button"
                                title={t('colab.cover.buttons.toGC')}
                            >
                                <div
                                    className="absolute top-3 right-3 lg:top-4 lg:right-4 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#562E91] flex items-center justify-center shadow-md"
                                    aria-hidden="true"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                                <img src={LogoGC} alt={t('colab.cover.alts.gcLogo')} title={t('colab.cover.alts.gcLogo')} className="w-[46%] max-w-[150px] h-auto" />
                            </motion.div>

                            <motion.div
                                className="relative aspect-[0.92] rounded-xl bg-[#FFFFFF] cursor-pointer overflow-hidden group"
                                onClick={() => setActiveVideo('gc')}
                            >
                                <video className="w-full h-full object-cover rounded-xl" autoPlay loop muted aria-label="GC video">
                                    <source src={VideoGC} type="video/mp4" />
                                    {t('colab.cover.videoFallback')}
                                </video>
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/80 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:w-7 lg:h-7 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="relative aspect-[0.92] rounded-xl bg-[#0B312C] flex items-center justify-center cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                                onClick={handleGoToSectionAC}
                                role="button"
                                title={t('colab.cover.buttons.toAC')}
                            >
                                <div
                                    className="absolute top-3 right-3 lg:top-4 lg:right-4 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#738720] flex items-center justify-center shadow-md"
                                    aria-hidden="true"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                                <img src={LogoACV} alt={t('colab.cover.alts.acLogo')} title={t('colab.cover.alts.acLogo')} className="w-[46%] max-w-[150px] h-auto" />
                            </motion.div>

                            <motion.div
                                className="relative aspect-[0.92] rounded-xl bg-[#FFFFFF] cursor-pointer overflow-hidden group"
                                onClick={() => setActiveVideo('ac')}
                            >
                                <video className="w-full h-full object-cover rounded-xl" autoPlay loop muted aria-label="AC video">
                                    <source src={VideoAC} type="video/mp4" />
                                    {t('colab.cover.videoFallback')}
                                </video>
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/80 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:w-7 lg:h-7 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
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
