import { useNavigate } from 'react-router-dom'; // ✅ Importa el hook
import { useState } from 'react';
import ZoomButton from '../Global/ZoomButton';
import CloseButton from '../Global/CloseButton'; // Importa CloseButton

const Section1C1 = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate(); // ✅ Inicializa el hook

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="relative min-h-screen w-full flex bg-[#DA2F7D] bg-no-repeat bg-center bg-cover z-10">
        {/* Contenido de la sección */}
            <div className="relative w-full text-white">
                {/* Título "Altitud" en la esquina superior izquierda */}
                <div className="absolute top-[30vh] left-[15vh]">
                <h3 className="text-3xl font-bold uppercase" style={{ fontFamily: "GothamBold" }}>
                    Altitud
                </h3>
                {/* Número grande 01 como botón que redirige */}
                    <button
                        onClick={() => navigate('/c1/section4')} // ✅ Redirige a la sección 4
                        className="text-[30vh] font-bold opacity-30 mt-[-13vh] cursor-pointer transition-transform hover:scale-105"
                        style={{ fontFamily: 'GothamBold' }}
                    >
                        01
                    </button>
                </div>

                {/* Título "Más de 300 microclimas" en la esquina superior derecha */}
                <div className="absolute top-[30vh] right-[15vh] text-right">
                <h3 className="text-3xl font-bold uppercase" style={{ fontFamily: "GothamBold" }}>
                    Más de 300 <br /> microclimas
                </h3>
                {/* Número grande 02 */}
                <div className="text-[30vh] font-bold opacity-30 mt-[-17vh]" style={{ fontFamily: "GothamBold" }}>
                    02
                </div>
                </div>

                {/* Texto descriptivo para Altitud */}
                <div className="absolute top-[60vh] left-[15vh] max-w-xs">
                <p className="text-[2vh] leading-relaxed" style={{ fontFamily: "GothamNormal" }}>
                    Cultivado en regiones montañosas<br />
                    entre 1,300 y 2,000 msnm.
                </p>
                </div>

                {/* Texto descriptivo para Microclimas */}
                <div className="absolute top-[60vh] right-[15vh] text-right">
                <p className="text-[2vh] leading-relaxed" style={{ fontFamily: "GothamNormal" }}>
                    Volcanes activos, océanos, lagos y<br />
                    diversidad natural hacen que cada<br />
                    región de café tenga un perfil único.
                </p>
                </div>

                {/* Imágenes del centro - rectangulares tocando arriba y abajo */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col h-full">
                {/* Primera imagen - rectangular, toca arriba */}
                <div className="relative w-[60vh] h-[50vh] overflow-hidden cursor-pointer transition-all duration-500 ease-in-out hover:w-[70vh] hover:h-[60vh] hover:z-20 hover:-translate-x-[5vh] group">
                    <img
                    src="src/assets/C1/F1.svg"
                    alt="Imagen 1"
                    className="w-full h-full object-cover"
                    />
                    {/* ZoomButton posicionado en la esquina inferior derecha */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div onClick={() => handleImageClick("src/assets/C1/F1.svg")}>
                        <ZoomButton />
                    </div>
                    </div>
                </div>

                {/* Segunda imagen - rectangular, toca abajo */}
                <div className="relative w-[60vh] h-[50vh] overflow-hidden mt-auto cursor-pointer transition-all duration-500 ease-in-out hover:w-[70vh] hover:h-[60vh] hover:z-20 hover:-translate-x-[5vh] group">
                    <img
                    src="src/assets/C1/F2.svg"
                    alt="Imagen 2"
                    className="w-full h-full object-cover"
                    />
                    {/* ZoomButton posicionado en la esquina inferior derecha */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div onClick={() => handleImageClick("src/assets/C1/F2.svg")}>
                        <ZoomButton />
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Modal para imagen ampliada */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                <div className="relative max-w-4xl max-h-4xl">
                    <img
                    src={selectedImage}
                    alt="Imagen ampliada"
                    className="max-w-full max-h-full object-contain"
                    />
                    {/* CloseButton posicionado fuera, alineado horizontalmente con la imagen */}
                    <div className="absolute top-4 right-4">
                        <CloseButton onClick={handleCloseModal} />
                    </div>
                </div>
                </div>
            )}
        </div>
    );
};

export default Section1C1;