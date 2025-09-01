import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion'; // Importamos framer-motion

import PDRCoban from '../../../assets/C2/PerfilDeRegion/CobanT.svg';
import CobanG from '../../../assets/C2/Graficas/CobanG.svg';
import FondoCoban from '../../../assets/C2/FR/Coban.svg';
import CobanR from '../../../assets/C2/Region/CobanR.svg';

import BackButton from '../../Global/BackButton';
import ZoomButton from '../../Global/ZoomButton';
import CloseButton from '../../Global/CloseButton';

const Coban = () => {
    const navigate = useNavigate();
    const [showZoom, setShowZoom] = useState(false);

    return (
        <div className="flex w-screen h-screen overflow-hidden">
            {/* Columna izquierda con imagen y overlay */}
            <div className="w-[58%] h-full relative">
                {/* Animación de la imagen entrando desde la izquierda con opacidad 0 */}
                <motion.img
                    src={FondoCoban}
                    alt="Fondo Cobán"
                    className="w-full h-full object-cover"
                    initial={{ x: "-100%", opacity: 0 }}  // Comienza fuera de la pantalla y sin opacidad
                    animate={{ x: 0, opacity: 1 }} // La imagen se mueve a la posición central y gana opacidad
                    transition={{ duration: 2, ease: "easeInOut" }} // Movimiento suave y gradual
                />

                {/* Overlay negro con 50% de opacidad */}
                <div className="absolute inset-0 bg-black opacity-50 z-10" />

                {/* Botón de regreso */}
                <div className="absolute top-[3vh] left-[3vh] z-20">
                    <BackButton onClick={() => navigate('/c2')} />
                </div>

                {/* Animación del logo de región Cobán */}
                <motion.div
                    className="absolute top-[30vh] left-[50vh] z-20"
                    initial={{ opacity: 0, y: -200 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 2 }} // Retraso después de la imagen
                >
                    <img
                        src={CobanR}
                        alt="Región Cobán"
                        className="w-[25vh] h-auto"
                    />
                </motion.div>

                {/* Descripción con animación */}
                <motion.p
                    className="absolute bottom-[36vh] left-[3%] w-full text-center text-white text-[2.3vh] z-20"
                    style={{ fontFamily: 'GothamNormal' }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 2.2 }}
                >
                    Lloviznas que no se detienen,<br />
                    nubes y frío durante todo el año.
                </motion.p>

                {/* Botón de zoom en esquina inferior derecha */}
                <div className="absolute bottom-[3vh] right-[3vh] z-20">
                    <div onClick={() => setShowZoom(true)}>
                        <ZoomButton />
                    </div>
                </div>
            </div>

            {/* Columna derecha */}
            <div className="w-[42%] h-full bg-white">
                {/* Animación del perfil de la región Cobán */}
                <motion.div
                    className="relative w-full h-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 2.5 }} // Retraso para que entre después
                >
                    <div className="absolute top-[5%] left-[28%] flex items-start h-full">
                        <img
                            src={PDRCoban}
                            alt="Perfil de Región Cobán"
                            className="w-[100%] h-auto object-contain"
                        />
                    </div>
                </motion.div>

                {/* Gráficas de Cobán */}
                <motion.div
                    className="absolute top-1/2 left-[79%] transform -translate-x-1/2 -translate-y-[65%]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 2.8 }} // Retraso para que entre después
                >
                    <img
                        src={CobanG}
                        alt="Gráficas de Cobán"
                        className="w-[50vh] h-auto object-contain"
                    />
                </motion.div>

                {/* Lista de características */}
                <motion.div
                    className="absolute bottom-[12vh] left-[68%] z-20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.3, ease: "easeOut", delay: 3 }} // Retraso para que entre después
                >
                    <ul className="space-y-2 text-[2.3vh]" style={{ fontFamily: 'GothamNormal' }}>
                        <motion.li
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 3.2 }} // Afrutado entra primero
                        >
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#10AD8F] inline-block"></span>
                            Afrutado
                        </motion.li>
                        <motion.li
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 3.4 }} // Aroma agradable entra después
                        >
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#10AD8F] inline-block"></span>
                            Aroma agradable
                        </motion.li>
                        <motion.li
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 3.6 }} // Cuerpo fino y balanceado entra después
                        >
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#10AD8F] inline-block"></span>
                            Cuerpo fino y balanceado
                        </motion.li>
                    </ul>
                </motion.div>
            </div>

            {/* Modal de imagen ampliada */}
            {showZoom && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                    <div className="relative overflow-auto">
                        <img
                            src={FondoCoban}
                            alt="Cobán Full"
                            className="w-[90%] h-auto object-contain"
                        />
                    </div>

                    <div className="absolute top-18 right-95">
                        <CloseButton onClick={() => setShowZoom(false)} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Coban;