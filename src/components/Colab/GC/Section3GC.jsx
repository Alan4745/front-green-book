import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import MontañasGC from '../../../assets/Colab/ui/MontañasGC.svg';
import LogoGC from '../../../assets/Colab/LogoGC.svg';

const Section3GC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="relative w-full bg-transparent overflow-hidden">
            {/* La forma define la altura */}
            <img
                src={MontañasGC}
                className="w-full h-auto block select-none pointer-events-none"
                alt={t('colab.gc.section3.alts.shape')}
                title={t('colab.gc.section3.alts.shape')}
            />

            {/* Contenido centrado dentro de la forma */}
            <div className="absolute inset-0 z-10 flex flex-row items-center justify-center gap-[10vh] mt-[15vh]">
                {/* Logo */}
                <img
                    src={LogoGC}
                    alt={t('colab.cover.alts.gcLogotype')}
                    title={t('colab.cover.alts.gcLogotype')}
                    className="h-[30vh] w-auto"
                />

                {/* Texto */}
                <p
                    className="max-w-[120vh] text-[2.6vh] leading-snug text-white text-right"
                    style={{ fontFamily: 'GothamNormal' }}
                >
                    {t('colab.gc.section3.body.pre')}{' '}
                    <span className="text-white bg-[#562E91] px-2 py-0.5">
                        {t('colab.gc.section3.body.brand')}
                    </span>{' '}
                    {t('colab.gc.section3.body.post')}
                </p>
            </div>
        </div>
    );
};

export default Section3GC;