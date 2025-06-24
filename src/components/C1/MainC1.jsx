import CoverC1 from './CoverC1';
import Section1C1 from './Section1C1';
import Section2C1 from './Section2C1';
import Section3C1 from './Section3C1';

const MainC1 = () => {
    return (
        <div>
            {/* Portada del capítulo */}
            <CoverC1 />

            {/* Sección 1 del capítulo */}
            <Section1C1 />

            {/* Sección 2 del capítulo */}
            <Section2C1 />

            {/* Sección 3 del capítulo */}
            <Section3C1 />
            
        </div>
    );
}

export default MainC1;