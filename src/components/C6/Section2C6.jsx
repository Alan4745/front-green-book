import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import ZoomButton from '../Global/ZoomButton';
import CloseButton from '../Global/CloseButton';

// ✅ Importa assets (evita rutas "src/..." para que build resuelva bien)
import Img1 from '../../assets/C6/F3.svg';
import Img2 from '../../assets/C6/F4.svg';

const Section2C6 = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const { t } = useTranslation();

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    // 🔒 Bloqueo de scroll del body cuando el lightbox está abierto (robusto: position: fixed + top)
    useEffect(() => {
        if (!selectedImage) return;
        const scrollY = window.scrollY || window.pageYOffset || 0;

        const prev = {
            position: document.body.style.position,
            top: document.body.style.top,
            left: document.body.style.left,
            right: document.body.style.right,
            width: document.body.style.width,
            overflow: document.body.style.overflow
        };

        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.position = prev.position;
            document.body.style.top = prev.top;
            document.body.style.left = prev.left;
            document.body.style.right = prev.right;
            document.body.style.width = prev.width;
            document.body.style.overflow = prev.overflow;
            window.scrollTo(0, scrollY);
        };
    }, [selectedImage]);

    // 🎛️ Animación de zoom (misma que en las otras secciones finales)
    const hoverAnim = {
        whileHover: { scale: 1.08 },
        transition: { type: 'tween', ease: 'easeOut', duration: 0.25 }
    };

    // 🧊 Lightbox montado en body (idéntico al patrón final)
    const Lightbox = ({ src, alt, onClose }) => {
        if (typeof document === 'undefined') return null;
        return createPortal(
            <div
                className="fixed inset-0 bg-black/90 flex items-center justify-center"
                role="dialog"
                aria-modal="true"
                aria-label={alt}
                style={{ zIndex: 2147483647 }}
            >
                <div className="relative">
                    <CloseButton
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white"
                        aria-label={t('c6.section2.buttons.close')}
                        title={t('c6.section2.buttons.close')}
                    />
                    <img
                        src={src}
                        alt={alt}
                        className="h-[90vh] w-auto object-contain"
                    />
                </div>
            </div>,
            document.body
        );
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
                    <h3
                        className="text-3xl font-bold uppercase"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t("c6.section2.left.title.top")} <br /> {t("c6.section2.left.title.bottom")}
                    </h3>
                    {/* Número grande 03 */}
                    <div
                        className="text-[30vh] font-bold opacity-30 mt-[-17vh]"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        03
                    </div>
                </div>

                {/* Título derecha */}
                <div className="absolute top-[30vh] right-[15vh] text-right">
                    <h3
                        className="text-3xl font-bold uppercase"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        {t("c6.section2.right.title.top")} <br /> {t("c6.section2.right.title.bottom")}
                    </h3>
                    {/* Número grande 04 */}
                    <div
                        className="text-[30vh] font-bold opacity-30 mt-[-17vh]"
                        style={{ fontFamily: "GothamBold" }}
                    >
                        04
                    </div>
                </div>

                {/* Texto descriptivo izquierda */}
                <div className="absolute top-[60vh] left-[15vh] max-w-[40vh]">
                    <p
                        className="text-[2vh] leading-relaxed"
                        style={{ fontFamily: "GothamNormal" }}
                    >
                        {t("c6.section2.left.desc.line1")} <br />
                        {t("c6.section2.left.desc.line2")} <br />
                        {t("c6.section2.left.desc.line3")}
                    </p>
                </div>

                {/* Texto descriptivo derecha */}
                <div className="absolute top-[60vh] right-[15vh] text-right max-w-[50vh]">
                    <p
                        className="text-[2vh] leading-relaxed"
                        style={{ fontFamily: "GothamNormal" }}
                    >
                        {t("c6.section2.right.desc.line1")} <br />
                        {t("c6.section2.right.desc.line2")} <br />
                        {t("c6.section2.right.desc.line3")}
                    </p>
                </div>

                {/* Imágenes del centro - rectangulares tocando arriba y abajo */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col h-full">
                    {/* Primera imagen */}
                    <motion.div
                        className="relative w-[60vh] h-[50vh] cursor-pointer origin-center group hover:z-30"
                        style={{ willChange: 'transform' }}
                        whileHover={hoverAnim.withinHover}
                        whileTap={{ scale: 1.02 }}
                        {...hoverAnim}
                    >
                        <div className="absolute inset-0 overflow-hidden rounded-none">
                            <img
                                src={Img1}
                                alt={t("c6.section2.images.img1Alt")}
                                title={t("c6.section2.images.img1Alt")}
                                className="w-full h-full object-cover select-none pointer-events-none"
                                draggable={false}
                            />
                        </div>
                        {/* ZoomButton esquina inferior derecha */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <div
                                onClick={() => handleImageClick(Img1)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleImageClick(Img1)}
                                title={t("c6.section2.buttons.zoom")}
                                aria-label={t("c6.section2.buttons.zoom")}
                            >
                                <ZoomButton />
                            </div>
                        </div>
                    </motion.div>

                    {/* Segunda imagen */}
                    <motion.div
                        className="relative w-[60vh] h-[50vh] mt-auto cursor-pointer origin-center group hover:z-30"
                        style={{ willChange: 'transform' }}
                        whileHover={hoverAnim.withinHover}
                        whileTap={{ scale: 1.02 }}
                        {...hoverAnim}
                    >
                        <div className="absolute inset-0 overflow-hidden rounded-none">
                            <img
                                src={Img2}
                                alt={t("c6.section2.images.img2Alt")}
                                title={t("c6.section2.images.img2Alt")}
                                className="w-full h-full object-cover select-none pointer-events-none"
                                draggable={false}
                            />
                        </div>
                        {/* ZoomButton esquina inferior derecha */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <div
                                onClick={() => handleImageClick(Img2)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleImageClick(Img2)}
                                title={t("c6.section2.buttons.zoom")}
                                aria-label={t("c6.section2.buttons.zoom")}
                            >
                                <ZoomButton />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Modal para imagen ampliada */}
            {selectedImage && (
                <Lightbox
                    src={selectedImage}
                    alt={t("c6.section2.modalAlt")}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default Section2C6;