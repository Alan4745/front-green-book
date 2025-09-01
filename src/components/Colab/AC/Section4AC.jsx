import { useNavigate } from 'react-router-dom'

import LogoFuncafe from '../../../assets/Colab/CompleteLogos/LogoFuncafe.svg';
import FormaFuncafe from '../../../assets/Colab/ui/FormaFuncafe.svg';

const Section4AC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative w-full bg-transparent overflow-hidden">
            {/* FormaFuncafe define la altura */}
            <img
                src={FormaFuncafe}
                className="w-full h-auto block select-none pointer-events-none"
                alt="Forma Funcafe"
            />

            {/* Contenido centrado dentro de la forma */}
            <div className="absolute inset-0 z-10 flex flex-row items-center justify-center gap-[20vh] mt-[15vh]">
                {/* Logo */}
                <img
                    src={LogoFuncafe}
                    alt="Funcafé"
                    className="h-[30vh] w-auto"
                />

                {/* Texto */}
                <p
                    className="max-w-[90vh] text-[2.6vh] leading-snug text-white text-center md:text-left"
                    style={{ fontFamily: 'Arquitectalight' }}
                >
                    Y con el compromiso de contribuir al desarrollo social, a través de Funcafé, 
                    brindamos servicios enfocados en <span className="text-white bg-[#CF7B24] px-2 py-0.5">salud, educación y seguridad alimentaria y nutricional.</span>
                </p>
            </div>
        </div>
    );
};

export default Section4AC;