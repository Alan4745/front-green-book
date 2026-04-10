// src/components/C1/CoverC1.jsx
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import HoverButton from "../Global/HoverButton";
import PageSkeleton from "../Global/PageSkeleton";

const CoverC1 = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    // Texto con salto en la primera coma, sin tocar tu JSON.
    const desc = t("c1.cover.desc");
    const commaIndex = useMemo(() => desc.indexOf(","), [desc]);
    const descFirst = useMemo(
        () => (commaIndex !== -1 ? desc.slice(0, commaIndex + 1) : desc),
        [desc, commaIndex]
    );
    const descSecond = useMemo(
        () => (commaIndex !== -1 ? desc.slice(commaIndex + 1).trim() : ""),
        [desc, commaIndex]
    );

    
    return (
        <PageSkeleton
            assets={[
                "/Img/C1/ImgC1.png",
                "/Img/Global/Numbers/01.svg",
                "/Logos/LogoPequeño.svg"
            ]}
            tintHex="#DA2F7D"
            graceMs={2000}
            variant="cover"
        >
            <div
                className="relative min-h-screen w-screen overflow-hidden bg-no-repeat bg-center bg-cover bg-black z-10"
                style={{ backgroundImage: "url('/Img/C1/ImgC1.png')" }}
                aria-busy="false"
                aria-live="polite"
            >
                {/* Overlay oscuro suave */}
                <div className="absolute inset-0 bg-black/5 z-20" />

                {/* Número de capítulo + Título (móvil: juntos centrados) */}
                <div className="hidden lg:block absolute top-[20vh] right-[14vw] z-30">
                    <img
                        src="/Img/Global/Numbers/01.svg"
                        alt={t("c1.cover.chapterAlt", { num: 1 })}
                        className="w-[50vh] h-auto"
                        loading="eager"
                    />
                </div>

                <div className="lg:hidden absolute left-0 right-0 z-20" style={{ top: 'calc(30vh)' }}>
                    <div className="relative flex items-center">
                        <h2
                            className="relative z-30 pl-4 text-white text-[9vw] sm:text-[7vw] md:text-[5.5vw] leading-[1.1] max-w-[65vw] uppercase"
                            style={{ fontFamily: "GothamBold" }}
                        >
                            {t("c1.cover.title.top")} <br /> {t("c1.cover.title.bottom")}
                        </h2>
                        <img
                            src="/Img/Global/Numbers/01.svg"
                            alt={t("c1.cover.chapterAlt", { num: 1 })}
                            className="absolute right-[5vw] w-[50vw] h-auto z-20"
                            loading="eager"
                        />
                    </div>

                    <div className="pl-4 pr-4 mt-[6vh]">
                        <p
                            className="text-[1.8vh] text-white/90 max-w-[80vw] leading-tight"
                            style={{ fontFamily: "GothamNormal" }}
                        >
                            {descFirst}
                            {descSecond && (
                                <>
                                    <br />
                                    {descSecond}
                                </>
                            )}
                        </p>

                        <h3
                            className="text-white text-[2.5vh] uppercase mt-[4vh] tracking-wider"
                            style={{ fontFamily: "GothamBold" }}
                        >
                            {t("c1.cover.subtitle")}
                        </h3>

                        <div className="w-[15vw] h-[1.5vh] bg-[#DA2F7D] mt-[0.5vh]" />
                    </div>
                </div>

                {/* Título y descripción */}
                <div className="hidden lg:block absolute top-[20vh] right-[28vw] z-30 text-white text-left">
                    <h2
                        className="text-white text-[4.5vw] leading-[1.1] max-w-[45vw] uppercase"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t("c1.cover.title.top")}
                        <br />
                        {t("c1.cover.title.bottom")}
                    </h2>

                    <p
                        className="text-[1.6vw] text-white/90 mt-[3vw] max-w-[60vw] leading-tight"
                        style={{ fontFamily: "GothamNormal" }}
                    >
                        {descFirst}
                        {descSecond && (
                            <>
                                <br />
                                {descSecond}
                            </>
                        )}
                    </p>

                    {/* Subtítulo */}
                    <h3
                        className="text-white text-[2vw] uppercase mt-[3vw] tracking-wider"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t("c1.cover.subtitle")}
                    </h3>

                    {/* Línea rosada */}
                    <div className="w-[7.2vw] h-[1.5vh] bg-[#DA2F7D] mt-[0.5vh]" />
                </div>

                {/* Logo inferior izquierdo */}
                <Link to='/'>
                <div className="absolute bottom-[5vh] left-[3vw] z-30 max-lg:bottom-[2vh] max-lg:left-[4vw]">
                    <img
                        src="/Logos/LogoPequeño.svg"
                        alt={t("app.title")}
                        className="w-[22vh] h-auto max-lg:w-[15vh]"
                        loading="eager"
                    />
                </div>
                </Link>
                
                
            </div>
        </PageSkeleton>
    );
};

export default CoverC1;
