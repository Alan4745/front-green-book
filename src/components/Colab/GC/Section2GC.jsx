import { useNavigate } from 'react-router-dom'

import HoverButton from '../../Global/HoverButton';

import FormaGC from '../../../assets/Colab/ui/FormaGC.svg';

const Section2GC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen w-full flex">

            {/* Botón de hover con link */}
            <div className="absolute top-6 left-8 z-50">
                <HoverButton
                    to="/c2"
                    text="VER REGIONES" 
                    textOffset={-110} 
                    hoverOffset={30} 
                    color="black"  // 🌟 Usa cualquier color aquí
                />
            </div>

            {/* Texto alineado con el botón */}
            <div className="absolute top-[20vh] left-18 z-50 w-[55%]">
                <p className="text-left text-xl" style={{ fontFamily: "GothamNormal" }}>
                    Guatemala ha logrado posicionarse como líder en la industria cafetera al resaltar cómo las regiones cafetaleras, los microclimas y los varietales influyen directamente en el sabor del café.
                </p>
            </div>

            {/* Lista numerada invertida (puntos a la izquierda) */}
            <div className="flex flex-col gap-22 absolute top-[40vh] left-18 z-50">
                {/* Item 1 */}
                <div className="flex items-center justify-start gap-6">
                    {/* 🔵 Círculo con borde + arco */}
                    <div className="relative flex items-center justify-center w-20 h-20">
                        <div className="absolute inset-0 rounded-full border-4 border-black/30"></div>
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: 'conic-gradient(#FF7E00 0deg 120deg, transparent 120deg 360deg)',
                                WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), black 0)',
                                mask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), black 0)'
                            }}
                        ></div>
                        <span className="relative text-black/30 text-2xl font-bold" style={{ fontFamily:'GothamBold' }}>01</span>
                    </div>
                    <div className="text-left">
                        <h3 className="text-[2.8vh] font-bold" style={{ fontFamily: 'GothamBold' }}>
                            Regiones Cafetaleras Únicas:
                        </h3>
                        <p className="text-[2.2vh] text-black/80" style={{ fontFamily: 'GothamNormal' }}>
                            Cada región tiene su propio perfil de sabor, lo que enriquece la diversidad.
                        </p>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-center justify-start gap-6">
                    {/* 🔵 Círculo con borde + arco */}
                    <div className="relative flex items-center justify-center w-20 h-20">
                        <div className="absolute inset-0 rounded-full border-4 border-black/30"></div>
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: 'conic-gradient(#00AE43 0deg 240deg, transparent 120deg 360deg)',
                                WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), black 0)',
                                mask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), black 0)'
                            }}
                        ></div>
                        <span className="relative text-black/30 text-2xl font-bold" style={{ fontFamily:'GothamBold' }}>02</span>
                    </div>
                    <div className="text-left">
                        <h3 className="text-[2.8vh] font-bold" style={{ fontFamily: 'GothamBold' }}>
                            Impacto del Terreno:
                        </h3>
                        <p className="text-[2.2vh] text-black/80" style={{ fontFamily: 'GothamNormal' }}>
                            El clima y las condiciones del terreno determinan las características del café.
                        </p>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-center justify-start gap-6">
                    {/* 🔵 Círculo con borde + arco */}
                    <div className="relative flex items-center justify-center w-20 h-20">
                        <div className="absolute inset-0 rounded-full border-4 border-black/30"></div>
                        <div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: 'conic-gradient(#DA2F7D 0deg 360deg, transparent 120deg 360deg)',
                                WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), black 0)',
                                mask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), black 0)'
                            }}
                        ></div>
                        <span className="relative text-black/30 text-2xl font-bold" style={{ fontFamily:'GothamBold' }}>03</span>
                    </div>
                    <div className="text-left">
                        <h3 className="text-[2.8vh] font-bold" style={{ fontFamily: 'GothamBold' }}>
                            Trazabilidad y Transparencia:
                        </h3>
                        <p className="text-[2.2vh] text-black/80" style={{ fontFamily: 'GothamNormal' }}>
                            Un proceso que asegura que cada lote sea completamente rastreable, brindando confianza a los compradores internacionales.
                        </p>
                    </div>
                </div>
            </div>

            {/* Fondo con imagen */}
            <div className="absolute top-[-8vh] left-0 w-full z-0">
                <img
                    src={FormaGC}
                    alt="Forma AC"
                    className="w-full h-auto select-none pointer-events-none"
                />
            </div>

        </div>
    );
};

export default Section2GC;