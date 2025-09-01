import Section1AC from "./AC/Section1AC";
import Section2AC from "./AC/Section2AC";
import Section3AC from "./AC/Section3AC";

const SectionAC = () => {
    return (
        <div>
            <Section1AC />

            {/* Secciones estáticas */}
            <Section2AC />
            <Section3AC />
        </div>
    );
}

export default SectionAC;