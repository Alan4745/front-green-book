import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Card from './Card';

const AUTOPLAY_DELAY = 6000;
const TRANSITION_TIME = 700;

const BigSlider = ({ slides = [], onExpandClick = null, renderDesktop = null }) => {
    const totalSlides = slides.length;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isChanging, setIsChanging] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { t } = useTranslation();
    const MotionDiv = motion.div;
    const prevLabel = t('c5.section1.buttons.prev', { defaultValue: 'Anterior' });
    const nextLabel = t('c5.section1.buttons.next', { defaultValue: 'Siguiente' });
    const expandLabel = t('c5.section1.buttons.expand', { defaultValue: 'Agrandar' });

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (totalSlides <= 1 || isPaused || isChanging) {
            return undefined;
        }

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, AUTOPLAY_DELAY);

        return () => clearInterval(interval);
    }, [totalSlides, isPaused, isChanging]);

    if (totalSlides === 0) {
        return null;
    }

    const goToSlide = (direction) => {
        if (isChanging || totalSlides <= 1) {
            return;
        }

        setIsChanging(true);
        setCurrentIndex((prevIndex) => (prevIndex + direction + totalSlides) % totalSlides);
        window.setTimeout(() => setIsChanging(false), TRANSITION_TIME);
    };

    const isDesktop = windowWidth >= 1024;
    const activeSlide = slides[currentIndex];
    const sideSlides = [
        slides[(currentIndex + 1) % totalSlides],
        slides[(currentIndex + 2) % totalSlides]
    ];
    const visibleSlides = [
        { slide: slides[(currentIndex - 1 + totalSlides) % totalSlides], position: 'prev' },
        { slide: activeSlide, position: 'active' },
        { slide: slides[(currentIndex + 1) % totalSlides], position: 'next' }
    ];
    const positionStyles = {
        prev: 'left-1/2 -translate-x-[96%] scale-[0.82] opacity-75',
        active: 'left-1/2 -translate-x-1/2 scale-100 opacity-100',
        next: 'left-1/2 -translate-x-[4%] scale-[0.82] opacity-75'
    };
    const desktopControls = {
        activeSlide,
        sideSlides,
        currentIndex,
        isChanging,
        prevLabel,
        nextLabel,
        expandLabel,
        goPrev: () => goToSlide(-1),
        goNext: () => goToSlide(1)
    };

    return (
        <div
            className="relative w-screen overflow-hidden md:w-[86vw] lg:w-full"
            onPointerEnter={() => setIsPaused(true)}
            onPointerLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
        >
            {isDesktop ? (
                renderDesktop ? renderDesktop(desktopControls) : (
                <div className="w-full">
                    <div className="flex items-end gap-5 xl:gap-7">
                        <MotionDiv
                            key={`${activeSlide.title}-${currentIndex}-desktop-active`}
                            className="h-[clamp(16rem,25vw,21rem)] w-[clamp(14rem,25vw,19rem)] flex-shrink-0"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Card
                                image={activeSlide.image}
                                Number={activeSlide.Number}
                                title={activeSlide.title}
                                description={activeSlide.description}
                                highlightWords={activeSlide.highlightWords}
                                onExpandClick={onExpandClick}
                                isActive={true}
                                expandLabel={expandLabel}
                            />
                        </MotionDiv>

                        <div className="flex flex-1 items-end gap-4 pb-[0.15rem] xl:gap-5">
                            {sideSlides.map((slide, index) => (
                                <MotionDiv
                                    key={`${slide.title}-${currentIndex}-desktop-side-${index}`}
                                    className="h-[clamp(7rem,11vw,9.5rem)] w-[clamp(7rem,11vw,10rem)] flex-shrink-0"
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                                >
                                    <Card
                                        image={slide.image}
                                        Number={slide.Number}
                                        title={slide.title}
                                        description={slide.description}
                                        highlightWords={slide.highlightWords}
                                        compact={true}
                                        expandLabel={expandLabel}
                                    />
                                </MotionDiv>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 flex justify-center items-center gap-8">
                        <button
                            type="button"
                            onClick={() => goToSlide(-1)}
                            className="flex h-12 w-12 items-center justify-center rounded-full border-[0.12rem] border-white text-white transition-colors duration-300 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-50"
                            disabled={isChanging}
                            aria-label={prevLabel}
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            type="button"
                            onClick={() => goToSlide(1)}
                            className="flex h-12 w-12 items-center justify-center rounded-full border-[0.12rem] border-white text-white transition-colors duration-300 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-50"
                            disabled={isChanging}
                            aria-label={nextLabel}
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
                )
            ) : (
                <>
                    <div className="relative mx-auto h-[clamp(22rem,112vw,30rem)] w-full md:h-[min(58vh,34rem)]">
                        {visibleSlides.map(({ slide, position }) => {
                            const isActive = position === 'active';

                            return (
                                <MotionDiv
                                    key={`${slide.title}-${position}-${currentIndex}`}
                                    className={`absolute top-0 h-[88%] w-[68vw] max-w-[22rem] transition-all duration-700 ease-out md:w-[42vw] md:max-w-[30rem] ${positionStyles[position]} ${isActive ? 'z-20' : 'z-10'}`}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: isActive ? 1 : 0.75, y: 0 }}
                                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <Card
                                        image={slide.image}
                                        Number={slide.Number}
                                        title={slide.title}
                                        description={slide.description}
                                        highlightWords={slide.highlightWords}
                                        onExpandClick={isActive ? onExpandClick : null}
                                        isActive={isActive}
                                        compact={!isActive}
                                        expandLabel={expandLabel}
                                        className={isActive ? '' : 'pointer-events-none'}
                                    />
                                </MotionDiv>
                            );
                        })}
                    </div>

                    <div className="mt-[-2.5rem] flex justify-center items-center gap-8 md:mt-[-3rem]">
                        <button
                            type="button"
                            onClick={() => goToSlide(-1)}
                            className="z-30 flex h-12 w-12 items-center justify-center rounded-full border-[0.2vh] border-white text-white transition-colors duration-300 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-50"
                            disabled={isChanging}
                            aria-label={prevLabel}
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            type="button"
                            onClick={() => goToSlide(1)}
                            className="z-30 flex h-12 w-12 items-center justify-center rounded-full border-[0.2vh] border-white text-white transition-colors duration-300 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-50"
                            disabled={isChanging}
                            aria-label={nextLabel}
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default BigSlider;
