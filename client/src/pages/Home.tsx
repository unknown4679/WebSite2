import { Link } from "wouter";
import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <>
      <SEOHead 
        title="Revolutionary AI-Powered Checkout Technology"
        description="S.P.E.A.R.™ delivers zero-friction AI-powered checkout experiences for enterprise commerce. Transform your payment process with our revolutionary protocol."
        keywords="AI checkout, frictionless commerce, payment protocol, SPEAR, checkout optimization, AI commerce, zero friction payment, enterprise checkout, revolutionary payment technology"
      />
      <section className="hero">
        <h2>{t('home.title')}</h2>
        <p className="tagline">{t('home.subtitle')}</p>
        <div className="hero-buttons">
          <Link href="/demo">
            <button>{t('home.launchDemo')}</button>
          </Link>
        </div>
      </section>
    </>
  );
}
