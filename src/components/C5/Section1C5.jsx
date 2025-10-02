import React, { useState } from 'react';
import BigSlider from './ui/BigSlider';
import HoverButton from '../Global/HoverButton';
import { useTranslation } from 'react-i18next';

// Asegúrate de que las rutas sean correctas
import F1 from '../../assets/C5/F1.jpg';
import F2 from '../../assets/C5/F2.svg';
import F3 from '../../assets/C5/F3.jpg';

import Number1 from '../../assets/C5/Numbers/Number1.png';
import Number2 from '../../assets/C5/Numbers/Number2.svg';
import Number3 from '../../assets/C5/Numbers/Number3.svg';

const Section1C5 = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const { t, i18n } = useTranslation();

    // Función para abrir el lightbox
    const openLightbox = (img) => {
        setCurrentImage(img);
        setIsLightboxOpen(true);
    };

    // Función para cerrar el lightbox
    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    // Componente CloseButton (local)
    const CloseButton = ({ onClick, className = '' }) => {
        return (
            <button
                type="button"
                onClick={onClick}
                className={`h-10 w-10 rounded-full hover:bg-white/25 border-2 border-white text-white grid place-items-center backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/70 ${className}`}
                aria-label={t('c5.section1.buttons.close')}
                title={t('c5.section1.buttons.close')}
            >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                </svg>
            </button>
        );
    };

    // Slides i18n
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
            highlightWords: t('c5.section1.slides.f2.highlight', { returnObjects: true }),
            credits: t('c5.section1.slides.f3.credits', { defaultValue: 'Créditos: Rocío Silva' })
        },
        {
            image: F3,
            title: t('c5.section1.slides.f3.title'),
            description: t('c5.section1.slides.f3.desc'),
            Number: Number3,
            MaxW: '90%',
            highlightWords: t('c5.section1.slides.f3.highlight', { returnObjects: true })
        }
    ];

    return (
        <div
            className="relative min-h-screen w-full flex bg-[#562E91] bg-no-repeat bg-center bg-cover items-center justify-center"
            role="region"
            aria-label={t('c5.section1.aria.section')}
        >
            {/* Botón de hover con link */}
            <div className="absolute top-6 right-[-6vh] z-50">
                <HoverButton
                    text={t('c5.section1.cta').toLocaleUpperCase(i18n.language)}
                    textOffset={-80}
                    hoverOffset={30}
                    link="https://reservasdeguatemala.org/"
                />
            </div>

            {/* Título */}
            <h2
                className="absolute top-[18vh] left-[43.2vw] text-white text-[5vh] uppercase"
                style={{ fontFamily: 'GothamBold' }}
            >
                {t('c5.section1.title')}
            </h2>

            {/* Intro */}
            <p
                className="absolute w-[30%] text-justify text-white text-[2.2vh] top-[28vh] left-[43.2vw]"
                style={{ fontFamily: 'GothamNormal' }}
            >
                {t('c5.section1.intro')}
            </p>

            {/* Outro */}
            <p
                className="relative w-[35%] text-justify text-white text-[2.2vh] left-[11vw] mb-10"
                style={{ fontFamily: 'GothamNormal' }}
            >
                {t('c5.section1.outro')}
            </p>

            {/* Slider */}
            <div className="absolute bottom-[4vh] w-full flex justify-center">
                <BigSlider slides={slidesData} onExpandClick={openLightbox} />
            </div>

            {/* Lightbox */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                    role="dialog"
                    aria-modal="true"
                    aria-label={t('c5.section1.modalAlt')}
                >
                    <div className="relative">
                        <CloseButton onClick={closeLightbox} className="absolute top-4 right-4 text-white" />
                        <img
                            src={currentImage}
                            alt={t('c5.section1.modalAlt')}
                            className="h-[90vh] w-auto object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Section1C5;