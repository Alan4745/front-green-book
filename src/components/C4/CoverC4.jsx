import LanguageSelector from "../Global/LanguageSelector";
import { useTranslation } from "react-i18next";
import PageSkeleton from "../Global/PageSkeleton";
import { Link } from "react-router-dom";

const CoverC4 = () => {
    const { t } = useTranslation();

    return (
        <PageSkeleton
            assets={[
                "/Img/C4/ImgC4.png",
                "/Img/Global/Numbers/04.svg",
                "/Logos/LogoPequeño.svg"
            ]}
            tintHex="#FF5200"
            graceMs={2000}
            variant="cover"
        >
            <div
                className="relative min-h-screen w-screen overflow-hidden bg-no-repeat bg-center bg-cover bg-black z-10"
                style={{ backgroundImage: "url('/Img/C4/ImgC4.png')" }}
            >
                {/* Overlay oscuro suave */}
                <div className="absolute inset-0 bg-black/30 z-20" />

                {/* MOBILE: bloque título + número + subtítulo */}
                <div
                    className="lg:hidden absolute left-0 right-0 z-20"
                    style={{ top: 'calc(30vh)' }}
                >
                    {/* Row: solo h2 + número, centrados entre sí */}
                    <div className="relative flex items-center">
                        <h2
                            className="relative z-30 pl-4 text-white text-[9vw] leading-[1.1] max-w-[65vw] uppercase"
                            style={{ fontFamily: "GothamBold" }}
                        >
                            {t("c4.cover.title.top")} <br /> {t("c4.cover.title.bottom")}
                        </h2>
                        <img
                            src="/Img/Global/Numbers/04.svg"
                            alt={t("c4.cover.alts.chapter", { num: 4 })}
                            title={t("c4.cover.alts.chapter", { num: 4 })}
                            className="absolute right-0 w-[60vw] h-auto z-20"
                        />
                    </div>

                    {/* Subtítulo y línea — debajo del row */}
                    <div className="pl-4 mt-[8vh]">
                        <h3
                            className="text-white text-[4.5vw] uppercase"
                            style={{ fontFamily: "GothamBold" }}
                        >
                            {t("c4.cover.subtitle.line1")} <br /> {t("c4.cover.subtitle.line2")}
                        </h3>
                        <div className="w-[20vw] h-[1vh] bg-[#FF5200] mt-[1vh]"></div>
                    </div>
                </div>

                {/* DESKTOP: número de capítulo — intacto */}
                <div className="hidden lg:block absolute top-[20vh] right-[25vh] z-30">
                    <img
                        src="/Img/Global/Numbers/04.svg"
                        alt={t("c4.cover.alts.chapter", { num: 4 })}
                        title={t("c4.cover.alts.chapter", { num: 4 })}
                        className="w-[50vh] h-auto"
                    />
                </div>

                {/* DESKTOP: título y descripción — intacto */}
                <div className="hidden lg:block absolute top-[30vh] right-[50vh] z-30 text-white text-left">
                    <h2
                        className="text-white text-[8vh] leading-[1] max-w-[50vw] uppercase"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t("c4.cover.title.top")} <br /> {t("c4.cover.title.bottom")}
                    </h2>
                    <h3
                        className="text-white text-[4vh] mt-[20vh] uppercase"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t("c4.cover.subtitle.line1")} <br /> {t("c4.cover.subtitle.line2")}
                    </h3>
                    <div className="w-[10vw] h-[1.5vh] bg-[#FF5200] mt-[0.5vh]"></div>
                </div>

                <Link to='/'>
                {/* Logo inferior izquierdo */}
                <div className="absolute bottom-[5vh] left-4 z-30 lg:left-[5vh]">
                    <img
                        src="/Logos/LogoPequeño.svg"
                        alt={t("c4.cover.alts.greenBook")}
                        title={t("c4.cover.alts.greenBook")}
                        className="w-[35vw] h-auto lg:w-[22vh]"
                    />
                </div>
                /</Link>

                {/* Selector de idioma */}
                <div className="absolute bottom-[5vh] right-6 z-50">
                    <LanguageSelector alignment="right" />
                </div>
            </div>
        </PageSkeleton>
    );
};

export default CoverC4;
