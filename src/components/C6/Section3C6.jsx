import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import ZoomButton from '../Global/ZoomButton';
import CloseButton from '../Global/CloseButton'; // Importa CloseButton

// ✅ Importa assets (evita rutas "src/..." para que el build resuelva bien)
import Img1 from '../../assets/C6/F5.jpg';
import Img2 from '../../assets/C6/F6.jpg';

const Section3C6 = () => {
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

    // Ajuste dinámico de las posiciones
    const titlePosition = windowWidth > 1600 ? "top-[30vh]" : "top-[20vh]";
    const rightTitlePosition = windowWidth > 1600 ? "right-[15vh]" : "right-[10vh]";
    const leftTitlePosition = windowWidth > 1600 ? "left-[15vh]" : "left-[10vh]";

    const descriptionTop = windowWidth > 1600 ? "top-[60vh]" : "top-[50vh]"; // Ajustar la posición
    const descriptionLeft = windowWidth > 1600 ? "left-[15vh]" : "left-[10vh]"; // Ajustar la posición
    const descriptionRight = windowWidth > 1600 ? "right-[15vh]" : "right-[10vh]"; // Ajustar la posición

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
                        onClick={onClose}

            >
                  <CloseButton
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white"
                        aria-label={t('c6.section3.buttons.close')}
                        title={t('c6.section3.buttons.close')}
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
            className="relative w-full bg-[#00AE43] bg-no-repeat bg-center bg-cover z-10 lg:flex lg:min-h-screen"
            role="region"
            aria-label={t("c6.section3.aria.section")}
        >
            {/* ===== MOBILE LAYOUT ===== */}
            <div className="lg:hidden flex flex-col text-white">
                {/* Bloque 05 */}
                <div className="relative px-6 pt-8 pb-4">
                    <div className="text-[28vw] md:text-[18vw] font-bold opacity-30 leading-none" style={{ fontFamily: "GothamBold" }}>05</div>
                    <h3 className="text-[6vw] md:text-[4vw] font-bold uppercase mt-[-7vw] md:mt-[-4vw]" style={{ fontFamily: "GothamBold" }}>
                        {t("c6.section3.left.title.top")} <br /> {t("c6.section3.left.title.bottom")}
                    </h3>
                    <p className="text-[3.8vw] md:text-[2.5vw] leading-relaxed mt-4" style={{ fontFamily: "GothamNormal" }}>
                        {t("c6.section3.left.desc.line1")} <br />
                        {t("c6.section3.left.desc.line2")} <br />
                        {t("c6.section3.left.desc.line3")}
                    </p>
                    <div className="relative mt-4 cursor-pointer" onClick={() => handleImageClick(Img1)}>
                        <img src={Img1} alt={t("c6.section3.images.img1Alt")} title={t("c6.section3.images.img1Alt")}
                            className="w-full h-[60vw] md:h-[45vw] object-cover select-none" draggable={false} />
                        <div className="absolute bottom-4 right-4"><ZoomButton /></div>
                    </div>
                </div>

                {/* Bloque 06 */}
                <div className="relative px-6 pt-4 pb-8">
                    <div className="text-[28vw] md:text-[18vw] font-bold opacity-30 leading-none text-right" style={{ fontFamily: "GothamBold" }}>06</div>
                    <h3 className="text-[6vw] md:text-[4vw] font-bold uppercase text-right mt-[-7vw] md:mt-[-4vw]" style={{ fontFamily: "GothamBold" }}>
                        {t("c6.section3.right.title.top")} <br /> {t("c6.section3.right.title.bottom")}
                    </h3>
                    <p className="text-[3.8vw] md:text-[2.5vw] leading-relaxed mt-4 text-right" style={{ fontFamily: "GothamNormal" }}>
                        {t("c6.section3.right.desc.pre")}
                        {t("c6.section3.right.desc.post", { liters: 150, lbs: 100 })}
                    </p>
                    <div className="relative mt-4 cursor-pointer" onClick={() => handleImageClick(Img2)}>
                        <img src={Img2} alt={t("c6.section3.images.img2Alt")} title={t("c6.section3.images.img2Alt")}
                            className="w-full h-[60vw] md:h-[45vw] object-cover select-none" draggable={false} />
                        <div className="absolute bottom-4 right-4"><ZoomButton /></div>
                    </div>
                </div>
            </div>

            {/* ===== DESKTOP LAYOUT (blindado) ===== */}
            <div className="hidden lg:flex lg:w-full">
            <div className="relative w-full text-white">
                {/* Título izquierda */}
                <div className={`absolute ${titlePosition} ${leftTitlePosition}`}>
                    <h3 className={`${titleTextSize} font-bold uppercase`} style={{ fontFamily: "GothamBold" }}>
                        {t("c6.section3.left.title.top")} <br /> {t("c6.section3.left.title.bottom")}
                    </h3>
                    {/* Número grande 05 */}
                    <div className="text-[30vh] font-bold opacity-30 mt-[-17vh]" style={{ fontFamily: "GothamBold" }}>
                        05
                    </div>
                </div>

                {/* Título derecha */}
                <div className={`absolute ${titlePosition} ${rightTitlePosition} text-right`}>
                    <h3 className={`${titleTextSize} font-bold uppercase`} style={{ fontFamily: "GothamBold" }}>
                        {t("c6.section3.right.title.top")} <br /> {t("c6.section3.right.title.bottom")}
                    </h3>
                    {/* Número grande 06 */}
                    <div className="text-[30vh] font-bold opacity-30 mt-[-17vh]" style={{ fontFamily: "GothamBold" }}>
                        06
                    </div>
                </div>

                {/* Texto descriptivo izquierda */}
                <div className={`absolute ${descriptionTop} ${descriptionLeft} max-w-[50vh]`}>
                    <p className={`${descriptionTextSize} leading-relaxed`} style={{ fontFamily: "GothamNormal" }}>
                        {t("c6.section3.left.desc.line1")} <br />
                        {t("c6.section3.left.desc.line2")} <br />
                        {t("c6.section3.left.desc.line3")}
                    </p>
                </div>

                {/* Texto descriptivo derecha */}
                <div className={`absolute ${descriptionTop} ${descriptionRight} text-right max-w-[50vh]`}>
                    <p className={`${descriptionTextSize} leading-relaxed`} style={{ fontFamily: "GothamNormal" }}>
                        {t("c6.section3.right.desc.pre")}
                        {t("c6.section3.right.desc.post", { liters: 150, lbs: 100 })}
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
                        <div className="absolute inset-0 overflow-hidden rounded-none" onClick={() => handleImageClick(Img1)}>
                            <img
                                src={Img1}
                                alt={t("c6.section3.images.img1Alt")}
                                title={t("c6.section3.images.img1Alt")}
                                className="w-full h-full object-cover select-none pointer-events-none"
                                draggable={false}
                            />
                        </div>
                        {/* ZoomButton en la esquina inferior derecha */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <div
                                onClick={() => handleImageClick(Img1)}
                                title={t("c6.section3.buttons.zoom")}
                                aria-label={t("c6.section3.buttons.zoom")}
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
                        <div className="absolute inset-0 overflow-hidden rounded-none"  onClick={() => handleImageClick(Img2)}>
                            <img
                                src={Img2}
                                alt={t("c6.section3.images.img2Alt")}
                                title={t("c6.section3.images.img2Alt")}
                                className="w-full h-full object-cover select-none pointer-events-none"
                                draggable={false}
                            />
                        </div>
                        {/* ZoomButton en la esquina inferior derecha */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <div
                                onClick={() => handleImageClick(Img2)}
                                title={t("c6.section3.buttons.zoom")}
                                aria-label={t("c6.section3.buttons.zoom")}
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
            </div>{/* cierre desktop wrapper */}

            {/* Modal para imagen ampliada */}
            {selectedImage && (
                <Lightbox
                    src={selectedImage}
                    alt={t("c6.section3.modalAlt")}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default Section3C6;