import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import LogoFuncafe from '../../../assets/Colab/CompleteLogos/LogoFuncafe.svg';
import FormaFuncafe from '../../../assets/Colab/ui/FormaFuncafe.svg';

const Section4AC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="relative w-full bg-transparent overflow-hidden">
            {/* FormaFuncafe define la altura */}
            <img
                src={FormaFuncafe}
                className="w-full h-auto block select-none pointer-events-none"
                alt={t('colab.sac.section4.alts.shape')}
                title={t('colab.sac.section4.alts.shape')}
            />

            {/* Contenido centrado dentro de la forma */}
            <div className="absolute inset-0 z-10 flex flex-row items-center justify-center gap-[20vh] mt-[15vh]">
                {/* Logo */}
                <img
                    src={LogoFuncafe}
                    alt={t('colab.sac.section4.alts.funcafeLogo')}
                    title={t('colab.sac.section4.alts.funcafeLogo')}
                    className="h-[30vh] w-auto"
                />

                {/* Texto */}
                <p
                    className="max-w-[90vh] text-[2.6vh] leading-snug text-white text-center md:text-left"
                    style={{ fontFamily: 'Arquitectalight' }}
                >
                    {t('colab.sac.section4.body.pre')}{' '}
                    <span className="text-white bg-[#CF7B24] px-2 py-0.5">
                        {t('colab.sac.section4.body.highlight')}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Section4AC;