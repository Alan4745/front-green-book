import ImageSlider from "./ui/ImageSlider";
import SectionCircles from "./ui/SectionCircles";
import { useTranslation } from "react-i18next";

import IngaLaurina from "../../assets/C3/IngaLaurina.svg";
import IngaEdulis from "../../assets/C3/IngaEdulis.svg";
import IngaMicheliana from "../../assets/C3/IngaMicheliana.svg";

const Section1C3 = () => {
    const { t } = useTranslation();

    // Slides i18n (dentro del componente para reaccionar a cambios de idioma)
    const slides = [
        {
            src: IngaLaurina,
            title: t("c3.section1.slider.ingaLaurina.title"),
            subtitle: t("c3.section1.slider.ingaLaurina.subtitle"),
            description: t("c3.section1.slider.ingaLaurina.desc"),
            alt: t("c3.section1.slider.ingaLaurina.alt")
        },
        {
            src: IngaEdulis,
            title: t("c3.section1.slider.ingaEdulis.title"),
            subtitle: t("c3.section1.slider.ingaEdulis.subtitle"),
            description: t("c3.section1.slider.ingaEdulis.desc"),
            alt: t("c3.section1.slider.ingaEdulis.alt")
        },
        {
            src: IngaMicheliana,
            title: t("c3.section1.slider.ingaMicheliana.title"),
            subtitle: t("c3.section1.slider.ingaMicheliana.subtitle"),
            description: t("c3.section1.slider.ingaMicheliana.desc"),
            alt: t("c3.section1.slider.ingaMicheliana.alt")
        }
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
                            <p className="text-2xl max-w-[90vh]" style={{ fontFamily: "GothamNormal" }}>
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

                        <p className="text-2xl max-w-[120vh] px-20 mt-20" style={{ fontFamily: "GothamNormal" }}>
                            {t("c3.section1.outro.line1")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section1C3;