import MainMenu from "../Global/MainMenu";
import SectionRenderer from "../Global/SectionRenderer";
import { c4Sections } from "./sections";

const MainC4 = () => {
    return (
        <div>
            <SectionRenderer sections={c4Sections} />
            <div className="absolute top-[2vh] right-10 z-40">
                <MainMenu />
            </div>
        </div>
    );
};

export default MainC4;
