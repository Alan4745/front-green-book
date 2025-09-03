import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'

import BackButton from '../Global/BackButton'
import MainMenu from '../Global/MainMenu'
import LanguageSelector from '../Global/LanguageSelector'

import LogoGC from '../../assets/Colab/LogoGC.svg'
import LogoAC from '../../assets/Colab/LogoAC.svg'
import LogoACV from '../../assets/Colab/LogoACV.svg'
import LogotipoGC from '../../assets/Colab/LogotipoGC.svg'
import LogotipoAC from '../../assets/Colab/LogotipoAC.svg'

import VideoAC from '../../assets/Colab/Videos/AC.mp4'
import VideoGC from '../../assets/Colab/Videos/GC.mp4'

const CoverColab = () => {
    const navigate = useNavigate()
    const sectionRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    })

    // ===== FASES Y TRANSFORMACIONES =====
    // (Mantén las fases de animación como ya están)
    const groupScale = useTransform(scrollYProgress, [0, 0.4, 0.9, 1], [1, 0.55, 0.55, 1.25])
    const groupY = useTransform(scrollYProgress, [0, 0.4, 1], ['0vh', '-12vh', '-12vh'])

    const leftX = useTransform(scrollYProgress, [0, 0.4, 0.8, 0.9, 1], ['0vw','-45vw','-45vw','-22vw','0vw'])
    const rightX = useTransform(scrollYProgress, [0, 0.4, 0.8, 0.9, 1], ['0vw','45vw', '45vw', '22vw', '0vw'])

    const leftY = useTransform(scrollYProgress, [0, 0.4, 0.8, 0.9, 1], ['0vh','18vh','0vh','20vh','0vh'])
    const rightY = useTransform(scrollYProgress, [0, 0.4, 0.8, 0.9, 1], ['0vh','12vh','0vh','16vh','0vh'])

    const logosOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [1, 0.15, 0])

    const brandsScale = useTransform(scrollYProgress, [0.8, 0.9, 1], [1, 4, 1.4])

    const brandLeftX = useTransform(scrollYProgress, [0.5, 0.8], ['0vw',  '20vw'])
    const brandRightX = useTransform(scrollYProgress, [0.5, 0.8], ['0vw', '-20vw'])

    const brandLeftY = useTransform(scrollYProgress, [0.6, 0.8], ['0vh', '-15vh'])
    const brandRightY = useTransform(scrollYProgress, [0.6, 0.8], ['0vh', '-15vh'])

    // FASE 5: Entrada sutil de las tarjetas
    const cardOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])  // De 0 a 1 con el scroll

    // Redirigir a la sectionGC
    const handleGoToSectionGC = () => {
        navigate('/colab/sgc')  // Cambia a la ruta correspondiente para sectionGC
    }

    // Redirigir a la sectionAC
    const handleGoToSectionAC = () => {
        navigate('/colab/sac')  // Cambia a la ruta correspondiente para sectionAC
    }

    return (
        <section
        ref={sectionRef}
        className="relative h-[560vh] w-full bg-[#046C7F] bg-no-repeat bg-center bg-cover z-10"
        >
            {/* ===== BOTONES FIJOS ===== */}
            <div className="fixed top-6 left-6 md:top-8 md:left-8 z-50 pointer-events-auto">
                <BackButton onClick={() => navigate('/')} />
            </div>

            <div className="fixed top-6 right-6 md:top-8 md:right-8 z-50 pointer-events-auto">
                <MainMenu />
            </div>
            
            <div className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-50 pointer-events-auto">
                <LanguageSelector />
            </div>

            {/* ===== ESCENA STICKY ===== */}
            <div className="sticky top-0 h-screen w-full">
                <div className="h-full w-full flex justify-center items-start">
                    {/* Contenedor general: escala + SUBE */}
                    <motion.div
                        style={{ scale: groupScale, y: groupY, transformOrigin: 'top center' }}
                        className="mt-64 flex items-center justify-center gap-8 px-6 py-4 will-change-transform z-20"
                    >
                        {/* IZQUIERDA: Guatemalan Coffees */}
                        <motion.div
                        style={{ x: leftX, y: leftY }}
                        className="flex flex-col items-center justify-center mr-42 will-change-transform"
                        >
                        <motion.img
                            src={LogoGC}
                            alt="Logo Guatemalan Coffees"
                            className="w-52 h-auto mb-6"
                            style={{ opacity: logosOpacity }}
                        />
                        <motion.img
                            src={LogotipoGC}
                            alt="Logotipo Guatemalan Coffees"
                            className="w-82 h-auto"
                            style={{ scale: brandsScale, x: brandLeftX, y: brandLeftY }}
                        />
                        </motion.div>

                        {/* Línea centrada */}
                        <div className="w-[0.6vh] h-64 rounded-full bg-white" />

                        {/* DERECHA: ANACAFÉ */}
                        <motion.div
                        style={{ x: rightX, y: rightY }}
                        className="flex flex-col items-center justify-center ml-42 will-change-transform"
                        >
                        <motion.img
                            src={LogoAC}
                            alt="Logo ANACAFÉ"
                            className="w-48 h-auto mb-6"
                            style={{ opacity: logosOpacity }}
                        />
                        <motion.img
                            src={LogotipoAC}
                            alt="Logotipo ANACAFÉ"
                            className="w-82 h-auto"
                            style={{ scale: brandsScale, x: brandRightX, y: brandRightY }}
                        />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* ===== TARJETAS (con colores y videos) ===== */}
            <div className="absolute bottom-26 left-1/2 -translate-x-1/2 flex gap-8">
                {/* Tarjeta 1 con botón y logo GC */}
                <motion.div
                    className="relative w-[42vh] h-[48vh] rounded-xl bg-[#FFFFFF] flex items-center justify-center"
                    style={{ opacity: cardOpacity }} // Fase 5: opacidad para las tarjetas
                >
                    <button 
                        onClick={handleGoToSectionGC}  // Redirige a la sección de GC
                        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#562E91] flex items-center justify-center shadow-md hover:scale-110 transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    <img src={LogoGC} alt="Logo Guatemalan Coffees" className="w-54 h-auto" />
                </motion.div>

                {/* Tarjeta 2 con video */}
                <motion.div
                    className="relative w-[42vh] h-[48vh] rounded-xl bg-[#FFFFFF]"
                    style={{ opacity: cardOpacity }} // Fase 5: opacidad para las tarjetas
                >
                    <video className="w-full h-full object-cover rounded-xl" autoPlay loop muted>
                        <source src={VideoGC} type="video/mp4" />
                        Tu navegador no soporta el formato de video 😱
                    </video>
                </motion.div>

                {/* Tarjeta 3 con botón y logo AC */}
                <motion.div
                    className="relative w-[42vh] h-[48vh] rounded-xl bg-[#0B312C] flex items-center justify-center"
                    style={{ opacity: cardOpacity }} // Fase 5: opacidad para las tarjetas
                >
                    <button 
                        onClick={handleGoToSectionAC}  // Redirige a la sección de AC
                        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#738720] flex items-center justify-center shadow-md hover:scale-110 transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    <img src={LogoACV} alt="Logo ANACAFÉ" className="w-54 h-auto" />
                </motion.div>

                {/* Tarjeta 4 con video */}
                <motion.div
                    className="relative w-[42vh] h-[48vh] rounded-xl bg-[#FFFFFF]"
                    style={{ opacity: cardOpacity }} // Fase 5: opacidad para las tarjetas
                >
                    <video className="w-full h-full object-cover rounded-xl" autoPlay loop muted>
                        <source src={VideoAC} type="video/mp4" />
                        Tu navegador no soporta el formato de video 😱
                    </video>
                </motion.div>
            </div>
        </section>
    )
}

export default CoverColab