import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import './Demo.css';

const Demo = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <SEOHead 
        title="Live Demo - S.P.E.A.R.™ Dual AI Validated Checkout"
        description="Experience the S.P.E.A.R.™ Protocol validated by both Grok (xAI) and ChatGPT (OpenAI). Interactive demo of dual AI-approved checkout technology for 100M users."
        keywords="SPEAR demo, dual AI validation demo, Grok xAI demo, ChatGPT OpenAI demo, 100M user checkout, interactive AI commerce, live checkout experience"
      />
      <section className="demo-container">
        <h2>{t('demo.title')}</h2>
        <p>{t('demo.subtitle')}</p>
        
        <div className="demo-box">
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            background: '#1a1a1a',
            border: '2px solid #ff0033',
            borderRadius: '12px',
            marginBottom: '2rem'
          }}>
            <h3 style={{color: '#ff0033', marginBottom: '1rem'}}>Live Node.js Demo Available</h3>
            <p style={{color: '#ccc', marginBottom: '2rem'}}>
              Experience the full S.P.E.A.R.™ Protocol in action with our live Node.js application
            </p>
            <a 
              href="https://node-js-cory72.replit.app" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(135deg, #ff0033, #cc0029)',
                color: 'white',
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '8px',
                textDecoration: 'none',
                display: 'inline-block',
                boxShadow: '0 0 20px rgba(255, 0, 51, 0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              🚀 Launch Live Demo
            </a>
          </div>
          
          <div style={{
            textAlign: 'center',
            padding: '1rem',
            color: '#999',
            fontSize: '0.9rem'
          }}>
            <p>Demo opens in new tab • Full Node.js application • Real-time features</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Demo;
