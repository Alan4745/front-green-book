import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

import BackButton from "../Global/BackButton";
import LanguageSelector from "../Global/LanguageSelector";
import AltitudSteps from "./ui/AltitudSteps";
import CloseButton from "../Global/CloseButton";

import FS4 from "../../assets/C1/FS4.png";
import IconoMontaña from "../../assets/C1/IconoMontaña.svg";
import Vid1 from "../../assets/C1/Vid1.mp4";

const Section4C1 = () => {
    const { t } = useTranslation();
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const keys = {
        alts: {
            icon: "c1.section4.iconAlt",
            play: "c1.section4.playBox.playAlt"
        },
        titles: {
            pinkTop: "c1.section4.pink.title.top",
            pinkBottom: "c1.section4.pink.title.bottom",
            playTop: "c1.section4.playBox.title.top",
            playBottom: "c1.section4.playBox.title.bottom"
        },
        aria: {
            modal: "c1.section4.playBox.modalAria"
        },
        buttons: {
            closeFallback: "Cerrar"
        }
    };

    const openVideo = () => setIsVideoOpen(true);
    const closeVideo = () => setIsVideoOpen(false);

    useEffect(() => {
        if (!isVideoOpen) return;
        const onKeyDown = (e) => {
            if (e.key === "Escape") closeVideo();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isVideoOpen]);

    return (
        <div
            className="relative min-h-screen w-screen overflow-hidden bg-no-repeat bg-center bg-cover z-10 max-lg:min-h-0 max-lg:flex max-lg:flex-col"
            style={{ backgroundImage: `url(${FS4})` }}
        >
            {/* CUADRO ROSADO EN LA ESQUINA INFERIOR IZQUIERDA */}
            <div className="absolute bottom-0 left-0 bg-[#DA2F7D] w-[45vw] h-[60vh] px-10 flex flex-col justify-between py-10 max-lg:relative max-lg:w-full max-lg:h-auto max-lg:px-[5vw] max-lg:py-[4vh]">
                <div className="pt-2">
                    <img
                        src={IconoMontaña}
                        alt={t(keys.alts.icon)}
                        className="w-[8vh] h-[8vh] max-lg:w-[6vh] max-lg:h-[6vh]"
                    />
                </div>
                <div className="pb-2 max-lg:pt-[2vh]">
                    <h3
                        className="text-white text-[5vh] uppercase leading-snug max-lg:text-[3vh]"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t(keys.titles.pinkTop)}<br />{t(keys.titles.pinkBottom)}
                    </h3>
                </div>
            </div>

            {/* CUADRO BLANCO DE "REPRODUCE EL VIDEO" */}
            <div
                className="absolute top-[40vh] left-[39vw] bg-white w-[12vw] h-[12vw] flex shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:mx-[5vw] max-lg:my-[3vh] max-lg:w-[25vw] max-lg:h-[25vw] max-sm:w-[35vw] max-sm:h-[35vw]"
                onClick={openVideo}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openVideo()}
                aria-label={t(keys.alts.play)}
                title={t(keys.alts.play)}
            >
                <div className="relative w-full h-full p-4">
                    <p
                        className="text-black text-[2vh] text-left uppercase max-lg:text-[1.5vh]"
                        style={{ fontFamily: "GothamNormal" }}
                    >
                        {t(keys.titles.playTop)}<br />{t(keys.titles.playBottom)}
                    </p>
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/0/375.png"
                        alt={t(keys.alts.play)}
                        className="absolute bottom-4 right-4 w-[3.5vh] h-[3.5vh] max-lg:w-[2.5vh] max-lg:h-[2.5vh]"
                    />
                </div>
            </div>

            {/* BOTÓN DE REGRESO */}
            <div className="absolute top-10 left-10 z-20 max-lg:top-4 max-lg:left-4">
                <BackButton onClick={() => window.history.back()} />
            </div>

            {/* SECCIÓN DE ALTITUD */}
            <AltitudSteps />

            {/* Botón cambio de idioma */}
            <div className="absolute bottom-10 right-10 z-20">
                <LanguageSelector />
            </div>

            {/* LIGHTBOX / MODAL DE VIDEO */}
            {isVideoOpen && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                    role="dialog"
                    aria-modal="true"
                    aria-label={t(keys.aria.modal, "Reproduciendo video")}
                    onClick={closeVideo}
                >
                    <div
                        className="relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Botón de cerrar ENCIMA del video */}
                        <div className="absolute top-[-3.5vh] right-[5vh] z-20 pointer-events-auto">
                            <CloseButton
                                onClick={closeVideo}
                                aria-label={t(keys.buttons.closeFallback)}
                                title={t(keys.buttons.closeFallback)}
                            />
                        </div>

                        {/* Video grande (debajo del botón) */}
                        <video
                            className="relative z-10 w-[160vh] max-w-[90vw] max-h-[80vh] rounded-md shadow-2xl object-contain"
                            src={Vid1}
                            controls
                            controlsList="nodownload noplaybackrate"
                            disablePictureInPicture
                            autoPlay
                            playsInline
                            preload="metadata"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Section4C1;