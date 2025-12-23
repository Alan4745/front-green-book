import LanguageSelector from "../../Global/LanguageSelector";
import MainMenu from "../../Global/MainMenu";
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
            <Section2AC />
            <Section3AC />
            <Section4AC />

            {/* HACERLO FUNCIONAL */}
           <div className="absolute bottom-[5vh] right-6 z-50">
              <LanguageSelector alignment='left' />
           </div>
          <div className="absolute top-[2vh] right-0 z-50">
              <MainMenu />
          </div>
        </div>
    );
}

export default CoverAC;