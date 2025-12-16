import { useState, useEffect, useRef } from "react";
import ImageSlider from "./ui/ImageSlider";
import SectionCircles from "./ui/SectionCircles";
import { useTranslation } from "react-i18next";

import IngaSpuria from "../../assets/C3/IngaSpuria.jpg";
import IngaEdulis from "../../assets/C3/IngaEdulis.png";
import IngaMicheliana from "../../assets/C3/IngaMicheliana.png";

const Section1C3 = () => {
    const { t } = useTranslation();

    // Estado para el tamaño de la ventana
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Actualizar el tamaño de la ventana al cambiar el tamaño de la pantalla
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []);

    // Ajuste dinámico del tamaño del texto en el primer párrafo
    const textSizeStart = windowWidth > 1600 ? "text-2xl" : "text-lg"; // 2xl si es mayor a 1600px, xl si no

    // Ajuste dinámico del tamaño del texto en el último párrafo
    const textSizeEnd = windowWidth > 1600 ? "text-2xl" : "text-lg"; // 2xl si es mayor a 1600px, xl si no

    // Slides i18n (dentro del componente para reaccionar a cambios de idioma)
    const slides = [
        {
            src: IngaSpuria,
            title: t("c3.section1.slider.ingaSpuria.title"),
            subtitle: t("c3.section1.slider.ingaSpuria.subtitle"),
            description: t("c3.section1.slider.ingaSpuria.desc"),
            alt: t("c3.section1.slider.ingaSpuria.alt"),
            credits: t("c3.section1.slider.ingaSpuria.credits"),
        },
        {
            src: IngaEdulis,
            title: t("c3.section1.slider.ingaEdulis.title"),
            subtitle: t("c3.section1.slider.ingaEdulis.subtitle"),
            description: t("c3.section1.slider.ingaEdulis.desc"),
            alt: t("c3.section1.slider.ingaEdulis.alt"),
        },
        {
            src: IngaMicheliana,
            title: t("c3.section1.slider.ingaMicheliana.title"),
            subtitle: t("c3.section1.slider.ingaMicheliana.subtitle"),
            description: t("c3.section1.slider.ingaMicheliana.desc"),
            alt: t("c3.section1.slider.ingaMicheliana.alt"),
        },
    ];

    return (
        <section
            className="relative w-full min-h-screen bg-[#00B3BD]"
            role="region"
            aria-label={t("c3.section1.aria.section")}
        >
            <div className="absolute inset-0 flex overflow-hidden">
                {/* izquierda */}
                <div className="h-full w-full lg:w-1/3 shrink-0">
                    <ImageSlider
                        slides={slides}
                        aspect="h-full"
                        interval={5000}
                        autoPlay
                        loop
                        className="h-full w-full"
                    />
                </div>

                {/* derecha */}
                <div className="hidden lg:flex flex-1 h-full">
                    <div className="w-full h-full text-white flex flex-col">
                        <div className="w-full p-20 flex items-start justify-start">
                            <p
                                className={`${textSizeStart} max-w-[90vh]`}
                                style={{ fontFamily: "GothamNormal" }}
                            >
                                {t("c3.section1.intro.start")}{" "}
                                <span style={{ fontFamily: "GothamBold" }}>
                                    {t("c3.section1.intro.highlight", { percent: 98 })}
                                </span>{" "}
                                {t("c3.section1.intro.end")}
                            </p>
                        </div>

                        <div className="justify-center px-30">
                            <SectionCircles />
                        </div>

                        <p
                            className={`${textSizeEnd} max-w-[120vh] px-20 mt-20`}
                            style={{ fontFamily: "GothamNormal" }}
                        >
                            {t("c3.section1.outro.line1")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section1C3;