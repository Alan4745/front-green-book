import MainMenu from '../Global/MainMenu';
import CoverC5 from "./CoverC5";
import Section1C5 from "./Section1C5";
import Section2C5 from "./Section2C5";
import Section3C5 from "./Section3C5";

const Capitulo5 = () => {
    return (
        <div>
            <div className="absolute top-[2vh] right-10 z-40">
                <MainMenu />
            </div>
            <CoverC5 />

            <Section1C5 />
            <Section2C5 />
            <Section3C5 />
        </div>
    );
};

export default Capitulo5;