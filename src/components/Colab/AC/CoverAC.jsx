import SectionAC from "../SectionAC";
import Section1AC from "./Section1AC";
import Section2AC from "./Section2AC";
import Section3AC from "./Section3AC";
import Section4AC from "./Section4AC";

const CoverAC = () => {
    return (
        <div>

            <SectionAC></SectionAC>

            <Section1AC />

            {/* Secciones estáticas */}
            <Section2AC />
            <Section3AC />
            <Section4AC />
        </div>
    );
}

export default CoverAC;