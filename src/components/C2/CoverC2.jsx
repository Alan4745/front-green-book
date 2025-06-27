import LanguageSelector from "../Global/LanguageSelector";
import MainMenu from "../Global/MainMenu";
import HoverButton from "../Global/HoverButton";

const CoverC2 = () => {
    return (
        <div
        className="relative min-h-screen w-screen overflow-hidden bg-no-repeat bg-center bg-cover bg-black z-10"
        style={{ backgroundImage: "url('/Img/C2/ImgC2.svg')" }}
        >
            {/* Overlay oscuro suave */}
            <div className="absolute inset-0 bg-black/30 z-20" />

            {/* Número de capítulo */}
            <div className="absolute top-[20vh] right-[25vh] z-30">
                <img src="/Img/Global/Numbers/02.svg" alt="Capítulo 2" className="w-[50vh] h-auto" />
            </div>

            {/* Título y descripción */}
            <div className="absolute top-[30vh] right-[60vh] z-30 text-white text-left">
                <h2 className="text-white text-[8vh] leading-[1] max-w-[50vw]" style={{fontFamily: "GothamBold"}}>
                LAS 8 REGIONES <br /> DEL CAFÉ
                </h2>

                {/* Subtítulo */}
                <h3 className="text-white text-[4vh] mt-[20vh]" style={{fontFamily: "GothamBold"}}>
                CADA REGIÓN ES UNA AVENTURA <br /> POR DESCUBRIR
                </h3>

                {/* Línea azul */}
                <div className="w-[10vw] h-[1.5vh] bg-[#5FCAD0] mt-[0.5vh]"></div>
            </div>

            {/* Logo inferior izquierdo */}
            <div className="absolute bottom-[5vh] left-[5vh] z-30">
                <img src="/Logos/LogoPequeño.svg" alt="Green Book Logo" className="w-[22vh] h-auto" />
            </div>

            {/* Selector de idioma */}
            <div className="absolute bottom-[5vh] right-12 z-50">
                <LanguageSelector />
            </div>

            {/* Menú desplegable */}
            <div className="absolute top-[2vh] right-10 z-50">
                <MainMenu />
            </div>

            {/* Botón de hover */}
            <div className="absolute top-10 left-10 z-50">
                <HoverButton
                    text="VER REGIONES"
                    textOffset={-110}       // posición inicial
                    hoverOffset={30}       // posición cuando hace hover
                />
            </div>
        </div>
    );
};

export default CoverC2;