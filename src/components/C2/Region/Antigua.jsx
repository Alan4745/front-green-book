import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
            {/* Columna izquierda */}
            <div className="w-[58%] h-full relative">
                <img
                    src={FondoAntigua}
                    alt="Fondo Antigua"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50 z-10" />

                <div className="absolute top-[3vh] left-[3vh] z-20">
                    <BackButton onClick={() => navigate('/c2')} />
                </div>

                <div className="absolute top-[30vh] left-[48vh] z-20">
                    <img
                        src={AntiguaR}
                        alt="Logo Antigua"
                        className="w-[28vh] h-auto"
                    />
                </div>

                <p
                    className="absolute bottom-[34vh] left-[32%] w-full text-left text-white text-[2.3vh] z-20"
                    style={{ fontFamily: 'GothamNormal' }}
                >
                    Clima frío, en medio de tres imponentes<br />
                    volcanes: Agua, Fuego y Acatenango.
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
                        src={PDRAntigua}
                        alt="Perfil de Región Antigua"
                        className="w-full h-auto object-contain"
                    />
                </div>

                <div className="absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-[60%]">
                    <img
                        src={AntiguaG}
                        alt="Gráfica Antigua"
                        className="w-[100vh] h-auto object-contain"
                    />
                </div>

                <div className="absolute bottom-[10vh] left-[20%] z-20">
                    <ul className="space-y-2 text-[2.3vh]" style={{ fontFamily: 'GothamNormal' }}>
                        <li className="flex items-center gap-2">
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#F7941D] inline-block"></span>
                            Elegante
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#F7941D] inline-block"></span>
                            Balanceado
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#F7941D] inline-block"></span>
                            Aromático
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#F7941D] inline-block"></span>
                            Dulce
                        </li>
                    </ul>
                </div>
            </div>

            {/* Modal de zoom */}
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