import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import ZoomButton from '../Global/ZoomButton';
import CloseButton from '../Global/CloseButton'; // Importa CloseButton

// ✅ Importa assets (evita rutas "src/..." para build)
import Img1 from '../../assets/C6/F7.jpg';
import Img2 from '../../assets/C6/F8.jpg';

const Section4C6 = () => {
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
            overflow: document.body.style.overflow,
            htmlOverflow: document.documentElement.style.overflow
        };

        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        return () => {
            document.body.style.position = prev.position;
            document.body.style.top = prev.top;
            document.body.style.left = prev.left;
            document.body.style.right = prev.right;
            document.body.style.width = prev.width;
            document.body.style.overflow = prev.overflow;
            document.documentElement.style.overflow = prev.htmlOverflow;
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
                    <img
                        src={src}
                        alt={alt}
                        className="max-h-[95vh] max-w-[95vw] object-contain block"
                    />
                    <CloseButton
                        onClick={onClose}
                        aria-label={t('c6.section4.buttons.close')}
                        title={t('c6.section4.buttons.close')}
                    />
                </div>
            </div>,
            document.body
        );
    };

    return (
        <div
            className="relative z-10 w-full overflow-hidden bg-[#00AE43] bg-no-repeat bg-center bg-cover lg:flex lg:min-h-screen"
            role="region"
            aria-label={t('c6.section4.aria.section')}
        >
            {/* ===== MOBILE LAYOUT ===== */}
            <div className="lg:hidden [@media(min-width:1024px)_and_(orientation:portrait)]:!flex w-full flex min-h-screen flex-col justify-center min-[744px]:max-[1023px]:justify-start [@media(min-width:1024px)_and_(orientation:portrait)]:!justify-start pt-[7vh] min-[744px]:max-[1023px]:pt-[8vh] [@media(min-width:1024px)_and_(orientation:portrait)]:!pt-[5vh] pb-[10vh] min-[744px]:max-[1023px]:pb-[6vh] [@media(min-width:1024px)_and_(orientation:portrait)]:!pb-[4vh] text-white">
                {/* Bloque 07 */}
                <div className="relative px-6 min-[744px]:max-[1023px]:px-10 [@media(min-width:1024px)_and_(orientation:portrait)]:!px-14 py-[3vh] min-[744px]:max-[1023px]:py-[2vh] [@media(min-width:1024px)_and_(orientation:portrait)]:!py-[2vh]">
                    <div className="text-[28vw] md:text-[18vw] min-[744px]:max-[1023px]:text-[15vw] [@media(min-width:1024px)_and_(orientation:portrait)]:!text-[13vw] font-bold opacity-30 leading-none" style={{ fontFamily: 'GothamBold' }}>07</div>
                    <h3 className="text-[6vw] md:text-[4vw] min-[744px]:max-[1023px]:text-[3.2vw] [@media(min-width:1024px)_and_(orientation:portrait)]:!text-[2.8vw] font-bold uppercase mt-[-7vw] md:mt-[-4vw] min-[744px]:max-[1023px]:mt-[-3vw] [@media(min-width:1024px)_and_(orientation:portrait)]:!mt-[-2.5vw]" style={{ fontFamily: 'GothamBold' }}>
                        {t('c6.section4.left.title')}
                    </h3>
                    <p className="text-[3.8vw] md:text-[2.5vw] min-[744px]:max-[1023px]:text-[2.1vw] [@media(min-width:1024px)_and_(orientation:portrait)]:!text-[1.8vw] leading-relaxed mt-4 min-[744px]:max-[1023px]:mt-3" style={{ fontFamily: 'GothamNormal' }}>
                        {t('c6.section4.left.desc.line1')} <br /> {t('c6.section4.left.desc.line2')}
                    </p>
                    <div className="relative mt-4 cursor-pointer" onClick={() => handleImageClick(Img1)}>
                        <img src={Img1} alt={t('c6.section4.images.img1Alt')} title={t('c6.section4.images.img1Alt')}
                            className="w-full h-[60vw] min-h-[240px] md:h-[45vw] min-[744px]:max-[1023px]:h-[31vw] min-[744px]:max-[1023px]:min-h-0 [@media(min-width:1024px)_and_(orientation:portrait)]:!h-[28vw] [@media(min-width:1024px)_and_(orientation:portrait)]:!min-h-0 object-cover select-none" draggable={false} />
                        <div className="absolute bottom-4 right-4"><ZoomButton /></div>
                    </div>
                </div>

                {/* Bloque 08 */}
                <div className="relative px-6 min-[744px]:max-[1023px]:px-10 [@media(min-width:1024px)_and_(orientation:portrait)]:!px-14 py-[3vh] min-[744px]:max-[1023px]:py-[2vh] [@media(min-width:1024px)_and_(orientation:portrait)]:!py-[2vh]">
                    <div className="text-[28vw] md:text-[18vw] min-[744px]:max-[1023px]:text-[15vw] [@media(min-width:1024px)_and_(orientation:portrait)]:!text-[13vw] font-bold opacity-30 leading-none text-right" style={{ fontFamily: 'GothamBold' }}>08</div>
                    <h3 className="text-[6vw] md:text-[4vw] min-[744px]:max-[1023px]:text-[3.2vw] [@media(min-width:1024px)_and_(orientation:portrait)]:!text-[2.8vw] font-bold uppercase text-right mt-[-7vw] md:mt-[-4vw] min-[744px]:max-[1023px]:mt-[-3vw] [@media(min-width:1024px)_and_(orientation:portrait)]:!mt-[-2.5vw]" style={{ fontFamily: 'GothamBold' }}>
                        {t('c6.section4.right.title')}
                    </h3>
                    <p className="text-[3.8vw] md:text-[2.5vw] min-[744px]:max-[1023px]:text-[2.1vw] [@media(min-width:1024px)_and_(orientation:portrait)]:!text-[1.8vw] leading-relaxed mt-4 min-[744px]:max-[1023px]:mt-3 text-right" style={{ fontFamily: 'GothamNormal' }}>
                        {t('c6.section4.right.desc.line1')} <br />
                        {t('c6.section4.right.desc.line2')} <br />
                        {t('c6.section4.right.desc.line3')}
                    </p>
                    <div className="relative mt-4 cursor-pointer" onClick={() => handleImageClick(Img2)}>
                        <img src={Img2} alt={t('c6.section4.images.img2Alt')} title={t('c6.section4.images.img2Alt')}
                            className="w-full h-[60vw] min-h-[240px] md:h-[45vw] min-[744px]:max-[1023px]:h-[31vw] min-[744px]:max-[1023px]:min-h-0 [@media(min-width:1024px)_and_(orientation:portrait)]:!h-[28vw] [@media(min-width:1024px)_and_(orientation:portrait)]:!min-h-0 object-cover select-none" draggable={false} />
                        <div className="absolute bottom-4 right-4"><ZoomButton /></div>
                    </div>
                </div>
            </div>

            {/* ===== DESKTOP LAYOUT (blindado) ===== */}
            <div className="hidden lg:flex [@media(min-width:1024px)_and_(orientation:portrait)]:!hidden lg:w-full">
            <div className="relative w-full text-white">
                {/* Título izquierda */}
                <div className="absolute top-[20vh] min-[1600px]:top-[30vh] left-[10vh] min-[1600px]:left-[15vh]">
                    <h3 className="text-2xl min-[1600px]:text-3xl font-bold uppercase" style={{ fontFamily: "GothamBold" }}>
                        {t('c6.section4.left.title')}
                    </h3>
                    {/* Número grande 07 */}
                    <div className="text-[30vh] [@media(min-width:1024px)_and_(max-width:1399px)_and_(orientation:landscape)]:text-[10vw] font-bold opacity-30 mt-[-17vh] [@media(min-width:1024px)_and_(max-width:1399px)_and_(orientation:landscape)]:mt-[-8vw]" style={{ fontFamily: 'GothamBold' }}>
                        07
                    </div>
                </div>

                {/* Título derecha */}
                <div className="absolute top-[20vh] min-[1600px]:top-[30vh] right-[10vh] min-[1600px]:right-[15vh] text-right">
                    <h3 className="text-2xl min-[1600px]:text-3xl font-bold uppercase" style={{ fontFamily: "GothamBold" }}>
                        {t('c6.section4.right.title')}
                    </h3>
                    {/* Número grande 08 */}
                    <div className="text-[30vh] [@media(min-width:1024px)_and_(max-width:1399px)_and_(orientation:landscape)]:text-[10vw] font-bold opacity-30 mt-[-17vh] [@media(min-width:1024px)_and_(max-width:1399px)_and_(orientation:landscape)]:mt-[-8vw]" style={{ fontFamily: 'GothamBold' }}>
                        08
                    </div>
                </div>

                {/* Texto descriptivo izquierda */}
                <div className="absolute top-[50vh] min-[1600px]:top-[60vh] left-[10vh] min-[1600px]:left-[15vh] max-w-[42vh] text-justify">
                    <p className="text-[2.1vh] leading-relaxed" style={{ fontFamily: 'GothamNormal' }}>
                        {t('c6.section4.left.desc.line1')} <br />
                        {t('c6.section4.left.desc.line2')}
                    </p>
                </div>

                {/* Texto descriptivo derecha */}
                <div className="absolute top-[50vh] min-[1600px]:top-[60vh] right-[10vh] min-[1600px]:right-[15vh] text-right max-w-[47vh]">
                    <p className="text-[2.1vh] leading-relaxed" style={{ fontFamily: 'GothamNormal' }}>
                        {t('c6.section4.right.desc.line1')} <br />
                        {t('c6.section4.right.desc.line2')} <br />
                        {t('c6.section4.right.desc.line3')}
                    </p>
                </div>

                {/* Imágenes del centro - rectangulares tocando arriba y abajo */}
                    <div className="absolute top-0 left-1/2 flex h-full -translate-x-1/2 transform flex-col">
                    {/* Primera imagen */}
                    <MotionDiv
                        className="relative w-[60vh] [@media(min-width:1024px)_and_(max-width:1399px)_and_(orientation:landscape)]:w-[22vw] h-[50vh] cursor-pointer origin-center group hover:z-30"
                        style={{ willChange: 'transform' }}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 1.02 }}
                    >
                        <div className="absolute inset-0 overflow-hidden rounded-none" onClick={() => handleImageClick(Img1)}>
                            <img
                                src={Img1}
                                alt={t('c6.section4.images.img1Alt')}
                                title={t('c6.section4.images.img1Alt')}
                                className="w-full h-full object-cover select-none pointer-events-none"
                                draggable={false}
                            />
                        </div>
                        {/* ZoomButton en la esquina inferior derecha */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <div
                                onClick={() => handleImageClick(Img1)}
                                title={t('c6.section4.buttons.zoom')}
                                aria-label={t('c6.section4.buttons.zoom')}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleImageClick(Img1)}
                            >
                                <ZoomButton />
                            </div>
                        </div>
                    </MotionDiv>

                    {/* Segunda imagen */}
                        <MotionDiv
                            className="relative w-[60vh] [@media(min-width:1024px)_and_(max-width:1399px)_and_(orientation:landscape)]:w-[22vw] h-[50vh] mt-auto translate-y-[-2vh] cursor-pointer origin-center group hover:z-30"
                            style={{ willChange: 'transform' }}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 1.02 }}
                    >
                        <div className="absolute inset-0 overflow-hidden rounded-none" onClick={() => handleImageClick(Img2)}>
                            <img
                                src={Img2}
                                alt={t('c6.section4.images.img2Alt')}
                                title={t('c6.section4.images.img2Alt')}
                                className="w-full h-full object-cover select-none pointer-events-none"
                                draggable={false}
                            />
                        </div>
                        {/* ZoomButton en la esquina inferior derecha */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <div
                                onClick={() => handleImageClick(Img2)}
                                title={t('c6.section4.buttons.zoom')}
                                aria-label={t('c6.section4.buttons.zoom')}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleImageClick(Img2)}
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
                    alt={t('c6.section4.modalAlt')}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default Section4C6;
