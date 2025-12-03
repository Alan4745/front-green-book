// src/components/C1/Section1C2.jsx
import { useState, useEffect, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import ZoomButton from '../Global/ZoomButton';
import CloseButton from '../Global/CloseButton';

// ✅ Importa assets para rutas correctas en build
import Img1 from '../../assets/C1/F3.png';
import Img2 from '../../assets/C1/F4.png';

/* =========================
 * Utilidades de color + Skeleton
 * ========================= */
function hexToRgb(hex) {
    const h = hex.replace('#', '');
    const v = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
    const i = parseInt(v, 16);
    return { r: (i >> 16) & 255, g: (i >> 8) & 255, b: i & 255 };
}

function hexToRgba(hex, alpha = 1) {
    const { r, g, b } = hexToRgb(hex);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/* Oscurece un hex mezclándolo con negro */
function darkenHex(hex, factor = 0.25) {
    const { r, g, b } = hexToRgb(hex);
    const nr = Math.round(r * (1 - factor));
    const ng = Math.round(g * (1 - factor));
    const nb = Math.round(b * (1 - factor));
    return `#${[nr, ng, nb].map((n) => n.toString(16).padStart(2, '0')).join('')}`;
}

/* Bloque Skeleton con tinte programable (#DA2F7D por defecto) */
function Skeleton({
    className = '',
    rounded = 'rounded-md',
    tintHex = '#DA2F7D',
    darken = 0.25,
    alpha = 0.55,
    as: Tag = 'div',
    style,
    ...rest
}) {
    const darker = darkenHex(tintHex, darken);
    return (
        <Tag
            className={['animate-pulse', rounded, className].join(' ')}
            style={{ backgroundColor: hexToRgba(darker, alpha), ...style }}
            {...rest}
        />
    );
}

/* Pantalla Skeleton (fondo sólido + bloques oscurecidos) */
function Section1C2Skeleton({ tintHex = '#DA2F7D' }) {
    return (
        <div
            className="relative min-h-screen w-full flex bg-no-repeat bg-center bg-cover z-10"
            style={{ backgroundColor: tintHex }}
        >
            {/* velo sutil para contraste */}
            <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(0deg, ${hexToRgba('#000', 0.06)}, ${hexToRgba('#000', 0.06)})` }}
            />

            {/* Izquierda: título + número 03 + párrafo */}
            <div className="absolute top-[30vh] left-[15vh]">
                <Skeleton className="h-8 w-[24vh]" rounded="rounded-sm" tintHex={tintHex} darken={0.22} alpha={0.6} />
                <div className="mt-[-13vh]">
                    <Skeleton className="h-[30vh] w-[24vh]" rounded="rounded-md" tintHex={tintHex} darken={0.22} alpha={0.3} />
                </div>
            </div>
            <div className="absolute top-[60vh] left-[15vh] max-w-[50vh] space-y-2">
                <Skeleton className="h-[2.2vh] w-[40vh]" tintHex={tintHex} darken={0.3} alpha={0.5} />
                <Skeleton className="h-[2.2vh] w-[30vh]" tintHex={tintHex} darken={0.3} alpha={0.5} />
            </div>

            {/* Derecha: título + número 04 + párrafo */}
            <div className="absolute top-[30vh] right-[15vh] text-right">
                <Skeleton className="h-8 w-[44vh]" rounded="rounded-sm" tintHex={tintHex} darken={0.22} alpha={0.6} />
                <div className="mt-2">
                    <Skeleton className="h-8 w-[36vh]" rounded="rounded-sm" tintHex={tintHex} darken={0.22} alpha={0.6} />
                </div>
                <div className="mt-[-17vh]">
                    <Skeleton className="h-[30vh] w-[24vh]" rounded="rounded-md" tintHex={tintHex} darken={0.22} alpha={0.3} />
                </div>
            </div>
            <div className="absolute top-[60vh] right-[15vh] text-right space-y-2">
                <Skeleton className="h-[2.2vh] w-[40vh]" tintHex={tintHex} darken={0.3} alpha={0.5} />
                <Skeleton className="h-[2.2vh] w-[34vh]" tintHex={tintHex} darken={0.3} alpha={0.5} />
            </div>

            {/* Centro: dos tarjetas verticales */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col h-full">
                <div className="relative w-[60vh] h-[50vh]">
                    <Skeleton className="w-full h-full" rounded="rounded-none" tintHex={tintHex} darken={0.18} alpha={0.6} />
                </div>
                <div className="relative w-[60vh] h-[50vh] mt-auto">
                    <Skeleton className="w-full h-full" rounded="rounded-none" tintHex={tintHex} darken={0.18} alpha={0.6} />
                </div>
            </div>
        </div>
    );
}

const Section1C2 = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showContent, setShowContent] = useState(false); // ⬅️ control de skeleton
    const { t } = useTranslation();

    // 🎛️ Animación de zoom
    const hoverAnim = useMemo(() => ({
        whileHover: { scale: 1.08 },
        transition: { type: 'tween', ease: 'easeOut', duration: 0.25 }
    }), []);

    // 🪄 Lightbox montado en body
    const Lightbox = ({ src, alt, onClose }) => {
        if (typeof document === 'undefined') return null;
        return createPortal(
            <div
                className="fixed inset-0 bg-black/80 flex items-center justify-center"
                role="dialog"
                aria-modal="true"
                aria-label={alt}
                style={{ zIndex: 2147483647 }}
                onClick={onClose}
            >
            <CloseButton
                onClick={onClose}
                className="absolute top-4 right-7 text-white"
                aria-label={alt}
                title={alt}
            />
                <div className="relative">

                    <img
                        src={src}
                        alt={alt}
                        onClick={(e) => e.stopPropagation()}
                        className="h-[90vh] w-auto object-contain"
                    />
                </div>
            </div>,
            document.body
        );
    };

    /* =========
     * CARGA + HOLGURA (2s)
     * - Pre-carga Img1 y Img2
     * - NO renderiza nada del contenido real hasta terminar + holgura
     * ========= */
    const GRACE_MS = 2000;
    const graceTimerRef = useRef(null);

    useEffect(() => {
        const preloadImage = (src) =>
            new Promise((resolve) => {
                const img = new Image();
                img.onload = img.onerror = () => resolve();
                img.src = src;
            });

        let cancelled = false;

        Promise.all([preloadImage(Img1), preloadImage(Img2)]).then(() => {
            if (cancelled) return;
            graceTimerRef.current = setTimeout(() => {
                setShowContent(true);
            }, GRACE_MS);
        });

        return () => {
            cancelled = true;
            if (graceTimerRef.current) clearTimeout(graceTimerRef.current);
        };
    }, []);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    // ⛔ Bloqueo de scroll del body (robusto) cuando el lightbox está abierto
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

    // 🎨 Tinte del skeleton (capítulo 1)
    const SKELETON_TINT = '#DA2F7D';

    // 🦴 Mientras carga: SOLO skeleton (no se ve nada del contenido real)
    if (!showContent) {
        return <Section1C2Skeleton tintHex={SKELETON_TINT} />;
    }

    // ✅ Contenido real (mismo layout/clases)
    return (
        <div className="relative min-h-screen w-full flex bg-[#DA2F7D] bg-no-repeat bg-center bg-cover z-10">
            {/* Contenido de la sección */}
            <div className="relative w-full text-white">
                {/* Título izquierda */}
                <div className="absolute top-[30vh] left-[15vh]">
                    <h3
                        className="text-3xl font-bold uppercase"
                        style={{ fontFamily: 'GothamBold' }}
                    >
                        {t('c1.section2.left.title')}
                    </h3>
                    {/* Número grande 03 */}
                    <div
                        className="text-[30vh] font-bold opacity-30 mt-[-13vh]"
                        style={{ fontFamily: 'GothamBold' }}
                    >
                        03
                    </div>
                </div>

                {/* Título derecha */}
                <div className="absolute top-[30vh] right-[15vh] text-right">
                    <h3
                        className="text-3xl font-bold uppercase"
                        style={{ fontFamily: 'GothamBold' }}
                    >
                        {t('c1.section2.right.title.top')} <br /> {t('c1.section2.right.title.bottom')}
                    </h3>
                    {/* Número grande 04 */}
                    <div
                        className="text-[30vh] font-bold opacity-30 mt-[-17vh]"
                        style={{ fontFamily: 'GothamBold' }}
                    >
                        04
                    </div>
                </div>

                {/* Texto descriptivo izquierda */}
                <div className="absolute top-[60vh] left-[15vh] max-w-[42vh]">
                    <p
                        className="text-[2vh] leading-relaxed"
                        style={{ fontFamily: 'GothamNormal' }}
                    >
                        {t('c1.section2.left.descLine1')} <br />
                        {t('c1.section2.left.descLine2')} <br />
                        {t('c1.section2.left.descLine3')} 
                    </p>
                </div>

                {/* Texto descriptivo derecha */}
                <div className="absolute top-[60vh] right-[15vh] text-right">
                    <p
                        className="text-[2vh] leading-relaxed"
                        style={{ fontFamily: 'GothamNormal' }}
                    >
                        {t('c1.section2.right.descLine1')} <br />
                        {t('c1.section2.right.descLine2')}
                    </p>
                </div>

                {/* Imágenes centro */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col h-full" >
                    {/* Primera imagen */}
                    <motion.div
                        className="relative w-[60vh] h-[50vh] cursor-pointer origin-center group hover:z-30"
                        style={{ willChange: 'transform' }}
                        whileHover={hoverAnim.withinHover}
                        whileTap={{ scale: 1.02 }}
                        {...hoverAnim}
                    >
                        <div className="absolute inset-0 overflow-hidden rounded-none" onClick={() => handleImageClick(Img1)}>
                            <img
                                src={Img1}
                                alt={t('c1.section2.images.img1Alt')}
                                className="w-full h-full object-cover select-none pointer-events-none"
                                draggable={false}
                            />
                        </div>
                        {/* Zoom */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <div onClick={() => handleImageClick(Img1)}>
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
                        <div className="absolute inset-0 overflow-hidden rounded-none" onClick={() => handleImageClick(Img2)}>
                            <img
                                src={Img2}
                                alt={t('c1.section2.images.img2Alt')}
                                className="w-full h-full object-cover select-none pointer-events-none"
                                draggable={false}
                            />
                        </div>
                        {/* Zoom */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <div onClick={() => handleImageClick(Img2)}>
                                <ZoomButton />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Modal / Lightbox */}
            {selectedImage && (
                <Lightbox
                    src={selectedImage}
                    alt={t('c1.section2.modal.alt')}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default Section1C2;