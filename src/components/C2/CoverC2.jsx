import { useTranslation } from "react-i18next";
import PageSkeleton from "../Global/PageSkeleton";

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
                <div className="absolute top-[20vh] right-[25vh] z-30">
                    <img
                        src="/Img/Global/Numbers/02.svg"
                        alt={t("c2.cover.chapterAlt", { num: 2 })}
                        className="w-[50vh] h-auto"
                    />
                </div>

                {/* Título y descripción */}
                <div className="absolute top-[30vh] right-[60vh] z-30 text-white text-left">
                    <h2
                        className="text-white text-[8vh] leading-[1] max-w-[50vw]"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t("c2.cover.title.top")} <br /> {t("c2.cover.title.bottom")}
                    </h2>

                    {/* Subtítulo */}
                    <h3
                        className="text-white text-[4vh] mt-[20vh]"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t("c2.cover.subtitle.top")} <br /> {t("c2.cover.subtitle.bottom")}
                    </h3>

                    {/* Línea azul */}
                    <div className="w-[10vw] h-[1.5vh] bg-[#5FCAD0] mt-[0.5vh]" />
                </div>

                {/* Logo inferior izquierdo */}
                <div className="absolute bottom-[5vh] left-[5vh] z-30">
                    <img
                        src="/Logos/LogoPequeño.svg"
                        alt={t("app.title")}
                        className="w-[22vh] h-auto"
                    />
                </div>

                
            </div>
        </PageSkeleton>
    );
};

export default CoverC2;