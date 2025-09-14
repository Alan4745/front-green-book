import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ZoomButton from '../Global/ZoomButton';
import CloseButton from '../Global/CloseButton'; // Importa CloseButton

const Section4C6 = () => {
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
            aria-label={t('c6.section4.aria.section')}
        >
            {/* Contenido de la sección */}
            <div className="relative w-full text-white">
                {/* Título izquierda */}
                <div className="absolute top-[30vh] left-[15vh]">
                    <h3 className="text-3xl font-bold uppercase" style={{ fontFamily: 'GothamBold' }}>
                        {t('c6.section4.left.title')}
                    </h3>
                    {/* Número grande 07 */}
                    <div className="text-[30vh] font-bold opacity-30 mt-[-17vh]" style={{ fontFamily: 'GothamBold' }}>
                        07
                    </div>
                </div>

                {/* Título derecha */}
                <div className="absolute top-[30vh] right-[15vh] text-right">
                    <h3 className="text-3xl font-bold uppercase" style={{ fontFamily: 'GothamBold' }}>
                        {t('c6.section4.right.title')}
                    </h3>
                    {/* Número grande 08 */}
                    <div className="text-[30vh] font-bold opacity-30 mt-[-17vh]" style={{ fontFamily: 'GothamBold' }}>
                        08
                    </div>
                </div>

                {/* Texto descriptivo izquierda */}
                <div className="absolute top-[60vh] left-[15vh] max-w-[45vh]">
                    <p className="text-[2vh] leading-relaxed" style={{ fontFamily: 'GothamNormal' }}>
                        {t('c6.section4.left.desc.line1')} <br />
                        {t('c6.section4.left.desc.line2')}
                    </p>
                </div>

                {/* Texto descriptivo derecha */}
                <div className="absolute top-[60vh] right-[15vh] text-right max-w-[50vh]">
                    <p className="text-[2vh] leading-relaxed" style={{ fontFamily: 'GothamNormal' }}>
                        {t('c6.section4.right.desc.line1')} <br />
                        {t('c6.section4.right.desc.line2')} <br />
                        {t('c6.section4.right.desc.line3')}
                    </p>
                </div>

                {/* Imágenes del centro - rectangulares tocando arriba y abajo */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col h-full">
                    {/* Primera imagen - rectangular, toca arriba */}
                    <div className="relative w-[60vh] h-[50vh] overflow-hidden cursor-pointer transition-all duration-500 ease-in-out hover:w-[70vh] hover:h-[60vh] hover:z-20 hover:-translate-x-[5vh] group">
                        <img
                            src="src/assets/C6/F7.svg"
                            alt={t('c6.section4.images.img1Alt')}
                            title={t('c6.section4.images.img1Alt')}
                            className="w-full h-full object-cover"
                        />
                        {/* ZoomButton posicionado en la esquina inferior derecha */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div
                                onClick={() => handleImageClick('src/assets/C6/F7.svg')}
                                title={t('c6.section4.buttons.zoom')}
                                aria-label={t('c6.section4.buttons.zoom')}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleImageClick('src/assets/C6/F7.svg')}
                            >
                                <ZoomButton />
                            </div>
                        </div>
                    </div>

                    {/* Segunda imagen - rectangular, toca abajo */}
                    <div className="relative w-[60vh] h-[50vh] overflow-hidden mt-auto cursor-pointer transition-all duration-500 ease-in-out hover:w-[70vh] hover:h-[60vh] hover:z-20 hover:-translate-x-[5vh] group">
                        <img
                            src="src/assets/C6/F8.svg"
                            alt={t('c6.section4.images.img2Alt')}
                            title={t('c6.section4.images.img2Alt')}
                            className="w-full h-full object-cover"
                        />
                        {/* ZoomButton posicionado en la esquina inferior derecha */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div
                                onClick={() => handleImageClick('src/assets/C6/F8.svg')}
                                title={t('c6.section4.buttons.zoom')}
                                aria-label={t('c6.section4.buttons.zoom')}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleImageClick('src/assets/C6/F8.svg')}
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
                    aria-label={t('c6.section4.modalAlt')}
                >
                    <div className="relative max-w-4xl max-h-4xl">
                        <img
                            src={selectedImage}
                            alt={t('c6.section4.modalAlt')}
                            className="max-w-full max-h-full object-contain"
                        />
                        {/* CloseButton posicionado fuera, alineado horizontalmente con la imagen */}
                        <div className="absolute top-4 right-4">
                            <CloseButton
                                onClick={handleCloseModal}
                                aria-label={t('c6.section4.buttons.close')}
                                title={t('c6.section4.buttons.close')}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Section4C6;