import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import ZoomButton from "../Global/ZoomButton";
import CloseButton from "../Global/CloseButton";

import Img1 from "../../assets/C4/Img/F1.jpeg";
import Img2 from "../../assets/C4/Img/F2.png";

const Section2C4 = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [hoveredImage, setHoveredImage] = useState(null);
    const { t } = useTranslation();
    const MotionDiv = motion.div;

    const keys = {
        aria: {
            section: "c4.section2.aria.section",
            modal: "c4.section2.modalAlt"
        },
        buttons: {
            zoom: "c4.section2.buttons.expand",
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

    const openLightbox = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    useEffect(() => {
        if (!selectedImage) return;

        const scrollY = window.scrollY || window.pageYOffset || 0;
        const prev = {
            position: document.body.style.position,
            top: document.body.style.top,
            left: document.body.style.left,
            right: document.body.style.right,
            width: document.body.style.width,
            overflow: document.body.style.overflow,
            htmlOverflow: document.documentElement.style.overflow
        };

        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
        document.body.style.width = "100%";
        document.body.style.overflow = "hidden";
        document.documentElement.style.overflow = "hidden";

        return () => {
            document.body.style.position = prev.position;
            document.body.style.top = prev.top;
            document.body.style.left = prev.left;
            document.body.style.right = prev.right;
            document.body.style.width = prev.width;
            document.body.style.overflow = prev.overflow;
            document.documentElement.style.overflow = prev.htmlOverflow;
            window.scrollTo(0, scrollY);
        };
    }, [selectedImage]);

    const Lightbox = ({ src, alt, onClose }) => {
        if (typeof document === "undefined") return null;

        return createPortal(
            <div
                className="fixed inset-0 flex items-center justify-center bg-black/90"
                role="dialog"
                aria-modal="true"
                aria-label={alt}
                style={{ zIndex: 2147483647 }}
                onClick={onClose}
            >
                <div className="relative" onClick={(e) => e.stopPropagation()}>
                    <img
                        src={src}
                        alt={alt}
                        className="block max-h-[95vh] max-w-[95vw] object-contain"
                    />
                    <CloseButton
                        onClick={onClose}
                        aria-label={t(keys.buttons.close)}
                        title={t(keys.buttons.close)}
                    />
                </div>
            </div>,
            document.body
        );
    };

    return (
        <section
            className="relative z-10 w-full overflow-hidden bg-[#FF5A00] bg-center bg-cover bg-no-repeat text-white lg:flex lg:min-h-screen"
            role="region"
            aria-label={t(keys.aria.section)}
        >
            <div className="flex min-h-screen flex-col justify-center px-6 pt-[7vh] pb-[10vh] text-white lg:hidden">
                <div className="relative py-[3vh]">
                    <div
                        className="leading-none text-[28vw] font-bold opacity-30 md:text-[18vw]"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        01
                    </div>
                    <h3
                        className="mt-[-7vw] text-[6vw] font-bold uppercase md:mt-[-4vw] md:text-[4vw]"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t(keys.left.title)}
                    </h3>
                    <p
                        className="mt-4 text-[3.8vw] leading-relaxed md:text-[2.5vw]"
                        style={{ fontFamily: "GothamNormal" }}
                    >
                        {t(keys.left.desc)}
                    </p>
                    <div
                        className="relative mt-4 cursor-pointer"
                        onClick={() => openLightbox(Img1)}
                    >
                        <img
                            src={Img1}
                            alt={t(keys.left.imgAlt)}
                            title={t(keys.left.imgAlt)}
                            className="h-[60vw] min-h-[240px] w-full object-cover select-none md:h-[45vw]"
                            draggable={false}
                        />
                        <div className="absolute bottom-4 right-4">
                            <ZoomButton />
                        </div>
                    </div>
                </div>

                <div className="relative py-[3vh]">
                    <div
                        className="text-right leading-none text-[28vw] font-bold opacity-30 md:text-[18vw]"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        02
                    </div>
                    <h3
                        className="mt-[-7vw] text-right text-[6vw] font-bold uppercase md:mt-[-4vw] md:text-[4vw]"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t(keys.right.title.line1)}
                        <br />
                        {t(keys.right.title.line2)}
                    </h3>
                    <p
                        className="mt-4 text-right text-[3.8vw] leading-relaxed md:text-[2.5vw]"
                        style={{ fontFamily: "GothamNormal" }}
                    >
                        {t(keys.right.desc)}
                    </p>
                    <div
                        className="relative mt-4 cursor-pointer"
                        onClick={() => openLightbox(Img2)}
                    >
                        <img
                            src={Img2}
                            alt={t(keys.right.imgAlt)}
                            title={t(keys.right.imgAlt)}
                            className="h-[60vw] min-h-[240px] w-full object-cover select-none md:h-[45vw]"
                            draggable={false}
                        />
                        <div className="absolute bottom-4 right-4">
                            <ZoomButton />
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden lg:flex lg:w-full">
                <div className="relative w-full text-white">
                    <div className="absolute left-[10vh] top-[20vh] min-[1600px]:left-[15vh] min-[1600px]:top-[30vh]">
                        <h3
                            className="text-2xl font-bold uppercase min-[1600px]:text-3xl"
                            style={{ fontFamily: "GothamBold" }}
                        >
                            {t(keys.left.title)}
                        </h3>
                        <div
                            className="mt-[-17vh] text-[30vh] font-bold opacity-30"
                            style={{ fontFamily: "GothamBold" }}
                        >
                            01
                        </div>
                    </div>

                    <div className="absolute right-[10vh] top-[20vh] text-right min-[1600px]:right-[15vh] min-[1600px]:top-[30vh]">
                        <h3
                            className="text-2xl font-bold uppercase min-[1600px]:text-3xl"
                            style={{ fontFamily: "GothamBold" }}
                        >
                            {t(keys.right.title.line1)}
                            <br />
                            {t(keys.right.title.line2)}
                        </h3>
                        <div
                            className="mt-[-17vh] text-[30vh] font-bold opacity-30"
                            style={{ fontFamily: "GothamBold" }}
                        >
                            02
                        </div>
                    </div>

                    <div className="absolute left-[10vh] top-[50vh] max-w-[45vh] min-[1600px]:left-[15vh] min-[1600px]:top-[60vh]">
                        <p
                            className="text-base leading-relaxed min-[1600px]:text-xl"
                            style={{ fontFamily: "GothamNormal" }}
                        >
                            {t(keys.left.desc)}
                        </p>
                    </div>

                    <div className="absolute right-[10vh] top-[50vh] max-w-[45vh] text-right min-[1600px]:right-[15vh] min-[1600px]:top-[60vh]">
                        <p
                            className="text-base leading-relaxed min-[1600px]:text-xl"
                            style={{ fontFamily: "GothamNormal" }}
                        >
                            {t(keys.right.desc)}
                        </p>
                    </div>

                    <div className="absolute left-1/2 top-0 flex h-full -translate-x-1/2 transform flex-col">
                        <MotionDiv
                            className="group relative h-[50vh] w-[60vh] cursor-pointer origin-center hover:z-30"
                            style={{ willChange: "transform" }}
                            whileHover={{ scale: 1.08, y: hoveredImage === "top" ? 24 : 0 }}
                            whileTap={{ scale: 1.02 }}
                            onHoverStart={() => setHoveredImage("top")}
                            onHoverEnd={() => setHoveredImage(null)}
                            onClick={() => openLightbox(Img1)}
                        >
                            <div className="absolute inset-0 overflow-hidden rounded-none">
                                <img
                                    src={Img1}
                                    alt={t(keys.left.imgAlt)}
                                    title={t(keys.left.imgAlt)}
                                    className="h-full w-full object-cover select-none pointer-events-none"
                                    draggable={false}
                                />
                            </div>
                            <div className="absolute bottom-4 right-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                <div
                                    onClick={() => openLightbox(Img1)}
                                    title={t(keys.buttons.zoom)}
                                    aria-label={t(keys.buttons.zoom)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openLightbox(Img1)}
                                >
                                    <ZoomButton />
                                </div>
                            </div>
                        </MotionDiv>

                        <MotionDiv
                            className="group relative mt-auto h-[50vh] w-[60vh] cursor-pointer origin-center hover:z-30"
                            style={{ willChange: "transform" }}
                            whileHover={{ scale: 1.08, y: hoveredImage === "bottom" ? -24 : 0 }}
                            whileTap={{ scale: 1.02 }}
                            onHoverStart={() => setHoveredImage("bottom")}
                            onHoverEnd={() => setHoveredImage(null)}
                            onClick={() => openLightbox(Img2)}
                        >
                            <div className="absolute inset-0 overflow-hidden rounded-none">
                                <img
                                    src={Img2}
                                    alt={t(keys.right.imgAlt)}
                                    title={t(keys.right.imgAlt)}
                                    className="h-full w-full object-cover select-none pointer-events-none"
                                    draggable={false}
                                />
                            </div>
                            <div className="absolute bottom-4 right-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                <div
                                    onClick={() => openLightbox(Img2)}
                                    title={t(keys.buttons.zoom)}
                                    aria-label={t(keys.buttons.zoom)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openLightbox(Img2)}
                                >
                                    <ZoomButton />
                                </div>
                            </div>
                        </MotionDiv>
                    </div>
                </div>
            </div>

            {selectedImage && (
                <Lightbox
                    src={selectedImage}
                    alt={t(keys.aria.modal)}
                    onClose={closeLightbox}
                />
            )}
        </section>
    );
};

export default Section2C4;
