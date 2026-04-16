import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PageSkeleton from "../Global/PageSkeleton";
import { Link } from "react-router-dom";

const CoverC2 = () => {
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

    const titleTop = t("c2.cover.title.top").trim();
    const titleBottom = t("c2.cover.title.bottom").trim();
    const subtitleTop = t("c2.cover.subtitle.top").trim();
    const subtitleBottom = t("c2.cover.subtitle.bottom").trim();

    const mobileTitleClassName = isCompactLandscape
        ? "relative z-30 pl-4 pr-[14vw] text-white text-[4.6vw] leading-[1.05] max-w-[70vw] uppercase"
        : "relative z-30 pl-4 pr-[18vw] text-white text-[9vw] sm:text-[7vw] md:text-[5.5vw] leading-[1.1] max-w-[58vw] uppercase";

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
                    "/Img/C2/ImgC2.png",
                    "/Img/Global/Numbers/02.svg",
                    "/Logos/LogoPequeño.svg"
                ]}
            tintHex="#5FCAD0"
            graceMs={300}
            variant="cover"
        >
            <div
                className="relative min-h-screen w-screen overflow-hidden bg-no-repeat bg-center bg-cover bg-black z-10"
                style={{ backgroundImage: "url('/Img/C2/ImgC2.png')" }}
            >
                {/* Overlay oscuro suave */}
                <div className="absolute inset-0 bg-black/30 z-20" />

                <div className="lg:hidden absolute left-0 right-0 z-20" style={mobileCoverTopStyle}>
                    <div className="relative flex items-center">
                        <h2
                            className={mobileTitleClassName}
                            style={{ fontFamily: "GothamBold" }}
                        >
                            <span className={mobileTitleLineClassName}>{titleTop}</span>
                            <span className={mobileTitleLineClassName}>{titleBottom}</span>
                        </h2>
                        <img
                            src="/Img/Global/Numbers/02.svg"
                            alt={t("c2.cover.chapterAlt", { num: 2 })}
                            className={mobileNumberClassName}
                        />
                    </div>

                    <div className={mobileSubtitleWrapClassName}>
                        <h3
                            className={mobileSubtitleClassName}
                            style={{ fontFamily: "GothamBold" }}
                        >
                            <span className={mobileTitleLineClassName}>{subtitleTop}</span>
                            <span className={mobileTitleLineClassName}>{subtitleBottom}</span>
                        </h3>
                        <div className="w-[15vw] h-[1.5vh] bg-[#5FCAD0] mt-[0.5vh]" />
                    </div>
                </div>

                <div className="hidden lg:block absolute top-[20vh] right-[14vw] z-30">
                    <img
                        src="/Img/Global/Numbers/02.svg"
                        alt={t("c2.cover.chapterAlt", { num: 2 })}
                        className="w-[50vh] h-auto"
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
                        {subtitleTop} <br /> {subtitleBottom}
                    </h3>
                    <div className="w-[10vw] h-[0.4vw] bg-[#5FCAD0] mt-[0.5vw]" />
                </div>

                <Link to='/'>
                <div className="absolute bottom-[5vh] left-[3vw] z-30 max-lg:bottom-[2vh] max-lg:left-[4vw]">
                    <img
                        src="/Logos/LogoPequeño.svg"
                        alt={t("app.title")}
                        className="w-[22vh] h-auto max-lg:w-[15vh]"
                    />
                </div>
                </Link>

                
            </div>
        </PageSkeleton>
    );
};

export default CoverC2;
