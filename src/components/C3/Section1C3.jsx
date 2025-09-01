import ImageSlider from "./ui/ImageSlider";
import SectionCircles from "./ui/SectionCircles";

import IngaLaurina from "../../assets/C3/IngaLaurina.svg";
import IngaEdulis from "../../assets/C3/IngaEdulis.svg";
import IngaMicheliana from "../../assets/C3/IngaMicheliana.svg";

const slides = [
    {
        src: IngaLaurina,
        title: "Inga Laurina",
        subtitle: "Cushín",
        description:
        "La Inga laurina es un árbol tropical que da sombra a cultivos de café. Fija nitrógeno, mejorando el suelo, y tiene vainas con pulpa dulce.",
    },
    {
        src: IngaEdulis,
        title: "Inga Edulis",
        subtitle: "Pepeto de Río",
        description:
        "La Inga edulis es un árbol tropical que enriquece el suelo y produce vainas largas con pulpa dulce y refrescante.",
    },
    {
        src: IngaMicheliana,
        title: "Inga Micheliana",
        subtitle: "Chalum",
        description:
        "La Inga micheliana es un árbol tropical de rápido crecimiento que se usa en sistemas agroforestales. Enriquece el suelo fijando nitrógeno y produce vainas comestibles con pulpa dulce.",
    },
    ];

    const Section1C3 = () => {
    return (
        <section className="relative w-full min-h-screen bg-[#00B3BD]">
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
                    Desde hace más de dos siglos, el{" "}
                    <span style={{ fontFamily: "GothamBold" }}>98% de los cafetales en Guatemala</span>{" "}
                    crecen bajo la sombra de árboles que:
                </p>
                </div>

                <div className="justify-center px-30">
                <SectionCircles />
                </div>

                <p className="text-2xl max-w-[120vh] px-20 mt-20" style={{ fontFamily: "GothamNormal" }}>
                    Así, los granos maduran despacio, impulsando su calidad y perfil en taza. 
                </p>
            </div>
            </div>
        </div>
        </section>
    );
};

export default Section1C3;