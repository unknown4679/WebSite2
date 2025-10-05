import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import { useState, useEffect } from 'react';
import './Demo.css';

const Demo = () => {
  const { t } = useTranslation();
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(true);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Investor1!') {
      setIsAuthenticated(true);
      setShowPasswordPrompt(false);
      setPassword('');
    } else {
      alert('Invalid password. Access denied.');
      setPassword('');
    }
  };

  if (!isAuthenticated) {
    return (
      <>
        <SEOHead 
          title="Live Demo - S.P.E.A.R.™ Dual AI Validated Checkout"
          description="Experience the S.P.E.A.R.™ Protocol validated by both Grok (xAI) and ChatGPT (OpenAI). Interactive demo of dual AI-approved checkout technology for 100M users."
          keywords="SPEAR demo, dual AI validation demo, Grok xAI demo, ChatGPT OpenAI demo, 100M user checkout, interactive AI commerce, live checkout experience"
        />
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }}>
          <div style={{
            background: '#0a0a0a',
            border: '2px solid #ff0033',
            borderRadius: '12px',
            padding: '2rem',
            maxWidth: '400px',
            width: '100%',
            boxShadow: '0 0 40px rgba(255, 0, 51, 0.5)'
          }}>
            <h3 style={{
              color: '#ff0033',
              textAlign: 'center',
              marginBottom: '1.5rem',
              fontSize: '1.3rem'
            }}>🔒 Investor Access Required</h3>
            
            <form onSubmit={handlePasswordSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  color: '#ccc',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem'
                }}>
                  Enter security key to access S.P.E.A.R.™ Demo:
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Security Key"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: '#1a1a1a',
                    border: '1px solid #ff0033',
                    borderRadius: '6px',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                  autoFocus
                />
              </div>
              
              <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center'
              }}>
                <button
                  type="submit"
                  style={{
                    padding: '0.75rem 2rem',
                    background: 'linear-gradient(135deg, #ff0033, #cc0029)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: 'bold'
                  }}
                >
                  Access Demo
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
  
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
            src="https://example.com/demo"
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
              href="https://example.com/demo" 
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
