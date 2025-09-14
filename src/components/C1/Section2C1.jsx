import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ZoomButton from '../Global/ZoomButton';
import CloseButton from '../Global/CloseButton';

const Section1C2 = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const { t } = useTranslation();

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
            {/* Título izquierda */}
            <div className="absolute top-[30vh] left-[15vh]">
            <h3 className="text-3xl font-bold uppercase" style={{ fontFamily: 'GothamBold' }}>
                {t('c1.section2.left.title')}
            </h3>
            {/* Número grande 03 */}
            <div className="text-[30vh] font-bold opacity-30 mt-[-13vh]" style={{ fontFamily: 'GothamBold' }}>
                03
            </div>
            </div>

            {/* Título derecha */}
            <div className="absolute top-[30vh] right-[15vh] text-right">
            <h3 className="text-3xl font-bold uppercase" style={{ fontFamily: 'GothamBold' }}>
                {t('c1.section2.right.title.top')} <br /> {t('c1.section2.right.title.bottom')}
            </h3>
            {/* Número grande 04 */}
            <div className="text-[30vh] font-bold opacity-30 mt-[-17vh]" style={{ fontFamily: 'GothamBold' }}>
                04
            </div>
            </div>

            {/* Texto descriptivo izquierda */}
            <div className="absolute top-[60vh] left-[15vh] max-w-xs">
            <p className="text-[2vh] leading-relaxed" style={{ fontFamily: 'GothamNormal' }}>
                {t('c1.section2.left.descLine1')} <br />
                {t('c1.section2.left.descLine2')}
            </p>
            </div>

            {/* Texto descriptivo derecha */}
            <div className="absolute top-[60vh] right-[15vh] text-right">
            <p className="text-[2vh] leading-relaxed" style={{ fontFamily: 'GothamNormal' }}>
                {t('c1.section2.right.descLine1')} <br />
                {t('c1.section2.right.descLine2')}
            </p>
            </div>

            {/* Imágenes centro */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col h-full">
            {/* Primera imagen */}
            <div className="relative w-[60vh] h-[50vh] overflow-hidden cursor-pointer transition-all duration-500 ease-in-out hover:w-[70vh] hover:h-[60vh] hover:z-20 hover:-translate-x-[5vh] group">
                <img
                src="src/assets/C1/F3.svg"
                alt={t('c1.section2.images.img1Alt')}
                className="w-full h-full object-cover"
                />
                {/* Zoom */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div onClick={() => handleImageClick('src/assets/C1/F3.svg')}>
                    <ZoomButton />
                </div>
                </div>
            </div>

            {/* Segunda imagen */}
            <div className="relative w-[60vh] h-[50vh] overflow-hidden mt-auto cursor-pointer transition-all duration-500 ease-in-out hover:w-[70vh] hover:h-[60vh] hover:z-20 hover:-translate-x-[5vh] group">
                <img
                src="src/assets/C1/F4.svg"
                alt={t('c1.section2.images.img2Alt')}
                className="w-full h-full object-cover"
                />
                {/* Zoom */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div onClick={() => handleImageClick('src/assets/C1/F4.svg')}>
                    <ZoomButton />
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* Modal */}
        {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <div className="relative max-w-4xl max-h-4xl">
                <img
                src={selectedImage}
                alt={t('c1.section2.modal.alt')}
                className="max-w-full max-h-full object-contain"
                />
                <div className="absolute top-4 right-4">
                <CloseButton onClick={handleCloseModal} />
                </div>
            </div>
            </div>
        )}
        </div>
    );
};

export default Section1C2;