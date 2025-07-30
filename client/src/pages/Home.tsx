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
          <Link href="/demo">
            <button style={{
              background: 'linear-gradient(135deg, #ff0033, #cc0029)',
              color: 'white',
              padding: '1rem 2rem',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: '0 0 20px #ff0033',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              transition: 'all 0.3s ease'
            }}>
              🚀 {t('home.launchDemo') || 'Launch Live Demo'}
            </button>
          </Link>
          <Link href="/demo">
            <button style={{
              background: 'transparent',
              color: '#ff0033',
              padding: '1rem 2rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              border: '2px solid #ff0033',
              borderRadius: '8px',
              cursor: 'pointer',
              marginLeft: '1rem',
              transition: 'all 0.3s ease'
            }}>
              🤖 Try Node.js Demo
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
