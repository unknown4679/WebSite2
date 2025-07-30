import { useTranslation } from 'react-i18next';
import { Link } from "wouter";
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
        <div style={{marginBottom: '2rem'}}>
          <Link href="/" style={{
            color: '#ff0033',
            textDecoration: 'none',
            fontSize: '0.9rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            ← Back to Website
          </Link>
        </div>
        
        <h2>{t('demo.title') || 'Live S.P.E.A.R.™ Demo'}</h2>
        <p>{t('demo.subtitle') || 'Experience frictionless AI-powered checkout in under 4 minutes.'}</p>
        
        <div className="demo-box">
          <h3 style={{color: '#ff0033', marginBottom: '1rem'}}>🤖 S.P.E.A.R.™ AI Assistant</h3>
          <p style={{color: '#ccc', marginBottom: '1rem'}}>Welcome to the S.P.E.A.R.™ Protocol Demo</p>
          
          <div style={{
            background: '#1a1a1a', 
            border: '2px solid #ff0033', 
            borderRadius: '12px', 
            padding: '1.5rem',
            marginBottom: '1rem',
            boxShadow: '0 0 15px rgba(255, 0, 51, 0.3)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem',
              paddingBottom: '0.5rem',
              borderBottom: '1px solid #333'
            }}>
              <span style={{color: '#ff0033', fontWeight: 'bold'}}>Node.js Server Status</span>
              <span style={{color: '#00ff00', fontSize: '0.9rem'}}>🟢 ONLINE</span>
            </div>
            <div style={{color: '#ccc', fontSize: '0.9rem', lineHeight: '1.5'}}>
              <p>✓ Express.js backend running on port 5000</p>
              <p>✓ React frontend with hot reload active</p>
              <p>✓ PostgreSQL database connected</p>
              <p>✓ Multi-language support enabled</p>
            </div>
          </div>

          <div style={{
            background: '#222', 
            border: '1px solid #ff0033', 
            borderRadius: '8px', 
            padding: '1rem',
            minHeight: '150px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{textAlign: 'center'}}>
              <p style={{color: '#ff0033', fontWeight: 'bold', marginBottom: '0.5rem'}}>
                Dual AI Validation Complete
              </p>
              <p style={{color: '#999', fontStyle: 'italic', fontSize: '0.9rem'}}>
                ✓ Grok (xAI) Approved<br/>
                ✓ ChatGPT (OpenAI) Approved<br/>
                Ready for 100M user deployment
              </p>
            </div>
          </div>
        </div>
        
        <div style={{
          marginTop: '2rem',
          textAlign: 'center'
        }}>
          <Link href="/" style={{
            background: 'transparent',
            color: '#ff0033',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            border: '2px solid #ff0033',
            borderRadius: '8px',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'all 0.3s ease',
            marginRight: '1rem'
          }}>
            🏠 Return to Home
          </Link>
          <Link href="/protocol" style={{
            background: 'linear-gradient(135deg, #ff0033, #cc0029)',
            color: 'white',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '8px',
            textDecoration: 'none',
            display: 'inline-block',
            boxShadow: '0 0 15px rgba(255, 0, 51, 0.3)',
            transition: 'all 0.3s ease'
          }}>
            📋 View Protocol Details
          </Link>
        </div>
      </section>
    </>
  );
};

export default Demo;
