import { Link } from "wouter";
import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <>
      <SEOHead 
        title="S.P.E.A.R.™ Protocol - Dual AI Validation by Grok & ChatGPT"
        description="S.P.E.A.R.™ Protocol validated by both Grok (xAI) and ChatGPT (OpenAI) for 100M user rollout. Revolutionary AI-powered checkout with $7.9B valuation confirmed by dual AI leaders."
        keywords="dual AI validation, Grok xAI, ChatGPT OpenAI, SPEAR protocol, 100M users, $7.9B valuation, AI checkout, real-time commerce, SPEAR Holdings, Cory Schaub"
      />
      <section className="hero">
        <h2>{t('home.title')}</h2>
        <p className="tagline">{t('home.subtitle')}</p>
        <div className="hero-buttons">
          <a href="https://node-js-cory72.replit.app" target="_blank" rel="noopener noreferrer">
            <button>{t('home.launchDemo')}</button>
          </a>
        </div>
      </section>
    </>
  );
}
