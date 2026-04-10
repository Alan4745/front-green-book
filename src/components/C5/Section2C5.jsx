import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import F1 from '../../assets/C5/S2/F1.png';
import F2 from '../../assets/C5/S2/F2.png';
import F3 from '../../assets/C5/S2/F3.png';

import ExpandButton from "../Global/ExpandButton";
import CloseButton from "../Global/CloseButton";

const Section2C5 = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState("");
    const [hoveredSection, setHoveredSection] = useState(null);
    const { t } = useTranslation();

    const keys = {
        aria: {
            section: 'c5.section2.aria.section',
            modal: 'c5.section2.modalAlt'
        },
        buttons: {
            expand: 'c5.section2.buttons.expand',
            close: 'c5.section2.buttons.close'
        },
        cols: {
            mariposas: {
                title: 'c5.section2.cols.mariposas.title',
                number: 'c5.section2.cols.mariposas.hover.number',
                text: 'c5.section2.cols.mariposas.hover.text'
            },
            murcielagos: {
                title: 'c5.section2.cols.murcielagos.title',
                number: 'c5.section2.cols.murcielagos.hover.number',
                text: 'c5.section2.cols.murcielagos.hover.text'
            },
            anfibios: {
                title: 'c5.section2.cols.anfibios.title',
                number: 'c5.section2.cols.anfibios.hover.number',
                text: 'c5.section2.cols.anfibios.hover.text',
                credits: 'c5.section2.cols.anfibios.credits' // 👈 nueva clave
            }
        }
    };

    // Abrir lightbox
    const openLightbox = (img) => {
        setCurrentImage(img);
        setIsLightboxOpen(true);
    };

    // Cerrar lightbox
    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    return (
        <div
            className="relative w-full"
            role="region"
            aria-label={t(keys.aria.section)}
        >
            {/* ===== MOBILE LAYOUT ===== */}
            <div className="lg:hidden flex flex-col">

                {/* Sección 1 - MARIPOSAS */}
                <div className="relative w-full h-[70vw] sm:h-[55vw] md:h-[45vw] bg-black">
                    <div
                        className="absolute w-full h-full bg-cover bg-center opacity-40"
                        style={{ backgroundImage: `url(${F1})` }}
                        aria-hidden="true"
                    />
                    <h2
                        className="absolute top-4 left-4 text-white text-[6vw] md:text-[4vw] uppercase"
                        style={{ fontFamily: 'GothamBold' }}
                    >
                        {t(keys.cols.mariposas.title)}
                        <div className="mt-1 w-[20vw] border-t-4 border-[#562E91]" />
                    </h2>
                    <div className="absolute bottom-12 left-4 text-white">
                        <p className="text-[3.5vw] md:text-[2.5vw] text-left w-[70vw]" style={{ fontFamily: 'GothamNormal' }}>
                            <span className="text-[#AC7EF0]">{t(keys.cols.mariposas.number)} </span>
                            {t(keys.cols.mariposas.text)}
                        </p>
                    </div>
                    <ExpandButton
                        onClick={() => openLightbox(F1)}
                        title={t(keys.buttons.expand)}
                        aria-label={t(keys.buttons.expand)}
                    />
                </div>

                {/* Sección 2 - MURCIÉLAGOS */}
                <div className="relative w-full h-[70vw] sm:h-[55vw] md:h-[45vw] bg-black">
                    <div
                        className="absolute w-full h-full bg-cover bg-center opacity-40"
                        style={{ backgroundImage: `url(${F2})` }}
                        aria-hidden="true"
                    />
                    <h2
                        className="absolute bottom-12 right-4 text-white text-[6vw] md:text-[4vw] uppercase text-right"
                        style={{ fontFamily: 'GothamBold' }}
                    >
                        {t(keys.cols.murcielagos.title)}
                        <div className="mt-1 w-[20vw] border-t-4 border-[#562E91] ml-auto" />
                    </h2>
                    <div className="absolute top-8 left-4 text-white">
                        <p className="text-[3.5vw] md:text-[2.5vw] text-left w-[70vw]" style={{ fontFamily: 'GothamNormal' }}>
                            <span className="text-[#AC7EF0]">{t(keys.cols.murcielagos.number)} </span>
                            {t(keys.cols.murcielagos.text)}
                        </p>
                    </div>
                    <ExpandButton
                        onClick={() => openLightbox(F2)}
                        title={t(keys.buttons.expand)}
                        aria-label={t(keys.buttons.expand)}
                    />
                </div>

                {/* Sección 3 - ANFIBIOS Y REPTILES */}
                <div className="relative w-full h-[70vw] sm:h-[55vw] md:h-[45vw] bg-black">
                    <div
                        className="absolute w-full h-full bg-cover bg-center opacity-30"
                        style={{ backgroundImage: `url(${F3})` }}
                        aria-hidden="true"
                    />
                    <h2
                        className="absolute top-4 left-4 text-white text-[6vw] md:text-[4vw] uppercase w-[70%]"
                        style={{ fontFamily: 'GothamBold' }}
                    >
                        {t(keys.cols.anfibios.title)}
                        <div className="mt-1 w-[20vw] border-t-4 border-[#562E91]" />
                    </h2>
                    <div className="absolute bottom-12 left-4 text-white">
                        <p className="text-[3.5vw] md:text-[2.5vw] text-left w-[70vw]" style={{ fontFamily: 'GothamNormal' }}>
                            <span className="text-[#AC7EF0]">{t(keys.cols.anfibios.number)} </span>
                            {t(keys.cols.anfibios.text)}
                        </p>
                    </div>
                    <figcaption
                        className="absolute bottom-4 left-4 text-white text-[3vw] md:text-[2vw]"
                        style={{ fontFamily: 'GothamNormal' }}
                    >
                        {t(keys.cols.anfibios.credits, { defaultValue: "Créditos: Rocío Silva" })}
                    </figcaption>
                    <ExpandButton
                        onClick={() => openLightbox(F3)}
                        title={t(keys.buttons.expand)}
                        aria-label={t(keys.buttons.expand)}
                    />
                </div>
            </div>

            {/* ===== DESKTOP LAYOUT (blindado) ===== */}
            <div className="hidden lg:grid lg:grid-cols-3 lg:gap-0 min-h-screen">

                {/* Sección 1 - MARIPOSAS */}
                <div
                    className="relative w-full h-full bg-black flex items-center justify-center"
                    onMouseEnter={() => setHoveredSection('mariposas')}
                    onMouseLeave={() => setHoveredSection(null)}
                >
                    <div
                        className="absolute w-full h-full bg-cover bg-center opacity-40"
                        style={{ backgroundImage: `url(${F1})` }}
                        aria-hidden="true"
                    ></div>

                    <h2
                        className="absolute top-8 left-8 text-white text-5xl uppercase"
                        style={{ fontFamily: 'GothamBold' }}
                    >
                        {t(keys.cols.mariposas.title)}
                        <div className="mt-2 w-[20vh] border-t-12 border-[#562E91]"></div>
                    </h2>

                    {hoveredSection === 'mariposas' && (
                        <div className="absolute bottom-20 left-8 text-white transition-all duration-300">
                            <p className="text-2xl text-left w-[35vh] max-w-md" style={{ fontFamily: 'GothamNormal' }}>
                                <span className="text-[#AC7EF0]">{t(keys.cols.mariposas.number)} </span>
                                {t(keys.cols.mariposas.text)}
                            </p>
                        </div>
                    )}

                    <ExpandButton
                        onClick={() => openLightbox(F1)}
                        title={t(keys.buttons.expand)}
                        aria-label={t(keys.buttons.expand)}
                        className="absolute bottom-8 right-8"
                    />
                </div>

                {/* Sección 2 - MURCIÉLAGOS */}
                <div
                    className="relative w-full h-full bg-black flex items-center justify-center"
                    onMouseEnter={() => setHoveredSection('murcielagos')}
                    onMouseLeave={() => setHoveredSection(null)}
                >
                    <div
                        className="absolute w-full h-full bg-cover bg-center opacity-40"
                        style={{ backgroundImage: `url(${F2})` }}
                        aria-hidden="true"
                    ></div>

                    <h2
                        className="absolute bottom-12 right-8 text-white text-5xl uppercase"
                        style={{ fontFamily: 'GothamBold' }}
                    >
                        {t(keys.cols.murcielagos.title)}
                        <div className="absolute mt-2 w-[20vh] right-0 border-t-12 border-[#562E91]"></div>
                    </h2>

                    {hoveredSection === 'murcielagos' && (
                        <div className="absolute top-20 left-8 text-white transition-all duration-300">
                            <p className="text-2xl text-left w-[35vh] max-w-md" style={{ fontFamily: 'GothamNormal' }}>
                                <span className="text-[#AC7EF0]">{t(keys.cols.murcielagos.number)} </span>
                                {t(keys.cols.murcielagos.text)}
                            </p>
                        </div>
                    )}

                    <ExpandButton
                        onClick={() => openLightbox(F2)}
                        title={t(keys.buttons.expand)}
                        aria-label={t(keys.buttons.expand)}
                        className="absolute top-8 left-8"
                    />
                </div>

                {/* Sección 3 - ANFIBIOS Y REPTILES */}
                <div
                    className="relative w-full h-full bg-black flex items-center justify-center"
                    onMouseEnter={() => setHoveredSection('anfibios')}
                    onMouseLeave={() => setHoveredSection(null)}
                >
                    <div
                        className="absolute w-full h-full bg-cover bg-center opacity-30"
                        style={{ backgroundImage: `url(${F3})` }}
                        aria-hidden="true"
                    ></div>

                    <h2
                        className="absolute w-[45vh] top-8 left-8 text-white text-5xl uppercase"
                        style={{ fontFamily: 'GothamBold' }}
                    >
                        {t(keys.cols.anfibios.title)}
                        <div className="mt-2 w-[20vh] border-t-12 border-[#562E91]"></div>
                    </h2>

                    {hoveredSection === 'anfibios' && (
                        <div className="absolute bottom-20 left-8 text-white transition-all duration-300">
                            <p className="text-2xl text-left w-[40vh] max-w-md" style={{ fontFamily: 'GothamNormal' }}>
                                <span className="text-[#AC7EF0]">{t(keys.cols.anfibios.number)} </span>
                                {t(keys.cols.anfibios.text)}
                            </p>
                        </div>
                    )}

                    <figcaption
                        className="absolute bottom-4 left-4 text-white text-sm px-2 py-1 rounded"
                        style={{ fontFamily: 'GothamNormal' }}
                    >
                        {t(keys.cols.anfibios.credits, { defaultValue: "Créditos: Rocío Silva" })}
                    </figcaption>

                    <ExpandButton
                        onClick={() => openLightbox(F3)}
                        title={t(keys.buttons.expand)}
                        aria-label={t(keys.buttons.expand)}
                        className="absolute bottom-8 right-8"
                    />
                </div>
            </div>

            {/* Lightbox */}
            {isLightboxOpen && (
                <div
                    onClick={closeLightbox}
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                    role="dialog"
                    aria-modal="true"
                    aria-label={t(keys.aria.modal)}
                >
                    <div className="relative" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={currentImage}
                            alt={t(keys.aria.modal)}
                            className="max-h-[95vh] max-w-[95vw] object-contain block"
                        />
                        <CloseButton
                            onClick={closeLightbox}
                            aria-label={t(keys.buttons.close)}
                            title={t(keys.buttons.close)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Section2C5;