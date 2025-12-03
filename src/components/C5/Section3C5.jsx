import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import F1 from '../../assets/C5/S3/F1.jpg';
import F2 from '../../assets/C5/S3/F2.jpg';

import ExpandButton from "../Global/ExpandButton";
import CloseButton from "../Global/CloseButton";

const Section3C5 = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState("");
    const [hoveredSection, setHoveredSection] = useState(null);
    const { t } = useTranslation();

    const keys = {
        aria: {
            section: 'c5.section3.aria.section',
            modal: 'c5.section3.modalAlt'
        },
        buttons: {
            expand: 'c5.section3.buttons.expand',
            close: 'c5.section3.buttons.close'
        },
        cols: {
            insectos: {
                title: 'c5.section3.cols.insectos.title',
                hover: {
                    pre: 'c5.section3.cols.insectos.hover.pre',
                    highlight: 'c5.section3.cols.insectos.hover.highlight',
                    post: 'c5.section3.cols.insectos.hover.post'
                }
            },
            aves: {
                title: 'c5.section3.cols.aves.title',
                hover: {
                    number: 'c5.section3.cols.aves.hover.number',
                    text: 'c5.section3.cols.aves.hover.text'
                },
                credits: 'c5.section3.cols.aves.credits'
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
            className="relative min-h-screen w-full grid grid-cols-2 gap-0"
            role="region"
            aria-label={t(keys.aria.section)}
        >

            {/* Sección 1 - INSECTOS */}
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
                    {t(keys.cols.insectos.title)}
                    <div className="mt-2 w-[20vh] border-t-12 border-[#562E91]"></div>
                </h2>

                {/* Texto hover */}
                {hoveredSection === 'mariposas' && (
                    <div className="absolute bottom-40 left-8 text-white transition-all duration-300">
                        <p className="text-2xl text-justify w-[90vh] max-w-md" style={{ fontFamily: 'GothamNormal' }}>
                            {t(keys.cols.insectos.hover.pre)}
                            <span className="text-[#AC7EF0]">{t(keys.cols.insectos.hover.highlight)}</span>
                            {t(keys.cols.insectos.hover.post)}
                        </p>
                    </div>
                )}

                {/* Botón de expandir - Abajo a la derecha */}
                <ExpandButton
                    onClick={() => openLightbox(F1)}
                    title={t(keys.buttons.expand)}
                    aria-label={t(keys.buttons.expand)}
                    className="absolute bottom-8 right-8"
                />
            </div>

            {/* Sección 2 - AVES MIGRATORIAS */}
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
                    {t(keys.cols.aves.title)}
                    <div className="absolute mt-2 w-[20vh] right-0 border-t-12 border-[#562E91]"></div>
                </h2>

                {/* Créditos */}
                <p
                    className="absolute bottom-4 left-4 text-white text-sm opacity-80"
                    style={{ fontFamily: "GothamNormal" }}
                >
                    {t(keys.cols.aves.credits)}
                </p>

                {/* Texto hover */}
                {hoveredSection === 'murcielagos' && (
                    <div className="absolute top-20 right-10 text-white transition-all duration-300">
                        <p className="text-2xl text-justify w-[50vh] max-w-md" style={{ fontFamily: 'GothamNormal' }}>
                            <span className="text-[#AC7EF0]">{t(keys.cols.aves.hover.number)} </span>
                            {t(keys.cols.aves.hover.text)}
                        </p>
                    </div>
                )}

                {/* Botón de expandir - Arriba a la izquierda */}
                <ExpandButton
                    onClick={() => openLightbox(F2)}
                    title={t(keys.buttons.expand)}
                    aria-label={t(keys.buttons.expand)}
                    className="absolute top-8 left-8"
                />
            </div>

            {/* Lightbox */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                    role="dialog"
                    aria-modal="true"
                    aria-label={t(keys.aria.modal)}
                    onClick={closeLightbox}
                >
                {/* Botón de cerrar */}
                    <CloseButton
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white"
                        aria-label={t(keys.buttons.close)}
                        title={t(keys.buttons.close)}
                    />
                    <div className="relative">
                        
                        {/* Imagen ampliada */}
                        <img
                            src={currentImage}
                            alt={t(keys.aria.modal)}
                            className="h-[90vh] w-auto object-contain"
                            onClick={(e) => e.stopPropagation()}

                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Section3C5;