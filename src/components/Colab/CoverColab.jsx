import { useNavigate } from 'react-router-dom';

import BackButton from '../Global/BackButton';
import MainMenu from '../Global/MainMenu';
import LanguageSelector from '../Global/LanguageSelector';

import LogoGC from '../../assets/Colab/LogoGC.svg';
import LogoAC from '../../assets/Colab/LogoAC.svg';
import LogotipoGC from '../../assets/Colab/LogotipoGC.svg';
import LogotipoAC from '../../assets/Colab/LogotipoAC.svg';

const CoverColab = () => {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen w-full flex bg-[#046C7F] bg-no-repeat bg-center bg-cover z-10">
            
            {/* Botón para regresar */}
            <div className='absolute top-8 left-8'>
                <BackButton onClick={() => navigate('/')} />
            </div>

            {/* Menú desplegable */}
            <div className='absolute top-8 right-8'>
                <MainMenu />
            </div>

            {/* Selector de idioma */}
            <div className='absolute bottom-8 left-8'>
                <LanguageSelector />
            </div>

            {/* Contenedor de logos centrados con separación */}
            <div className="absolute inset-0 flex items-center justify-center">
                {/* Guatemalan Coffees */}
                <div className="flex flex-col items-center justify-center mr-42">
                    <img src={LogoGC} alt="Logo Guatemalan Coffees" className="w-52 h-auto mb-6" />
                    <img src={LogotipoGC} alt="Logotipo Guatemalan Coffees" className="w-82 h-auto" />
                </div>

                {/* Línea vertical blanca */}
                <div className="w-1 h-64 rounded-full bg-white mx-8"></div>

                {/* ANACAFÉ */}
                <div className="flex flex-col items-center justify-center ml-42">
                    <img src={LogoAC} alt="Logo ANACAFÉ" className="w-48 h-auto mb-6" />
                    <img src={LogotipoAC} alt="Logotipo ANACAFÉ" className="w-82 h-auto" />
                </div>
            </div>
        </div>
    );
};

export default CoverColab;