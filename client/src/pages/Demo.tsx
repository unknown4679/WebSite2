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
          padding: '1rem',
          background: '#1a1a1a',
          border: '2px solid #ff0033',
          borderRadius: '12px',
          minHeight: '800px'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
            <h3 style={{color: '#ff0033', marginBottom: '0.5rem', fontSize: '1.5rem'}}>S.P.E.A.R.™ Protocol Demo</h3>
            <p style={{color: '#ccc', fontSize: '0.9rem'}}>Live Interactive Demo</p>
          </div>
          
          <div style={{
            background: '#000',
            border: '1px solid #333',
            borderRadius: '8px',
            overflow: 'hidden',
            height: '700px'
          }}>
            <iframe
              src="https://node-js-cory72.replit.app"
              title="S.P.E.A.R.™ Protocol Demo"
              allow="clipboard-write; microphone; camera"
              style={{
                border: 'none',
                width: '100%',
                height: '100%'
              }}
              onLoad={() => console.log('Demo loaded successfully')}
            />
          </div>
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
