import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import HeatMap from '@/components/HeatMap';
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
        
        {/* Real-time Heatmap */}
        <div className="mb-8">
          <HeatMap />
        </div>
        
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
