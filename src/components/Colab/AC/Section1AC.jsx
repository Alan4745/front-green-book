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
         

            {/* 🖼️ Overlays (se ocultan/mostran con fade) */}
            <div
                className={`absolute inset-0 z-20 transition-opacity duration-300 ${cleanView ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
                {/* Rectángulo derecha con opacidad */}
                <div className="absolute top-0 right-0 w-3/5 h-full bg-white/90" aria-hidden="true" />


                {/* Logo */}
                <div className="absolute top-6 right-230">
                    <img
                        src={AnacafeLogo}
                        className="w-[15vh] h-auto"
                        alt={t('colab.cover.alts.acLogo')}
                        title={t('colab.cover.alts.acLogo')}
                    />
                </div>

                {/* Puntos numerados con texto */}
                <div className="absolute top-[20vh] left-[0vh]">
                    <div className="flex items-center " style={{display:"flex", flexDirection:"column"}}>
                        <span
                            className="text-[15vh] text-[#0B312C] opacity-65"
                            style={{ fontFamily: 'GothamBold' }}
                        >
                            <div style={{display:"flex"}}>01 <div className='text-[4vh] text-[#000000] w-[20vw]' style={{marginTop:"2.8vw", marginLeft:"2vw"}}>Inovación Tecnológica</div> </div>
                        </span>
                        <p  className="text-[2vh]" style={{ marginLeft:"20vw", width:"28vw" ,fontFamily: 'GothamNormal' }}>
                            {t('colab.sac.points.p1.text')}
                        </p>
                    </div>
                </div>

                <div className="absolute top-[40vh] right-[20vh]">
                     <div className="flex items-center" style={{display:"flex", flexDirection:"column"}}>
                        <span
                            className="text-[15vh] text-[#0B312C] opacity-65"
                            style={{ fontFamily: 'GothamBold' }}
                        >
                            <div style={{display:"flex"}}>02 <div className='text-[4vh] text-[#000000] w-[20vw]' style={{marginTop:"2.8vw", marginLeft:"2vw"}}>Gestión Organizacional</div> </div>
                        </span>
                        <p  className="text-[2vh]" style={{ marginLeft:"20vw", width:"30vw" ,fontFamily: 'GothamNormal' }}>
                            {t('colab.sac.points.p2.text')}
                        </p>
                    </div>
                </div>

                <div className="absolute top-[60vh] left-[8vh]">
                     <div className="flex items-center" style={{display:"flex", flexDirection:"column"}}>
                        <span
                            className="text-[15vh] text-[#0B312C] opacity-65"
                            style={{ fontFamily: 'GothamBold' }}
                        >
                            <div style={{display:"flex"}}>03 <div className='text-[4vh] text-[#000000] w-[20vw]' style={{marginTop:"2.8vw", marginLeft:"2vw"}}>Investigación y Desarrollo</div> </div>
                        </span>
                        <p  className="text-[2vh]" style={{ marginLeft:"16vw", width:"24vw" ,fontFamily: 'GothamNormal' }}>
                            {t('colab.sac.points.p3.line1')} {t('colab.sac.points.p3.cedicafe')} 
                        </p>
                        
                    </div>
                </div>
            </div>

          
            {/* 🔘 Botón flotante para alternar “Solo video” / “Mostrar contenido” */}
         
        </div>
    );
};

export default Section1AC;