import { Link } from "wouter";
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <section className="hero">
      <h2>{t('home.title')}</h2>
      <p className="tagline">{t('home.subtitle')}</p>
      <div className="hero-buttons">
        <Link href="/demo">
          <button>{t('home.launchDemo')}</button>
        </Link>
      </div>
    </section>
  );
}
