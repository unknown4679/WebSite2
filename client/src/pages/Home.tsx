import { Link } from "wouter";
import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import { useState } from 'react';

export default function Home() {
  const { t } = useTranslation();
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleDemoClick = () => {
    if (isAuthenticated) {
      window.open('https://recipe-sage-cory72.replit.app', '_blank');
    } else {
      setShowPasswordPrompt(true);
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Investor1!') {
      setIsAuthenticated(true);
      setShowPasswordPrompt(false);
      setPassword('');
      window.open('https://recipe-sage-cory72.replit.app', '_blank');
    } else {
      alert('Invalid password. Access denied.');
      setPassword('');
    }
  };
  
  return (
    <>
      <SEOHead 
        title="S.P.E.A.R.™ Protocol - Dual AI Validation by Grok & ChatGPT"
        description="S.P.E.A.R.™ Protocol validated by both Grok (xAI) and ChatGPT (OpenAI) for 100M user rollout. Revolutionary AI-powered checkout with $7.9B valuation confirmed by dual AI leaders."
        keywords="dual AI validation, Grok xAI, ChatGPT OpenAI, SPEAR protocol, 100M users, $7.9B valuation, AI checkout, real-time commerce, SPEAR Holdings, Cory Schaub"
      />
      <section className="hero">
        <h2>{t('home.title')}</h2>
        <p className="tagline">{t('home.subtitle')}</p>
        <div className="hero-buttons">
          <button onClick={handleDemoClick}>
            {t('home.launchDemo')} {isAuthenticated && '🔓'}
          </button>
        </div>
      </section>

      {showPasswordPrompt && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          zIndex: 1001,
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
                justifyContent: 'space-between'
              }}>
                <button
                  type="button"
                  onClick={() => {
                    setShowPasswordPrompt(false);
                    setPassword('');
                  }}
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: '#333',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    padding: '0.75rem 1.5rem',
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
      )}
    </>
  );
}
