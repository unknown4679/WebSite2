import { Link } from "wouter";
import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <>
      <SEOHead 
        title="Grok Validated AI Checkout - 100M User Protocol"
        description="Grok (xAI) validates S.P.E.A.R.™ for 100M users and $7.9B valuation. Revolutionary AI-powered checkout protocol delivering zero-friction commerce experiences."
        keywords="Grok validated, xAI approved, 100M users, AI checkout, SPEAR protocol, $7.9B valuation, frictionless commerce, sponsored DM engine, real-time checkout"
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
