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
          height: '600px',
          position: 'relative'
        }}>
          <iframe
            src="https://spear-demo.cory72.repl.co"
            title="S.P.E.A.R.™ Protocol Demo"
            allow="clipboard-write; microphone; camera"
            style={{
              border: 'none',
              width: '100%',
              height: '100%',
              borderRadius: '10px'
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
          <p>Live embedded demo • Full Node.js application • Real-time S.P.E.A.R.™ Protocol</p>
        </div>
      </section>
    </>
  );
};

export default Demo;
