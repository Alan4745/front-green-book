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

                {/* Número de capítulo */}
                <div className="absolute top-[20vh] right-[25vh] z-30">
                    <img
                        src="/Img/Global/Numbers/04.svg"
                        alt={t("c4.cover.alts.chapter", { num: 4 })}
                        title={t("c4.cover.alts.chapter", { num: 4 })}
                        className="w-[50vh] h-auto"
                    />
                </div>

                {/* Título y descripción */}
                <div className="absolute top-[30vh] right-[50vh] z-30 text-white text-left">
                    <h2
                        className="text-white text-[8vh] leading-[1] max-w-[50vw] uppercase"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t("c4.cover.title.top")} <br /> {t("c4.cover.title.bottom")}
                    </h2>

                    {/* Subtítulo */}
                    <h3
                        className="text-white text-[4vh] mt-[20vh] uppercase"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t("c4.cover.subtitle.line1")} <br /> {t("c4.cover.subtitle.line2")}
                    </h3>

                    {/* Línea azul (naranja en C4) */}
                    <div className="w-[10vw] h-[1.5vh] bg-[#FF5200] mt-[0.5vh]"></div>
                </div>

                <Link to='/'>
                {/* Logo inferior izquierdo */}
                <div className="absolute bottom-[5vh] left-[5vh] z-30">
                    <img
                        src="/Logos/LogoPequeño.svg"
                        alt={t("c4.cover.alts.greenBook")}
                        title={t("c4.cover.alts.greenBook")}
                        className="w-[22vh] h-auto"
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