import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import F1 from "../../assets/C4/F1.png";
import F2 from "../../assets/C4/F2.png";
import F3 from "../../assets/C4/F3.png";
import F4 from "../../assets/C4/F4.jpeg";
import F5 from "../../assets/C4/F5.png";
import F6 from "../../assets/C4/F6.jpg";
import F7 from "../../assets/C4/F7.png";

import ExpandButton from "../Global/ExpandButton";
import CloseButton from "../Global/CloseButton";

const Section1C4 = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState("");
    const [currentAltKey, setCurrentAltKey] = useState("");
    const { t } = useTranslation();

    // Keys para i18n
    const keys = {
        aria: { section: "c4.section1.aria.section" },
        intro: { text: "c4.section1.intro.text" },
        buttons: {
            expand: "c4.section1.buttons.expand",
            close: "c4.section1.buttons.close"
        },
        items: {
            f1: { alt: "c4.section1.items.f1.alt", title: "c4.section1.items.f1.title" },
            f2: { alt: "c4.section1.items.f2.alt", title: "c4.section1.items.f2.title" },
            f3: { alt: "c4.section1.items.f3.alt", title: "c4.section1.items.f3.title" },
            f4: { alt: "c4.section1.items.f4.alt", title: "c4.section1.items.f4.title", credits: "c4.section1.items.f4.credits" },
            f5: { alt: "c4.section1.items.f5.alt", title: "c4.section1.items.f5.title", credits: "c4.section1.items.f5.credits" },
            f6: { alt: "c4.section1.items.f6.alt", title: "c4.section1.items.f6.title", credits: "c4.section1.items.f6.credits" },
            f7: { alt: "c4.section1.items.f7.alt", title: "c4.section1.items.f7.title", credits: "c4.section1.items.f7.credits" }
        }
    };

    // Abrir / cerrar lightbox
    const openLightbox = (img, altKey) => {
        setCurrentImage(img);
        setCurrentAltKey(altKey);
        setIsLightboxOpen(true);
    };
    const closeLightbox = () => setIsLightboxOpen(false);

    return (
        <section
            className="relative w-full h-screen bg-[#000000]"
            role="region"
            aria-label={t(keys.aria.section)}
        >
            {/* Contenedor Grid */}
            <div className="grid grid-cols-4 grid-rows-2 h-full">
                {/* Primer cuadro con fondo anaranjado */}
                <div className="relative bg-[#FF5200] h-[50vh] w-full flex items-center justify-center">
                    <div className="text-left text-white">
                        <p className="w-[45vh] text-2xl" style={{ fontFamily: "GothamNormal" }}>
                            {t(keys.intro.text)}
                        </p>
                    </div>
                </div>

                {/* Imagen 1 */}
                <div className="relative h-[50vh] w-full">
                    <img
                        src={F1}
                        alt={t(keys.items.f1.alt)}
                        title={t(keys.items.f1.alt)}
                        className="w-full h-full object-cover opacity-65"
                    />
                    <div className="absolute top-8 right-4 text-white">
                        <p
                            className="text-2xl uppercase w-[20vh] text-right"
                            style={{ fontFamily: "GothamBold" }}
                        >
                            {t(keys.items.f1.title)}
                        </p>
                        <div className="w-30 h-3 bg-[#FF5200] mt-2 ml-auto"></div>
                    </div>
                    {/* Botón expandir */}
                    <ExpandButton
                        onClick={() => openLightbox(F1, keys.items.f1.alt)}
                        title={t(keys.buttons.expand)}
                        aria-label={t(keys.buttons.expand)}
                    />
                </div>

                {/* Imagen 2 */}
                <div className="relative h-[50vh] w-full">
                    <img
                        src={F2}
                        alt={t(keys.items.f2.alt)}
                        title={t(keys.items.f2.alt)}
                        className="w-full h-full object-cover opacity-65"
                    />
                    <div className="absolute top-8 right-4 text-white">
                        <p
                            className="text-2xl uppercase w-[30vh] text-right"
                            style={{ fontFamily: "GothamBold" }}
                        >
                            {t(keys.items.f2.title)}
                        </p>
                        <div className="w-30 h-3 bg-[#FF5200] mt-2 ml-auto"></div>
                    </div>
                    {/* Botón expandir */}
                    <ExpandButton
                        onClick={() => openLightbox(F2, keys.items.f2.alt)}
                        title={t(keys.buttons.expand)}
                        aria-label={t(keys.buttons.expand)}
                    />
                </div>

                {/* Imagen 3 */}
                <div className="relative h-[50vh] w-full">
                    <img
                        src={F3}
                        alt={t(keys.items.f3.alt)}
                        title={t(keys.items.f3.alt)}
                        className="w-full h-full object-cover opacity-65"
                    />
                    <div className="absolute top-8 right-4 text-white">
                        <p
                            className="text-2xl uppercase w-[25vh] text-right"
                            style={{ fontFamily: "GothamBold" }}
                        >
                            {t(keys.items.f3.title)}
                        </p>
                        <div className="w-30 h-3 bg-[#FF5200] mt-2 ml-auto"></div>
                    </div>
                    {/* Botón expandir */}
                    <ExpandButton
                        onClick={() => openLightbox(F3, keys.items.f3.alt)}
                        title={t(keys.buttons.expand)}
                        aria-label={t(keys.buttons.expand)}
                    />
                </div>

                {/* Imagen 4 */}
                <div className="relative h-[50vh] w-full">
                    <img
                        src={F4}
                        alt={t(keys.items.f4.alt)}
                        title={t(keys.items.f4.alt)}
                        className="w-full h-full object-cover opacity-55"
                    />
                    <div className="absolute top-8 right-4 text-white">
                        <p
                            className="text-2xl uppercase w-[20vh] text-right"
                            style={{ fontFamily: "GothamBold" }}
                        >
                            {t(keys.items.f4.title)}
                        </p>
                        <div className="w-30 h-3 bg-[#FF5200] mt-2 ml-auto"></div>
                    </div>
                    {/* Créditos (inferior izquierda) */}
                    <figcaption
                        className="absolute left-4 bottom-4 text-white text-sm"
                        style={{ fontFamily: "GothamNormal" }}
                    >
                        {t(keys.items.f4.credits)}
                    </figcaption>
                    {/* Botón expandir */}
                    <ExpandButton
                        onClick={() => openLightbox(F4, keys.items.f4.alt)}
                        title={t(keys.buttons.expand)}
                        aria-label={t(keys.buttons.expand)}
                    />
                </div>

                {/* Imagen 5 */}
                <div className="relative h-[50vh] w-full">
                    <img
                        src={F5}
                        alt={t(keys.items.f5.alt)}
                        title={t(keys.items.f5.alt)}
                        className="w-full h-full object-cover opacity-55"
                    />
                    <div className="absolute top-8 right-4 text-white">
                        <p
                            className="text-2xl uppercase w-[40vh] text-right"
                            style={{ fontFamily: "GothamBold" }}
                        >
                            {t(keys.items.f5.title)}
                        </p>
                        <div className="w-30 h-3 bg-[#FF5200] mt-2 ml-auto"></div>
                    </div>
                    {/* Créditos (inferior izquierda) */}
                    <figcaption
                        className="absolute left-4 bottom-4 text-white text-sm"
                        style={{ fontFamily: "GothamNormal" }}
                    >
                    </figcaption>
                    {/* Botón expandir */}
                    <ExpandButton
                        onClick={() => openLightbox(F5, keys.items.f5.alt)}
                        title={t(keys.buttons.expand)}
                        aria-label={t(keys.buttons.expand)}
                    />
                </div>

                {/* Imagen 6 */}
                <div className="relative h-[50vh] w-full">
                    <img
                        src={F6}
                        alt={t(keys.items.f6.alt)}
                        title={t(keys.items.f6.alt)}
                        className="w-full h-full object-cover opacity-65"
                    />
                    <div className="absolute top-8 right-4 text-white">
                        <p
                            className="text-2xl uppercase w-[30vh] text-right"
                            style={{ fontFamily: "GothamBold" }}
                        >
                            {t(keys.items.f6.title)}
                        </p>
                        <div className="w-30 h-3 bg-[#FF5200] mt-2 ml-auto"></div>
                    </div>
                    {/* Créditos (inferior izquierda) */}
                    <figcaption
                        className="absolute left-4 bottom-4 text-white text-sm"
                        style={{ fontFamily: "GothamNormal" }}
                    >
                        {t(keys.items.f6.credits)}
                    </figcaption>
                    {/* Botón expandir */}
                    <ExpandButton
                        onClick={() => openLightbox(F6, keys.items.f6.alt)}
                        title={t(keys.buttons.expand)}
                        aria-label={t(keys.buttons.expand)}
                    />
                </div>

                {/* Imagen 7 */}
                <div className="relative h-[50vh] w-full">
                    <img
                        src={F7}
                        alt={t(keys.items.f7.alt)}
                        title={t(keys.items.f7.alt)}
                        className="w-full h-full object-cover opacity-65"
                    />
                    <div className="absolute top-8 right-4 text-white">
                        <p
                            className="text-2xl uppercase w-[40vh] text-right"
                            style={{ fontFamily: "GothamBold" }}
                        >
                            {t(keys.items.f7.title)}
                        </p>
                        <div className="w-30 h-3 bg-[#FF5200] mt-2 ml-auto"></div>
                    </div>
                    {/* Créditos (inferior izquierda) */}
                    <figcaption
                        className="absolute left-4 bottom-4 text-white text-sm"
                        style={{ fontFamily: "GothamNormal" }}
                    >
                    </figcaption>
                    {/* Botón expandir */}
                    <ExpandButton
                        onClick={() => openLightbox(F7, keys.items.f7.alt)}
                        title={t(keys.buttons.expand)}
                        aria-label={t(keys.buttons.expand)}
                    />
                </div>
            </div>

            {/* Lightbox */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                    role="dialog"
                    aria-modal="true"
                    aria-label={t(currentAltKey || keys.buttons.close)}
                >
                    <div className="relative">
                        {/* Botón de cerrar */}
                        <CloseButton
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 text-white"
                            aria-label={t(keys.buttons.close)}
                            title={t(keys.buttons.close)}
                        />
                        {/* Imagen ampliada */}
                        <img
                            src={currentImage}
                            alt={t(currentAltKey || keys.buttons.expand)}
                            className="h-[90vh] w-auto object-contain"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Section1C4;