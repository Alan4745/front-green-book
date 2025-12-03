import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import BackButton from '../../Global/BackButton';
import AnacafeLogo from '../../../assets/Colab/CompleteLogos/GuatemalanLogo.svg';
import VideoGC from '../../../assets/Colab/Videos/GC.mp4';

const Section1GC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

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
        <div className="relative min-h-screen w-full flex"
         style={{ backgroundImage: `url('/Img/Global/cafebackground.png')` }}
        >

            {/* 🎬 Video de fondo (NO se desmonta, por eso no se reinicia) */}
           

            {/* 🖼️ Overlay: se oculta con fade para "solo video" */}
            <div
                className={`absolute inset-0 z-20 transition-opacity duration-300 ${cleanView ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
                {/* 📦 Card inferior derecha (logo + botón dentro) */}
                <div className="absolute bottom-60 right-[32%]">
                    <div className="flex flex-col">
                        {/* Encabezado del card: botón de regreso adentro */}

                        {/* Zona central: centra logo + texto vertical y horizontalmente */}
                        <div className="flex-1 flex flex-col items-center justify-center">
                            {/* Logo centrado */}
                            <div className="flex justify-center mb-12">
                                <img
                                    src={AnacafeLogo}
                                    className="h-[86px] md:h-[180px] w-auto"
                                    alt={t('colab.cover.alts.gcLogo')}
                                    title={t('colab.cover.alts.gcLogo')}
                                />
                            </div>

                            {/* Texto descriptivo centrado */}
                            <p
                                className="text-[2.2vh] max-w-[70vh] leading-snug text-black text-center mb-16"
                                style={{ fontFamily: 'GothamNormal' }}
                            >
                                {t('colab.gc.section1.desc')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

          
        </div>
    );
};

export default Section1GC;