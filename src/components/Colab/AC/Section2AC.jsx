import { useNavigate } from 'react-router-dom'

import FormaAC from '../../../assets/Colab/ui/FormaAC.svg';
import AnalabLogo from '../../../assets/Colab/CompleteLogos/AnalabLogo.svg';

const Section2AC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen w-full flex flex-col items-center bg-white">
            {/* Texto + logo (arriba derecha) */}
            <div className="absolute top-20 right-[32vh] z-10 flex items-center gap-[20vh]">
                <p
                    className="text-[3vh] leading-snug text-black text-left w-[100vh]"
                    style={{ fontFamily: 'GothamNormal' }}
                >
                    A través de <strong>Analab</strong>, realizamos análisis científicos para garantizar la
                    calidad del café:
                </p>
                <img
                    src={AnalabLogo}
                    alt="Analab"
                    className="h-[20vh] w-auto"
                />
            </div>

            <div className="absolute top-[-12vh] left-0 w-full z-0">
                <img
                    src={FormaAC}
                    alt="Forma AC"
                    className="w-full h-auto select-none pointer-events-none"
                />
            </div>

            {/* 🔵 Recuadros analíticos */}
            <div className="relative flex flex-wrap justify-center items-center gap-8 px-8 z-10 mt-[35vh]">
                {/* Card 1 */}
                <div className="bg-[#283778] text-white rounded-2xl shadow-md py-30 px-16 w-[50vh] h-[30vh] text-center">
                    <h3
                        className="text-[2.4vh] font-bold mb-2"
                        style={{ fontFamily: 'GothamBold' }}
                    >
                        Análisis de Suelos:
                    </h3>
                    <p
                        className="text-[2vh] leading-snug"
                        style={{ fontFamily: 'GothamNormal' }}
                    >
                        Evaluamos las condiciones y nutrientes del suelo.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-[#283778] text-white rounded-2xl shadow-md py-30 px-16 w-[50vh] h-[30vh] text-center">
                    <h3
                        className="text-[2.4vh] font-bold mb-2"
                        style={{ fontFamily: 'GothamBold' }}
                    >
                        Análisis de Plantas:
                    </h3>
                    <p
                        className="text-[2vh] leading-snug"
                        style={{ fontFamily: 'GothamNormal' }}
                    >
                        Monitoreamos la salud y crecimiento de las plantas.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-[#283778] text-white rounded-2xl shadow-md py-30 px-10 w-[50vh] h-[30vh] text-center">
                    <h3
                        className="text-[2.4vh] font-bold mb-2"
                        style={{ fontFamily: 'GothamBold' }}
                    >
                        Análisis de Abonos y Aguas:
                    </h3>
                    <p
                        className="text-[2vh] leading-snug"
                        style={{ fontFamily: 'GothamNormal' }}
                    >
                        Estudiamos los efectos en el cultivo.
                    </p>
                </div>
            </div>

            {/* 🟢 Bloque Catación */}
            <div className="mt-20 flex flex-col md:flex-row justify-center items-center gap-16 px-12 max-w-[1400px] z-10">
                {/* Texto destacado izquierda */}
                <p
                    className="text-[5vh] leading-snug text-[#0B312C] w-[80vh]"
                    style={{ fontFamily: 'GothamNormal' }}
                >
                    Garantizamos la calidad de cada taza en nuestro
                    laboratorio de <strong>Catación.</strong>
                </p>

                {/* Texto explicativo derecha */}
                <p
                    className="text-[2.2vh] leading-relaxed text-justify text-black w-[90vh]"
                    style={{ fontFamily: 'GothamNormal' }}
                >
                    Monitoreamos cuidadosamente el sabor y aroma del café en cada proceso. 
                    A través de nuestra Tostaduría, ofrecemos un servicio integral que abarca 
                    desde la trilla, el tueste hasta el empaque, asegurando que cada etapa del 
                    proceso sea controlada para mantener la calidad en todo momento.
                </p>
            </div>
        </div>
    );
};

export default Section2AC;