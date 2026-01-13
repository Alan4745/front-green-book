
import AnacafeLog from '../../../../public/Img/C7/anacefe_logo.png'
import { useTranslation } from "react-i18next";

const Section1AC = () => {
    const { t } = useTranslation();



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
                  {t("colab.sac.points.p1.title")}
                  {/* c1.cover.title.top */}
                </h3>
                <p className="text-sm text-white/70">
                {t("colab.sac.points.p1.text")}
                </p>
            </div>
            <div className="max-w-xs text-left">
                <h2 className="text-8xl font-bold mb-4">02</h2>
                <h3 className="text-2xl font-bold tracking-widest mb-2">
                  {t("colab.sac.points.p2.title")}
                </h3>
                <p className="text-sm text-white/70">
                  {t("colab.sac.points.p2.text")}
                </p>
            </div>
           <div className="max-w-xs text-left">
                <h2 className="text-8xl font-bold mb-4">03</h2>
                <h3 className="text-2xl font-bold tracking-widest mb-2">
                  {t("colab.sac.points.p3.title")}
                </h3>
                <p className="text-sm text-white/70">
                  {t("colab.sac.points.p3.text")}
                </p>
            </div>
         </div>
</section>

    );
};

export default Section1AC;