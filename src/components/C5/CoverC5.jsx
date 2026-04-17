import { useEffect, useState } from "react";
import LanguageSelector from "../Global/LanguageSelector";
import { useTranslation } from "react-i18next";
import PageSkeleton from "../Global/PageSkeleton";
import { Link } from "react-router-dom";
import SmartImage from "../Global/SmartImage";

const CoverC5 = () => {
    const { t } = useTranslation();
    const [isCompactLandscape, setIsCompactLandscape] = useState(false);

    useEffect(() => {
        const updateViewportMode = () => {
            setIsCompactLandscape(
                window.innerWidth <= 980 &&
                window.innerHeight <= 430 &&
                window.innerWidth > window.innerHeight
            );
        };

        updateViewportMode();
        window.addEventListener("resize", updateViewportMode);

        return () => window.removeEventListener("resize", updateViewportMode);
    }, []);

    const titleTop = t("c5.cover.title.top").trim();
    const titleBottom = t("c5.cover.title.bottom").trim();
    const subtitleLine1 = t("c5.cover.subtitle.line1").trim();
    const subtitleLine2 = t("c5.cover.subtitle.line2").trim();

    const mobileTitleClassName = isCompactLandscape
        ? "relative z-30 pl-4 pr-[14vw] text-white text-[4.6vw] leading-[1.05] max-w-[70vw] uppercase"
        : "relative z-30 pl-4 text-white text-[9vw] sm:text-[7vw] md:text-[5.5vw] leading-[1.1] max-w-[65vw] uppercase";

    const mobileTitleLineClassName = isCompactLandscape ? "block whitespace-nowrap" : "block";
    const mobileNumberClassName = isCompactLandscape
        ? "absolute right-[4vw] w-[44vw] h-auto z-20"
        : "absolute right-[5vw] w-[50vw] h-auto z-20";

    const mobileSubtitleWrapClassName = isCompactLandscape ? "pl-4 pr-4 mt-[4vh]" : "pl-4 pr-4 mt-[6vh]";
    const mobileSubtitleClassName = isCompactLandscape
        ? "text-white text-[1rem] uppercase tracking-wider leading-tight"
        : "text-white text-[2.5vh] uppercase tracking-wider";
    const mobileCoverTopStyle = { top: isCompactLandscape ? "calc(24vh)" : "calc(30vh)" };

    return (
        <PageSkeleton
            assets={[
                "/Img/C5/ImgC5.webp",
                "/Img/Global/Numbers/05.svg",
                "/Logos/LogoPequeño.svg"
            ]}
            tintHex="#562E91"
            graceMs={300}
            variant="cover"
        >
            <div
                className="relative min-h-screen w-screen overflow-hidden bg-no-repeat bg-center bg-cover bg-black z-10"
                style={{ backgroundImage: "url('/Img/C5/ImgC5.webp')" }}
            >
                {/* Overlay oscuro suave */}
                <div className="absolute inset-0 bg-black/50 z-20" />

                <figcaption
                    className="hidden lg:block absolute top-[2vh] left-[2vh] z-30 text-white text-sm px-3 py-1 rounded"
                    style={{ fontFamily: "GothamNormal" }}
                >
                    {t("c5.cover.credits", { defaultValue: "Créditos: Rocío Silva" })}
                </figcaption>

                <div className="lg:hidden absolute left-0 right-0 z-20" style={mobileCoverTopStyle}>
                    <div className="relative flex items-center">
                        <h2
                            className={mobileTitleClassName}
                            style={{ fontFamily: "GothamBold" }}
                        >
                            <span className={mobileTitleLineClassName}>{titleTop}</span>
                            <span className={mobileTitleLineClassName}>{titleBottom}</span>
                        </h2>
                        {/* Número de capítulo mobile — eager (priority) */}
                        <SmartImage
                            src="/Img/Global/Numbers/05.svg"
                            alt={t("c5.cover.alts.chapter", { num: 5 })}
                            title={t("c5.cover.alts.chapter", { num: 5 })}
                            className={mobileNumberClassName}
                            priority
                        />
                    </div>

                    <div className={mobileSubtitleWrapClassName}>
                        <h3
                            className={mobileSubtitleClassName}
                            style={{ fontFamily: "GothamBold" }}
                        >
                            <span className={mobileTitleLineClassName}>{subtitleLine1}</span>
                            <span className={mobileTitleLineClassName}>{subtitleLine2}</span>
                        </h3>
                        <div className="w-[15vw] h-[1.5vh] bg-[#562E91] mt-[0.5vh]"></div>
                    </div>
                </div>

                <div className="hidden lg:block absolute top-[20vh] right-[14vw] z-30">
                    {/* Número de capítulo desktop — eager (priority) */}
                    <SmartImage
                        src="/Img/Global/Numbers/05.svg"
                        alt={t("c5.cover.alts.chapter", { num: 5 })}
                        title={t("c5.cover.alts.chapter", { num: 5 })}
                        className="w-[50vh] h-auto"
                        priority
                    />
                </div>

                <div className="hidden lg:block absolute top-[20vh] right-[28vw] z-30 text-white text-left">
                    <h2
                        className="text-white text-[3.6vw] leading-[1.1] max-w-[45vw] uppercase"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {titleTop} <br /> {titleBottom}
                    </h2>
                    <h3
                        className="text-white text-[2vw] mt-[3vw] uppercase"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {subtitleLine1} <br /> {subtitleLine2}
                    </h3>
                    <div className="w-[10vw] h-[0.4vw] bg-[#562E91] mt-[0.5vw]"></div>
                </div>

                <Link to='/'>
                <div className="absolute bottom-[5vh] left-[3vw] z-30 max-lg:bottom-[2vh] max-lg:left-[4vw]">
                    {/* Logo portada — eager (priority) */}
                    <SmartImage
                        src="/Logos/LogoPequeño.svg"
                        alt={t("c5.cover.alts.greenBook")}
                        title={t("c5.cover.alts.greenBook")}
                        className="w-[22vh] h-auto max-lg:w-[15vh]"
                        priority
                    />
                </div>
                </Link>

                <div className="absolute bottom-[5vh] right-6 z-50">
                    <LanguageSelector alignment="right" />
                </div>
            </div>
        </PageSkeleton>
    );
};

export default CoverC5;
