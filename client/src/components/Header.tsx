import { Link } from "wouter";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { t } = useTranslation();
  
  return (
    <header>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <h1>S.P.E.A.R.™ Protocol</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <nav>
            <Link href="/">{t('nav.home')}</Link>
            <Link href="/protocol">Protocol</Link>
            <Link href="/demo" style={{
              background: 'linear-gradient(135deg, #ff0033, #cc0029)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 'bold',
              boxShadow: '0 0 10px rgba(255, 0, 51, 0.3)',
              transition: 'all 0.3s ease'
            }}>🚀 {t('nav.demo')}</Link>
            <Link href="/about">{t('nav.about')}</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">{t('nav.contact')}</Link>
          </nav>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
