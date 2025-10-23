import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import CircleFeature from "./CircleFeature";

const SectionCircles = () => {
    const { t } = useTranslation();
    
    // Estado para el tamaño de la ventana
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Actualizar el tamaño de la ventana al cambiar el tamaño de la pantalla
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Ajuste dinámico del gap-x (espaciado horizontal)
    const gapXSize = windowWidth > 1600 ? 'gap-x-2' : 'gap-x-0'; // Ajuste dinámico, 12 si es mayor a 1600px, 6 si no

    // Ajuste dinámico del gap-y (espaciado vertical)
    const gapYSize = windowWidth > 1600 ? 'gap-y-12' : 'gap-y-8'; // Ajuste dinámico, 12 si es mayor a 1600px, 8 si no

    // Ajuste dinámico del margen izquierdo
    const marginLeft = windowWidth > 1600 ? 'ml-0' : '-ml-22'; // 4px si es mayor a 1600px, 2px si no

    // Ajuste dinámico del margen superior (mt)
    const marginTop = windowWidth > 1600 ? 'mt-0' : '-mt-12'; // 12 si es mayor a 1600px, 6 si no

    return (
        <div className="w-full">
            {/* grid 2x2; la segunda fila se desplaza a la derecha */}
            <div
                className={`grid grid-cols-2 ${gapXSize} ${gapYSize} ${marginLeft} ${marginTop}`} // Aplica el margen dinámico
                role="list"
                aria-label={t("c3.section1.circles.aria.list")}
            >
                {/* fila 1 */}
                <div
                    className="justify-self-start"
                    role="listitem"
                    aria-label={t("c3.section1.circles.itemLabel", {
                        num: "01",
                        text: t("c3.section1.circles.f1")
                    })}
                >
                    <CircleFeature number="01" text={t("c3.section1.circles.f1")} position="top" speedSec={8} />
                </div>

                <div
                    className="justify-self-start"
                    role="listitem"
                    aria-label={t("c3.section1.circles.itemLabel", {
                        num: "03",
                        text: t("c3.section1.circles.f3")
                    })}
                >
                    <CircleFeature number="03" text={t("c3.section1.circles.f3")} position="right" speedSec={8} />
                </div>

                {/* fila 2 (offset a la derecha) */}
                <div
                    className="justify-self-start translate-x-50"
                    role="listitem"
                    aria-label={t("c3.section1.circles.itemLabel", {
                        num: "02",
                        text: t("c3.section1.circles.f2")
                    })}
                >
                    <CircleFeature number="02" text={t("c3.section1.circles.f2")} position="left" speedSec={8} />
                </div>

                <div
                    className="justify-self-start translate-x-50"
                    role="listitem"
                    aria-label={t("c3.section1.circles.itemLabel", {
                        num: "04",
                        text: t("c3.section1.circles.f4", { pct: "70%" })
                    })}
                >
                    <CircleFeature number="04" text={t("c3.section1.circles.f4", { pct: "70%" })} position="bottom" speedSec={8} />
                </div>
            </div>
        </div>
    );
};

export default SectionCircles;