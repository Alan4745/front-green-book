// CoverColab.jsx
import React, { useRef } from 'react'
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

const CoverColab = () => {
    const navigate = useNavigate()
    const sectionRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    })

    // ===== FASE 1: escala + subir (grupo) =====
    // Añadimos un zoom final en F4 para que el grupo crezca y se sienta "hero".
    const groupScale = useTransform(scrollYProgress, [0, 0.4, 0.9, 1], [1, 0.55, 0.55, 1.25])
    const groupY     = useTransform(scrollYProgress, [0, 0.4, 1], ['0vh', '-12vh', '-12vh'])

    // ===== FASE 2: abrir a los lados; F4: regresar al centro =====
    const leftX  = useTransform(
        scrollYProgress,
        [0,    0.4,   0.8,   0.9,   1],
        ['0vw','-45vw','-45vw','-22vw','0vw']
    )
    const rightX = useTransform(
        scrollYProgress,
        [0,    0.4,   0.8,   0.9,   1],
        ['0vw','45vw', '45vw', '22vw', '0vw']
    )

    // ===== FASE 3: bajar más y F4 recentrar en Y =====
    const leftY  = useTransform(
        scrollYProgress,
        [0,    0.4,  0.8,  0.9,  1],
        ['0vh','18vh','0vh','20vh','0vh']
    )
    const rightY = useTransform(
        scrollYProgress,
        [0,    0.4,  0.8,  0.9,  1],
        ['0vh','12vh','0vh','16vh','0vh']
    )

    // ===== FASE 4: logos pequeños fade-out =====
    const logosOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [1, 0.15, 0])

    // ===== FASE 4: zoom explícito de los LOGOTIPOS GRANDES (wordmarks) =====
    const brandsScale = useTransform(scrollYProgress, [0.8, 0.9, 1], [1, 4, 1.4])

    // ===== FASE 4: mover wordmarks hacia el centro (respetando tus rangos) =====
    // Izquierda → se mueve a la derecha (+x). Derecha → a la izquierda (-x).
    const brandLeftX  = useTransform(scrollYProgress, [0.5, 0.8], ['0vw',  '20vw'])
    const brandRightX = useTransform(scrollYProgress, [0.5, 0.8], ['0vw', '-20vw'])

    // ===== FASE 4: SUBIR wordmarks =====
    // Ajusta -14vh a -18vh o -22vh si los quieres aún más altos.
    const brandLeftY  = useTransform(scrollYProgress, [0.6, 0.8], ['0vh', '-15vh'])
    const brandRightY = useTransform(scrollYProgress, [0.6, 0.8], ['0vh', '-15vh'])

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
                        {/* Logo pequeño (icono) con fade-out */}
                        <motion.img
                            src={LogoGC}
                            alt="Logo Guatemalan Coffees"
                            className="w-52 h-auto mb-6"
                            style={{ opacity: logosOpacity }}
                        />
                        {/* LOGOTIPO grande (wordmark): zoom + acercarse al centro + SUBIR en F4 */}
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
                        {/* Logo pequeño (icono) con fade-out */}
                        <motion.img
                            src={LogoAC}
                            alt="Logo ANACAFÉ"
                            className="w-48 h-auto mb-6"
                            style={{ opacity: logosOpacity }}
                        />
                        {/* LOGOTIPO grande (wordmark): zoom + acercarse al centro + SUBIR en F4 */}
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

            {/* ===== TARJETAS (con colores y botones) ===== */}
            <div className="absolute bottom-26 left-1/2 -translate-x-1/2 flex gap-8">
                {/* Tarjeta 1 con botón y logo GC */}
                <div className="relative w-[42vh] h-[48vh] rounded-xl bg-[#FFFFFF] flex items-center justify-center">
                    <button className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#562E91] flex items-center justify-center shadow-md hover:scale-110 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    <img src={LogoGC} alt="Logo Guatemalan Coffees" className="w-54 h-auto" />
                </div>

                {/* Tarjeta 2 */}
                <div className="w-[42vh] h-[48vh] rounded-xl bg-[#FFFFFF]" />

                {/* Tarjeta 3 con botón y logo AC */}
                <div className="relative w-[42vh] h-[48vh] rounded-xl bg-[#0B312C] flex items-center justify-center">
                    <button className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#738720] flex items-center justify-center shadow-md hover:scale-110 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                    <img src={LogoACV} alt="Logo ANACAFÉ" className="w-54 h-auto" />
                </div>

                {/* Tarjeta 4 */}
                <div className="w-[42vh] h-[48vh] rounded-xl bg-[#FFFFFF]" />
            </div>
        </section>
    )
}

export default CoverColab