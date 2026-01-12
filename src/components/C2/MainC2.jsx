import LanguageSelector from '../Global/LanguageSelector';
import MainMenu from '../Global/MainMenu';
import CoverC2 from './CoverC2';
import Acate from './Region/Acate';
import Section1C2 from './Section1C2';

const MainC2 = () => {
    return (
        <div>
            <CoverC2 />
            <Section1C2 />

            <div className="absolute bottom-[5vh] right-12 z-10">
                <LanguageSelector alignment="left"/>
            </div>
            <div className="absolute top-[2vh] right-10 z-50">
                <MainMenu />
            </div>
        </div>
    );
}

export default MainC2;