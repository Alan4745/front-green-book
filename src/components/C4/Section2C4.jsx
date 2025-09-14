import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import F1 from "../../assets/C4/img/F1.svg"; // Asegúrate de que la ruta sea correcta
import F2 from "../../assets/C4/img/F2.svg"; // Asegúrate de que la ruta sea correcta
import ExpandButton from "../Global/ExpandButton";
import CloseButton from "../Global/CloseButton";

const Section2C4 = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState("");
    const [currentAltKey, setCurrentAltKey] = useState("");
    const { t } = useTranslation();

    const keys = {
        aria: {
            section: "c4.section2.aria.section",
            modal: "c4.section2.modalAlt"
        },
        buttons: {
            expand: "c4.section2.buttons.expand",
            close: "c4.section2.buttons.close"
        },
        left: {
            title: "c4.section2.left.title",
            desc: "c4.section2.left.desc",
            imgAlt: "c4.section2.left.imgAlt"
        },
        right: {
            title: {
                line1: "c4.section2.right.title.line1",
                line2: "c4.section2.right.title.line2"
            },
            desc: "c4.section2.right.desc",
            imgAlt: "c4.section2.right.imgAlt"
        }
    };

    // Abrir / cerrar lightbox
    const openLightbox = (img, altKey) => {
        setCurrentImage(img);
        setCurrentAltKey(altKey);
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    return (
        <section
            className="relative w-full min-h-screen bg-[#FF5200]"
            role="region"
            aria-label={t(keys.aria.section)}
        >
            <div className="relative w-full text-white">
                {/* Títulos */}
                <div className="absolute top-[30vh] left-[15vh]">
                    <h3 className="text-3xl font-bold uppercase" style={{ fontFamily: "GothamBold" }}>
                        {t(keys.left.title)}
                    </h3>
                    <div className="text-[30vh] font-bold opacity-30 mt-[-13vh]" style={{ fontFamily: "GothamBold" }}>
                        01
                    </div>
                </div>

                <div className="absolute top-[30vh] right-[15vh] text-right">
                    <h3 className="text-3xl font-bold uppercase" style={{ fontFamily: "GothamBold" }}>
                        {t(keys.right.title.line1)} <br /> {t(keys.right.title.line2)}
                    </h3>
                    <div className="text-[30vh] font-bold opacity-30 mt-[-17vh]" style={{ fontFamily: "GothamBold" }}>
                        02
                    </div>
                </div>

                {/* Texto descriptivo */}
                <div className="absolute top-[60vh] left-[15vh] w-[40vh]">
                    <p className="text-[2vh] text-justify leading-relaxed" style={{ fontFamily: "GothamNormal" }}>
                        {t(keys.left.desc)}
                    </p>
                </div>

                <div className="absolute top-[60vh] right-[15vh] text-right w-[40vh]">
                    <p className="text-[2vh] text-justify leading-relaxed" style={{ fontFamily: "GothamNormal" }}>
                        {t(keys.right.desc)}
                    </p>
                </div>

                {/* Imágenes del centro */}
                <div className="flex flex-col justify-center items-center h-full relative">
                    {/* Imagen superior con botón */}
                    <div className="relative group">
                        <img
                            src={F1}
                            className="w-[60vh] h-[50vh] object-cover cursor-pointer group-hover:scale-110 transition-all duration-300 ease-in-out z-10"
                            alt={t(keys.left.imgAlt)}
                            title={t(keys.left.imgAlt)}
                            onClick={() => openLightbox(F1, keys.left.imgAlt)}
                        />
                        <div>
                            <ExpandButton
                                onClick={() => openLightbox(F1, keys.left.imgAlt)}
                                title={t(keys.buttons.expand)}
                                aria-label={t(keys.buttons.expand)}
                            />
                        </div>
                    </div>

                    {/* Imagen inferior con botón */}
                    <div className="relative group">
                        <img
                            src={F2}
                            className="w-[60vh] h-[50vh] object-cover cursor-pointer group-hover:scale-110 transition-all duration-300 ease-in-out z-0"
                            alt={t(keys.right.imgAlt)}
                            title={t(keys.right.imgAlt)}
                            onClick={() => openLightbox(F2, keys.right.imgAlt)}
                        />
                        <div>
                            <ExpandButton
                                onClick={() => openLightbox(F2, keys.right.imgAlt)}
                                title={t(keys.buttons.expand)}
                                aria-label={t(keys.buttons.expand)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    role="dialog"
                    aria-modal="true"
                    aria-label={t(keys.aria.modal)}
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
                            alt={t(currentAltKey || keys.aria.modal)}
                            className="h-[90vh] w-auto object-contain"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Section2C4;