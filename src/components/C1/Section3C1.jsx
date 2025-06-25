import CarrouselColor from "../C1/ui/CarrouselColor";
import FS3 from "../../assets/C1/FS3.svg";
import MapaS3 from "../../assets/C1/MapaS3.svg";
import Porcent98 from "../../assets/C1/Porcent98.svg";

const Section3C1 = () => {
    // Datos de los slides
    const slidesData = [
    {
        bgColor: "#DA2F7D",
        circleColor: "#DA2F7D",
        mainText: "376,019",
        description: "HECTÁREAS\nCULTIVADAS"
    },
    {
        bgColor: "#852885",
        circleColor: "#852885",
        image: MapaS3,
        imageWidth: "18vh",
        imageHeight: "18vh",
        description: "22 DEPARTAMENTOS \n DE GUATEMALA \n TIENEN PRODUCCIÓN \n CAFETALERA"
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
        image: Porcent98,
        imageWidth: "15vh",
        imageHeight: "15vh",
        description: "ES CULTIVADO\nBAJO SOMBRA"
    },
    {
        bgColor: "#00AE43",
        circleColor: "#00AE43",
        mainText: "+125K",
        description: "FAMILIAS\nCAFICULTORAS"
    },
    {
        bgColor: "#FFD500",
        circleColor: "#FFD500",
        mainText: "+500K",
        description: "EMPLEOS\nGENERADOS\nPOR AÑO"
    }
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
            
        </div>
    );
};

export default Section3C1;