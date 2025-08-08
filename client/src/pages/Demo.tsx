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
        
        <div className="demo-box" style={{
          padding: '0',
          background: '#000',
          border: '2px solid #ff0033',
          borderRadius: '12px',
          overflow: 'hidden',
          height: '700px',
          position: 'relative',
          boxShadow: '0 0 30px rgba(255, 0, 51, 0.3)'
        }}>
          <div style={{
            background: '#0a0a0a',
            padding: '1rem',
            borderBottom: '1px solid #ff0033',
            textAlign: 'center'
          }}>
            <h3 style={{
              color: '#ff0033',
              margin: '0',
              fontSize: '1.2rem',
              fontWeight: 'bold'
            }}>S.P.E.A.R.™ Protocol Demo - Recipe Sage Application</h3>
          </div>
          
          <iframe
            src="https://recipe-sage-cory72.replit.app"
            title="S.P.E.A.R.™ Protocol Demo - Recipe Sage"
            allow="clipboard-write; microphone; camera"
            style={{
              border: 'none',
              width: '100%',
              height: 'calc(100% - 60px)',
              display: 'block'
            }}
          />
        </div>
        
        <div style={{
          textAlign: 'center',
          padding: '1rem',
          color: '#999',
          fontSize: '0.9rem',
          marginTop: '1rem'
        }}>
          <p>Live embedded demo • Recipe Sage powered by S.P.E.A.R.™ Protocol • Real-time AI features</p>
          <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
            <a 
              href="https://recipe-sage-cory72.replit.app" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#ff0033', textDecoration: 'none' }}
            >
              Open in full window ↗
            </a>
          </p>
        </div>
        
        <div style={{
          textAlign: 'center',
          padding: '1rem',
          color: '#999',
          fontSize: '0.9rem',
          marginTop: '1rem'
        }}>
          <p>Live embedded demo • Full Node.js application • Real-time S.P.E.A.R.™ Protocol</p>
        </div>
      </section>
    </>
  );
};

export default Demo;
