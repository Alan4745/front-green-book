import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import PDROriente from '../../../assets/C2/PerfilDeRegion/OrienteT.svg';
import OrienteG from '../../../assets/C2/Graficas/OrienteG.svg';
import FondoOriente from '../../../assets/C2/FR/Oriente.svg';
import OrienteR from '../../../assets/C2/Region/OrienteR.svg';

import BackButton from '../../Global/BackButton';
import ZoomButton from '../../Global/ZoomButton';
import CloseButton from '../../Global/CloseButton';

const Oriente = () => {
    const navigate = useNavigate();
    const [showZoom, setShowZoom] = useState(false);

    return (
        <div className="flex w-screen h-screen overflow-hidden">
            {/* Columna izquierda */}
            <div className="w-[58%] h-full relative">
                <img
                    src={FondoOriente}
                    alt="Fondo Oriente"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50 z-10" />

                <div className="absolute top-[3vh] left-[3vh] z-20">
                    <BackButton onClick={() => navigate('/c2')} />
                </div>

                <div className="absolute top-[30vh] left-[48vh] z-20">
                    <img
                        src={OrienteR}
                        alt="Región Oriente"
                        className="w-[28vh] h-auto"
                    />
                </div>

                <p
                    className="absolute bottom-[34vh] left-[29%] w-full text-left text-white text-[2.3vh] z-20"
                    style={{ fontFamily: 'GothamNormal' }}
                >
                    Cultivado en una majestuosa sierra volcánica<br />
                    inactiva que atraviesa el país.
                </p>

                <div className="absolute bottom-[3vh] right-[3vh] z-20">
                    <div onClick={() => setShowZoom(true)}>
                        <ZoomButton />
                    </div>
                </div>
            </div>

            {/* Columna derecha */}
            <div className="w-[42%] h-full bg-white relative">
                <div className="absolute top-[5%] left-[28%] flex items-start h-full">
                    <img
                        src={PDROriente}
                        alt="Perfil de Región Oriente"
                        className="w-full h-auto object-contain"
                    />
                </div>

                <div className="absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-[60%]">
                    <img
                        src={OrienteG}
                        alt="Gráfica Oriente"
                        className="w-[100vh] h-auto object-contain"
                    />
                </div>

                <div className="absolute bottom-[10vh] left-[20%] z-20">
                    <ul className="space-y-2 text-[2.3vh]" style={{ fontFamily: 'GothamNormal' }}>
                        <li className="flex items-center gap-2">
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#5A3C9D] inline-block"></span>
                            Equilibrado
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#5A3C9D] inline-block"></span>
                            Sabor achocolatado
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#5A3C9D] inline-block"></span>
                            Mucho cuerpo
                        </li>
                    </ul>
                </div>
            </div>

            {/* Modal de zoom */}
            {showZoom && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                    <div className="relative overflow-auto">
                        <img
                            src={FondoOriente}
                            alt="Oriente Full"
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

export default Oriente;