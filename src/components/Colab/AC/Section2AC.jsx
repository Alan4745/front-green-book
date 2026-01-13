import CircleFeature from "../../C3/ui/CircleFeature";
import { useTranslation } from "react-i18next";


const Section2AC = () => {
    const { t } = useTranslation();
   
    return (
        <section className="relative min-h-[80vh] w-full bg-white flex flex-col items-center justify-center px-6 p-10">
             {/* Content */}
                  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col justify-center lg:justify-end">
                      <span className="text-[#0B312C] text-4xl">{t("colab.sac.section2.top.pre")}</span>
                      <span className="text-[#0B312C] font-bold text-4xl">{t("colab.sac.section2.top.brand")}</span>
                      <span className="text-[#0B312C] text-4xl">{t("colab.sac.section2.top.post")}</span>
                    </div>
                    {/* Features */}
                    <div className="flex flex-col gap-20">
                      
                      {/* Item */}
                      <div className="flex gap-6 items-start">
                        <CircleFeature 
                          colorAro="#E6E6E6"
                          colorMovimiento="#708F5D"
                          colorNumero="#E6E6E6"
                          number="01"
                          size={120}
                          arcDeg={140}
                          numeroTamano={"24px"}
                        />
                        <div>
                          <h3 className="text-2xl font-bold mb-2 text-black">
                            {t("colab.sac.section2.cards.c1.title")}
                          </h3>
                          <p className="text-gray-900 text-[16px] leading-relaxed">
                            {t("colab.sac.section2.cards.c1.desc")}
                          </p>
                        </div>
                      </div>
            
                      {/* Item */}
                      <div className="flex gap-6 items-start">
                        <CircleFeature 
                          colorAro="#E6E6E6"
                          colorMovimiento="#708F5D"
                          colorNumero="#E6E6E6"
                          number="02"
                          size={120}
                          arcDeg={250}
                          numeroTamano={"24px"}
                        />
                        <div>
                          <h3 className="text-2xl font-bold mb-2 text-black w-54" >
                            {t("colab.sac.section2.cards.c2.title")}
                          </h3>
                          <p className="text-gray-900 text-[16px] leading-relaxed">
                            {t("colab.sac.section2.cards.c2.desc")}
                          </p>
                        </div>
                      </div>
            
                      {/* Item */}
                      <div className="flex gap-6 items-start">
                        <CircleFeature 
                          colorAro="#E6E6E6"
                          colorMovimiento="#708F5D"
                          colorNumero="#E6E6E6"
                          number="03"
                          size={120}
                          arcDeg={500}
                        numeroTamano={"24px"}
                        />
                        <div>
                          <h3 className="text-2xl font-bold mb-2 text-black w-52 ">
                            {t("colab.sac.section2.cards.c3.title")}
                          </h3>
                          <p className="text-gray-900 text-[16px] leading-relaxed w-69">
                            {t("colab.sac.section2.cards.c3.desc")}
                          </p>
                        </div>
                      </div>
            
                    </div>
                        
                  </div>
        </section>
    );
};

export default Section2AC;