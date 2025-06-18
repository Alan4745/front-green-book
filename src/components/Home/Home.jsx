import { useEffect, useState } from "react";

const backgrounds = [
    "/Img/Start/Fondo1.svg",
    "/Img/Start/Fondo2.svg",
    "/Img/Start/Fondo3.svg",
    "/Img/Start/Fondo4.svg",
];

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(null);
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
        const next = (currentIndex + 1) % backgrounds.length;
        setPrevIndex(currentIndex);
        setCurrentIndex(next);
        setFadeIn(true);

        setTimeout(() => {
            setFadeIn(false);
            setPrevIndex(null);
        }, 1000);
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="relative min-h-screen w-screen overflow-hidden bg-black">
        {/* Fondo actual como background-cover */}
        <div
            className={`absolute inset-0 bg-no-repeat bg-center bg-cover transition-opacity duration-500 z-10`}
            style={{ backgroundImage: `url(${backgrounds[currentIndex]})` }}
        />

        {/* Fondo anterior en transición */}
        {prevIndex !== null && (
            <div
            className={`absolute inset-0 bg-no-repeat bg-center bg-cover transition-opacity duration-1000 z-20 ${
                fadeIn ? "opacity-0" : "opacity-100"
            }`}
            style={{ backgroundImage: `url(${backgrounds[prevIndex]})` }}
            />
        )}

        {/* Contenido */}
        <div className="relative z-30 flex items-center justify-center h-full">
            <img
            src="/Logos/Greenbook.svg"
            alt="Green Book Logo"
            className="absolute top-[19vh] left-[22vh] w-[22%] h-auto"
            />
        </div>
        </div>
    );
};

export default Home;
