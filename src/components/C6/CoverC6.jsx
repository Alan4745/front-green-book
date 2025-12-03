import LanguageSelector from "../Global/LanguageSelector";
import MainMenu from "../Global/MainMenu";
import { useTranslation } from "react-i18next";
import PageSkeleton from "../Global/PageSkeleton";

const CoverC6 = () => {
    const { t } = useTranslation();

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
                className="relative min-h-screen w-screen overflow-hidden bg-no-repeat bg-center bg-cover bg-black z-10"
                style={{ backgroundImage: "url('/Img/C6/ImgC6.png')" }}
            >
                {/* Overlay oscuro suave */}
                <div className="absolute inset-0 bg-black/30 z-20" />

                {/* Número de capítulo */}
                <div className="absolute top-[20vh] right-[25vh] z-30">
                    <img
                        src="/Img/Global/Numbers/06.svg"
                        alt={t("c6.cover.alts.chapter", { num: 6 })}
                        title={t("c6.cover.alts.chapter", { num: 6 })}
                        className="w-[50vh] h-auto"
                    />
                </div>

                {/* Título y descripción */}
                <div className="absolute top-[25vh] right-[40vh] z-30 text-white text-left">
                    <h2
                        className="text-white text-[8vh] leading-[1] max-w-[60vw] uppercase"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t("c6.cover.title.line1")} <br />
                        {t("c6.cover.title.line2")} <br />
                        {t("c6.cover.title.line3")}
                    </h2>

                    {/* Subtítulo */}
                    <h3
                        className="text-white text-[4vh] mt-[10vh] uppercase"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t("c6.cover.subtitle")}
                    </h3>

                    {/* Línea verde */}
                    <div className="w-[10vw] h-[1.5vh] bg-[#00AE43] mt-[0.5vh]"></div>

                    {/* Texto adicional */}
                    <p
                        className="text-white text-justify text-[3vh] mt-[2vh] max-w-[35vw]"
                        style={{ fontFamily: "GothamNormal" }}
                    >
                        {t("c6.cover.body")}
                    </p>
                </div>

                {/* Logo inferior izquierdo */}
                <div className="absolute bottom-[5vh] left-[5vh] z-30">
                    <img
                        src="/Logos/LogoPequeño.svg"
                        alt={t("c6.cover.alts.greenBook")}
                        title={t("c6.cover.alts.greenBook")}
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
        </PageSkeleton>
    );
};

export default CoverC6;