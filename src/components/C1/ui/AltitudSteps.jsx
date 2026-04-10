import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const AltitudSteps = ({ mobile = false }) => {
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

    const wrapperClass = mobile
        ? "flex flex-col gap-[2vh]"
        : "absolute top-[50vh] right-[8vw] flex flex-col gap-[4vh]";

    const gridClass = mobile
        ? "grid grid-cols-[auto_12vw] gap-[3vw] items-center justify-end max-sm:grid-cols-[auto_15vw]"
        : "grid grid-cols-[auto_5vw] gap-[2vw] items-center justify-end";

    const titleClass = mobile
        ? "text-[3.8vw] leading-tight max-sm:text-[5vw]"
        : "text-[1.6vw] leading-tight";

    const subtitleClass = mobile
        ? "text-[3vw] max-sm:text-[4vw]"
        : "text-[1.3vw]";

    const circleClass = mobile
        ? "w-[12vw] h-[12vw] max-sm:w-[15vw] max-sm:h-[15vw]"
        : "w-[5vw] h-[5vw]";

    const numClass = mobile
        ? "text-[3vw] max-sm:text-[4.2vw]"
        : "text-[1.3vw]";

    return (
        <div className={wrapperClass}>
            {steps.map((step, i) => {
                const active = i === currentIndex;

                return (
                    <div key={i} className={gridClass}>
                        <div className="text-right">
                            <p
                                className={`${titleClass} ${active ? "text-[#FFA4CE]" : "text-white"}`}
                                style={{ fontFamily: active ? "GothamBold" : "GothamNormal" }}
                            >
                                {step.title}
                            </p>
                            <p
                                className={`${subtitleClass} ${active ? "text-[#FFA4CE]" : "text-white"}`}
                                style={{ fontFamily: "GothamNormal" }}
                            >
                                {step.subtitle}
                            </p>
                        </div>

                        <div
                            className={`${circleClass} rounded-full border-2 flex items-center justify-center transition-all duration-300 ${active ? "border-[#FFA4CE]" : "border-white"}`}
                        >
                            <span
                                className={`text-white ${numClass}`}
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
