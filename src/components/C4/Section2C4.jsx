import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import F1 from "../../assets/C4/Img/F1.jpeg";
import F2 from "../../assets/C4/Img/F2.png";
import ExpandButton from "../Global/ExpandButton";
import CloseButton from "../Global/CloseButton";

const Section2C4 = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState("");
    const [currentAltKey, setCurrentAltKey] = useState("");
    const [hoveredSide, setHoveredSide] = useState(null);
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

    const openLightbox = (img, altKey) => {
        setCurrentImage(img);
        setCurrentAltKey(altKey);
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => setIsLightboxOpen(false);

    const flexLeft = hoveredSide === "left" ? "1.6 1 0%" : hoveredSide === "right" ? "0.6 1 0%" : "1 1 0%";
    const flexRight = hoveredSide === "right" ? "1.6 1 0%" : hoveredSide === "left" ? "0.6 1 0%" : "1 1 0%";
    const titleBlockStyle = { minHeight: "clamp(7.5rem, 38vw, 12rem)" };
    const numberStyle = { fontFamily: "GothamBold", fontSize: "clamp(7rem, 43vw, 13rem)", lineHeight: "0.82" };
    const landscapeTitleStyle = { fontFamily: "GothamBold", fontSize: "clamp(1rem, 3.2vw, 1.85rem)" };
    const landscapeNumberStyle = { fontFamily: "GothamBold", fontSize: "clamp(4.5rem, 17vw, 9rem)", lineHeight: "0.78" };
    const desktopTitleStyle = { fontFamily: "GothamBold", fontSize: "clamp(1.95rem, 2.65vw, 3.15rem)", lineHeight: "0.9" };
    const desktopNumberStyle = { fontFamily: "GothamBold", fontSize: "clamp(10rem, 15.5vw, 15rem)", lineHeight: "0.8" };
    const desktopCopyStyle = { fontFamily: "GothamNormal", fontSize: "clamp(1rem, 1.18vw, 1.32rem)", lineHeight: "1.12" };

    const imageHandlers = (side, image, altKey) => ({
        onPointerEnter: () => setHoveredSide(side),
        onPointerLeave: () => setHoveredSide(null),
        onFocus: () => setHoveredSide(side),
        onBlur: () => setHoveredSide(null),
        onClick: () => openLightbox(image, altKey)
    });

    return (
        <section
            className="relative w-full min-h-screen bg-[#FF5200]"
            role="region"
            aria-label={t(keys.aria.section)}
        >
            <div className="xl:hidden min-h-screen text-white">
                <div className="flex min-h-screen flex-col justify-center pt-[7vh] pb-[10vh] landscape:hidden">
                    <div className="flex items-center px-[3vw] py-[3vh] gap-2">
                        <div className="w-[48%] relative pl-3" style={titleBlockStyle}>
                            <h3
                                className="relative z-10 text-[clamp(1.25rem,5.5vw,2.1rem)] md:text-[clamp(1.35rem,3.6vw,2.2rem)] font-bold uppercase leading-tight"
                                style={{ fontFamily: "GothamBold" }}
                            >
                                {t(keys.left.title)}
                            </h3>
                            <div
                                className="absolute bottom-0 left-0 pl-2 font-bold opacity-25 pointer-events-none"
                                style={numberStyle}
                            >
                                01
                            </div>
                        </div>
                        <p
                            className="w-[52%] pr-3 text-[clamp(0.75rem,2.8vw,1rem)] md:text-[clamp(0.85rem,2vw,1.05rem)] text-justify leading-snug"
                            style={{ fontFamily: "GothamNormal" }}
                        >
                            {t(keys.left.desc)}
                        </p>
                    </div>

                    <div className="flex w-full" style={{ marginTop: "2vw" }}>
                        <div
                            className="relative cursor-pointer overflow-hidden transition-all duration-300 ease-in-out"
                            style={{ flex: flexLeft }}
                            {...imageHandlers("left", F1, keys.left.imgAlt)}
                        >
                            <img
                                src={F1}
                                className="w-full h-[52vw] md:h-[38vw] object-cover"
                                alt={t(keys.left.imgAlt)}
                                title={t(keys.left.imgAlt)}
                            />
                            <ExpandButton
                                onClick={(e) => { e.stopPropagation(); openLightbox(F1, keys.left.imgAlt); }}
                                title={t(keys.buttons.expand)}
                                aria-label={t(keys.buttons.expand)}
                            />
                        </div>
                        <div
                            className="relative cursor-pointer overflow-hidden transition-all duration-300 ease-in-out"
                            style={{ flex: flexRight }}
                            {...imageHandlers("right", F2, keys.right.imgAlt)}
                        >
                            <img
                                src={F2}
                                className="w-full h-[52vw] md:h-[38vw] object-cover"
                                alt={t(keys.right.imgAlt)}
                                title={t(keys.right.imgAlt)}
                            />
                            <ExpandButton
                                onClick={(e) => { e.stopPropagation(); openLightbox(F2, keys.right.imgAlt); }}
                                title={t(keys.buttons.expand)}
                                aria-label={t(keys.buttons.expand)}
                            />
                        </div>
                    </div>

                    <div className="flex items-center px-[3vw] py-[3vh] gap-2">
                        <p
                            className="w-[52%] pl-3 text-[clamp(0.75rem,2.8vw,1rem)] md:text-[clamp(0.85rem,2vw,1.05rem)] text-justify leading-snug"
                            style={{ fontFamily: "GothamNormal" }}
                        >
                            {t(keys.right.desc)}
                        </p>
                        <div className="w-[48%] relative pr-3 text-right" style={titleBlockStyle}>
                            <h3
                                className="relative z-10 text-[clamp(1.25rem,5.5vw,2.1rem)] md:text-[clamp(1.35rem,3.6vw,2.2rem)] font-bold uppercase leading-tight"
                                style={{ fontFamily: "GothamBold" }}
                            >
                                {t(keys.right.title.line1)}<br />{t(keys.right.title.line2)}
                            </h3>
                            <div
                                className="absolute bottom-0 right-0 pr-2 font-bold opacity-25 pointer-events-none"
                                style={numberStyle}
                            >
                                02
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden min-h-screen flex-col justify-center gap-[2vh] px-[6vw] pt-[8vh] pb-[8vh] landscape:flex">
                    <div className="grid grid-cols-2 items-end gap-x-[3vw]">
                        <div className="flex items-center gap-[2vw] pb-[1vh]">
                            <div className="relative z-10 w-[44%] min-h-[18vh]">
                                <h3
                                    className="relative z-10 font-bold uppercase leading-none"
                                    style={landscapeTitleStyle}
                                >
                                    {t(keys.left.title)}
                                </h3>
                                <div
                                    className="absolute bottom-0 left-0 font-bold opacity-25 pointer-events-none"
                                    style={landscapeNumberStyle}
                                >
                                    01
                                </div>
                            </div>
                            <p
                                className="relative z-10 w-[56%] text-[clamp(0.62rem,1.55vw,0.9rem)] text-justify leading-tight"
                                style={{ fontFamily: "GothamNormal" }}
                            >
                                {t(keys.left.desc)}
                            </p>
                        </div>
                        <div />
                    </div>

                    <div className="flex w-full items-center">
                        <div
                            className="relative cursor-pointer overflow-hidden transition-all duration-300 ease-in-out"
                            style={{ flex: flexLeft }}
                            {...imageHandlers("left", F1, keys.left.imgAlt)}
                        >
                            <img
                                src={F1}
                                className="h-[34vh] w-full object-cover"
                                alt={t(keys.left.imgAlt)}
                                title={t(keys.left.imgAlt)}
                            />
                            <ExpandButton
                                onClick={(e) => { e.stopPropagation(); openLightbox(F1, keys.left.imgAlt); }}
                                title={t(keys.buttons.expand)}
                                aria-label={t(keys.buttons.expand)}
                            />
                        </div>
                        <div
                            className="relative cursor-pointer overflow-hidden transition-all duration-300 ease-in-out"
                            style={{ flex: flexRight }}
                            {...imageHandlers("right", F2, keys.right.imgAlt)}
                        >
                            <img
                                src={F2}
                                className="h-[34vh] w-full object-cover"
                                alt={t(keys.right.imgAlt)}
                                title={t(keys.right.imgAlt)}
                            />
                            <ExpandButton
                                onClick={(e) => { e.stopPropagation(); openLightbox(F2, keys.right.imgAlt); }}
                                title={t(keys.buttons.expand)}
                                aria-label={t(keys.buttons.expand)}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 items-start gap-x-[3vw]">
                        <div />
                        <div className="flex items-center gap-[2vw] pt-[1vh] text-right">
                            <p
                                className="relative z-10 w-[56%] text-[clamp(0.62rem,1.55vw,0.9rem)] text-justify leading-tight"
                                style={{ fontFamily: "GothamNormal" }}
                            >
                                {t(keys.right.desc)}
                            </p>
                            <div className="relative z-10 w-[44%] min-h-[18vh]">
                                <h3
                                    className="relative z-10 ml-auto font-bold uppercase leading-none"
                                    style={landscapeTitleStyle}
                                >
                                    {t(keys.right.title.line1)}<br />{t(keys.right.title.line2)}
                                </h3>
                                <div
                                    className="absolute bottom-0 right-0 font-bold opacity-25 pointer-events-none"
                                    style={landscapeNumberStyle}
                                >
                                    02
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden xl:block min-h-screen text-white">
                <div className="relative mx-auto min-h-screen w-full max-w-[1360px] px-[4.2vw] py-[4vh]">
                    <div className="absolute left-[4.2vw] top-[19.5vh] w-[16.5vw] min-w-[215px] max-w-[260px]">
                        <div
                            className="absolute left-[-0.25vw] top-[-5.8rem] font-bold opacity-25 pointer-events-none"
                            style={desktopNumberStyle}
                        >
                            01
                        </div>
                        <h3
                            className="relative z-10 max-w-[12.5vw] uppercase"
                            style={desktopTitleStyle}
                        >
                            {t(keys.left.title)}
                        </h3>
                        <p
                            className="relative z-10 mt-[5.9rem] max-w-[14.5vw] min-w-[210px] text-left"
                            style={desktopCopyStyle}
                        >
                            {t(keys.left.desc)}
                        </p>
                    </div>

                    <div className="absolute right-[4.2vw] top-[19.5vh] w-[16.5vw] min-w-[215px] max-w-[265px] text-right">
                        <div
                            className="absolute right-[-0.5vw] top-[-5.8rem] font-bold opacity-25 pointer-events-none"
                            style={desktopNumberStyle}
                        >
                            02
                        </div>
                        <h3
                            className="relative z-10 ml-auto max-w-[13vw] uppercase"
                            style={desktopTitleStyle}
                        >
                            {t(keys.right.title.line1)} <br /> {t(keys.right.title.line2)}
                        </h3>
                        <p
                            className="relative z-10 ml-auto mt-[5.7rem] max-w-[14.5vw] min-w-[215px] text-left"
                            style={desktopCopyStyle}
                        >
                            {t(keys.right.desc)}
                        </p>
                    </div>

                    <div className="relative mx-auto flex min-h-screen w-[43vw] min-w-[620px] max-w-[700px] items-center justify-center">
                        <div
                            className={`absolute left-1/2 top-[10.8vh] h-[clamp(16rem,22vw,21rem)] w-[clamp(29rem,34vw,37rem)] -translate-x-1/2 cursor-pointer overflow-hidden transition-all duration-300 ease-out ${
                                hoveredSide === "right"
                                    ? "scale-[0.985] opacity-90"
                                    : "scale-100 opacity-100"
                            } ${hoveredSide === "left" ? "shadow-[0_24px_50px_rgba(0,0,0,0.24)]" : "shadow-[0_16px_34px_rgba(0,0,0,0.12)]"}`}
                            {...imageHandlers("left", F1, keys.left.imgAlt)}
                        >
                            <img
                                src={F1}
                                className={`h-full w-full object-cover transition-transform duration-300 ease-out ${
                                    hoveredSide === "left" ? "scale-[1.035]" : "scale-100"
                                }`}
                                alt={t(keys.left.imgAlt)}
                                title={t(keys.left.imgAlt)}
                            />
                            <div className={`absolute inset-0 bg-black/0 transition-colors duration-300 ${hoveredSide === "right" ? "bg-black/8" : ""}`} />
                            <ExpandButton
                                onClick={(e) => { e.stopPropagation(); openLightbox(F1, keys.left.imgAlt); }}
                                title={t(keys.buttons.expand)}
                                aria-label={t(keys.buttons.expand)}
                                className={`transition-all duration-300 ${hoveredSide === "left" ? "opacity-100 translate-y-0" : "opacity-75 translate-y-1"}`}
                            />
                        </div>

                        <div
                            className={`absolute bottom-[12vh] left-1/2 z-10 h-[clamp(23rem,32vw,29rem)] w-[clamp(19rem,25vw,26.5rem)] -translate-x-1/2 cursor-pointer overflow-hidden transition-all duration-300 ease-out ${
                                hoveredSide === "left"
                                    ? "scale-[0.985] opacity-90"
                                    : "scale-100 opacity-100"
                            } ${hoveredSide === "right" ? "shadow-[0_28px_60px_rgba(0,0,0,0.28)]" : "shadow-[0_18px_38px_rgba(0,0,0,0.16)]"}`}
                            {...imageHandlers("right", F2, keys.right.imgAlt)}
                        >
                            <img
                                src={F2}
                                className={`h-full w-full object-cover transition-transform duration-300 ease-out ${
                                    hoveredSide === "right" ? "scale-[1.035]" : "scale-100"
                                }`}
                                alt={t(keys.right.imgAlt)}
                                title={t(keys.right.imgAlt)}
                            />
                            <div className={`absolute inset-0 bg-black/0 transition-colors duration-300 ${hoveredSide === "left" ? "bg-black/8" : ""}`} />
                            <ExpandButton
                                onClick={(e) => { e.stopPropagation(); openLightbox(F2, keys.right.imgAlt); }}
                                title={t(keys.buttons.expand)}
                                aria-label={t(keys.buttons.expand)}
                                className={`transition-all duration-300 ${hoveredSide === "right" ? "opacity-100 translate-y-0" : "opacity-75 translate-y-1"}`}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {isLightboxOpen && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                    role="dialog"
                    aria-modal="true"
                    aria-label={t(keys.aria.modal)}
                    onClick={closeLightbox}
                >
                    <div className="relative" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={currentImage}
                            alt={t(currentAltKey || keys.aria.modal)}
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
        </section>
    );
};

export default Section2C4;
