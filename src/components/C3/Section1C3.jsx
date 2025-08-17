import React from "react";
import ImageSlider from "./ui/ImageSlider";

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
        {/* Layout en 2 columnas */}
        <div className="absolute inset-0 flex overflow-hidden">
            {/* IZQUIERDA: slider pegado y a toda altura */}
            <div className="h-full w-full lg:w-1/3 shrink-0">
            <ImageSlider
                slides={slides}
                aspect="h-full"        // ocupa todo el alto disponible
                interval={5000}
                autoPlay
                loop
                className="h-full w-full" // el carrusel llena su columna
            />
            </div>

            {/* DERECHA: contenido (placeholder, reemplaza con tu UI) */}
            <div className="hidden lg:flex flex-1 h-full">
            <div className="m-auto max-w-3xl w-full p-10 text-white">
                {/* Tu contenido va aquí */}
            </div>
            </div>
        </div>
        </section>
    );
};

export default Section1C3;