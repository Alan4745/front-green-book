import React from 'react'
import CircleFeature from "../C3/ui/CircleFeature";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Section2C7 = () => {
    const { t } = useTranslation();

  return (
    <section className=" px-6 py-16 md:px-20">
      {/* Intro */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16">
        <p className="text-base md:text-lg text-gray-900 max-w-3xl leading-relaxed">
          {t('colab.gc.section2.intro')}
        </p>

        <Link to={"/c2"}
         className="text-amber-50 self-start md:self-auto bg-[#C23074] px-6 py-2 rounded-2xl font-medium tracking-wide hover:bg-[#a92763] transition-colors cursor-pointer">
          {t('colab.gc.section2.cta')}
        </Link>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Features */}
        <div className="flex flex-col gap-10">
          
          {/* Item */}
          <div className="flex gap-6 items-start">
            <CircleFeature 
              colorAro="#E6E6E6"
              colorMovimiento="#562E91"
              colorNumero="#E6E6E6"
              number="01"
              size={110}
              arcDeg={140}
              numeroTamano={"24px"}
            />
            <div>
              <h3 className="text-3xl font-semibold mb-2 text-[#562E91]">
                {t('colab.gc.section2.items.i1.title')}
              </h3>
              <p className="text-gray-900 text-[14px] leading-relaxed">
                {t('colab.gc.section2.items.i1.desc')}
              </p>
            </div>
          </div>

          {/* Item */}
          <div className="flex gap-6 items-start">
            <CircleFeature 
              colorAro="#E6E6E6"
              colorMovimiento="#562E91"
              colorNumero="#E6E6E6"
              number="02"
              size={110}
              arcDeg={250}
              numeroTamano={"24px"}

            />
            <div>
              <h3 className="text-3xl font-semibold mb-2 text-[#562E91]" >
                {t('colab.gc.section2.items.i2.title')}
              </h3>
              <p className="text-gray-900 text-[14px] leading-relaxed">
                {t('colab.gc.section2.items.i2.desc')}
              </p>
            </div>
          </div>

          {/* Item */}
          <div className="flex gap-6 items-start">
            <CircleFeature 
              colorAro="#E6E6E6"
              colorMovimiento="#562E91"
              colorNumero="#E6E6E6"
              number="03"
              size={110}
              arcDeg={500}
              numeroTamano={"24px"}
            />
            <div>
              <h3 className="text-3xl font-semibold mb-2 text-[#562E91]">
                {t('colab.gc.section2.items.i3.title')}
              </h3>
              <p className="text-gray-900 text-[14px] leading-relaxed">
                {t('colab.gc.section2.items.i3.desc')}
              </p>
            </div>
          </div>

        </div>

        {/* Image */}
        <div className="flex justify-center lg:justify-end">
          <img 
            src="/Img/C7/mapa.png"
            alt="Mapa de regiones cafetaleras de Guatemala"
            className="w-full max-w-md lg:max-w-lg object-contain"
          />
        </div>

      </div>
    </section>
  )
}

export default Section2C7
