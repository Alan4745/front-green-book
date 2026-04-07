import { useTranslation } from "react-i18next";
import PageSkeleton from "../Global/PageSkeleton";
import { Link } from "react-router-dom";

const CoverC2 = () => {
    const { t } = useTranslation();

    return (
        <PageSkeleton
            assets={[
                    "/Img/C2/ImgC2.png",
                    "/Img/Global/Numbers/02.svg",
                    "/Logos/LogoPequeño.svg"
                ]}
            tintHex="#5FCAD0"
            graceMs={2000}
            variant="cover"
        >
            <div
                className="relative min-h-screen w-screen overflow-hidden bg-no-repeat bg-center bg-cover bg-black z-10"
                style={{ backgroundImage: "url('/Img/C2/ImgC2.png')" }}
            >
                {/* Overlay oscuro suave */}
                <div className="absolute inset-0 bg-black/30 z-20" />

                {/* Número de capítulo */}
                <div className="absolute top-[20vh] right-[14vw] z-30 max-lg:top-[28vh] max-lg:right-[5vw]">
                    <img
                        src="/Img/Global/Numbers/02.svg"
                        alt={t("c2.cover.chapterAlt", { num: 2 })}
                        className="w-[50vh] h-auto max-lg:w-[35vw]"
                    />
                </div>

                {/* Título y descripción */}
                <div className="absolute top-[30vh] right-[28vw] z-30 text-white text-left max-lg:top-[22vh] max-lg:right-auto max-lg:left-[5vw] max-lg:pr-[5vw]">
                    <h2
                        className="text-white text-[4.5vw] leading-[1] max-w-[50vw] max-lg:text-[6vh] max-lg:max-w-[70vw]"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t("c2.cover.title.top")} <br /> {t("c2.cover.title.bottom")}
                    </h2>

                    {/* Subtítulo */}
                    <h3
                        className="text-white text-[2vw] mt-[3vw] max-lg:text-[2.5vh] max-lg:mt-[4vh] md:max-lg:mt-[2vh]"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t("c2.cover.subtitle.top")} <br /> {t("c2.cover.subtitle.bottom")}
                    </h3>

                    {/* Línea azul */}
                    <div className="w-[10vw] h-[1.5vh] bg-[#5FCAD0] mt-[0.5vh] max-lg:w-[15vw]" />
                </div>

                {/* Logo inferior izquierdo */}
                <Link to='/'>
                <div className="absolute bottom-[5vh] left-[3vw] z-30 max-lg:bottom-[2vh] max-lg:left-[4vw]">
                    <img
                        src="/Logos/LogoPequeño.svg"
                        alt={t("app.title")}
                        className="w-[22vh] h-auto max-lg:w-[15vh]"
                    />
                </div>
                /</Link>

                
            </div>
        </PageSkeleton>
    );
};

export default CoverC2;
