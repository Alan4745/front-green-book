import MainMenu from '../Global/MainMenu';
import CoverC3 from './CoverC3';
import Section1C3 from './Section1C3';

const MainC3 = () => {
    return (
        <div>
            <div className="snap-start"><CoverC3 /></div>
            <div className="snap-start"><Section1C3 /></div>
            {/* Menú desplegable */}
            <div className="absolute top-[2vh] right-10 z-50">
                <MainMenu />
            </div>
        </div>
    );
}

export default MainC3;