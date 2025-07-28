import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  
  return (
    <section>
      <h2>{t('contact.title')}</h2>
      <p>{t('contact.email')}: cory@spearhl.com</p>
      <p>{t('contact.phone')}: (920) 238-6591</p>
      <p>{t('contact.location')}: Fond du Lac, WI</p>
    </section>
  );
}
