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
        <h2>{t('demo.title') || 'Live S.P.E.A.R.™ Demo'}</h2>
        <p>{t('demo.subtitle') || 'Experience frictionless AI-powered checkout in under 4 minutes.'}</p>
        
        <div className="demo-box">
          <h3 style={{color: '#ff0033', marginBottom: '1rem'}}>🤖 S.P.E.A.R.™ AI Assistant</h3>
          <p style={{color: '#ccc', marginBottom: '1rem'}}>Welcome to the S.P.E.A.R.™ Protocol Demo</p>
          <div style={{
            background: '#222', 
            border: '1px solid #ff0033', 
            borderRadius: '8px', 
            padding: '1rem',
            minHeight: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <p style={{color: '#999', fontStyle: 'italic'}}>
              Chat interface ready for implementation<br/>
              Dual AI validation: ✓ Grok (xAI) ✓ ChatGPT (OpenAI)
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Demo;
