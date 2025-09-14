import CircleFeature from "./CircleFeature";
import { useTranslation } from "react-i18next";

const SectionCircles = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full">
            {/* grid 2x2; la segunda fila se desplaza a la derecha */}
            <div
                className="grid grid-cols-2 gap-y-12"
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