import React, { useRef, useState } from 'react'
import PageSkeleton from '../Global/PageSkeleton';
import LanguageSelector from '../Global/LanguageSelector';
import MainMenu from '../Global/MainMenu';
import { useTranslation } from 'react-i18next';
import VideoGC from '../../assets/Colab/Videos/GC.mp4';

const CoverC7 = () => {
  const [cerrarCartel, setCerrarCartel] = useState(true);
    const { t } = useTranslation();
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);
    const [cleanView, setCleanView] = useState(false); // true = solo video


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
    <PageSkeleton
            assets={[
                "/Img/C6/ImgC6.png",
                "/Img/Global/Numbers/06.svg",
                "/Logos/LogoPequeño.svg"
            ]}
            tintHex="#fff"
            graceMs={2000}
            variant="cover"
        >
          <div className="relative min-h-screen w-screen overflow-hidden bg-no-repeat bg-center bg-cover bg-black z-10">
                        <video
                            ref={videoRef}
                            className="absolute inset-0 w-full h-full object-cover z-0"
                            autoPlay
                            loop
                            playsInline
                            aria-label={t('colab.gc.videoAlt')}
                        >
                            <source src={VideoGC} type="video/mp4" />
                            {t('colab.gc.videoFallback')}
                        </video>
              <button
                type="button"
                onClick={togglePlayPause}
                className="absolute top-6 left-6 z-30 p-2 hover:bg-white/10 rounded-full transition-colors"
                title={isPlaying ? t('colab.gc.controls.pause') : t('colab.gc.controls.play')}
                aria-label={isPlaying ? t('colab.gc.controls.pause') : t('colab.gc.controls.play')}
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

            {cerrarCartel && 
              <div className='bg-[#ffffffcc] h-44 text-black p-10 w-1/2 flex flex-col items-start gap-5 absolute bottom-0 left-0  z-20'>
                <p className=' ' >{t('colab.gc.overlay.text')}</p>
                <button className='font-bold underline text-gray-500 cursor-pointer'>{t('colab.gc.overlay.cta')}</button>
                <button className="cursor-pointer absolute top-2 right-2 h-10 w-10 rounded-full bg-white/50 hover:bg-white/40 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white grid place-items-center"
                   onClick={() => setCerrarCartel(false)} >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                   >
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
            }
          </div>
        
           <div className="absolute bottom-[5vh] right-6 z-50">
              <LanguageSelector alignment='right' />
           </div>
          <div className="absolute top-[2vh] right-0 z-50">
              <MainMenu />
          </div>
          <div className=' w-full flex justify-center'>
            <button
                type="button"
                aria-pressed={cleanView}
                title={cleanView ? t('colab.sac.buttons.toggle.show') : t('colab.sac.buttons.toggle.clean')}
                aria-label={cleanView ? t('colab.sac.buttons.toggle.show') : t('colab.sac.buttons.toggle.clean')}
                onClick={() => {
                    setCleanView((v) => !v)
                    setCerrarCartel((v) => !v)
                }}
                className="absolute bottom-6 z-30 inline-flex items-center gap-2 rounded-full bg-white/70 text-black px-4 py-2 backdrop-blur hover:bg-white/80 active:scale-[0.98] transition"
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
        </PageSkeleton>
  )
}

export default CoverC7
