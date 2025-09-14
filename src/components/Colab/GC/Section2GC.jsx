import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import HoverButton from '../../Global/HoverButton';

import FormaGC from '../../../assets/Colab/ui/FormaGC.svg';

const Section2GC = () => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    return (
        <div className="relative min-h-screen w-full flex">

            {/* Botón de hover con link */}
            <div className="absolute top-6 left-8 z-50">
                <HoverButton
                    to="/c2"
                    text={t('colab.gc.section2.cta').toLocaleUpperCase(i18n.language)}
                    textOffset={-110}
                    hoverOffset={30}
                    color="black"  // 🌟 Usa cualquier color aquí
                />
            </div>

            {/* Texto alineado con el botón */}
            <div className="absolute top-[20vh] left-18 z-50 w-[55%]">
                <p className="text-left text-xl" style={{ fontFamily: "GothamNormal" }}>
                    {t('colab.gc.section2.intro')}
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
                            {t('colab.gc.section2.items.i1.title')}
                        </h3>
                        <p className="text-[2.2vh] text-black/80" style={{ fontFamily: 'GothamNormal' }}>
                            {t('colab.gc.section2.items.i1.desc')}
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
                            {t('colab.gc.section2.items.i2.title')}
                        </h3>
                        <p className="text-[2.2vh] text-black/80" style={{ fontFamily: 'GothamNormal' }}>
                            {t('colab.gc.section2.items.i2.desc')}
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
                            {t('colab.gc.section2.items.i3.title')}
                        </h3>
                        <p className="text-[2.2vh] text-black/80" style={{ fontFamily: 'GothamNormal' }}>
                            {t('colab.gc.section2.items.i3.desc')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Fondo con imagen */}
            <div className="absolute top-[-8vh] left-0 w-full z-0">
                <img
                    src={FormaGC}
                    alt={t('colab.gc.section2.alts.shape')}
                    title={t('colab.gc.section2.alts.shape')}
                    className="w-full h-auto select-none pointer-events-none"
                />
            </div>

        </div>
    );
};

export default Section2GC;