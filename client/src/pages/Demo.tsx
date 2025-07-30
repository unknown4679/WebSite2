import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import HeatMap from '@/components/HeatMap';
import BrandDashboard from '@/components/BrandDashboard';
import ConfirmationModal from '@/components/ConfirmationModal';
import './Demo.css';

const Demo = () => {
  const { t } = useTranslation();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleOrderNow = () => {
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000); // Auto-close after 3 seconds
  };
  
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
        
        {/* Real-time Heatmap */}
        <div className="mb-8">
          <HeatMap />
        </div>
        
        {/* Brand Dashboard */}
        <div className="mb-8">
          <BrandDashboard />
        </div>
        
        <div className="demo-box">
          {/* Your chat UI will be embedded here */}
          <p>[ Chatbot appears here in final version ]</p>
        </div>
        <button 
          onClick={handleOrderNow}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-red-500/25"
        >
          {t('demo.simulateCheckout', 'Simulate Checkout')}
        </button>
        
        {showConfirmation && (
          <ConfirmationModal 
            onClose={() => setShowConfirmation(false)}
            product="Cybertruck"
            deliveryDate="Aug 2"
          />
        )}
      </section>
    </>
  );
};

export default Demo;
