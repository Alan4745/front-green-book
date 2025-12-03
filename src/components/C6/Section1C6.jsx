import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import ZoomButton from '../Global/ZoomButton';
import CloseButton from '../Global/CloseButton';

// ✅ Importa assets (evita rutas tipo "src/..."):
import Img1 from '../../assets/C6/F1.png';
import Img2 from '../../assets/C6/F2.png';

const Section1C6 = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const { t } = useTranslation();

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    // Estado para el tamaño de la ventana
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Actualizar el tamaño de la ventana al cambiar el tamaño de la pantalla
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Ajuste dinámico del tamaño de los textos (título y descripción)
    const titleTextSize = windowWidth > 1600 ? "text-3xl" : "text-2xl"; // Título más grande para pantallas grandes
    const descriptionTextSize = windowWidth > 1600 ? "text-xl" : "text-base"; // Descripción más grande para pantallas grandes

    // Título izquierda y derecha
    const titlePosition = windowWidth > 1600 ? "top-[30vh]" : "top-[20vh]";
    const rightTitlePosition = windowWidth > 1600 ? "right-[15vh]" : "right-[10vh]";
    const leftTitlePosition = windowWidth > 1600 ? "left-[15vh]" : "left-[10vh]";

    // Descripción
    const descriptionTop = windowWidth > 1600 ? "top-[60vh]" : "top-[50vh]"; // Ajustar la posición
    const descriptionLeft = windowWidth > 1600 ? "left-[15vh]" : "left-[10vh]"; // Ajustar la posición
    const descriptionRight = windowWidth > 1600 ? "right-[15vh]" : "right-[10vh]"; // Ajustar la posición

    // ⛔ Bloqueo de scroll del body (técnica robusta: position: fixed + top)
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

    // 🪄 Lightbox montado en body (igual a tu estructura de referencia)
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

                 <CloseButton
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white"
                        aria-label={t('c6.section1.buttons.close')}
                        title={t('c6.section1.buttons.close')}
                    />
                <div className="relative">
                   
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
            aria-label={t("c6.section1.aria.section")}
        >
            {/* Contenido de la sección */}
            <div className="relative w-full text-white">
                {/* Título izquierda */}
                <div className={`absolute ${titlePosition} ${leftTitlePosition}`}>
                    <h3 className={`font-bold uppercase ${titleTextSize}`} style={{ fontFamily: "GothamBold" }}>
                        {t("c6.section1.left.title.top")} <br /> {t("c6.section1.left.title.bottom")}
                    </h3>
                    {/* Número grande 01 */}
                    <div className="text-[30vh] font-bold opacity-30 mt-[-17vh]" style={{ fontFamily: "GothamBold" }}>
                        01
                    </div>
                </div>

                {/* Título derecha */}
                <div className={`absolute ${titlePosition} ${rightTitlePosition} text-right`}>
                    <h3 className={`font-bold uppercase ${titleTextSize}`} style={{ fontFamily: "GothamBold" }}>
                        {t("c6.section1.right.title.line1")} <br />
                        {t("c6.section1.right.title.line2")} <br />
                        {t("c6.section1.right.title.line3")}
                    </h3>
                    {/* Número grande 02 */}
                    <div className="text-[30vh] font-bold opacity-30 mt-[-21vh]" style={{ fontFamily: "GothamBold" }}>
                        02
                    </div>
                </div>

                {/* Texto descriptivo izquierda */}
                <div className={`absolute ${descriptionTop} ${descriptionLeft} max-w-[45vh]`}>
                    <p className={`leading-relaxed ${descriptionTextSize}`} style={{ fontFamily: "GothamNormal" }}>
                        {t("c6.section1.left.desc.line1")} <br />
                        {t("c6.section1.left.desc.line2")}
                    </p>
                </div>

                {/* Texto descriptivo derecha */}
                <div className={`absolute ${descriptionTop} ${descriptionRight} text-right`}>
                    <p className={`leading-relaxed ${descriptionTextSize}`} style={{ fontFamily: "GothamNormal" }}>
                        {t("c6.section1.right.desc.line1")} <br />
                        {t("c6.section1.right.desc.line2")}
                    </p>
                </div>

                {/* Imágenes del centro - rectangulares tocando arriba y abajo */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col h-full">
                    {/* Primera imagen */}
                    <motion.div
                        className="relative w-[60vh] h-[50vh] cursor-pointer origin-center group hover:z-30"
                        style={{ willChange: 'transform' }}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 1.02 }}
                    >
                        <div className="absolute inset-0 overflow-hidden rounded-none">
                            <img
                                src={Img1}
                                alt={t("c6.section1.images.img1Alt")}
                                title={t("c6.section1.images.img1Alt")}
                                className="w-full h-full object-cover select-none pointer-events-none"
                                draggable={false}
                            />
                        </div>
                        {/* ZoomButton en la esquina inferior derecha */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <div
                                onClick={() => handleImageClick(Img1)}
                                title={t("c6.section1.buttons.zoom")}
                                aria-label={t("c6.section1.buttons.zoom")}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleImageClick(Img1)}
                            >
                                <ZoomButton />
                            </div>
                        </div>
                    </motion.div>

                    {/* Segunda imagen */}
                    <motion.div
                        className="relative w-[60vh] h-[50vh] mt-auto cursor-pointer origin-center group hover:z-30"
                        style={{ willChange: 'transform' }}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 1.02 }}
                    >
                        <div className="absolute inset-0 overflow-hidden rounded-none">
                            <img
                                src={Img2}
                                alt={t("c6.section1.images.img2Alt")}
                                title={t("c6.section1.images.img2Alt")}
                                className="w-full h-full object-cover select-none pointer-events-none"
                                draggable={false}
                            />
                        </div>
                        {/* ZoomButton en la esquina inferior derecha */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <div
                                onClick={() => handleImageClick(Img2)}
                                title={t("c6.section1.buttons.zoom")}
                                aria-label={t("c6.section1.buttons.zoom")}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleImageClick(Img2)}
                            >
                                <ZoomButton />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Modal para imagen ampliada (Lightbox) */}
            {selectedImage && (
                <Lightbox
                    src={selectedImage}
                    alt={t("c6.section1.modalAlt")}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default Section1C6;

