import Section1AC from "./AC/Section1AC";
import Section2AC from "./AC/Section2AC";
import Section3AC from "./AC/Section3AC";
import Section4AC from "./AC/Section4AC";

const CoverAC = () => {
    return (
        <div>
            <Section1AC />

            {/* Secciones estáticas */}
            <Section2AC />
            <Section3AC />
            <Section4AC />
        </div>
    );
}

export default CoverAC;