import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
                {/* Imagen de fondo */}
                <img
                    src={FondoCoban}
                    alt="Fondo Cobán"
                    className="w-full h-full object-cover"
                />

                {/* Overlay negro con 50% de opacidad */}
                <div className="absolute inset-0 bg-black opacity-50 z-10" />

                {/* Botón de regreso */}
                <div className="absolute top-[3vh] left-[3vh] z-20">
                    <BackButton onClick={() => navigate('/c2')} />
                </div>

                {/* Logo de región Cobán */}
                <div className="absolute top-[30vh] left-[50vh] z-20">
                    <img
                        src={CobanR}
                        alt="Región Cobán"
                        className="w-[25vh] h-auto"
                    />
                </div>

                {/* Descripción */}
                <p
                    className="absolute bottom-[36vh] left-[36%] w-full text-left text-white text-[2.3vh] z-20"
                    style={{ fontFamily: 'GothamNormal' }}
                >
                    Lloviznas que no se detienen,<br />
                    nubes y frío durante todo el año.
                </p>

                {/* Botón de zoom en esquina inferior derecha */}
                <div className="absolute bottom-[3vh] right-[3vh] z-20">
                    <div onClick={() => setShowZoom(true)}>
                        <ZoomButton />
                    </div>
                </div>
            </div>

            {/* Columna derecha */}
            <div className="w-[42%] h-full bg-white">

                {/* Perfil de región Cobán */}
                <div className="relative w-full h-full">
                    <div className="absolute top-[5%] left-[28%] flex items-start h-full">
                        <img
                            src={PDRCoban}
                            alt="Perfil de Región Cobán"
                            className="w-[100%] h-auto object-contain"
                        />
                    </div>
                </div>

                {/* Gráficas de Cobán centradas vertical y horizontalmente en el área derecha */}
                <div className="absolute top-1/2 left-[79%] transform -translate-x-1/2 -translate-y-[65%]">
                    <img
                        src={CobanG}
                        alt="Gráficas de Cobán"
                        className="w-[50vh] h-auto object-contain"
                    />
                </div>

                {/* Lista de características al fondo del panel blanco */}
                <div className="absolute bottom-[12vh] left-[68%] z-20">
                    <ul className="space-y-2 text-[2.3vh]" style={{ fontFamily: 'GothamNormal' }}>
                        <li className="flex items-center gap-2">
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#10AD8F] inline-block"></span>
                            Afrutado
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#10AD8F] inline-block"></span>
                            Aroma agradable
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#10AD8F] inline-block"></span>
                            Cuerpo fino y balanceado
                        </li>
                    </ul>
                </div>

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