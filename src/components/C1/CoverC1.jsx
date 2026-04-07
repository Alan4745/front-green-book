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
                <div className="absolute top-[20vh] right-[25vh] z-30 max-lg:top-[28vh] max-lg:right-[5vw] max-lg:left-auto">
                    <img
                        src="/Img/Global/Numbers/01.svg"
                        alt={t("c1.cover.chapterAlt", { num: 1 })}
                        className="w-[50vh] h-auto max-lg:w-[35vw]"
                        loading="eager"
                    />
                </div>

                {/* Título y descripción */}
                <div className="absolute top-[35vh] right-[50vh] z-30 text-white text-left min-[1024px]:max-[1200px]:top-[30vh] min-[1024px]:max-[1200px]:right-[18vw] max-lg:top-[22vh] max-lg:right-auto max-lg:left-[5vw] max-lg:pr-[5vw]">
                    <h2
                        className="text-white text-[8vh] leading-[1] max-w-[30vw] uppercase min-[1024px]:max-[1200px]:text-[6.5vh] min-[1024px]:max-[1200px]:max-w-[40vw] max-lg:text-[6vh] max-lg:max-w-[65vw]"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t("c1.cover.title.top")}
                        <br />
                        {t("c1.cover.title.bottom")}
                    </h2>

                    <p
                        className="text-[3vh] text-white/90 mt-[5vh] max-w-[60vw] leading-tight min-[1024px]:max-[1200px]:text-[2.4vh] min-[1024px]:max-[1200px]:mt-[3vh] min-[1024px]:max-[1200px]:max-w-[55vw] max-lg:text-[1.8vh] max-lg:mt-[3vh] max-lg:max-w-[80vw]"
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
                        className="text-white text-[4vh] uppercase mt-[6vh] tracking-wider min-[1024px]:max-[1200px]:text-[3vh] min-[1024px]:max-[1200px]:mt-[2vh] max-lg:text-[2.5vh] max-lg:mt-[4vh] md:max-lg:mt-[2vh]"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t("c1.cover.subtitle")}
                    </h3>

                    {/* Línea rosada */}
                    <div className="w-[7.2vw] h-[1.5vh] bg-[#DA2F7D] mt-[0.5vh] max-lg:w-[15vw]" />
                </div>

                {/* Logo inferior izquierdo */}
                <Link to='/'>
                <div className="absolute bottom-[5vh] left-[5vh] z-30 max-lg:bottom-[2vh] max-lg:left-[4vw]">
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
