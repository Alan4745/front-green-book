import { useTranslation } from 'react-i18next';

const FooterGC = () => {
  const { t } = useTranslation();

  return (
    <footer className='bg-[#C23074] pt-10 pb-10 flex flex-col items-center text-center'>
      <p className='text-amber-50 w-1/2 text-xl font-normal'>
        {t('colab.gc.section3.body.pre')} <span className='font-bold'>{t('colab.gc.section3.body.brand')}</span>{t('colab.gc.section3.body.post')}
      </p>
    </footer>
  );
};

export default FooterGC;
