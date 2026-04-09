import { useTranslation } from "react-i18next";
import CarrouselColor from "../C1/ui/CarrouselColor";
import LanguageSelector from "../Global/LanguageSelector";

import FS3 from "../../assets/C1/FS3.png";
import MapaS3 from "../../assets/C1/MapaS3.svg";
import Porcent98 from "../../assets/C1/Porcent98.svg";

const Section3C1 = () => {
    const { t } = useTranslation();

    // Datos de los slides (textos desde i18n)
    const slidesData = [
        {
            bgColor: "#DA2F7D",
            circleColor: "#DA2F7D",
            mainText: t("c1.section3.slides.0.main"),
            description: t("c1.section3.slides.0.desc")
        },
        {
            bgColor: "#852885",
            circleColor: "#852885",
            image: MapaS3,
            imageWidth: "10vw",
            imageHeight: "10vw",
            description: t("c1.section3.slides.1.desc")
        },
        {
            bgColor: "#00B3BD",
            circleColor: "#00B3BD",
            mainText: t("c1.section3.slides.2.main"),
            description: t("c1.section3.slides.2.desc")
        },
        {
            bgColor: "#EF7D00",
            circleColor: "#EF7D00",
            image: Porcent98,
            imageWidth: "8vw",
            imageHeight: "8vw",
            description: t("c1.section3.slides.3.desc")
        },
        {
            bgColor: "#00AE43",
            circleColor: "#00AE43",
            mainText: t("c1.section3.slides.4.main"),
            description: t("c1.section3.slides.4.desc")
        },
        {
            bgColor: "#FFD500",
            circleColor: "#FFD500",
            mainText: t("c1.section3.slides.5.main"),
            description: t("c1.section3.slides.5.desc")
        }
    ];

    return (
        <div
            className="relative h-auto w-screen overflow-hidden bg-no-repeat bg-center bg-cover bg-black z-10 pb-20"
            style={{ backgroundImage: `url(${FS3})` }}
        >
            {/* Título */}
            <div className="flex justify-center items-center pt-20">
                <h2
                    className="text-white text-6xl font-bold tracking-wider text-center uppercase max-lg:text-3xl max-lg:px-4"
                    style={{ fontFamily: "GothamBold" }}
                >
                    {t("c1.section3.title")}
                </h2>
            </div>

            {/* Grid de tarjetas */}
            <div className="flex justify-center items-center mt-10 px-10">
                <CarrouselColor slides={slidesData} />
            </div>

            {/* Botón de idioma */}
            <div className="absolute bottom-10 right-10 z-20">
                <LanguageSelector alignment="right"  />
            </div>
        </div>
    );
};

export default Section3C1;