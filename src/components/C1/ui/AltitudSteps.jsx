import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const AltitudSteps = () => {
    const { t, i18n } = useTranslation();

    // Pasos desde i18n; si falta el bloque en JSON, usamos tu fallback original
    const steps = useMemo(() => {
        const arr = t("c1.section4.steps", { returnObjects: true });
        if (Array.isArray(arr) && arr.length > 0) return arr;
        return [
            { title: "Estríctamente Duro (SHB):", subtitle: "1,370 m o más" },
            { title: "Semi-Duro - Duro:", subtitle: "1,066 – 1,370 m" },
            { title: "Prima - Extra Prima:", subtitle: "762 – 1,066 m" }
        ];
    }, [t, i18n.resolvedLanguage]);

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % steps.length);
        }, 5000);
        return () => clearInterval(id);
    }, [steps.length]);

    return (
        <div className="absolute top-[50vh] right-[8vw] flex flex-col gap-[4vh] max-lg:relative max-lg:top-auto max-lg:right-auto max-lg:px-[5vw] max-lg:py-[4vh] max-lg:gap-[3vh]">
            {steps.map((step, i) => {
                const active = i === currentIndex;

                return (
                    <div
                        key={i}
                        className="grid grid-cols-[auto_8vh] gap-[3vh] items-center justify-end"
                    >
                        {/* Texto alineado al lado izquierdo del número */}
                        <div className="text-right">
                            <p
                                className={`text-[3vh] leading-tight ${active ? "text-[#FFA4CE]" : "text-white"}`}
                                style={{ fontFamily: active ? "GothamBold" : "GothamNormal" }}
                            >
                                {step.title}
                            </p>
                            <p
                                className={`text-[2.5vh] ${active ? "text-[#FFA4CE]" : "text-white"}`}
                                style={{ fontFamily: "GothamNormal" }}
                            >
                                {step.subtitle}
                            </p>
                        </div>

                        {/* Número con borde circular */}
                        <div
                            className={`w-[8vh] h-[8vh] rounded-full border-[0.4vh] flex items-center justify-center transition-all duration-300 ${active ? "border-[#FFA4CE]" : "border-white"}`}
                        >
                            <span
                                className="text-white text-[2.6vh]"
                                style={{ fontFamily: "GothamNormal" }}
                            >
                                0{i + 1}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AltitudSteps;