import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ColabButton = ({ progress = 0, className = "" }) => {
    const [animatedProgress, setAnimatedProgress] = useState(0);
    const navigate = useNavigate();  // Usamos el hook useNavigate para redirigir a rutas internas

    useEffect(() => {
        // Si el progreso cambia, animamos hacia el nuevo valor
        const interval = setInterval(() => {
            if (animatedProgress < progress) {
                setAnimatedProgress((prevProgress) => Math.min(prevProgress + 1, progress)); // Incrementamos progresivamente
            } else if (animatedProgress === 100) {
                clearInterval(interval); // Si ya llegó al 100%, dejamos de actualizar
            }
        }, 80); // El intervalo de actualización de la barra (ajusta la velocidad aquí)

        // Limpiar el intervalo cuando se desmonte el componente
        return () => clearInterval(interval);
    }, [progress, animatedProgress]);

    useEffect(() => {
        if (animatedProgress >= 100) {
            // Reiniciar el progreso después de un segundo de haber alcanzado el 100%
            setTimeout(() => {
                setAnimatedProgress(0); // Reinicia el progreso
            }, 2000); // Pausa antes de reiniciar
        }
    }, [animatedProgress]);

    const handleClick = () => {
        // Redirige inmediatamente cuando se haga clic, sin importar el progreso
        navigate('/colab');  // Usamos navigate para redirigir a la ruta /colab
    };

    return (
        <button 
            onClick={handleClick}
            className={`relative overflow-hidden transition-colors duration-200 rounded-lg px-6 py-4 min-w-[300px] group ${className} cursor-pointer`}
        >
            {/* Texto principal */}
            <div className="relative z-10 text-white font-medium text-lg">
                Anacafé - Guatemalan Coffees
            </div>

            {/* Línea blanca con opacidad */}
            <div className="absolute bottom-2 left-4 right-4 h-1 rounded-full" 
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }} 
            />

            {/* Línea verde de progreso - encima de la blanca */}
            <div className="absolute bottom-2 left-4 right-4 h-1 z-20">
                <div 
                    className="h-full bg-[#668B00] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${Math.min(Math.max(animatedProgress, 0), 100)}%` }} // Asegura que el progreso se rellene
                />
            </div>
        </button>
    );
};

export default ColabButton;