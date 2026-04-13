import { useEffect, useState } from "react";
import LanguageSelector from "../Global/LanguageSelector";
import { useTranslation } from "react-i18next";
import PageSkeleton from "../Global/PageSkeleton";
import { Link } from "react-router-dom";

const CoverC6 = () => {
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

    const titleLine1 = t("c6.cover.title.line1").trim();
    const titleLine2 = t("c6.cover.title.line2").trim();
    const titleLine3 = t("c6.cover.title.line3").trim();
    const subtitle = t("c6.cover.subtitle").trim();

    const mobileTitleClassName = isCompactLandscape
        ? "relative z-30 pl-4 pr-[14vw] text-white text-[4.35vw] leading-[1.02] max-w-[70vw] uppercase"
        : "relative z-30 pl-4 text-white text-[9vw] sm:text-[7vw] md:text-[5.5vw] leading-[1.1] max-w-[65vw] uppercase";

    const mobileTitleLineClassName = isCompactLandscape ? "block whitespace-nowrap" : "block";
    const mobileNumberClassName = isCompactLandscape
        ? "absolute right-[4vw] w-[44vw] h-auto z-20"
        : "absolute right-[5vw] w-[50vw] h-auto z-20";

    const mobileSubtitleWrapClassName = isCompactLandscape ? "pl-4 pr-4 mt-[3.5vh]" : "pl-4 pr-4 mt-[6vh]";
    const mobileSubtitleClassName = isCompactLandscape
        ? "text-white text-[0.95rem] uppercase tracking-wider leading-tight"
        : "text-white text-[2.5vh] uppercase tracking-wider";
    const mobileCoverTopStyle = { top: isCompactLandscape ? "calc(22vh)" : "calc(30vh)" };

    return (
        <PageSkeleton
            assets={[
                "/Img/C6/ImgC6.png",
                "/Img/Global/Numbers/06.svg",
                "/Logos/LogoPequeño.svg"
            ]}
            tintHex="#00AE43"
            graceMs={2000}
            variant="cover"
        >
            <div
                className="relative min-h-screen w-screen overflow-hidden bg-no-repeat bg-center bg-cover bg-black"
                style={{ backgroundImage: "url('/Img/C6/ImgC6.png')" }}
            >
                {/* Overlay oscuro suave */}
                <div className="absolute inset-0 bg-black/30 z-20" />

                <div className="lg:hidden absolute left-0 right-0 z-20" style={mobileCoverTopStyle}>
                    <div className="relative flex items-center">
                        <h2
                            className={mobileTitleClassName}
                            style={{ fontFamily: "GothamBold" }}
                        >
                            <span className={mobileTitleLineClassName}>{titleLine1}</span>
                            <span className={mobileTitleLineClassName}>{titleLine2}</span>
                        </h2>
                        <img
                            src="/Img/Global/Numbers/06.svg"
                            alt={t("c6.cover.alts.chapter", { num: 6 })}
                            title={t("c6.cover.alts.chapter", { num: 6 })}
                            className={mobileNumberClassName}
                        />
                    </div>

                    <div className={mobileSubtitleWrapClassName}>
                        <h3
                            className={mobileSubtitleClassName}
                            style={{ fontFamily: "GothamBold" }}
                        >
                            {subtitle}
                        </h3>
                        <div className="w-[15vw] h-[1.5vh] bg-[#00AE43] mt-[0.5vh]"></div>
                    </div>
                </div>

                <div className="hidden lg:block absolute top-[20vh] right-[14vw] z-30">
                    <img
                        src="/Img/Global/Numbers/06.svg"
                        alt={t("c6.cover.alts.chapter", { num: 6 })}
                        title={t("c6.cover.alts.chapter", { num: 6 })}
                        className="w-[50vh] h-auto"
                    />
                </div>

                <div className="hidden lg:block absolute top-[20vh] right-[28vw] z-30 text-white text-left">
                    <h2
                        className="text-white text-[3.6vw] leading-[1.1] uppercase whitespace-nowrap"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {titleLine1} <br />
                        {titleLine2}
                    </h2>
                    <h3
                        className="text-white text-[2vw] mt-[3vw] uppercase"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {subtitle}
                    </h3>
                    <div className="w-[10vw] h-[0.4vw] bg-[#00AE43] mt-[0.5vw]"></div>
                    <p
                        className="text-white text-justify text-[1.4vw] mt-[1.5vw] max-w-[35vw]"
                        style={{ fontFamily: "GothamNormal" }}
                    >
                        {t("c6.cover.body")}
                    </p>
                </div>

                <Link to='/'>
                <div className="absolute bottom-[5vh] left-[3vw] z-30 max-lg:bottom-[2vh] max-lg:left-[4vw] lg:left-[5vh]">
                    <img
                        src="/Logos/LogoPequeño.svg"
                        alt={t("c6.cover.alts.greenBook")}
                        title={t("c6.cover.alts.greenBook")}
                        className="w-[22vh] h-auto max-lg:w-[15vh] lg:w-[22vh]"
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

export default CoverC6;
