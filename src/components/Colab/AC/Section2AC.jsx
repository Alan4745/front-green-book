import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import FormaAC from '../../../assets/Colab/ui/FormaAC.svg';
import AnalabLogo from '../../../assets/Colab/CompleteLogos/AnalabLogo.svg';

// 🖼️ Íconos de cada recuadro
import IconSuelo from '../../../assets/Colab/Suelo.svg';
import IconPlantas from '../../../assets/Colab/Plantas.svg';
import IconAbono from '../../../assets/Colab/Abono.svg';

const Section2AC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen w-full flex flex-col items-center bg-white">
            {/* Texto + logo (arriba derecha) */}
            <div className="absolute top-20 right-[32vh] z-10 flex items-center gap-[20vh]">
                <p
                    className="text-[3vh] leading-snug text-black text-left w-[100vh]"
                    style={{ fontFamily: 'GothamNormal' }}
                >
                    {t('colab.sac.section2.top.pre')}{' '}
                    <strong>{t('colab.sac.section2.top.brand')}</strong>
                    {t('colab.sac.section2.top.post')}
                </p>
                <img
                    src={AnalabLogo}
                    alt={t('colab.sac.section2.alts.analabLogo')}
                    title={t('colab.sac.section2.alts.analabLogo')}
                    className="h-[20vh] w-auto"
                />
            </div>

            <div className="absolute top-[-12vh] left-0 w-full z-0">
                <img
                    src={FormaAC}
                    alt={t('colab.sac.section2.alts.shape')}
                    title={t('colab.sac.section2.alts.shape')}
                    className="w-full h-auto select-none pointer-events-none"
                />
            </div>

            {/* 🔵 Recuadros analíticos */}
            <div className="relative flex flex-wrap justify-center items-center gap-8 px-8 z-10 mt-[35vh]">
                {/* Card 1 */}
                <div className="bg-[#283778] text-white rounded-2xl shadow-md py-12 px-16 w-[50vh] h-[30vh] text-center">
                    <div className="flex justify-center mb-4">
                        <img
                            src={IconSuelo}
                            alt={t('colab.sac.section2.cards.c1.title')}
                        />
                    </div>
                    <h3
                        className="text-[2.4vh] font-bold mb-2"
                        style={{ fontFamily: 'GothamBold' }}
                    >
                        {t('colab.sac.section2.cards.c1.title')}
                    </h3>
                    <p
                        className="text-[2vh] leading-snug"
                        style={{ fontFamily: 'GothamNormal' }}
                    >
                        {t('colab.sac.section2.cards.c1.desc')}
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-[#283778] text-white rounded-2xl shadow-md py-12 px-16 w-[50vh] h-[30vh] text-center">
                    <div className="flex justify-center mb-4">
                        <img
                            src={IconPlantas}
                            alt={t('colab.sac.section2.cards.c2.title')}
                        />
                    </div>
                    <h3
                        className="text-[2.4vh] font-bold mb-2"
                        style={{ fontFamily: 'GothamBold' }}
                    >
                        {t('colab.sac.section2.cards.c2.title')}
                    </h3>
                    <p
                        className="text-[2vh] leading-snug"
                        style={{ fontFamily: 'GothamNormal' }}
                    >
                        {t('colab.sac.section2.cards.c2.desc')}
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-[#283778] text-white rounded-2xl shadow-md py-14 px-10 w-[50vh] h-[30vh] text-center">
                    <div className="flex justify-center mb-4">
                        <img
                            src={IconAbono}
                            alt={t('colab.sac.section2.cards.c3.title')}
                        />
                    </div>
                    <h3
                        className="text-[2.4vh] font-bold mb-2"
                        style={{ fontFamily: 'GothamBold' }}
                    >
                        {t('colab.sac.section2.cards.c3.title')}
                    </h3>
                    <p
                        className="text-[2vh] leading-snug"
                        style={{ fontFamily: 'GothamNormal' }}
                    >
                        {t('colab.sac.section2.cards.c3.desc')}
                    </p>
                </div>
            </div>

            {/* 🟢 Bloque Catación */}
            <div className="mt-20 flex flex-col md:flex-row justify-center items-center gap-16 px-12 max-w-[1400px] z-10">
                {/* Texto destacado izquierda */}
                <p
                    className="text-[5vh] leading-snug text-[#0B312C] w-[90vh]"
                    style={{ fontFamily: 'GothamNormal' }}
                >
                    {t('colab.sac.section2.cupping.title.pre')}{' '}
                    <strong>{t('colab.sac.section2.cupping.title.bold')}</strong>
                </p>

                {/* Texto explicativo derecha */}
                <p
                    className="text-[2.2vh] leading-relaxed text-justify text-black w-[90vh]"
                    style={{ fontFamily: 'GothamNormal' }}
                >
                    {t('colab.sac.section2.cupping.desc')}
                </p>
            </div>
        </div>
    );
};

export default Section2AC;