import { useNavigate } from 'react-router-dom'

import Cafe from '../../../assets/Colab/ui/Cafe.svg';

const Section3AC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen w-full flex bg-white">

            {/* Ilustración café (izquierda) */}
            <div className="flex items-center justify-start w-auto">
                <img
                    src={Cafe}
                    alt="Cafe ilustración"
                    className="h-[100vh] w-auto select-none pointer-events-none object-left"
                />
            </div>

            {/* Contenido derecho */}
            <div className="w-1/2 flex flex-col justify-center gap-20">
                {/* Título */}
                <h2
                    className="text-[4vh] leading-snug text-right uppercase tracking-wide text-[#0B312C]"
                    style={{ fontFamily: 'GothamNormal' }}
                >
                    PROMOVEMOS EL <span style={{ fontFamily:'GothamBold' }}>CAFÉ GUATEMALTECO</span><br /> A NIVEL GLOBAL
                </h2>

                {/* Lista numerada */}
                <div className="flex flex-col gap-15">
                    {/* Item 1 */}
                    <div className="flex items-center justify-end gap-6">
                        <div className="text-right">
                            <h3
                                className="text-[2.8vh] font-bold"
                                style={{ fontFamily: 'GothamBold' }}
                            >
                                Análisis de Mercado
                            </h3>
                            <p
                                className="text-[2.2vh] text-black/80"
                                style={{ fontFamily: 'GothamNormal' }}
                            >
                                Identificamos oportunidades comerciales
                            </p>
                        </div>

                        {/* 🔵 Círculo con borde + arco */}
                        <div className="relative flex items-center justify-center w-16 h-16">
                            {/* Borde circular negro translúcido */}
                            <div className="absolute inset-0 rounded-full border-4 border-black/30"></div>

                            {/* Arco circular verde */}
                            <div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: 'conic-gradient(#738720 0deg 120deg, transparent 120deg 360deg)',
                                    WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), black 0)',
                                    mask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), black 0)'
                                }}
                            ></div>

                            {/* Número */}
                            <span className="relative text-black/30 text-xl font-bold" style={{ fontFamily:'GothamBold' }}>01</span>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-center justify-end gap-6">
                        <div className="text-right">
                            <h3
                                className="text-[2.8vh] font-bold"
                                style={{ fontFamily: 'GothamBold' }}
                            >
                                Herramientas para Productores
                            </h3>
                            <p
                                className="text-[2.2vh] text-black/80"
                                style={{ fontFamily: 'GothamNormal' }}
                            >
                                Ofrecemos apoyo y recursos
                            </p>
                        </div>
                        {/* 🔵 Círculo con borde + arco */}
                        <div className="relative flex items-center justify-center w-16 h-16">
                            {/* Borde circular negro translúcido */}
                            <div className="absolute inset-0 rounded-full border-4 border-black/30"></div>

                            {/* Arco circular verde */}
                            <div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: 'conic-gradient(#738720 0deg 240deg, transparent 120deg 360deg)',
                                    WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), black 0)',
                                    mask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), black 0)'
                                }}
                            ></div>

                            {/* Número */}
                            <span className="relative text-black/30 text-xl font-bold" style={{ fontFamily:'GothamBold' }}>02</span>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-center justify-end gap-6">
                        <div className="text-right">
                            <h3
                                className="text-[2.8vh] font-bold"
                                style={{ fontFamily: 'GothamBold' }}
                            >
                                Promoción Internacional
                            </h3>
                            <p
                                className="text-[2.2vh] text-black/80"
                                style={{ fontFamily: 'GothamNormal' }}
                            >
                                Posicionamos el café guatemalteco tanto local como internacionalmente
                            </p>
                        </div>
                        {/* 🔵 Círculo con borde + arco */}
                        <div className="relative flex items-center justify-center w-16 h-16">
                            {/* Borde circular negro translúcido */}
                            <div className="absolute inset-0 rounded-full border-4 border-black/30"></div>

                            {/* Arco circular verde */}
                            <div
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: 'conic-gradient(#738720 0deg 360deg, transparent 120deg 360deg)',
                                    WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), black 0)',
                                    mask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), black 0)'
                                }}
                            ></div>

                            {/* Número */}
                            <span className="relative text-black/30 text-xl font-bold" style={{ fontFamily:'GothamBold' }}>03</span>
                        </div>
                    </div>
                </div>

                {/* Texto final */}
                <p
                    className="w-[70vh] text-[2.4vh] leading-relaxed text-left mt-8"
                    style={{ fontFamily: 'GothamNormal' }}
                >
                    En nuestra academia de café, compartimos conocimientos
                    de <span className="text-white bg-[#0B312C] px-2 py-0.5">barismo, tueste y catación.</span>
                </p>

            </div>
        </div>
    );
};

export default Section3AC;