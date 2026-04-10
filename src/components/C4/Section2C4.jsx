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

            <div className="hidden xl:block h-full">
                <div className="relative w-full text-white">
                    <div className="absolute top-[25vh] left-[15vh]">
                        <h3 className="text-2xl font-bold uppercase w-[30vh]" style={{ fontFamily: "GothamBold" }}>
                            {t(keys.left.title)}
                        </h3>
                        <div className="text-[30vh] font-bold opacity-30 mt-[-17vh]" style={{ fontFamily: "GothamBold" }}>
                            01
                        </div>
                    </div>

                    <div className="absolute top-[25vh] right-[15vh] text-right">
                        <h3 className="text-2xl font-bold uppercase" style={{ fontFamily: "GothamBold" }}>
                            {t(keys.right.title.line1)} <br /> {t(keys.right.title.line2)}
                        </h3>
                        <div className="text-[30vh] font-bold opacity-30 mt-[-17vh]" style={{ fontFamily: "GothamBold" }}>
                            02
                        </div>
                    </div>

                    <div className="absolute top-[55vh] left-[15vh] w-[40vh]">
                        <p className="text-[2.1vh] text-justify leading-snug" style={{ fontFamily: "GothamNormal" }}>
                            {t(keys.left.desc)}
                        </p>
                    </div>

                    <div className="absolute top-[55vh] right-[15vh] text-right w-[40vh]">
                        <p className="text-[2.1vh] text-justify leading-snug" style={{ fontFamily: "GothamNormal" }}>
                            {t(keys.right.desc)}
                        </p>
                    </div>

                    <div className="flex justify-center items-center" style={{ minHeight: "100vh" }}>
                        <div
                            className="relative cursor-pointer overflow-hidden transition-all duration-300 ease-in-out"
                            style={{ flex: flexLeft, height: "50vh", maxWidth: "60vh" }}
                            {...imageHandlers("left", F1, keys.left.imgAlt)}
                        >
                            <img
                                src={F1}
                                className="w-full h-full object-cover"
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
                            style={{ flex: flexRight, height: "50vh", maxWidth: "60vh" }}
                            {...imageHandlers("right", F2, keys.right.imgAlt)}
                        >
                            <img
                                src={F2}
                                className="w-full h-full object-cover"
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
