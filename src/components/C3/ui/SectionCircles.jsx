import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import CircleFeature from "./CircleFeature";

const SectionCircles = () => {
  const { t } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const items = [
    {
      number: "01",
      text: t("c3.section1.circles.f1"),
      position: "top",
      className: "col-start-1 row-start-1 justify-self-center max-lg:col-start-1 max-lg:col-span-2 max-lg:row-start-1",
    },
    {
      number: "02",
      text: t("c3.section1.circles.f2"),
      position: "right",
      className: "col-start-3 row-start-1 justify-self-center max-lg:col-start-3 max-lg:col-span-2 max-lg:row-start-1",
    },
    {
      number: "03",
      text: t("c3.section1.circles.f3"),
      position: "top",
      className: "col-start-5 row-start-1 justify-self-center max-lg:col-start-5 max-lg:col-span-2 max-lg:row-start-1",
    },
    {
      number: "04",
      text: t("c3.section1.circles.f4", { pct: "70%" }),
      position: "left",
      className: "col-start-2 row-start-2 justify-self-center max-lg:col-start-2 max-lg:col-span-2 max-lg:row-start-2",
    },
    {
      number: "05",
      text: t("c3.section1.circles.f5"),
      position: "bottom",
      className: "col-start-4 row-start-2 justify-self-center max-lg:col-start-4 max-lg:col-span-2 max-lg:row-start-2",
    },
  ];

  const gapXSize = windowWidth > 1600 ? "gap-x-2" : windowWidth >= 1024 ? "gap-x-0" : "gap-x-1";
  const gapYSize = windowWidth > 1600 ? "gap-y-12" : windowWidth >= 1024 ? "gap-y-6" : "gap-y-6";
  const marginLeft = windowWidth > 1600 ? "ml-0" : windowWidth >= 1024 ? "-ml-8" : "ml-0";
  const marginTop = windowWidth > 1600 ? "mt-0" : windowWidth >= 1024 ? "-mt-8" : "mt-0";

  const activeItem = items[activeIndex];
  const goToPrev = () => setActiveIndex((current) => (current === 0 ? items.length - 1 : current - 1));
  const goToNext = () => setActiveIndex((current) => (current === items.length - 1 ? 0 : current + 1));

  return (
    <div className="w-full">
      <div
        className={`grid grid-cols-5 max-lg:grid-cols-6 max-sm:hidden ${gapXSize} ${gapYSize} ${marginLeft} ${marginTop}`}
        role="list"
        aria-label={t("c3.section1.circles.aria.list")}
      >
        {items.map((item) => (
          <div
            key={item.number}
            className={item.className}
            role="listitem"
            aria-label={t("c3.section1.circles.itemLabel", {
              num: item.number,
              text: item.text,
            })}
          >
            <CircleFeature
              colorAro="#7AD7DD"
              colorMovimiento="#00333B"
              colorNumero="#073E58"
              transform="translate(100%, 0%)"
              number={item.number}
              text={item.text}
              position={item.position}
              speedSec={8}
            />
          </div>
        ))}
      </div>

      <div
        className="hidden max-sm:flex flex-col items-center gap-5"
        role="group"
        aria-label={t("c3.section1.circles.aria.list")}
      >
        <div className="grid w-full grid-cols-[40px_minmax(0,1fr)_40px] items-center gap-3 px-1">
          <button
            type="button"
            onClick={goToPrev}
            className="h-10 w-10 rounded-full border-2 border-white text-white grid place-items-center justify-self-start"
            aria-label="Anterior"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <CircleFeature
            colorAro="#7AD7DD"
            colorMovimiento="#00333B"
            colorNumero="#073E58"
            transform="translate(100%, 0%)"
            number={activeItem.number}
            text={activeItem.text}
            position={activeItem.position}
            speedSec={8}
            size={280}
            className="justify-self-center"
          />

          <button
            type="button"
            onClick={goToNext}
            className="h-10 w-10 rounded-full border-2 border-white text-white grid place-items-center justify-self-end"
            aria-label="Siguiente"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-center gap-2">
          {items.map((item, index) => (
            <button
              key={item.number}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${index === activeIndex ? "w-6 bg-white" : "w-2 bg-white/60"}`}
              aria-label={`Ver beneficio ${item.number}`}
              aria-current={index === activeIndex ? "true" : "false"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionCircles;
