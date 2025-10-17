import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import ZoomButton from '../Global/ZoomButton';
import CloseButton from '../Global/CloseButton';

// ✅ Importa assets
import Vid2Mov from '../../assets/C1/Vid2.mp4'; // el .mov original
import Img1Fallback from '../../assets/C1/F1.png'; // fallback si no se puede leer el frame
import Img2 from '../../assets/C1/F2.png';

const Section1C1 = () => {
    const [selectedImage, setSelectedImage] = useState(null); // dataURL o asset (solo imagen)
    const [vid2Poster, setVid2Poster] = useState(null); // dataURL generado del .mov
    const navigate = useNavigate();
    const { t } = useTranslation();

    // 🔧 Genera una miniatura (primer frame) del .mov como imagen
    useEffect(() => {
        let cancelled = false;

        const video = document.createElement('video');
        video.crossOrigin = 'anonymous';
        video.muted = true;
        video.playsInline = true;
        video.src = Vid2Mov;

        const drawFrame = () => {
            if (cancelled) return;
            const w = video.videoWidth || 1280;
            const h = video.videoHeight || 720;
            const canvas = document.createElement('canvas');
            canvas.width = w;
            canvas.height = h;
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                setVid2Poster(null);
                cleanup();
                return;
            }
            ctx.drawImage(video, 0, 0, w, h);
            try {
                const url = canvas.toDataURL('image/jpeg', 0.9);
                if (!cancelled) setVid2Poster(url);
            } catch {
                setVid2Poster(null);
            }
            cleanup();
        };

        const onLoadedData = () => {
            try {
                const t = Math.min(0.001, video.duration || 0.001);
                const onSeeked = () => drawFrame();
                video.addEventListener('seeked', onSeeked, { once: true });
                video.currentTime = t;
            } catch {
                drawFrame();
            }
        };

        const onError = () => {
            setVid2Poster(null);
            cleanup();
        };

        const cleanup = () => {
            video.removeEventListener('loadeddata', onLoadedData);
            video.removeEventListener('error', onError);
            video.src = '';
        };

        video.addEventListener('loadeddata', onLoadedData);
        video.addEventListener('error', onError);
        try { video.load(); } catch { /* noop */ }

        return () => {
            cancelled = true;
            cleanup();
        };
    }, []);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

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

    // 🎛️ Animación limpia con Framer Motion (zoom un poquito más)
    const hoverAnim = {
        whileHover: { scale: 1.08 },
        transition: { type: 'tween', ease: 'easeOut', duration: 0.25 }
    };

    // ✨ Glow en texto (magenta) + micro-pulso
    const ctaGlow = {
        initial: { opacity: 0.3, scale: 1 },
        animate: {
            opacity: [0.36, 0.55, 0.36],
            scale: [1, 1.015, 1],
            color: ['#FAD0E3', '#FF4EA0', '#FAD0E3'],
            textShadow: [
                '0 0 0px rgba(218,47,125,0)',
                '0 0 18px rgba(255,78,160,0.65), 0 0 36px rgba(218,47,125,0.35)',
                '0 0 0px rgba(218,47,125,0)'
            ],
            transition: {
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut'
            }
        }
    };

    // 🌸 Halo pulsante detrás (no afecta layout)
    const haloPulse = {
        initial: { scale: 0.98, opacity: 0.0 },
        animate: {
            scale: [0.98, 1.04, 0.98],
            opacity: [0.0, 0.30, 0.0],
            transition: {
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut'
            }
        }
    };

    // 🪄 Portal para el Lightbox (monta en body con z-index muy alto)
    const Lightbox = ({ src, onClose, alt }) => {
        if (typeof document === 'undefined') return null;
        return createPortal(
            <div
                className="fixed inset-0 bg-black/80 flex items-center justify-center"
                role="dialog"
                aria-modal="true"
                aria-label={alt}
                style={{ zIndex: 2147483647 }}
            >
                <div className="relative">
                    <CloseButton
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white"
                        aria-label={alt}
                        title={alt}
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
        <div className="relative min-h-screen w-full flex bg-[#DA2F7D] bg-no-repeat bg-center bg-cover z-10">
            {/* Contenido de la sección */}
            <div className="relative w-full text-white">
                {/* Título "Altitud" en la esquina superior izquierda */}
                <div className="absolute top-[30vh] left-[15vh]">
                    <h3
                        className="text-3xl font-bold uppercase"
                        style={{ fontFamily: 'GothamBold' }}
                    >
                        {t('c1.section1.left.title')}
                    </h3>
                    {/* Número grande 01 como botón que redirige (con halo y glow magenta) */}
                    <motion.button
                        onClick={() => navigate('/c1/section4')}
                        className="relative text-[30vh] font-bold opacity-30 mt-[-13vh] cursor-pointer transition-transform hover:scale-105"
                        style={{ fontFamily: 'GothamBold' }}
                        aria-label={t('c1.section1.left.ctaAria')}
                        title={t('c1.section1.left.ctaAria')}
                        whileHover={{ scale: 1.05, opacity: 0.6 }}
                        {...ctaGlow}
                    >
                        {/* Halo detrás (absoluto, decorativo) */}
                        <motion.span
                            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
                            style={{
                                width: '46vh',
                                height: '46vh',
                                background: 'radial-gradient(closest-side, rgba(255,78,160,0.38), rgba(218,47,125,0.18), rgba(218,47,125,0))'
                            }}
                            {...haloPulse}
                            aria-hidden="true"
                        />
                        01
                    </motion.button>
                </div>

                {/* Título "Más de 300 microclimas" en la esquina superior derecha */}
                <div className="absolute top-[30vh] right-[15vh] text-right">
                    <h3
                        className="text-3xl font-bold uppercase"
                        style={{ fontFamily: 'GothamBold' }}
                    >
                        {t('c1.section1.right.title.top')} <br /> {t('c1.section1.right.title.bottom')}
                    </h3>
                    {/* Número grande 02 */}
                    <div
                        className="text-[30vh] font-bold opacity-30 mt-[-17vh]"
                        style={{ fontFamily: 'GothamBold' }}
                    >
                        02
                    </div>
                </div>

                {/* Texto descriptivo para Altitud */}
                <div className="absolute top-[60vh] left-[15vh] max-w-[50vh]">
                    <p
                        className="text-[2vh] leading-relaxed"
                        style={{ fontFamily: 'GothamNormal' }}
                    >
                        {t('c1.section1.left.descLine1')} <br />
                        {t('c1.section1.left.descLine2')}
                    </p>
                </div>

                {/* Texto descriptivo para Microclimas */}
                <div className="absolute top-[60vh] right-[15vh] text-right">
                    <p
                        className="text-[2vh] leading-relaxed"
                        style={{ fontFamily: 'GothamNormal' }}
                    >
                        {t('c1.section1.right.descLine1')} <br />
                        {t('c1.section1.right.descLine2')} <br />
                        {t('c1.section1.right.descLine3')}
                    </p>
                </div>

                {/* Centro: dos tarjetas rectangulares (toca arriba y abajo) */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col h-full">
                    {/* 1) PRIMERA TARJETA -> imagen estática del .mov (zoom sutil centrado) */}
                    <motion.div
                        className="relative w-[60vh] h-[50vh] cursor-pointer origin-center group hover:z-30"
                        style={{ willChange: 'transform' }}
                        whileHover={hoverAnim.withinHover}
                        whileTap={{ scale: 1.02 }}
                        {...hoverAnim}
                    >
                        {/* Envolvente para recorte interno */}
                        <div className="absolute inset-0 overflow-hidden rounded-none">
                            <img
                                src={vid2Poster || Img1Fallback}
                                alt={t('c1.section1.images.img1Alt')}
                                className="w-full h-full object-cover select-none pointer-events-none"
                                draggable={false}
                            />
                        </div>

                        {/* ZoomButton en esquina inferior derecha */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <div onClick={() => handleImageClick(vid2Poster || Img1Fallback)}>
                                <ZoomButton />
                            </div>
                        </div>
                    </motion.div>

                    {/* 2) SEGUNDA TARJETA -> IMAGEN (zoom sutil centrado) */}
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
                                alt={t('c1.section1.images.img2Alt')}
                                className="w-full h-full object-cover select-none pointer-events-none"
                                draggable={false}
                            />
                        </div>

                        {/* ZoomButton en esquina inferior derecha */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <div onClick={() => handleImageClick(Img2)}>
                                <ZoomButton />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Lightbox montado en body (no se esconde ni con scroll ni con otras secciones) */}
            {selectedImage && (
                <Lightbox
                    src={selectedImage}
                    onClose={handleCloseModal}
                    alt={t('c1.section1.modal.alt')}
                />
            )}
        </div>
    );
};

export default Section1C1;