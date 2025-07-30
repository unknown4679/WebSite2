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
            padding: '3rem 2rem'
          }}>
            <h3 style={{color: '#ff0033', marginBottom: '1.5rem', fontSize: '2rem'}}>S.P.E.A.R.™ Live Demo</h3>
            <p style={{color: '#ccc', marginBottom: '3rem', fontSize: '1.1rem'}}>
              Experience the full Node.js application with real-time features
            </p>
            
            <a 
              href="https://spear-demo.cory72.repl.co" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(135deg, #ff0033, #cc0029)',
                color: 'white',
                padding: '1.5rem 3rem',
                fontSize: '1.3rem',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '8px',
                textDecoration: 'none',
                display: 'inline-block',
                boxShadow: '0 0 25px rgba(255, 0, 51, 0.6)',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}

            >
              Launch Demo
            </a>
            
            <div style={{
              marginTop: '2rem',
              color: '#999',
              fontSize: '0.9rem'
            }}>
              <p>Opens in new tab • Full Node.js application</p>
              <p style={{color: '#ff0033', marginTop: '0.5rem'}}>spear-demo.cory72.repl.co</p>
            </div>
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
