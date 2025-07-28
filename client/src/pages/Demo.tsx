import { useTranslation } from 'react-i18next';
import './Demo.css';

const Demo = () => {
  const { t } = useTranslation();
  
  return (
    <section className="demo-container">
      <h2>{t('demo.title')}</h2>
      <p>{t('demo.subtitle')}</p>
      <div className="demo-box">
        {/* Your chat UI will be embedded here */}
        <p>[ Chatbot appears here in final version ]</p>
      </div>
      <button onClick={() => alert('Simulated Checkout Started!')}>Simulate Checkout</button>
    </section>
  );
};

export default Demo;
