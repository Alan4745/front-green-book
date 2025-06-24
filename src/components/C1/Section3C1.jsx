import LanguageSelector from "../Global/LanguageSelector";
import CarrouselColor from "../C1/ui/CarrouselColor";
import FS3 from "../../assets/C1/FS3.svg";

const Section3C1 = () => {
    // Datos de los slides
    const slidesData = [
        // Slide 1
        [
            {
                bgColor: "#DA2F7D",
                circleColor: "#DA2F7D",
                mainText: "376,019",
                description: "HECTÁREAS\nCULTIVADAS"
            },
            {
                bgColor: "#852885",
                circleColor: "#852885",
                mainText: "22",
                description: "DEPARTAMENTOS DE \n GUATEMALA TIENEN PRODUCCIÓN \n CAFETALERA"
            },
            {
                bgColor: "#00B3BD",
                circleColor: "#00B3BD",
                mainText: "261",
                description: "DE LOS 340\nMUNICIPIOS DEL\nPAÍS PRODUCEN\nCAFÉ"
            },
            {
                bgColor: "#EF7D00",
                circleColor: "#EF7D00",
                mainText: "98%",
                description: "ES CULTIVADO\nBAJO SOMBRA"
            }
        ],
        // Slide 2
        [
            {
                bgColor: "#852885",
                circleColor: "#852885",
                mainText: "22",
                description: "DEPARTAMENTOS DE \n GUATEMALA TIENEN PRODUCCIÓN \n CAFETALERA "
            },
            {
                bgColor: "#00B3BD",
                circleColor: "#00B3BD",
                mainText: "261",
                description: "DE LOS 340\nMUNICIPIOS DEL\nPAÍS PRODUCEN\nCAFÉ"
            },
            {
                bgColor: "#EF7D00",
                circleColor: "#EF7D00",
                mainText: "98%",
                description: "ES CULTIVADO\nBAJO SOMBRA"
            },
            {
                bgColor: "#00AE43",
                circleColor: "#00AE43",
                mainText: "+125K",
                description: "FAMILIAS\nCAFICULTORAS"
            }
        ],
        // Slide 3
        [
            {
                bgColor: "#00B3BD",
                circleColor: "#00B3BD",
                mainText: "261",
                description: "DE LOS 340\nMUNICIPIOS DEL\nPAÍS PRODUCEN\nCAFÉ"
            },
            {
                bgColor: "#EF7D00",
                circleColor: "#EF7D00",
                mainText: "98%",
                description: "ES CULTIVADO\nBAJO SOMBRA"
            },
            {
                bgColor: "#00AE43",
                circleColor: "#00AE43",
                mainText: "+125K",
                description: "FAMILIAS\nCAFICULTORAS"
            },
            {
                bgColor: "#DA2F7D",
                circleColor: "#DA2F7D",
                mainText: "+500K",
                description: "EMPLEOS\nGENERADOS\nPOR AÑO"
            }
        ]
    ];

    return (
        <div
            className="relative min-h-screen w-screen overflow-hidden bg-no-repeat bg-center bg-cover bg-black z-10"
            style={{ backgroundImage: `url(${FS3})` }}
        >
            {/* Título */}
            <div className="flex justify-center items-center pt-16 md:pt-20">
                <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-center" style={{fontFamily: "GothamBold"}}>
                    EN NÚMEROS
                </h2>
            </div>

            {/* Carrusel de tarjetas */}
            <div className="flex justify-center items-center mt-25 px-4">
                <CarrouselColor slides={slidesData} />
            </div>

            {/* Selector de idioma */}
            <div className="absolute bottom-8 right-12 z-20">
                <LanguageSelector />
            </div>

        </div>
    );
};

export default Section3C1;