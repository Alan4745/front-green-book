import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";

import BackButton from "../Global/BackButton";
import LanguageSelector from "../Global/LanguageSelector";
import AltitudSteps from "./ui/AltitudSteps";
import CloseButton from "../Global/CloseButton";

import FS4 from "../../assets/C1/FS4.png";
import IconoMontaña from "../../assets/C1/IconoMontaña.svg";
import Vid1 from "../../assets/C1/Vid1.mp4";

const PlayIcon = ({ className = "w-full h-full text-gray-700" }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <polygon points="10,8 17,12 10,16" />
    </svg>
);

const Section4C1 = () => {
    const { t } = useTranslation();
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const videoPoster = FS4;
    const videoRef = useRef(null);

    const keys = {
        alts: { icon: "c1.section4.iconAlt", play: "c1.section4.playBox.playAlt" },
        titles: {
            pinkTop: "c1.section4.pink.title.top",
            pinkBottom: "c1.section4.pink.title.bottom",
            playTop: "c1.section4.playBox.title.top",
            playBottom: "c1.section4.playBox.title.bottom"
        },
        aria: { modal: "c1.section4.playBox.modalAria" },
        buttons: { closeFallback: "Cerrar" }
    };

    // Esc para cerrar modal
    useEffect(() => {
        if (!isVideoOpen) return;
        const onKeyDown = (e) => { if (e.key === "Escape") closeVideo(); };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isVideoOpen]);

    const openVideo = () => setIsVideoOpen(true);
    const closeVideo = () => setIsVideoOpen(false);

    return (
        <div
            className="relative min-h-screen w-screen overflow-hidden bg-no-repeat bg-center bg-cover z-10"
            style={{ backgroundImage: `url(${FS4})` }}
        >
            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-black/20" />

            {/* BOTÓN DE REGRESO */}
            <div className="absolute top-10 left-10 z-20 max-lg:top-4 max-lg:left-4">
                <BackButton onClick={() => window.history.back()} />
            </div>

            {/* ── DESKTOP ── */}

            {/* CUADRO ROSADO - Desktop */}
            <div className="hidden lg:flex absolute bottom-0 left-0 bg-[#DA2F7D] flex-col justify-between
                            w-[45vw] h-[60vh] px-10 py-10">
                <div>
                    <img src={IconoMontaña} alt={t(keys.alts.icon)} className="w-[8vh] h-[8vh]" />
                </div>
                <div>
                    <h3
                        className="text-white text-[5vh] uppercase leading-snug"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t(keys.titles.pinkTop)}<br />{t(keys.titles.pinkBottom)}
                    </h3>
                </div>
            </div>

            {/* CUADRO "PLAY VIDEO" - Desktop (preview rectangular) */}
            <div
                className="hidden lg:flex absolute cursor-pointer hover:scale-[1.03] transition-transform duration-300
                            top-[30vh] left-[36vw] w-[30vw] aspect-video rounded-lg overflow-hidden shadow-2xl"
                onClick={openVideo}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openVideo()}
                aria-label={t(keys.alts.play)}
                title={t(keys.alts.play)}
            >
                <img src={videoPoster} alt={t(keys.alts.play)} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[5vw] h-[5vw]">
                        <PlayIcon className="w-full h-full text-white drop-shadow-lg" />
                    </div>
                </div>
                <div className="absolute bottom-3 left-4">
                    <p className="text-white uppercase leading-tight text-[1.8vh] drop-shadow" style={{ fontFamily: "GothamBold" }}>
                        {t(keys.titles.playTop)} {t(keys.titles.playBottom)}
                    </p>
                </div>
            </div>

            {/* SECCIÓN DE ALTITUD - Desktop */}
            <div className="hidden lg:block">
                <AltitudSteps />
            </div>

            {/* ── MOBILE ── */}
            <div className="lg:hidden absolute inset-0 flex flex-col">
                {/* Zona superior: imagen de fondo visible + altitud + play */}
                <div className="relative flex-1 flex flex-col justify-between py-16 px-5">
                    {/* Altitud steps en móvil */}
                    <div className="self-end mt-2">
                        <div className="flex flex-col gap-3">
                            <AltitudSteps mobile />
                        </div>
                    </div>

                    {/* Preview de video — tarjeta grande rectangular */}
                    <div
                        className="self-center w-[75vw] aspect-video rounded-lg overflow-hidden shadow-2xl cursor-pointer
                                    hover:scale-[1.02] transition-transform duration-300 relative"
                        onClick={openVideo}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openVideo()}
                        aria-label={t(keys.alts.play)}
                        title={t(keys.alts.play)}
                    >
                        {/* Thumbnail del video */}
                        <img
                            src={videoPoster}
                            alt={t(keys.alts.play)}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Overlay oscuro */}
                        <div className="absolute inset-0 bg-black/30" />
                        {/* Icono play centrado */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[14vw] h-[14vw] max-sm:w-[16vw] max-sm:h-[16vw]">
                                <PlayIcon className="w-full h-full text-white drop-shadow-lg" />
                            </div>
                        </div>
                        {/* Texto play */}
                        <div className="absolute bottom-2 left-3">
                            <p className="text-white uppercase leading-tight text-[2.5vw] max-sm:text-[3vw] drop-shadow" style={{ fontFamily: "GothamBold" }}>
                                {t(keys.titles.playTop)} {t(keys.titles.playBottom)}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Zona inferior: cuadro rosado */}
                <div className="relative bg-[#DA2F7D] px-6 py-5 pb-8">
                    <div className="mb-3">
                        <img src={IconoMontaña} alt={t(keys.alts.icon)} className="w-[5vh] h-[5vh]" />
                    </div>
                    <h3
                        className="text-white text-[4.5vw] max-sm:text-[5.5vw] uppercase leading-snug"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t(keys.titles.pinkTop)}<br />{t(keys.titles.pinkBottom)}
                    </h3>
                </div>
            </div>

            {/* SELECTOR DE IDIOMA */}
            <div className="absolute bottom-6 right-6 z-20">
                <LanguageSelector alignment="right" />
            </div>

            {/* MODAL DE VIDEO */}
            {isVideoOpen && (
                <div
                    className="fixed inset-0 bg-black/85 flex items-center justify-center"
                    role="dialog"
                    aria-modal="true"
                    aria-label={t(keys.aria.modal, "Reproduciendo video")}
                    onClick={closeVideo}
                    style={{ zIndex: 2147483647 }}
                >
                    <div className="relative" onClick={(e) => e.stopPropagation()}>
                        <div className="absolute top-[-3.5vh] right-0 z-20">
                            <CloseButton onClick={closeVideo} aria-label={t(keys.buttons.closeFallback)} title={t(keys.buttons.closeFallback)} />
                        </div>
                        <video
                            ref={videoRef}
                            className="relative z-10 w-[90vw] max-w-[160vh] max-h-[80vh] rounded-md shadow-2xl object-contain"
                            src={Vid1}
                            poster={videoPoster}
                            controls
                            controlsList="nodownload noplaybackrate"
                            disablePictureInPicture
                            playsInline
                            preload="auto"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Section4C1;
