import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import BackButton from '../Global/BackButton';

import VideoAC from '../../assets/Colab/Videos/AC.mp4';

const SectionAC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [cleanView, setCleanView] = useState(false); // true = solo video
    const [isPlaying, setIsPlaying] = useState(true); // true = reproduciendo
    const videoRef = useRef(null);
    
    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div
            className="relative min-h-screen w-full flex"
            role="region"
            aria-label={t('colab.sac.aria.section')}
        >
            {/* 🎬 Video de fondo (NO se desmonta, por eso no se reinicia) */}
            <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                playsInline
                aria-label={t('colab.sac.videoAlt')}
            >
                <source src={VideoAC} type="video/mp4" />
                {t('colab.sac.videoFallback')}
            </video>

            {/* 🖼️ Overlays (se ocultan/mostran con fade) */}
            <div className={`absolute inset-0 z-20 transition-opacity duration-300 ${ cleanView ? 'opacity-0 pointer-events-none' : 'opacity-100' }`} >
                {/* Rectángulo izquierda con opacidad (decorativo) */}
                <div className="absolute top-0 left-0 w-3/5 h-full bg-white/90" aria-hidden="true" />

                {/* Botón de retroceso */}
                <div className="absolute top-6 left-6">
                    <BackButton onClick={() => navigate('/colab')} color="black" />
                </div>

                <div className="absolute bottom-6 left-6">
                    <p className="w-[100vh] text-xl" style={{ fontFamily: 'GothamNormal' }}>
                        {t('colab.sac.desc')}
                    </p>
                    <button
                        type="button"
                        // 🔁 AHORA usa useNavigate para ir a /colab
                        onClick={() => navigate('/colab/sac/coverac')}
                        className="mt-4 text-black py-2 underline underline-offset-6 cursor-pointer uppercase"
                        title={t('colab.sac.buttons.readMoreTitle')}
                        aria-label={t('colab.sac.buttons.readMoreTitle')}
                        style={{ fontFamily: 'GothamBold' }}
                    >
                        {t('colab.sac.buttons.readMore')}
                    </button>
                </div>
            </div>

            {/* 🎵 Botón de pausa/play en esquina superior derecha */}
            <button
                type="button"
                onClick={togglePlayPause}
                className="absolute top-6 right-6 z-30 p-2 hover:bg-white/10 rounded-full transition-colors"
                title={isPlaying ? t('colab.sac.buttons.pause') : t('colab.sac.buttons.play')}
                aria-label={isPlaying ? t('colab.sac.buttons.pause') : t('colab.sac.buttons.play')}
            >
                {isPlaying ? (
                    // Icono de pausa
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                ) : (
                    // Icono de play
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                )}
            </button>

            {/* 🔘 Botón flotante para alternar "Solo video" / "Mostrar contenido" */}
            <button
                type="button"
                aria-pressed={cleanView}
                title={cleanView ? t('colab.sac.buttons.toggle.show') : t('colab.sac.buttons.toggle.clean')}
                aria-label={cleanView ? t('colab.sac.buttons.toggle.show') : t('colab.sac.buttons.toggle.clean')}
                onClick={() => setCleanView(v => !v)}
                className="absolute bottom-6 right-6 z-30 inline-flex items-center gap-2 rounded-full bg-white/70 text-black px-4 py-2 backdrop-blur hover:bg-white/80 active:scale-[0.98] transition"
            >
                {/* Iconito inline (ojo / ojo tachado) */}
                {cleanView ? (
                    // Eye-off
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                        <path strokeWidth="2" d="M3 3l18 18M10.585 10.585A3 3 0 0012 15a3 3 0 002.121-.879M9.88 9.88C9.335 10.425 9 11.174 9 12m6 0c0-.826-.335-1.575-.88-2.12M4.5 7.5C6.5 5.5 9.09 4 12 4c5 0 8.5 3.5 9.5 8-.246 1.17-.697 2.244-1.33 3.18M6.12 17.88C4.92 16.86 3.99 15.54 3.5 14c1-4.5 4.5-8 8.5-8 1.02 0 2.001.18 2.91.51" />
                    </svg>
                ) : (
                    // Eye
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                        <path strokeWidth="2" d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
                        <circle cx="12" cy="12" r="3" strokeWidth="2" />
                    </svg>
                )}
                <span className="text-sm font-medium" style={{ fontFamily: 'GothamNormal' }}>
                    {cleanView ? t('colab.sac.buttons.toggle.show') : t('colab.sac.buttons.toggle.clean')}
                </span>
            </button>
        </div>
    );
}

export default SectionAC;