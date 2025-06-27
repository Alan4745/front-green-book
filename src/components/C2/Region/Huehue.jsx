import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import PDRHuehue from '../../../assets/C2/PerfilDeRegion/HuehueT.svg';
import HuehueG from '../../../assets/C2/Graficas/HuehueG.svg';
import FondoHuehue from '../../../assets/C2/FR/Huehue.svg';
import HuehueR from '../../../assets/C2/Region/HuehueR.svg';

import BackButton from '../../Global/BackButton';
import ZoomButton from '../../Global/ZoomButton';
import CloseButton from '../../Global/CloseButton';

const Huehue = () => {
    const navigate = useNavigate();
    const [showZoom, setShowZoom] = useState(false);

    return (
        <div className="flex w-screen h-screen overflow-hidden">
            {/* Columna izquierda con imagen y overlay */}
            <div className="w-[58%] h-full relative">
                <img
                    src={FondoHuehue}
                    alt="Fondo Huehue"
                    className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50 z-10" />

                {/* Botón regresar */}
                <div className="absolute top-[3vh] left-[3vh] z-20">
                    <BackButton onClick={() => navigate('/c2')} />
                </div>

                {/* Logo Huehue */}
                <div className="absolute top-[30vh] left-[48vh] z-20">
                    <img
                        src={HuehueR}
                        alt="Región Huehue"
                        className="w-[28vh] h-auto"
                    />
                </div>

                {/* Descripción */}
                <p
                    className="absolute bottom-[32vh] left-[30%] w-full text-left text-white text-[2.3vh] z-20"
                    style={{ fontFamily: 'GothamNormal' }}
                >
                    De montañas con más de 2,000m de altura<br />
                    que reciben vientos cálidos de México.
                </p>

                {/* Zoom */}
                <div className="absolute bottom-[3vh] right-[3vh] z-20">
                    <div onClick={() => setShowZoom(true)}>
                        <ZoomButton />
                    </div>
                </div>
            </div>

            {/* Panel derecho */}
            <div className="w-[42%] h-full bg-white relative">
                {/* Título Perfil */}
                <div className="absolute top-[5%] left-[28%] flex items-start h-full">
                    <img
                        src={PDRHuehue}
                        alt="Perfil de Región Huehue"
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Gráfica */}
                <div className="absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-[60%]">
                    <img
                        src={HuehueG}
                        alt="Gráficas de Huehue"
                        className="w-[100vh] h-auto object-contain"
                    />
                </div>

                {/* Bullets */}
                <div className="absolute bottom-[10vh] left-[20%] z-20">
                    <ul className="space-y-2 text-[2.3vh]" style={{ fontFamily: 'GothamNormal' }}>
                        <li className="flex items-center gap-2">
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#87247A] inline-block"></span>
                            Acidez fina e intensa
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#87247A] inline-block"></span>
                            Cuerpo lleno
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#87247A] inline-block"></span>
                            Agradables notas avinatadas
                        </li>
                    </ul>
                </div>
            </div>

            {/* Modal */}
            {showZoom && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                    <div className="relative overflow-auto">
                        <img
                            src={FondoHuehue}
                            alt="Huehue Full"
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

export default Huehue;