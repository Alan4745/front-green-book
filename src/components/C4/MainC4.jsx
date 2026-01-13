import MainMenu from '../Global/MainMenu';
import CoverC4 from './CoverC4';
import Section1C4 from './Section1C4';
import Section2C4 from './Section2C4';

const MainC4 = () => {
    return (
        <div>
            <CoverC4 />

            <Section1C4 />
            <Section2C4 />
            {/* Menú desplegable */}
            <div className="absolute top-[2vh] right-10 z-50">
                <MainMenu />
            </div>
        </div>
    );
}

export default MainC4;