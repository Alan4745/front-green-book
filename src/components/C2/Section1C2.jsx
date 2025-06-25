import { useNavigate } from 'react-router-dom';
import HoverButton from '../Global/HoverButton';
import MapaFlechasC2 from '../../assets/C2/MapaFlechasC2.svg';

// Regiones
import RegionCoban from '../../assets/C2/Region/CobanR.svg';
import RegionHuehue from '../../assets/C2/Region/HuehueR.svg';
import RegionSanMarcos from '../../assets/C2/Region/SanMarcosR.svg';
import RegionAtitlan from '../../assets/C2/Region/AtitlanR.svg';
import RegionAcatenango from '../../assets/C2/Region/AcatenangoR.svg';
import RegionAntigua from '../../assets/C2/Region/AntiguaR.svg';
import RegionFraijanes from '../../assets/C2/Region/FraijanesR.svg';
import RegionOriente from '../../assets/C2/Region/OrienteR.svg';

const Section1C2 = () => {
    const navigate = useNavigate();

    const handleRegionClick = (region) => {
        console.log(`Redirigir a: ${region}`);
        // Por ejemplo:
        // navigate(`/c2/region/${region}`);
    };

    return (
        <div className="absolute min-h-screen w-full bg-[#5FCAD0] z-10">
            {/* Imagen de fondo centrada */}
            <div className="flex items-center justify-center">
                <img
                    src={MapaFlechasC2}
                    alt="Mapa base"
                    className="w-[40%] h-auto mt-[15vh]"
                />
            </div>

            {/* Regiones con hover y click */}
            <img
                src={RegionCoban}
                alt="Coban"
                onClick={() => handleRegionClick("coban")}
                className="absolute top-[14vh] left-[68vh] w-[15vh] cursor-pointer transition-transform duration-300 hover:scale-120"
            />
            <img
                src={RegionHuehue}
                alt="Huehue"
                onClick={() => handleRegionClick("huehue")}
                className="absolute top-[27vh] left-[54vh] w-[15vh] cursor-pointer transition-transform duration-300 hover:scale-120"
            />
            <img
                src={RegionSanMarcos}
                alt="San Marcos"
                onClick={() => handleRegionClick("sanmarcos")}
                className="absolute top-[48vh] left-[48vh] w-[15vh] cursor-pointer transition-transform duration-300 hover:scale-120"
            />
            <img
                src={RegionAtitlan}
                alt="Atitlán"
                onClick={() => handleRegionClick("atitlan")}
                className="absolute top-[68vh] left-[57vh] w-[15vh] cursor-pointer transition-transform duration-300 hover:scale-120"
            />
            <img
                src={RegionAcatenango}
                alt="Acatenango"
                onClick={() => handleRegionClick("acatenango")}
                className="absolute top-[76vh] left-[82vh] w-[15vh] cursor-pointer transition-transform duration-300 hover:scale-120"
            />
            <img
                src={RegionAntigua}
                alt="Antigua"
                onClick={() => handleRegionClick("antigua")}
                className="absolute top-[76vh] right-[85vh] w-[15vh] cursor-pointer transition-transform duration-300 hover:scale-120"
            />
            <img
                src={RegionFraijanes}
                alt="Fraijanes"
                onClick={() => handleRegionClick("fraijanes")}
                className="absolute top-[67vh] right-[63vh] w-[15vh] cursor-pointer transition-transform duration-300 hover:scale-120"
            />
            <img
                src={RegionOriente}
                alt="Oriente"
                onClick={() => handleRegionClick("oriente")}
                className="absolute top-[49vh] right-[52vh] w-[15vh] cursor-pointer transition-transform duration-300 hover:scale-120"
            />

            {/* Botón de hover */}
            <div className="absolute top-10 left-10 z-50">
                <HoverButton text="DIVERSIDAD CAFETELERA" />
            </div>

        </div>
    );
};

export default Section1C2;