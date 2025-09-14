import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import BackButton from '../../Global/BackButton';
import AnacafeLogo from '../../../assets/Colab/CompleteLogos/AnacafeLogo.svg';
import VideoAC from '../../../assets/Colab/Videos/AC.mp4';

const Section1AC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [cleanView, setCleanView] = useState(false); // true = solo video
    const [isPlaying, setIsPlaying] = useState(true);  // true = reproduciendo
    const [isMuted, setIsMuted] = useState(false);     // true = silenciado
    const videoRef = useRef(null);

    const togglePlayPause = () => {
        const v = videoRef.current;
        if (!v) return;
        if (isPlaying) v.pause();
        else v.play();
        setIsPlaying(p => !p);
    };

    const toggleMute = () => {
        const v = videoRef.current;
        if (!v) return;
        const next = !isMuted;
        v.muted = next;
        setIsMuted(next);
    };

    const toggleLabel = cleanView
        ? t('colab.sac.buttons.toggle.show')
        : t('colab.sac.buttons.toggle.clean');

    return (
        <div className="relative min-h-screen w-full flex">
            {/* 🎬 Video de fondo (NO se desmonta, por eso no se reinicia) */}
            <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                playsInline
                muted={isMuted}
                aria-label={t('colab.sac.videoAlt')}
            >
                <source src={VideoAC} type="video/mp4" />
                {t('colab.sac.videoFallback')}
            </video>

            {/* 🖼️ Overlays (se ocultan/mostran con fade) */}
            <div
                className={`absolute inset-0 z-20 transition-opacity duration-300 ${cleanView ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
                {/* Rectángulo derecha con opacidad */}
                <div className="absolute top-0 right-0 w-3/5 h-full bg-white/90" aria-hidden="true" />

                {/* Botón de retroceso */}
                <div className="absolute top-6 right-[112vh]">
                    <BackButton onClick={() => navigate('/colab')} color="black" />
                </div>

                {/* Logo */}
                <div className="absolute top-6 right-6">
                    <img
                        src={AnacafeLogo}
                        className="w-[15vh] h-auto"
                        alt={t('colab.cover.alts.acLogo')}
                        title={t('colab.cover.alts.acLogo')}
                    />
                </div>

                {/* Puntos numerados con texto */}
                <div className="absolute top-[20vh] right-[35vh]">
                    <div className="flex items-center gap-6">
                        <span
                            className="text-[15vh] text-[#0B312C] opacity-65"
                            style={{ fontFamily: 'GothamBold' }}
                        >
                            01
                        </span>
                        <p className="text-[2.5vh]" style={{ fontFamily: 'GothamNormal' }}>
                            {t('colab.sac.points.p1.text')}
                        </p>
                    </div>
                </div>

                <div className="absolute top-[45vh] right-[8vh]">
                    <div className="flex items-center gap-6">
                        <span
                            className="text-[15vh] text-[#0B312C] opacity-65"
                            style={{ fontFamily: 'GothamBold' }}
                        >
                            02
                        </span>
                        <p className="text-[2.5vh] text-right" style={{ fontFamily: 'GothamNormal' }}>
                            {t('colab.sac.points.p2.text')}
                        </p>
                    </div>
                </div>

                <div className="absolute top-[70vh] right-[35vh]">
                    <div className="flex items-center gap-6">
                        <span
                            className="text-[15vh] text-[#0B312C] opacity-65"
                            style={{ fontFamily: 'GothamBold' }}
                        >
                            03
                        </span>
                        <p className="text-[2.5vh]" style={{ fontFamily: 'GothamNormal' }}>
                            {t('colab.sac.points.p3.line1')} <br />
                            {t('colab.sac.points.p3.line2Before')}{' '}
                            <span style={{ fontFamily: 'GothamBold' }}>
                                {t('colab.sac.points.p3.cedicafe')}
                            </span>.
                        </p>
                    </div>
                </div>
            </div>

            {/* 🕹️ Controles superiores: Pausa/Reproducir + Mute/Unmute */}
            <div className="absolute top-6 left-6 z-30 flex items-center gap-2">
                {/* Play/Pause */}
                <button
                    type="button"
                    onClick={togglePlayPause}
                    className="p-2 hover:bg-white/10 rounded-full transition"
                    title={isPlaying ? t('colab.sac.buttons.pause') : t('colab.sac.buttons.play')}
                    aria-label={isPlaying ? t('colab.sac.buttons.pause') : t('colab.sac.buttons.play')}
                >
                    {isPlaying ? (
                        // Icono pausa
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        </svg>
                    ) : (
                        // Icono play
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    )}
                </button>

                {/* Mute/Unmute */}
                <button
                    type="button"
                    onClick={toggleMute}
                    className="p-2 hover:bg-white/10 rounded-full transition"
                    title={isMuted ? t('colab.sac.buttons.unmute') : t('colab.sac.buttons.mute')}
                    aria-label={isMuted ? t('colab.sac.buttons.unmute') : t('colab.sac.buttons.mute')}
                    aria-pressed={isMuted}
                >
                    {isMuted ? (
                        // Icono volumen mute (speaker off)
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M16.5 12l4.5 4.5-1.5 1.5L15 13.5 10.5 18H6v-6h4.5L15 6.5l4.5 4.5-1.5 1.5L16.5 12zM3 10v4h3v-4H3z" />
                        </svg>
                    ) : (
                        // Icono volumen on (speaker waves)
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M3 10v4h4l5 5V5l-5 5H3z" />
                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.06c1.48-.74 2.5-2.26 2.5-4.03zM14 3.23v2.06c2.89 1.17 4.88 4 4.88 7.15s-1.99 5.98-4.88 7.15v2.06c4.01-1.28 7-5.06 7-9.21 0-4.15-2.99-7.93-7-9.21z" />
                        </svg>
                    )}
                </button>
            </div>

            {/* 🔘 Botón flotante para alternar “Solo video” / “Mostrar contenido” */}
            <button
                type="button"
                aria-pressed={cleanView}
                title={toggleLabel}
                aria-label={toggleLabel}
                onClick={() => setCleanView(v => !v)}
                className="absolute bottom-16 left-6 z-30 inline-flex items-center gap-2 rounded-full bg-white/70 text-black px-4 py-2 backdrop-blur hover:bg-white/80 active:scale-[0.98] transition"
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
                <span className="text-sm font-medium">
                    {toggleLabel}
                </span>
            </button>
        </div>
    );
};

export default Section1AC;