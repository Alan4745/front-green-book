import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion'; // Importamos framer-motion

import PDRAntigua from '../../../assets/C2/PerfilDeRegion/AntiguaT.svg';
import AntiguaG from '../../../assets/C2/Graficas/AntiguaG.svg';
import FondoAntigua from '../../../assets/C2/FR/Antigua.svg';
import AntiguaR from '../../../assets/C2/Region/AntiguaR.svg';

import BackButton from '../../Global/BackButton';
import ZoomButton from '../../Global/ZoomButton';
import CloseButton from '../../Global/CloseButton';

const Antigua = () => {
    const navigate = useNavigate();
    const [showZoom, setShowZoom] = useState(false);

    return (
        <div className="flex w-screen h-screen overflow-hidden">
            {/* Columna izquierda con imagen y overlay */}
            <div className="w-[58%] h-full relative">
                {/* Animación de la imagen entrando desde la izquierda con opacidad 0 */}
                <motion.img
                    src={FondoAntigua}
                    alt="Fondo Antigua"
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

                {/* Animación del logo de región Antigua */}
                <motion.div
                    className="absolute top-[30vh] left-[50vh] z-20"
                    initial={{ opacity: 0, y: -200 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 2 }} // Retraso después de la imagen
                >
                    <img
                        src={AntiguaR}
                        alt="Logo Antigua"
                        className="w-[28vh] h-auto"
                    />
                </motion.div>

                {/* Descripción con animación */}
                <motion.p
                    className="absolute bottom-[34vh] left-[4%] w-full text-center text-white text-[2.3vh] z-20"
                    style={{ fontFamily: 'GothamNormal' }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 2.2 }}
                >
                    Clima frío, en medio de tres imponentes<br />
                    volcanes: Agua, Fuego y Acatenango.
                </motion.p>

                {/* Botón de zoom en esquina inferior derecha */}
                <div className="absolute bottom-[3vh] right-[3vh] z-20">
                    <div onClick={() => setShowZoom(true)}>
                        <ZoomButton />
                    </div>
                </div>
            </div>

            {/* Columna derecha */}
            <div className="w-[42%] h-full bg-white relative">
                {/* Animación del perfil de la región Antigua */}
                <motion.div
                    className="absolute top-[5%] left-[28%] flex items-start h-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 2.5 }} // Retraso para que entre después
                >
                    <img
                        src={PDRAntigua}
                        alt="Perfil de Región Antigua"
                        className="w-full h-auto object-contain"
                    />
                </motion.div>

                {/* Gráficas de Antigua */}
                <motion.div
                    className="absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-[60%]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 2.8 }} // Retraso para que entre después
                >
                    <img
                        src={AntiguaG}
                        alt="Gráfica Antigua"
                        className="w-[100vh] h-auto object-contain"
                    />
                </motion.div>

                {/* Lista de características */}
                <motion.div
                    className="absolute bottom-[10vh] left-[20%] z-20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.3, ease: "easeOut", delay: 3 }} // Retraso para que entre después
                >
                    <ul className="space-y-2 text-[2.3vh]" style={{ fontFamily: 'GothamNormal' }}>
                        <motion.li
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 3.2 }} // Elegante entra primero
                        >
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#F7941D] inline-block"></span>
                            Elegante
                        </motion.li>
                        <motion.li
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 3.4 }} // Balanceado entra después
                        >
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#F7941D] inline-block"></span>
                            Balanceado
                        </motion.li>
                        <motion.li
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 3.6 }} // Aromático entra después
                        >
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#F7941D] inline-block"></span>
                            Aromático
                        </motion.li>
                        <motion.li
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 3.8 }} // Dulce entra después
                        >
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#F7941D] inline-block"></span>
                            Dulce
                        </motion.li>
                    </ul>
                </motion.div>
            </div>

            {/* Modal zoom */}
            {showZoom && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                    <div className="relative overflow-auto">
                        <img
                            src={FondoAntigua}
                            alt="Antigua Full"
                            className="w-[90%] h-auto object-contain"
                        />
                    </div>
                    <div className="absolute top-[4vh] right-[4vh] z-50">
                        <CloseButton onClick={() => setShowZoom(false)} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Antigua;