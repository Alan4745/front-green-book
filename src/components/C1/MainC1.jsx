import MainMenu from '../Global/MainMenu';
import CoverC1 from './CoverC1';
import Section1C1 from './Section1C1';
import Section2C1 from './Section2C1';
import Section3C1 from './Section3C1';

const MainC1 = () => {
    return (
        <div>
            <CoverC1 />
            <Section1C1 />
            <Section2C1 />
            <Section3C1 />
            {/* Menú desplegable */}
            <div className="absolute top-[2vh] right-10 z-60">
                <MainMenu />
            </div>
        </div>
    );
}

export default MainC1;