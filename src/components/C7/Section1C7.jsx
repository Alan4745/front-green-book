import React from 'react'
import { useTranslation } from 'react-i18next';

const Section1C7 = () => {
      const { t } = useTranslation();
  return (
    <div className='relative min-h-screen w-screen overflow-hidden bg-no-repeat bg-center bg-cover  z-10 flex justify-center items-center' style={{ backgroundImage: "url('/Img/C7/fondo_celeste.jpeg')" }}>
       <div className='w-1/2 flex flex-col items-center p-10 gap-5 text-center
       '>
          <img src='/Img/C7/animal_morado.png' alt='Animal Morado'></img>
          <img src="/public/Img/C7/guatemalan_cofees.png" alt="guatemalan_cofees" />
          <p className='text-amber-50 text-xl pt-5' >{t('colab.gc.section1.desc')}</p>
       </div>
    </div>
  )
}

export default Section1C7