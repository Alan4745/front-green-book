import SectionGC from "../SectionGC";
import Section1GC from "./Section1GC";
import Section2GC from "./Section2GC";
import Section3GC from "./Section3GC";

const CoverGC = () => {
    return (
        <div>
            <SectionGC></SectionGC>
            <Section1GC />
            
            <Section2GC />
            <Section3GC />
        </div>
    );
}

export default CoverGC;