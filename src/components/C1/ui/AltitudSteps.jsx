import { useEffect, useState } from "react";

const ALTITUD_DATA = [
  { title: "Estríctamente Duro (SHB):", subtitle: "1,370 m o más" },
  { title: "Semi-Duro - Duro:", subtitle: "1,066 – 1,370 m" },
  { title: "Prima - Extra Prima:", subtitle: "762 – 1,066 m" },
];

const AltitudSteps = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ALTITUD_DATA.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute top-[50vh] right-[15vh] flex flex-col gap-[4vh]">
      {ALTITUD_DATA.map((step, i) => {
        const active = i === currentIndex;

        return (
          <div
            key={i}
            className="grid grid-cols-[auto_8vh] gap-[3vh] items-center justify-end"
          >
            {/* Texto alineado al lado izquierdo del número */}
            <div className="text-right">
              <p
                className={`text-[3vh] leading-tight ${
                  active
                    ? "text-[#FFA4CE]"
                    : "text-white"
                }`}
                style={{
                  fontFamily: active ? "GothamBold" : "GothamNormal",
                }}
              >
                {step.title}
              </p>
              <p
                className={`text-[2.5vh] ${
                  active ? "text-[#FFA4CE]" : "text-white"
                }`}
                style={{
                  fontFamily: "GothamNormal",
                }}
              >
                {step.subtitle}
              </p>
            </div>

            {/* Número con borde circular */}
            <div
              className={`w-[8vh] h-[8vh] rounded-full border-[0.4vh] flex items-center justify-center transition-all duration-300 ${
                active ? "border-[#FFA4CE]" : "border-white"
              }`}
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