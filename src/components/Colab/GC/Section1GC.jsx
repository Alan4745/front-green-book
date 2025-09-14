import { useNavigate } from 'react-router-dom'
import { useState, useRef } from 'react'

import BackButton from '../../Global/BackButton';
import AnacafeLogo from '../../../assets/Colab/CompleteLogos/GuatemalanLogo.svg';
import VideoGC from '../../../assets/Colab/Videos/GC.mp4';

const Section1GC = () => {
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
                aria-label="Video de fondo Guatemalan Coffees"
            >
                <source src={VideoGC} type="video/mp4" />
                Tu navegador no soporta el formato de video 😱
            </video>

            {/* 🖼️ Overlay: se oculta con fade para "solo video" */}
            <div
                className={`absolute inset-0 z-20 transition-opacity duration-300 ${
                    cleanView ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
            >
                {/* 📦 Card inferior derecha (logo + botón dentro) */}
                <div className="absolute bottom-18 right-10">
                    <div className="relative w-[90vh] h-[60vh] bg-white/80 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/40 p-6 md:p-8 flex flex-col">
                        {/* Encabezado del card: botón de regreso adentro */}
                        <div className="flex items-center justify-between mb-4">
                            <BackButton onClick={() => navigate('/colab')} color="black" />
                        </div>

                        {/* Zona central: centra logo + texto vertical y horizontalmente */}
                        <div className="flex-1 flex flex-col items-center justify-center">
                            {/* Logo centrado */}
                            <div className="flex justify-center mb-12">
                                <img
                                    src={AnacafeLogo}
                                    className="h-[86px] md:h-[180px] w-auto"
                                    alt="Guatemalan Coffees"
                                />
                            </div>

                            {/* Texto descriptivo centrado */}
                            <p
                                className="text-[2.2vh] max-w-[70vh] leading-snug text-black text-center mb-16"
                                style={{ fontFamily: 'GothamNormal' }}
                            >
                                Guatemalan Coffees engloba ocho regiones productoras con identidades diferenciadas,
                                ligadas a su territorio. Conocer las fortalezas de cada región es clave para
                                comprender la diversidad de los cafés de Guatemala.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 🎛️ Controles superiores (ESQUINA SUPERIOR DERECHA) */}
            <div className="absolute top-6 right-6 z-30 flex items-center gap-2">
                {/* Play/Pause */}
                <button
                    type="button"
                    onClick={togglePlayPause}
                    className="p-2 hover:bg-white/10 rounded-full transition"
                    title={isPlaying ? 'Pausar video' : 'Reproducir video'}
                    aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
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
                    title={isMuted ? 'Activar sonido' : 'Silenciar video'}
                    aria-label={isMuted ? 'Activar sonido' : 'Silenciar video'}
                    aria-pressed={isMuted}
                >
                    {isMuted ? (
                        // Icono volumen mute
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M3 10v4h3v-4H3z" />
                            <path d="M10 5l-5 5h4v4H5l5 5V5zM16.5 12l4.5 4.5-1.5 1.5L15 13.5l4.5-4.5 1.5 1.5z" />
                        </svg>
                    ) : (
                        // Icono volumen on
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
                title={cleanView ? 'Mostrar contenido' : 'Ver solo video'}
                onClick={() => setCleanView(v => !v)}
                className="absolute bottom-10 left-6 z-30 inline-flex items-center gap-2 rounded-full bg-white/70 text-black px-4 py-2 backdrop-blur hover:bg-white/80 active:scale-[0.98] transition"
            >
                {/* Iconito inline (ojo / ojo tachado) */}
                {cleanView ? (
                    // Eye-off
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeWidth="2" d="M3 3l18 18M10.585 10.585A3 3 0 0012 15a3 3 0 002.121-.879M9.88 9.88C9.335 10.425 9 11.174 9 12m6 0c0-.826-.335-1.575-.88-2.12M4.5 7.5C6.5 5.5 9.09 4 12 4c5 0 8.5 3.5 9.5 8-.246 1.17-.697 2.244-1.33 3.18M6.12 17.88C4.92 16.86 3.99 15.54 3.5 14c1-4.5 4.5-8 8.5-8 1.02 0 2.001.18 2.91.51" />
                    </svg>
                ) : (
                    // Eye
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeWidth="2" d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
                        <circle cx="12" cy="12" r="3" strokeWidth="2" />
                    </svg>
                )}
                <span className="text-sm font-medium">
                    {cleanView ? 'Mostrar contenido' : 'Ver solo video'}
                </span>
            </button>
        </div>
    );
};

export default Section1GC;