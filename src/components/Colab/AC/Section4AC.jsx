import analab from '../../../../public/Img/C7/analab.png'
import abono from '../../../assets/Colab/Abono.svg'
import plantas from '../../../assets/Colab/Plantas.svg'
import suelo from '../../../assets/Colab/Suelo.svg'
import { useTranslation } from "react-i18next";

const Section4AC = () => {

   const { t } = useTranslation();

  return (
    <footer className="bg-[#283778] w-full py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center text-white">

        {/* Bloque izquierdo */}
        <div className="flex flex-col gap-6 max-w-sm">
          <img src={analab} alt="Analab" className="w-40" />
          <p className="text-sm md:text-base leading-relaxed text-white/80">
            {t("colab.sac.section4.izquierdo.desc")}
          </p>
        </div>

        {/* Bloque derecho */}
        <div className="flex flex-col gap-10">
          <div className="flex items-start gap-4">
            <img src={suelo} alt="" className="w-10 h-10 mt-1" />
            <div>
              <p className="font-semibold">{t("colab.sac.section4.derecho.title")}</p>
              <p className="text-sm text-white/80">
                {t("colab.sac.section4.derecho.desc")}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img src={plantas} alt="" className="w-10 h-10 mt-1" />
            <div>
              <p className="font-semibold">{t("colab.sac.section4.derecho2.title")}</p>
              <p className="text-sm text-white/80">
                {t("colab.sac.section4.derecho2.desc")}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img src={abono} alt="" className="w-10 h-10 mt-1" />
            <div>
              <p className="font-semibold">{t("colab.sac.section4.derecho3.title")}</p>
              <p className="text-sm text-white/80">
                {t("colab.sac.section4.derecho3.desc")}
              </p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Section4AC
