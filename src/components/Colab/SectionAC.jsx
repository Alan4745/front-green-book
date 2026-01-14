// src/components/Colab/SectionAC.jsx
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import BackButton from '../Global/BackButton';
import LanguageSelector from '../Global/LanguageSelector';

import ancafe from '../../assets/Colab/Videos/AC.mp4';

function TextMaskOverlay({
    className = '',
    rectOpacity = 0.9,
    topText = 'ANACA',
    bottomText = 'GUATEMAL',
}) {
    const VB_WIDTH = 1200;
    const VB_HEIGHT = 900;

    const TOP_Y = 480;
    const BOTTOM_Y = 580;
    const TOP_FONT = 240;
    const BOTTOM_FONT = 80;
    const X_START = VB_WIDTH - 0;
    const TOP_TRACKING = 8;
    const BOTTOM_TRACKING = 3;

    return (
        <svg
            className={`absolute top-0 left-0 h-full w-3/5 ${className}`}
            viewBox={`0 0 ${VB_WIDTH} ${VB_HEIGHT}`}
            preserveAspectRatio="none"
            role="img"
            aria-label="Máscara de texto sobre video"
            style={{ pointerEvents: 'none', fontFamily: 'GothamBold' }}
        >
            <defs>
                <mask id="mask-cutout" x="0" y="0" width="100%" height="100%">
                    <rect
                        x="0"
                        y="0"
                        width={VB_WIDTH}
                        height={VB_HEIGHT}
                        fill="white"
                    />
                    {/* Texto que recorta */}
                    <text
                        x={X_START}
                        y={TOP_Y}
                        fill="black"
                        fontSize={TOP_FONT}
                        fontWeight="bold"
                        letterSpacing={TOP_TRACKING}
                        textAnchor="end"
                    >
                        {topText}
                    </text>
                    <text
                        x={X_START}
                        y={BOTTOM_Y}
                        fill="black"
                        fontSize={BOTTOM_FONT}
                        fontWeight="bold"
                        letterSpacing={BOTTOM_TRACKING}
                        textAnchor="end"
                    >
                        {bottomText}
                    </text>
                </mask>
            </defs>

            {/* Rectángulo con la máscara recortada */}
            <rect
                x="0"
                y="0"
                width={VB_WIDTH}
                height={VB_HEIGHT}
                fill={`rgba(255,255,255,${rectOpacity})`}
                mask="url(#mask-cutout)"
            />
        </svg>
    );
}

const SectionAC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [cleanView, setCleanView] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);
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
            <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                playsInline
                aria-label={t('colab.sac.videoAlt')}
            >
                <source src={ancafe} type="video/mp4" />
                {t('colab.sac.videoFallback')}
            </video>
            <button
                type="button"
                onClick={togglePlayPause}
                className="absolute top-6 left-6 z-30 p-2 hover:bg-white/10 rounded-full transition-colors"
                title={isPlaying ? t('colab.sac.buttons.pause') : t('colab.sac.buttons.play')}
                aria-label={isPlaying ? t('colab.sac.buttons.pause') : t('colab.sac.buttons.play')}
            >
                {isPlaying ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M8 5v14l11-7z" />
                    </svg>
                )}
            </button>

           
        </div>
    );
};

export default SectionAC;