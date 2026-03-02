import { useState, useEffect } from 'react';
import LanguageSelector from '../Global/LanguageSelector';
import MainMenu from '../Global/MainMenu';
import CoverC2 from './CoverC2';
import Section1C2 from './Section1C2';

const MainC2 = () => {
    const [isDarkText, setIsDarkText] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Las regiones con fondo blanco (derecha) aparecen ~1.2 viewports abajo
            const threshold = window.innerHeight * 0.1;
            setIsDarkText(window.scrollY > threshold);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <CoverC2 />
            <Section1C2 />

            <div className="absolute bottom-[5vh] right-12 z-10">
                <LanguageSelector
                    alignment="right"
                    textColor={isDarkText ? "#000000" : "#FFFFFF"}
                    buttonBg={isDarkText ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.2)"}
                    menuBg={isDarkText ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.2)"}
                />
            </div>
            <div className="absolute top-[2vh] right-10 z-40">
                <MainMenu />
            </div>
        </div>
    );
}

export default MainC2;