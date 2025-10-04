// src/components/Colab/SectionAC.jsx
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import BackButton from '../Global/BackButton';
import LanguageSelector from '../Global/LanguageSelector';

import VideoAC from '../../assets/Colab/Videos/AC.mp4';

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
                <source src={VideoAC} type="video/mp4" />
                {t('colab.sac.videoFallback')}
            </video>

            <div
                className={`absolute inset-0 z-20 transition-opacity duration-300 ${
                    cleanView ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
            >
                <TextMaskOverlay
                    className=""
                    rectOpacity={0.9}
                    topText="ANACA"
                    bottomText="GUATEMAL"
                    style={{ fontFamily: 'GothamBold' }}
                />

                <div className="absolute top-6 left-6">
                    <BackButton onClick={() => navigate('/colab')} color="black" />
                </div>

                <div className="absolute bottom-6 left-[95vh] z-30">
                    <LanguageSelector
                        textColor="#000000"
                        subtextColor="#00000099"
                        buttonBg="#00000020"
                        menuBg="#00000010"
                        activeBg="#000000"
                        activeTextColor="#ffffff"
                    />
                </div>

                <div className="absolute bottom-6 left-6">
                    <p
                        className="w-[100vh] text-xl"
                        style={{ fontFamily: 'GothamNormal' }}
                    >
                        {t('colab.sac.desc')}
                    </p>
                    <button
                        type="button"
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

            {/* Texto FÉ y A en la derecha */}
            <div className={`absolute top-0 right-0 h-full flex z-10 transition-opacity duration-300 ${
                cleanView ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}>
                <div className="text-white text-left pr-[39vh] mt-66.5">
                    <div 
                        className="text-[17rem] leading-none tracking-wider font-bold"
                        style={{ fontFamily: 'GothamBold' }}
                    >
                        FÉ
                    </div>
                    <div 
                        className="text-[5.1rem] leading-none ml-3 mt-0.5 font-bold"
                        style={{ fontFamily: 'GothamBold' }}
                    >
                        A
                    </div>
                </div>
            </div>

            <button
                type="button"
                onClick={togglePlayPause}
                className="absolute top-6 right-6 z-30 p-2 hover:bg-white/10 rounded-full transition-colors"
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

            <button
                type="button"
                aria-pressed={cleanView}
                title={cleanView ? t('colab.sac.buttons.toggle.show') : t('colab.sac.buttons.toggle.clean')}
                aria-label={cleanView ? t('colab.sac.buttons.toggle.show') : t('colab.sac.buttons.toggle.clean')}
                onClick={() => setCleanView((v) => !v)}
                className="absolute bottom-6 right-6 z-30 inline-flex items-center gap-2 rounded-full bg-white/70 text-black px-4 py-2 backdrop-blur hover:bg-white/80 active:scale-[0.98] transition"
            >
                {cleanView ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeWidth="2"
                            d="M3 3l18 18M10.585 10.585A3 3 0 0012 15a3 3 0 002.121-.879M9.88 9.88C9.335 10.425 9 11.174 9 12m6 0c0-.826-.335-1.575-.88-2.12M4.5 7.5C6.5 5.5 9.09 4 12 4c5 0 8.5 3.5 9.5 8-.246 1.17-.697 2.244-1.33 3.18M6.12 17.88C4.92 16.86 3.99 15.54 3.5 14c1-4.5 4.5-8 8.5-8 1.02 0 2.001.18 2.91.51"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeWidth="2"
                            d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"
                        />
                        <circle
                            cx="12"
                            cy="12"
                            r="3"
                            strokeWidth="2"
                        />
                    </svg>
                )}
                <span
                    className="text-sm font-medium"
                    style={{ fontFamily: 'GothamNormal' }}
                >
                    {cleanView ? t('colab.sac.buttons.toggle.show') : t('colab.sac.buttons.toggle.clean')}
                </span>
            </button>
        </div>
    );
};

export default SectionAC;