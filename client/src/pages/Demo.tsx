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
          padding: '2rem',
          background: '#1a1a1a',
          border: '2px solid #ff0033',
          borderRadius: '12px',
          height: '600px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <h3 style={{color: '#ff0033', marginBottom: '1rem'}}>S.P.E.A.R.™ Protocol Demo</h3>
            <p style={{color: '#ccc', marginBottom: '1rem'}}>Live Node.js Application</p>
          </div>
          
          <div style={{
            flex: 1,
            background: '#000',
            border: '1px solid #333',
            borderRadius: '8px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <iframe
              src="https://spear-demo.cory72.repl.co"
              title="S.P.E.A.R.™ Protocol Demo"
              allow="clipboard-write; microphone; camera"
              style={{
                border: 'none',
                width: '100%',
                height: '100%'
              }}
              onError={() => console.log('Demo loading...')}
            />
            
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#ff0033',
              textAlign: 'center',
              pointerEvents: 'none',
              zIndex: 1
            }}>
              <div style={{
                fontSize: '1.2rem',
                marginBottom: '0.5rem'
              }}>🚀</div>
              <div>Demo Initializing...</div>
              <div style={{
                fontSize: '0.8rem',
                color: '#999',
                marginTop: '0.5rem'
              }}>spear-demo.cory72.repl.co</div>
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
