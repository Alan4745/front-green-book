import MainMenu from "../Global/MainMenu";
import SectionRenderer from "../Global/SectionRenderer";
import { c5Sections } from "./sections";

const Capitulo5 = () => {
    return (
        <div>
            <div className="absolute top-[2vh] right-10 z-40">
                <MainMenu />
            </div>
            <SectionRenderer sections={c5Sections} />
        </div>
    );
};

export default Capitulo5;
