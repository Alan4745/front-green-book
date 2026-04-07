import LanguageSelector from "../Global/LanguageSelector";
import { useTranslation } from "react-i18next";
import PageSkeleton from "../Global/PageSkeleton";
import { Link } from "react-router-dom";

const CoverC3 = () => {
    const { t } = useTranslation();

    return (
        <PageSkeleton
            assets={[
                    "/Img/C3/ImgC3.png",
                    "/Img/Global/Numbers/03.svg",
                    "/Logos/LogoPequeño.svg"
                ]}
            tintHex="#00B3BD"
            graceMs={2000}
            variant="cover"
        >
            <div
                className="relative min-h-screen w-screen overflow-hidden bg-no-repeat bg-center bg-cover bg-black z-10"
                style={{ backgroundImage: "url('/Img/C3/ImgC3.png')" }}
            >
                {/* Overlay oscuro suave */}
                <div className="absolute inset-0 bg-black/30 z-20" />

                {/* Número de capítulo */}
                <div className="absolute top-[20vh] right-[25vh] z-30 min-[1024px]:max-[1200px]:right-[17vw] max-lg:top-[28vh] max-lg:right-[5vw]">
                    <img
                        src="/Img/Global/Numbers/03.svg"
                        alt={t("c3.cover.alts.chapter", { num: 3 })}
                        title={t("c3.cover.alts.chapter", { num: 3 })}
                        className="w-[50vh] h-auto min-[1024px]:max-[1200px]:w-[28vw] max-lg:w-[35vw]"
                    />
                </div>

                {/* Título y descripción */}
                <div className="absolute top-[30vh] right-[60vh] z-30 text-white text-left min-[1024px]:max-[1200px]:right-[40vw] max-lg:top-[22vh] max-lg:right-auto max-lg:left-[5vw] max-lg:pr-[5vw]">
                    <h2
                        className="text-white text-[8vh] leading-[1] max-w-[50vw] uppercase min-[1024px]:max-[1200px]:text-[6.5vh] min-[1024px]:max-[1200px]:max-w-[45vw] max-lg:text-[4.6vh] max-lg:max-w-[90vw]"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t("c3.cover.title.top")} <br /> {t("c3.cover.title.bottom")}
                    </h2>

                    {/* Subtítulo */}
                    <h3
                        className="text-white text-[4vh] mt-[20vh] uppercase min-[1024px]:max-[1200px]:text-[3vh] min-[1024px]:max-[1200px]:mt-[8vh] max-lg:text-[2.5vh] max-lg:mt-[4vh] md:max-lg:mt-[2vh]"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t("c3.cover.subtitle")}
                    </h3>

                    {/* Línea azul */}
                    <div className="w-[10vw] h-[1.5vh] bg-[#00B3BD] mt-[0.5vh] max-lg:w-[15vw]"></div>
                </div>

                <Link to='/'>
                {/* Logo inferior izquierdo */}
                <div className="absolute bottom-[5vh] left-[5vh] z-30 min-[1024px]:max-[1200px]:left-[3vw] max-lg:bottom-[2vh] max-lg:left-[4vw]">
                    <img
                        src="/Logos/LogoPequeño.svg"
                        alt={t("c3.cover.alts.greenBook")}
                        title={t("c3.cover.alts.greenBook")}
                        className="w-[22vh] h-auto min-[1024px]:max-[1200px]:w-[12vw] max-lg:w-[15vh]"
                    />
                </div>
                </Link>

                {/* Selector de idioma */}
                <div className="absolute bottom-[5vh] right-6 z-50 max-lg:bottom-[2vh] max-lg:right-4">
                    <LanguageSelector alignment="right" />
                </div>

                
            </div>
        </PageSkeleton>
    );
};

export default CoverC3;
