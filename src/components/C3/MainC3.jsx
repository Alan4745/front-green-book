import MainMenu from '../Global/MainMenu';
import CoverC3 from './CoverC3';
import Section1C3 from './Section1C3';

const MainC3 = () => {
    return (
        <div>
            <CoverC3 />
            <Section1C3 />
            {/* Menú desplegable */}
            <div className="absolute top-[2vh] right-10 z-50">
                <MainMenu />
            </div>
        </div>
    );
}

export default MainC3;