import MainMenu from "../Global/MainMenu";
import SectionRenderer from "../Global/SectionRenderer";
import { c6Sections } from "./sections";

const MainC6 = () => {
    return (
        <div>
            <SectionRenderer sections={c6Sections} />
            <div className="absolute top-[2vh] right-6.5 z-50">
                <MainMenu />
            </div>
        </div>
    );
};

export default MainC6;
