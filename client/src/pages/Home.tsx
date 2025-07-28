import { Link } from "wouter";
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <section>
      <h2>{t('home.title')}</h2>
      <p>{t('home.subtitle')}</p>
      <Link href="/demo">
        <button>{t('home.launchDemo')}</button>
      </Link>
    </section>
  );
}
