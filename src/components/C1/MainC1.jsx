import LanguageSelector from "../Global/LanguageSelector";
import MainMenu from "../Global/MainMenu";

const Capitulo1 = () => {
    return (
        <div
        className="relative min-h-screen w-screen overflow-hidden bg-no-repeat bg-center bg-cover bg-black z-10"
        style={{ backgroundImage: "url('/Img/C1/ImgC1.svg')" }}
        >
        {/* Overlay oscuro suave */}
        <div className="absolute inset-0 bg-black/5 z-20" />

        {/* Número de capítulo */}
        <div className="absolute top-[20vh] right-[30vh] z-30">
            <img src="/Img/Global/Numbers/01.svg" alt="Capítulo 1" className="w-[50vh] h-auto" />
        </div>

        {/* Título y descripción */}
        <div className="absolute top-[35vh] right-[45vh] z-30 text-white text-left">
            <h2 className="text-white text-[8vh] leading-[1] max-w-[30vw] uppercase" style={{fontFamily: "GothamBold"}}>
            EL CAFÉ EN <br /> GUATEMALA
            </h2>

            <p className="text-[3vh] text-white/90 mt-[5vh] max-w-[60vw] leading-tight" style={{fontFamily: "GothamNormal"}}>
                Se cultiva en el 3.5% del territorio del país,<br />
                en un entorno geográfico irrepetible.
            </p>

            {/* Subtítulo */}
            <h3 className="text-white text-[4vh] uppercase mt-[6vh] tracking-wider" style={{fontFamily: "GothamBold"}}>
            LO QUE MARCA LA DIFERENCIA
            </h3>

            {/* Línea rosada */}
            <div className="w-[7.2vw] h-[1.5vh] bg-[#DA2F7D] mt-[1vh]"></div>
            </div>

            {/* Logo inferior izquierdo */}
            <div className="absolute bottom-[5vh] left-[5vh] z-30">
                <img src="/Logos/LogoPequeño.svg" alt="Green Book Logo" className="w-[22vh] h-auto" />
            </div>

            {/* Selector de idioma */}
            <div className="absolute bottom-[5vh] right-6 z-50">
                <LanguageSelector />
            </div>

            {/* Menú desplegable */}
            <div className="absolute top-[2vh] right-0 z-50">
                <MainMenu />
            </div>

        </div>
    );
};

export default Capitulo1;