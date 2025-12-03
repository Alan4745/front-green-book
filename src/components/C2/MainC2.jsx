import LanguageSelector from '../Global/LanguageSelector';
import CoverC2 from './CoverC2';
import Acate from './Region/Acate';
import Section1C2 from './Section1C2';

const MainC2 = () => {
    return (
        <div>
            <CoverC2 />
            <Section1C2 />

            <div className="absolute bottom-[5vh] right-12 z-10">
                <LanguageSelector alignment="right"/>
            </div>
            
            
        </div>
    );
}

export default MainC2;