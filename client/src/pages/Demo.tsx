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
        
        <div style={{
          width: '100%',
          height: '800px',
          border: 'none'
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
          />
        </div>
      </section>
    </>
  );
};

export default Demo;
