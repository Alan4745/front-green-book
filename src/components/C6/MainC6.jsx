import MainMenu from '../Global/MainMenu';
import CoverC6 from './CoverC6';
import Section1C6 from './Section1C6';
import Section2C6 from './Section2C6';
import Section3C6 from './Section3C6';
import Section4C6 from './Section4C6';

const MainC6 = () => {
    return (
        <div>
            {/* Portada del capítulo */}
            <CoverC6 />

            {/* Sección 1 del capítulo */}
            <Section1C6 />

            {/* Sección 2 del capítulo */}
            <Section2C6 />

            {/* Sección 3 del capítulo */}
            <Section3C6 />

            {/* Sección 4 del capítulo */}
            <Section4C6 />

            {/* Menú desplegable */}
            <div className="absolute top-[2vh] right-10 z-50">
                <MainMenu />
            </div>
        </div>
    );
}

export default MainC6;