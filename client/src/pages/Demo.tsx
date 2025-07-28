import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import './Demo.css';

const Demo = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <SEOHead 
        title="Live Demo - S.P.E.A.R.™ AI Checkout Experience"
        description="Experience S.P.E.A.R.™ AI-powered checkout protocol in action. Try our interactive demo showcasing zero-friction commerce technology and AI-driven checkout optimization."
        keywords="SPEAR demo, AI checkout demo, interactive commerce demo, live checkout experience, AI payment demo, frictionless payment experience"
      />
      <section className="demo-container">
        <h2>{t('demo.title')}</h2>
        <p>{t('demo.subtitle')}</p>
        <div className="demo-box">
          {/* Your chat UI will be embedded here */}
          <p>[ Chatbot appears here in final version ]</p>
        </div>
        <button onClick={() => alert('Simulated Checkout Started!')}>Simulate Checkout</button>
      </section>
    </>
  );
};

export default Demo;
