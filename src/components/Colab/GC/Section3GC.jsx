import { useNavigate } from 'react-router-dom'

import MontañasGC from '../../../assets/Colab/ui/MontañasGC.svg';
import LogoGC from '../../../assets/Colab/LogoGC.svg';

const Section3GC = () => {
    const navigate = useNavigate();

    return (
            <div className="relative w-full bg-transparent overflow-hidden">
                {/* FormaFuncafe define la altura */}
                <img
                    src={MontañasGC}
                    className="w-full h-auto block select-none pointer-events-none"
                    alt="Forma Funcafe"
                />

            {/* Contenido centrado dentro de la forma */}
            <div className="absolute inset-0 z-10 flex flex-row items-center justify-center gap-[10vh] mt-[15vh]">
                {/* Logo */}
                <img
                    src={LogoGC}
                    alt="Funcafé"
                    className="h-[30vh] w-auto"
                />

                {/* Texto */}
                <p
                    className="max-w-[120vh] text-[2.6vh] leading-snug text-white text-right"
                    style={{ fontFamily: 'GothamNormal' }}
                >
                    Así, la marca <span className="text-white bg-[#562E91] px-2 py-0.5">Guatemalan Coffees</span> continúa consolidándose como un referente mundial de 
                    cafés de especialidad, combinando tradición, innovación y sustentabilidad.
                </p>
            </div>
        </div>
    );
};

export default Section3GC;