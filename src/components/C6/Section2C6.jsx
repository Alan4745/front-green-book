import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import ZoomButton from '../Global/ZoomButton';
import CloseButton from '../Global/CloseButton';
import SmartImage from '../Global/SmartImage';

// ✅ Importa assets (evita rutas "src/..." para que build resuelva bien)
import Img1 from '../../assets/C6/F3.webp';
import Img2 from '../../assets/C6/F4.webp';

const Section2C6 = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const { t } = useTranslation();
    const MotionDiv = motion.div;

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
                <div className="relative" onClick={(e) => e.stopPropagation()}>
                    {/* Imagen lightbox — priority */}
                    <SmartImage
                        src={src}
                        alt={alt}
                        className="max-h-[95vh] max-w-[95vw] object-contain block"
                        priority
                    />
                    <CloseButton
                        onClick={onClose}
                        aria-label={t('c6.section2.buttons.close')}
                        title={t('c6.section2.buttons.close')}
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
            aria-label={t("c6.section2.aria.section")}
        >
            {/* ===== MOBILE LAYOUT ===== */}
            <div className="lg:hidden [@media(min-width:1024px)_and_(orientation:portrait)]:!flex w-full flex min-h-screen flex-col justify-center min-[744px]:max-[1023px]:justify-start [@media(min-width:1024px)_and_(orientation:portrait)]:!justify-start pt-[7vh] min-[744px]:max-[1023px]:pt-[8vh] [@media(min-width:1024px)_and_(orientation:portrait)]:!pt-[5vh] pb-[10vh] min-[744px]:max-[1023px]:pb-[6vh] [@media(min-width:1024px)_and_(orientation:portrait)]:!pb-[4vh] text-white">
                {/* Bloque 03 */}
                <div className="relative px-6 min-[744px]:max-[1023px]:px-10 [@media(min-width:1024px)_and_(orientation:portrait)]:!px-14 py-[3vh] min-[744px]:max-[1023px]:py-[2vh] [@media(min-width:1024px)_and_(orientation:portrait)]:!py-[2vh]">
                    <div className="text-[28vw] md:text-[18vw] min-[744px]:max-[1023px]:text-[15vw] [@media(min-width:1024px)_and_(orientation:portrait)]:!text-[13vw] font-bold opacity-30 leading-none" style={{ fontFamily: "GothamBold" }}>03</div>
                    <h3 className="text-[6vw] md:text-[4vw] min-[744px]:max-[1023px]:text-[3.2vw] [@media(min-width:1024px)_and_(orientation:portrait)]:!text-[2.8vw] font-bold uppercase mt-[-7vw] md:mt-[-4vw] min-[744px]:max-[1023px]:mt-[-3vw] [@media(min-width:1024px)_and_(orientation:portrait)]:!mt-[-2.5vw]" style={{ fontFamily: "GothamBold" }}>
                        {t("c6.section2.left.title.top")} <br /> {t("c6.section2.left.title.bottom")}
                    </h3>
                    <p className="text-[3.8vw] md:text-[2.5vw] min-[744px]:max-[1023px]:text-[2.1vw] [@media(min-width:1024px)_and_(orientation:portrait)]:!text-[1.8vw] leading-relaxed mt-4 min-[744px]:max-[1023px]:mt-3" style={{ fontFamily: "GothamNormal" }}>
                        {t("c6.section2.left.desc.line1")} <br />
                        {t("c6.section2.left.desc.line2")} <br />
                        {t("c6.section2.left.desc.line3")}
                    </p>
                    <div className="relative mt-4 cursor-pointer" onClick={() => handleImageClick(Img1)}>
                        <img src={Img1} alt={t("c6.section2.images.img1Alt")} title={t("c6.section2.images.img1Alt")}
                            className="w-full h-[60vw] min-h-[240px] md:h-[45vw] min-[744px]:max-[1023px]:h-[31vw] min-[744px]:max-[1023px]:min-h-0 [@media(min-width:1024px)_and_(orientation:portrait)]:!h-[28vw] [@media(min-width:1024px)_and_(orientation:portrait)]:!min-h-0 object-cover select-none" draggable={false} loading="lazy" decoding="async" />
                        <div className="absolute bottom-4 right-4"><ZoomButton /></div>
                    </div>
                </div>

                {/* Bloque 04 */}
                <div className="relative px-6 min-[744px]:max-[1023px]:px-10 [@media(min-width:1024px)_and_(orientation:portrait)]:!px-14 py-[3vh] min-[744px]:max-[1023px]:py-[2vh] [@media(min-width:1024px)_and_(orientation:portrait)]:!py-[2vh]">
                    <div className="text-[28vw] md:text-[18vw] min-[744px]:max-[1023px]:text-[15vw] [@media(min-width:1024px)_and_(orientation:portrait)]:!text-[13vw] font-bold opacity-30 leading-none text-right" style={{ fontFamily: "GothamBold" }}>04</div>
                    <h3 className="text-[6vw] md:text-[4vw] min-[744px]:max-[1023px]:text-[3.2vw] [@media(min-width:1024px)_and_(orientation:portrait)]:!text-[2.8vw] font-bold uppercase text-right mt-[-7vw] md:mt-[-4vw] min-[744px]:max-[1023px]:mt-[-3vw] [@media(min-width:1024px)_and_(orientation:portrait)]:!mt-[-2.5vw]" style={{ fontFamily: "GothamBold" }}>
                        {t("c6.section2.right.title.top")} <br /> {t("c6.section2.right.title.bottom")}
                    </h3>
                    <p className="text-[3.8vw] md:text-[2.5vw] min-[744px]:max-[1023px]:text-[2.1vw] [@media(min-width:1024px)_and_(orientation:portrait)]:!text-[1.8vw] leading-relaxed mt-4 min-[744px]:max-[1023px]:mt-3 text-right" style={{ fontFamily: "GothamNormal" }}>
                        {t("c6.section2.right.desc.line1")} <br />
                        {t("c6.section2.right.desc.line2")} <br />
                        {t("c6.section2.right.desc.line3")}
                    </p>
                    <div className="relative mt-4 cursor-pointer" onClick={() => handleImageClick(Img2)}>
                        <img src={Img2} alt={t("c6.section2.images.img2Alt")} title={t("c6.section2.images.img2Alt")}
                            className="w-full h-[60vw] min-h-[240px] md:h-[45vw] min-[744px]:max-[1023px]:h-[31vw] min-[744px]:max-[1023px]:min-h-0 [@media(min-width:1024px)_and_(orientation:portrait)]:!h-[28vw] [@media(min-width:1024px)_and_(orientation:portrait)]:!min-h-0 object-cover select-none" draggable={false} loading="lazy" decoding="async" />
                        <div className="absolute bottom-4 right-4"><ZoomButton /></div>
                    </div>
                </div>
            </div>

            {/* ===== DESKTOP LAYOUT (blindado) ===== */}
            <div className="hidden lg:flex [@media(min-width:1024px)_and_(orientation:portrait)]:!hidden lg:w-full">
            <div className="relative w-full text-white">
                {/* Título izquierda */}
                <div className="absolute top-[20vh] min-[1600px]:top-[30vh] left-[10vh] min-[1600px]:left-[15vh] [@media(min-width:1024px)_and_(max-width:1399px)_and_(orientation:landscape)]:left-[4vw]">
                    <h3 className="text-2xl min-[1600px]:text-3xl font-bold uppercase [@media(min-width:1024px)_and_(max-width:1399px)_and_(orientation:landscape)]:text-[2vw]" style={{ fontFamily: "GothamBold" }}>
                        {t("c6.section2.left.title.top")} <br /> {t("c6.section2.left.title.bottom")}
                    </h3>
                    {/* Número grande 03 */}
                    <div className="text-[30vh] [@media(min-width:1024px)_and_(max-width:1399px)_and_(orientation:landscape)]:text-[10vw] font-bold opacity-30 mt-[-17vh] [@media(min-width:1024px)_and_(max-width:1399px)_and_(orientation:landscape)]:mt-[-8vw]" style={{ fontFamily: "GothamBold" }}>
                        03
                    </div>
                </div>

                {/* Título derecha */}
                <div className="absolute top-[20vh] min-[1600px]:top-[30vh] right-[10vh] min-[1600px]:right-[15vh] text-right [@media(min-width:1024px)_and_(max-width:1399px)_and_(orientation:landscape)]:right-[4vw]">
                    <h3 className="text-2xl min-[1600px]:text-3xl font-bold uppercase [@media(min-width:1024px)_and_(max-width:1399px)_and_(orientation:landscape)]:text-[2vw]" style={{ fontFamily: "GothamBold" }}>
                        {t("c6.section2.right.title.top")} <br /> {t("c6.section2.right.title.bottom")}
                    </h3>
                    {/* Número grande 04 */}
                    <div className="text-[30vh] [@media(min-width:1024px)_and_(max-width:1399px)_and_(orientation:landscape)]:text-[10vw] font-bold opacity-30 mt-[-17vh] [@media(min-width:1024px)_and_(max-width:1399px)_and_(orientation:landscape)]:mt-[-8vw]" style={{ fontFamily: "GothamBold" }}>
                        04
                    </div>
                </div>

                {/* Texto descriptivo izquierda */}
                <div className="absolute top-[50vh] min-[1600px]:top-[60vh] left-[10vh] min-[1600px]:left-[15vh] max-w-[40vh] [@media(min-width:1024px)_and_(max-width:1399px)_and_(orientation:landscape)]:top-[40vh] [@media(min-width:1024px)_and_(max-width:1399px)_and_(orientation:landscape)]:left-[4vw] [@media(min-width:1024px)_and_(max-width:1399px)_and_(orientation:landscape)]:max-w-[28vw]">
                    <p className="text-base min-[1600px]:text-xl leading-relaxed [@media(min-width:1024px)_and_(max-width:1399px)_and_(orientation:landscape)]:text-[1.4vw]" style={{ fontFamily: "GothamNormal" }}>
                        {t("c6.section2.left.desc.line1")} <br />
                        {t("c6.section2.left.desc.line2")} <br />
                        {t("c6.section2.left.desc.line3")}
                    </p>
                </div>

                {/* Texto descriptivo derecha */}
                <div className="absolute top-[50vh] min-[1600px]:top-[60vh] right-[10vh] min-[1600px]:right-[15vh] text-right max-w-[50vh] [@media(min-width:1024px)_and_(max-width:1399px)_and_(orientation:landscape)]:top-[40vh] [@media(min-width:1024px)_and_(max-width:1399px)_and_(orientation:landscape)]:right-[4vw] [@media(min-width:1024px)_and_(max-width:1399px)_and_(orientation:landscape)]:max-w-[28vw]">
                    <p className="text-base min-[1600px]:text-xl leading-relaxed [@media(min-width:1024px)_and_(max-width:1399px)_and_(orientation:landscape)]:text-[1.4vw]" style={{ fontFamily: "GothamNormal" }}>
                        {t("c6.section2.right.desc.line1")} <br />
                        {t("c6.section2.right.desc.line2")} <br />
                        {t("c6.section2.right.desc.line3")}
                    </p>
                </div>

                {/* Imágenes del centro - rectangulares tocando arriba y abajo */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col h-full">
                    {/* Primera imagen */}
                    <MotionDiv
                        className="relative w-[60vh] [@media(min-width:1024px)_and_(max-width:1399px)_and_(orientation:landscape)]:w-[22vw] h-[50vh] cursor-pointer origin-center group hover:z-30"
                        style={{ willChange: 'transform' }}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 1.02 }}
                    >
                        <div className="absolute inset-0 overflow-hidden rounded-none"  onClick={() => handleImageClick(Img1)}>
                            {/* Imagen desktop 1 — lazy */}
                            <SmartImage
                                src={Img1}
                                alt={t("c6.section2.images.img1Alt")}
                                title={t("c6.section2.images.img1Alt")}
                                className="w-full h-full object-cover select-none pointer-events-none"
                                draggable={false}
                            />
                        </div>
                        {/* ZoomButton en la esquina inferior derecha */}
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
                    </MotionDiv>

                    {/* Segunda imagen */}
                    <MotionDiv
                        className="relative w-[60vh] [@media(min-width:1024px)_and_(max-width:1399px)_and_(orientation:landscape)]:w-[22vw] h-[50vh] mt-auto cursor-pointer origin-center group hover:z-30"
                        style={{ willChange: 'transform' }}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 1.02 }}
                    >
                        <div className="absolute inset-0 overflow-hidden rounded-none" onClick={() => handleImageClick(Img2)}>
                            {/* Imagen desktop 2 — lazy */}
                            <SmartImage
                                src={Img2}
                                alt={t("c6.section2.images.img2Alt")}
                                title={t("c6.section2.images.img2Alt")}
                                className="w-full h-full object-cover select-none pointer-events-none"
                                draggable={false}
                            />
                        </div>
                        {/* ZoomButton en la esquina inferior derecha */}
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
                    </MotionDiv>
                </div>
            </div>
            </div>{/* cierre desktop wrapper */}

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
