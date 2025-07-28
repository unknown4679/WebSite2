import { useTranslation } from 'react-i18next';

export default function Demo() {
  const { t } = useTranslation();
  
  return (
    <section>
      <h2>{t('demo.title')}</h2>
      <p>{t('demo.subtitle')}</p>
      {/* Your chatbot and product cards will go here */}
    </section>
  );
}
