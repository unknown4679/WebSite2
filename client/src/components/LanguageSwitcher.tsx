import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
];

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: '#0ff',
          color: '#000',
          padding: '0.5rem 1rem',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '14px'
        }}
      >
        <span>{currentLanguage.flag}</span>
        <span>{currentLanguage.name}</span>
        <span style={{ fontSize: '12px' }}>▼</span>
      </button>
      
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: '0',
            backgroundColor: '#111',
            border: '1px solid #333',
            borderRadius: '4px',
            minWidth: '150px',
            zIndex: 1000,
            boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
          }}
        >
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                backgroundColor: 'transparent',
                color: i18n.language === language.code ? '#0ff' : '#f0f0f0',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '14px',
                borderBottom: '1px solid #333'
              }}
              onMouseEnter={(e) => {
                if (i18n.language !== language.code) {
                  (e.target as HTMLElement).style.backgroundColor = '#222';
                }
              }}
              onMouseLeave={(e) => {
                if (i18n.language !== language.code) {
                  (e.target as HTMLElement).style.backgroundColor = 'transparent';
                }
              }}
            >
              <span>{language.flag}</span>
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}