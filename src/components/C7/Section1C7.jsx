import React from 'react'
import { useTranslation } from 'react-i18next';

const Section1C7 = () => {
      const { t } = useTranslation();
  return (
	    <div className='relative min-h-screen w-full overflow-hidden bg-no-repeat bg-center bg-cover z-10 flex justify-center items-center px-6 py-[10vh]' style={{ backgroundImage: "url('/Img/C7/fondo_celeste.jpeg')" }}>
	       <div className='w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex flex-col items-center p-6 sm:p-8 md:p-10 gap-5 text-center'>
	          <img src='/Img/C7/animal_morado.png' alt='Animal Morado' className='max-h-[38vh] w-auto max-w-full object-contain'></img>
	          <img src="/Img/C7/guatemalan_cofees.png" alt="guatemalan_cofees" className='w-full max-w-[420px] object-contain' />
	          <p className='text-amber-50 text-base sm:text-lg md:text-xl pt-5 leading-relaxed' >{t('colab.gc.section1.desc')}</p>
	       </div>
	    </div>
  )
}

export default Section1C7
