import LanguageSelector from "../Global/LanguageSelector";
import MainMenu from "../Global/MainMenu";
import { useTranslation } from "react-i18next";

const CoverC5 = () => {
    const { t } = useTranslation();

    return (
        <div
            className="relative min-h-screen w-screen overflow-hidden bg-no-repeat bg-center bg-cover bg-black z-10"
            style={{ backgroundImage: "url('/Img/C5/ImgC5.svg')" }}
        >
            {/* Overlay oscuro suave */}
            <div className="absolute inset-0 bg-black/30 z-20" />

            {/* Número de capítulo */}
            <div className="absolute top-[20vh] right-[25vh] z-30">
                <img
                    src="/Img/Global/Numbers/05.svg"
                    alt={t("c5.cover.alts.chapter", { num: 5 })}
                    title={t("c5.cover.alts.chapter", { num: 5 })}
                    className="w-[50vh] h-auto"
                />
            </div>

            {/* Título y descripción */}
            <div className="absolute top-[30vh] right-[55vh] z-30 text-white text-left">
                <h2
                    className="text-white text-[8vh] leading-[1] max-w-[60vw] uppercase"
                    style={{ fontFamily: "GothamBold" }}
                >
                    {t("c5.cover.title.top")} <br /> {t("c5.cover.title.bottom")}
                </h2>

                {/* Subtítulo */}
                <h3
                    className="text-white text-[4vh] mt-[20vh] uppercase"
                    style={{ fontFamily: "GothamBold" }}
                >
                    {t("c5.cover.subtitle.line1")} <br /> {t("c5.cover.subtitle.line2")}
                </h3>

                {/* Línea morada */}
                <div className="w-[10vw] h-[1.5vh] bg-[#562E91] mt-[0.5vh]"></div>
            </div>

            {/* Logo inferior izquierdo */}
            <div className="absolute bottom-[5vh] left-[5vh] z-30">
                <img
                    src="/Logos/LogoPequeño.svg"
                    alt={t("c5.cover.alts.greenBook")}
                    title={t("c5.cover.alts.greenBook")}
                    className="w-[22vh] h-auto"
                />
            </div>

            {/* Selector de idioma */}
            <div className="absolute bottom-[5vh] right-6 z-50">
                <LanguageSelector />
            </div>

            {/* Menú desplegable */}
            <div className="absolute top-[2vh] right-0 z-50">
                <MainMenu />
            </div>
        </div>
    );
};

export default CoverC5;