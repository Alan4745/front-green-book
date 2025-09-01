import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import BackButton from '../../Global/BackButton';
import AnacafeLogo from '../../../assets/Colab/CompleteLogos/AnacafeLogo.svg';
import VideoAC from '../../../assets/Colab/Videos/AC.mp4';

const Section1AC = () => {
    const navigate = useNavigate();
    const [cleanView, setCleanView] = useState(false); // true = solo video

    return (
        <div className="relative min-h-screen w-full flex">
        {/* 🎬 Video de fondo (NO se desmonta, por eso no se reinicia) */}
        <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            autoPlay
            loop
            muted
            playsInline
        >
            <source src={VideoAC} type="video/mp4" />
            Tu navegador no soporta el formato de video 😱
        </video>

        {/* 🖼️ Overlays (se ocultan/mostran con fade) */}
        <div
            className={`absolute inset-0 z-20 transition-opacity duration-300 ${
            cleanView ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
        >
            {/* Rectángulo derecha con opacidad */}
            <div className="absolute top-0 right-0 w-3/5 h-full bg-white/90" />

            {/* Botón de retroceso */}
            <div className="absolute top-6 right-[112vh]">
            <BackButton onClick={() => navigate('/colab')} color="black" />
            </div>

            {/* Logo */}
            <div className="absolute top-6 right-6">
            <img src={AnacafeLogo} className="w-[15vh] h-auto" alt="Anacafe" />
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
                Impulsamos el uso de herramientas tecnológicas.
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
                Fortalecemos la administración organizacional.
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
                Promovemos la investigación y la innovación a <br />
                través de nuestro departamento de <span style={{ fontFamily: 'GothamBold' }}>Cedicafé</span>.
                </p>
            </div>
            </div>
        </div>

        {/* 🔘 Botón flotante para alternar “Solo video” / “Mostrar contenido” */}
        <button
            type="button"
            aria-pressed={cleanView}
            title={cleanView ? 'Mostrar contenido' : 'Ver solo video'}
            onClick={() => setCleanView(v => !v)}
            className="fixed bottom-6 left-6 z-30 inline-flex items-center gap-2 rounded-full bg-white/70 text-black px-4 py-2 backdrop-blur hover:bg-white/80 active:scale-[0.98] transition"
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

export default Section1AC;