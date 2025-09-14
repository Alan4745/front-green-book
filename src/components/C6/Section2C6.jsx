import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ZoomButton from '../Global/ZoomButton';
import CloseButton from '../Global/CloseButton'; // Importa CloseButton

const Section2C6 = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const { t } = useTranslation();

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div
            className="relative min-h-screen w-full flex bg-[#00AE43] bg-no-repeat bg-center bg-cover z-10"
            role="region"
            aria-label={t("c6.section2.aria.section")}
        >
            {/* Contenido de la sección */}
            <div className="relative w-full text-white">
                {/* Título izquierda */}
                <div className="absolute top-[30vh] left-[15vh]">
                    <h3 className="text-3xl font-bold uppercase" style={{ fontFamily: "GothamBold" }}>
                        {t("c6.section2.left.title.top")} <br /> {t("c6.section2.left.title.bottom")}
                    </h3>
                    {/* Número grande 03 */}
                    <div className="text-[30vh] font-bold opacity-30 mt-[-17vh]" style={{ fontFamily: "GothamBold" }}>
                        03
                    </div>
                </div>

                {/* Título derecha */}
                <div className="absolute top-[30vh] right-[15vh] text-right">
                    <h3 className="text-3xl font-bold uppercase" style={{ fontFamily: "GothamBold" }}>
                        {t("c6.section2.right.title.top")} <br /> {t("c6.section2.right.title.bottom")}
                    </h3>
                    {/* Número grande 04 */}
                    <div className="text-[30vh] font-bold opacity-30 mt-[-17vh]" style={{ fontFamily: "GothamBold" }}>
                        04
                    </div>
                </div>

                {/* Texto descriptivo izquierda */}
                <div className="absolute top-[60vh] left-[15vh] max-w-[40vh]">
                    <p className="text-[2vh] leading-relaxed" style={{ fontFamily: "GothamNormal" }}>
                        {t("c6.section2.left.desc.line1")} <br />
                        {t("c6.section2.left.desc.line2")} <br />
                        {t("c6.section2.left.desc.line3")}
                    </p>
                </div>

                {/* Texto descriptivo derecha */}
                <div className="absolute top-[60vh] right-[15vh] text-right max-w-[50vh]">
                    <p className="text-[2vh] leading-relaxed" style={{ fontFamily: "GothamNormal" }}>
                        {t("c6.section2.right.desc.line1")} <br />
                        {t("c6.section2.right.desc.line2")} <br />
                        {t("c6.section2.right.desc.line3")}
                    </p>
                </div>

                {/* Imágenes del centro - rectangulares tocando arriba y abajo */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col h-full">
                    {/* Primera imagen */}
                    <div className="relative w-[60vh] h-[50vh] overflow-hidden cursor-pointer transition-all duration-500 ease-in-out hover:w-[70vh] hover:h-[60vh] hover:z-20 hover:-translate-x-[5vh] group">
                        <img
                            src="src/assets/C6/F3.svg"
                            alt={t("c6.section2.images.img1Alt")}
                            title={t("c6.section2.images.img1Alt")}
                            className="w-full h-full object-cover"
                        />
                        {/* ZoomButton esquina inferior derecha */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div
                                onClick={() => handleImageClick("src/assets/C6/F3.svg")}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleImageClick("src/assets/C6/F3.svg")}
                                title={t("c6.section2.buttons.zoom")}
                                aria-label={t("c6.section2.buttons.zoom")}
                            >
                                <ZoomButton />
                            </div>
                        </div>
                    </div>

                    {/* Segunda imagen */}
                    <div className="relative w-[60vh] h-[50vh] overflow-hidden mt-auto cursor-pointer transition-all duration-500 ease-in-out hover:w-[70vh] hover:h-[60vh] hover:z-20 hover:-translate-x-[5vh] group">
                        <img
                            src="src/assets/C6/F4.svg"
                            alt={t("c6.section2.images.img2Alt")}
                            title={t("c6.section2.images.img2Alt")}
                            className="w-full h-full object-cover"
                        />
                        {/* ZoomButton esquina inferior derecha */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div
                                onClick={() => handleImageClick("src/assets/C6/F4.svg")}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleImageClick("src/assets/C6/F4.svg")}
                                title={t("c6.section2.buttons.zoom")}
                                aria-label={t("c6.section2.buttons.zoom")}
                            >
                                <ZoomButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal para imagen ampliada */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                    role="dialog"
                    aria-modal="true"
                    aria-label={t("c6.section2.modalAlt")}
                >
                    <div className="relative max-w-4xl max-h-4xl">
                        <img
                            src={selectedImage}
                            alt={t("c6.section2.modalAlt")}
                            className="max-w-full max-h-full object-contain"
                        />
                        {/* CloseButton posicionado fuera */}
                        <div className="absolute top-4 right-4">
                            <CloseButton
                                onClick={handleCloseModal}
                                aria-label={t("c6.section2.buttons.close")}
                                title={t("c6.section2.buttons.close")}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Section2C6;