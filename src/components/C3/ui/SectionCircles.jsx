import CircleFeature from "./CircleFeature";

const SectionCircles = () => {
    return (
        <div className="w-full">
            {/* grid 2x2; la segunda fila se desplaza a la derecha */}
            <div className="grid grid-cols-2 gap-y-12">
                {/* fila 1 */}
                <div className="justify-self-start">
                <CircleFeature number="01" text="Filtran la luz del sol" position="top" speedSec={8}/>
                </div>
                <div className="justify-self-start">
                <CircleFeature number="03" text="Reducen la erosión del suelo" position="right" speedSec={8}/>
                </div>

                {/* fila 2 (offset a la derecha) */}
                <div className="justify-self-start translate-x-50">
                <CircleFeature number="02" text="Amortiguan las lluvias" position="left" speedSec={8}/>
                </div>
                <div className="justify-self-start translate-x-50">
                <CircleFeature number="04" text="Conservan hasta el 70% de la humedad" position="bottom" speedSec={8}/>
                </div>
            </div>
        </div>
    );
};

export default SectionCircles;