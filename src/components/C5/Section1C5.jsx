import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BigSlider from './ui/BigSlider';
import HoverButton from '../Global/HoverButton';
import CloseButton from '../Global/CloseButton';

import F1 from '../../assets/C5/F1.png';
import F2 from '../../assets/C5/F2.png';
import F3 from '../../assets/C5/F3.png';

import Number1 from '../../assets/C5/Numbers/Number1.png';
import Number2 from '../../assets/C5/Numbers/Number2.svg';
import Number3 from '../../assets/C5/Numbers/Number3.svg';

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
            <div className="absolute right-4 top-6 z-50 lg:hidden">
                <HoverButton
                    text={t('c5.section1.cta').toLocaleUpperCase(i18n.language)}
                    textOffset={-80}
                    hoverOffset={30}
                    link="https://reservasdeguatemala.org/"
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

            <div className="hidden min-h-screen items-center lg:flex">
                <div className="mx-auto grid w-full max-w-[1260px] grid-cols-[1.05fr_0.95fr] gap-[3.6rem] px-[3.5rem] py-[5rem]">
                    <div className="flex flex-col justify-end pt-[5.8rem]">
                        <BigSlider slides={slidesData} onExpandClick={openLightbox} />
                    </div>

                    <div className="flex flex-col">
                        <div className="mb-[3rem] flex justify-end">
                            <HoverButton
                                text={t('c5.section1.cta').toLocaleUpperCase(i18n.language)}
                                textOffset={-80}
                                hoverOffset={30}
                                link="https://reservasdeguatemala.org/"
                            />
                        </div>

                        <div className="ml-auto w-full max-w-[30rem]">
                            <h2
                                className="mb-8 text-[clamp(3rem,4.8vw,5rem)] uppercase leading-none"
                                style={{ fontFamily: 'GothamBold' }}
                            >
                                {t('c5.section1.title')}
                            </h2>
                            <p
                                className="mb-6 text-[clamp(1.1rem,1.55vw,1.6rem)] text-justify leading-tight"
                                style={{ fontFamily: 'GothamNormal' }}
                            >
                                {t('c5.section1.intro')}
                            </p>
                            <p
                                className="text-[clamp(1.1rem,1.55vw,1.6rem)] text-justify leading-tight"
                                style={{ fontFamily: 'GothamNormal' }}
                            >
                                {t('c5.section1.outro')}
                            </p>
                        </div>
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

export default Section1C5;
