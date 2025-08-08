import { Link } from "wouter";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { useState } from 'react';

export default function Header() {
  const { t } = useTranslation();
  const [showDemoModal, setShowDemoModal] = useState(false);
  
  return (
    <>
      <header>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <h1>S.P.E.A.R.™ Protocol</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <nav>
              <Link href="/">{t('nav.home')}</Link>
              <Link href="/protocol">Protocol</Link>
              <button 
                onClick={() => setShowDemoModal(true)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'inherit',
                  fontSize: 'inherit',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
              >
                {t('nav.demo')}
              </button>
              <Link href="/about">{t('nav.about')}</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">{t('nav.contact')}</Link>
            </nav>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {showDemoModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }}>
          <div style={{
            width: '90%',
            maxWidth: '1200px',
            height: '80%',
            background: '#000',
            border: '2px solid #ff0033',
            borderRadius: '12px',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 0 40px rgba(255, 0, 51, 0.5)'
          }}>
            <div style={{
              background: '#0a0a0a',
              padding: '1rem',
              borderBottom: '1px solid #ff0033',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h3 style={{
                color: '#ff0033',
                margin: '0',
                fontSize: '1.2rem',
                fontWeight: 'bold'
              }}>S.P.E.A.R.™ Protocol Demo - Recipe Sage Application</h3>
              <button
                onClick={() => setShowDemoModal(false)}
                style={{
                  background: '#ff0033',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '0.5rem 1rem',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}
              >
                Close ✕
              </button>
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
        </div>
      )}
    </>
  );
}
