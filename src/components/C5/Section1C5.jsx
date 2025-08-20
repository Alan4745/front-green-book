import React from 'react';
import BigSlider from './ui/BigSlider'; // Asegúrate de que la ruta sea correcta

// Asegúrate de que las rutas sean correctas
import F1 from '../../assets/C5/F1.svg'; 
import F2 from '../../assets/C5/F2.svg'; 
import F3 from '../../assets/C5/F3.svg';

import Number1 from '../../assets/C5/Numbers/Number1.png';
import Number2 from '../../assets/C5/Numbers/Number2.svg';
import Number3 from '../../assets/C5/Numbers/Number3.svg';

const Section1C5 = () => {
    const slidesData = [
        {
            image: F1,
            description: "Hojarasca",
            Number: Number1,
        },
        {
            image: F2,
            description: "Orquídeas, bromelias, musgos y líquenes",
            Number: Number2,
        },
        {
            image: F3,
            description: "Ingas",
            Number: Number3,
        },
    ];

    return (
        <div className="relative min-h-screen w-full flex bg-[#562E91] bg-no-repeat bg-center bg-cover items-center justify-center">
            <div className='absolute bottom-[1vh] w-full flex justify-center'>
                <BigSlider slides={slidesData} />
            </div>
        </div>
    );
};

export default Section1C5;