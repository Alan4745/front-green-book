
import AnacafeLog from '../../../../public/Img/C7/anacefe_logo.png'

const Section1AC = () => {
   

    return (
        <section className="relative min-h-[80vh] w-full bg-[#012325] flex flex-col items-center justify-center px-6 p-10">
         <img 
           src={AnacafeLog} 
           alt="Anacafé Guatemala" 
           className="w-54 mb-16 object-contain"
         />
         <div className="flex flex-col md:flex-row gap-12 md:gap-20 text-center text-white items-center  w-[70vw] justify-center">
           <div className="max-w-xs text-left">
                <h2 className="text-8xl font-bold mb-4">01</h2>
                <h3 className="text-2xl font-bold tracking-widest mb-2">
                  INNOVACIÓN TECNOLÓGICA
                </h3>
                <p className="text-sm text-white/70">
                  Impulsamos el uso de herramientas tecnológicas.
                </p>
            </div>
            <div className="max-w-xs text-left">
                <h2 className="text-8xl font-bold mb-4">02</h2>
                <h3 className="text-2xl font-bold tracking-widest mb-2">
                  GESTIÓN ORGANIZACIONAL
                </h3>
                <p className="text-sm text-white/70">
                  Fortalecemos la administración organizacional.
                </p>
            </div>
           <div className="max-w-xs text-left">
                <h2 className="text-8xl font-bold mb-4">03</h2>
                <h3 className="text-2xl font-bold tracking-widest mb-2">
                  INVESTIGACIÓN Y DESARROLLO
                </h3>
                <p className="text-sm text-white/70">
                  Promovemos la investigación y la innovación a través de nuestro departamento de Cedicafé.
                </p>
            </div>
         </div>
</section>

    );
};

export default Section1AC;