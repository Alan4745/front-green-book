import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BigSlider from './ui/BigSlider';
import Card from './ui/Card';
import HoverButton from '../Global/HoverButton';
import CloseButton from '../Global/CloseButton';

import F1 from '../../assets/C5/F1.png';
import F2 from '../../assets/C5/F2.png';
import F3 from '../../assets/C5/F3.png';

import Number1 from '../../assets/C5/Numbers/Number1.png';
import Number2 from '../../assets/C5/Numbers/Number2.svg';
import Number3 from '../../assets/C5/Numbers/Number3.svg';
import { motion } from 'framer-motion';

const Section1C5 = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const { t, i18n } = useTranslation();

    const openLightbox = (img) => {
        setCurrentImage(img);
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };
    const MotionDiv = motion.div;

    const slidesData = [
        {
            image: F1,
            title: t('c5.section1.slides.f1.title'),
            description: t('c5.section1.slides.f1.desc'),
            Number: Number1,
            highlightWords: t('c5.section1.slides.f1.highlight', { returnObjects: true })
        },
        {
            image: F2,
            title: t('c5.section1.slides.f2.title'),
            description: t('c5.section1.slides.f2.desc'),
            Number: Number2,
            highlightWords: t('c5.section1.slides.f2.highlight', { returnObjects: true })
        },
        {
            image: F3,
            title: t('c5.section1.slides.f3.title'),
            description: t('c5.section1.slides.f3.desc'),
            Number: Number3,
            highlightWords: t('c5.section1.slides.f3.highlight', { returnObjects: true })
        }
    ];

    return (
        <section
            className="relative min-h-screen w-full overflow-hidden bg-[#562E91] text-white"
            role="region"
            aria-label={t('c5.section1.aria.section')}
        >
            <div className="absolute right-0 top-2 z-50 sm:top-3 lg:hidden">
                <HoverButton
                    text={t('c5.section1.cta').toLocaleUpperCase(i18n.language)}
                    textOffset={-86}
                    hoverOffset={-16}
                    link="https://reservasdeguatemala.org/"
                    iconSide="right"
                    animateText={false}
                    hoverTrigger="icon"
                    className="h-[68px] w-[286px] text-[0.95rem]"
                />
            </div>

            <div className="flex min-h-screen flex-col justify-center px-6 pt-[10vh] pb-[9vh] lg:hidden">
                <div className="mx-auto w-full max-w-md">
                    <h2
                        className="mb-3 max-w-[18rem] text-[clamp(1.6rem,7vw,2.25rem)] uppercase leading-none"
                        style={{ fontFamily: 'GothamBold' }}
                    >
                        {t('c5.section1.title')}
                    </h2>
                    <p
                        className="mb-5 text-[clamp(0.95rem,3.8vw,1.15rem)] text-justify leading-tight"
                        style={{ fontFamily: 'GothamNormal' }}
                    >
                        {t('c5.section1.intro')}
                    </p>
                    <p
                        className="mb-7 text-[clamp(0.95rem,3.8vw,1.15rem)] text-justify leading-tight"
                        style={{ fontFamily: 'GothamNormal' }}
                    >
                        {t('c5.section1.outro')}
                    </p>
                </div>

                <div className="-mx-6 flex justify-center">
                    <BigSlider slides={slidesData} onExpandClick={openLightbox} />
                </div>
            </div>

            <div className="relative hidden min-h-screen items-center justify-center lg:flex">
                <div className="absolute right-[1.5rem] top-[1.75rem] z-20 flex justify-end xl:right-[2rem] xl:top-[2.25rem]">
                    <HoverButton
                        text={t('c5.section1.cta').toLocaleUpperCase(i18n.language)}
                        textOffset={-94}
                        hoverOffset={-18}
                        link="https://reservasdeguatemala.org/"
                        iconSide="right"
                        animateText={false}
                        hoverTrigger="icon"
                        className="h-[84px] w-[346px] text-[1.15rem]"
                    />
                </div>

                <div className="flex w-full justify-center px-[3.5vw] py-[4.2rem]">
                    <div className="flex min-h-[calc(100vh-8.4rem)] w-full max-w-[78rem] items-center justify-center">
                        <BigSlider
                            slides={slidesData}
                            onExpandClick={openLightbox}
                            renderDesktop={({ activeSlide, sideSlides, goPrev, goNext, isChanging, prevLabel, nextLabel, expandLabel, currentIndex }) => (
                                <div className="grid w-full grid-cols-[29.5rem_43.25rem] items-end justify-center gap-[1.6rem]">
                                    <MotionDiv
                                        key={`${activeSlide.title}-${currentIndex}-desktop-featured`}
                                        className="h-[44.125rem] w-[29.5rem] flex-shrink-0 justify-self-center self-end"
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <BigSliderCardProxy
                                            slide={activeSlide}
                                            onExpandClick={openLightbox}
                                            expandLabel={expandLabel}
                                            isActive={true}
                                        />
                                    </MotionDiv>

                                    <div className="flex flex-col items-start self-end">
                                        <div className="grid h-[44.125rem] w-[43.25rem] grid-rows-[1fr_22.0625rem]">
                                            <div className="w-[43.25rem] pt-[3.05rem]">
                                                <h2
                                                    className="mb-5 whitespace-nowrap text-[2.7rem] uppercase leading-[0.94]"
                                                    style={{ fontFamily: 'GothamBold' }}
                                                >
                                                    {t('c5.section1.title')}
                                                </h2>
                                                <p
                                                    className="mb-6 w-[35.75rem] text-[1rem] leading-[1.14]"
                                                    style={{ fontFamily: 'GothamNormal' }}
                                                >
                                                    {t('c5.section1.intro')}
                                                </p>
                                                <p
                                                    className="w-[35.75rem] text-[1rem] leading-[1.14]"
                                                    style={{ fontFamily: 'GothamNormal' }}
                                                >
                                                    {t('c5.section1.outro')}
                                                </p>
                                            </div>

                                            <div className="relative mt-[0.15rem] w-[31.75rem] self-start pb-[4.25rem]">
                                                <div className="flex w-[31.75rem] items-end gap-[1rem]">
                                                    {sideSlides.map((slide, index) => (
                                                        <MotionDiv
                                                            key={`${slide.title}-${currentIndex}-desktop-side-${index}`}
                                                            className="h-[22.0625rem] w-[15.375rem] flex-shrink-0 self-end"
                                                            initial={{ opacity: 0, y: 12 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                                                        >
                                                            <BigSliderCardProxy
                                                                slide={slide}
                                                                expandLabel={expandLabel}
                                                                compact={true}
                                                            />
                                                        </MotionDiv>
                                                    ))}
                                                </div>

                                                <div className="absolute left-1/2 bottom-0 flex -translate-x-1/2 gap-8">
                                                    <button
                                                        type="button"
                                                        onClick={goPrev}
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
                                                        onClick={goNext}
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
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                    </div>
                </div>
            </div>

            {isLightboxOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
                    role="dialog"
                    aria-modal="true"
                    aria-label={t('c5.section1.modalAlt')}
                    onClick={closeLightbox}
                >
                    <div className="relative" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={currentImage}
                            alt={t('c5.section1.modalAlt')}
                            className="block max-h-[95vh] max-w-[95vw] object-contain"
                        />
                        <CloseButton
                            onClick={closeLightbox}
                            aria-label={t('c5.section1.buttons.close')}
                            title={t('c5.section1.buttons.close')}
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

const BigSliderCardProxy = ({ slide, onExpandClick = null, expandLabel = '', isActive = false, compact = false }) => {
    return (
        <Card
            image={slide.image}
            Number={slide.Number}
            title={slide.title}
            description={slide.description}
            highlightWords={slide.highlightWords}
            onExpandClick={onExpandClick}
            expandLabel={expandLabel}
            isActive={isActive}
            compact={compact}
        />
    );
};

export default Section1C5;
