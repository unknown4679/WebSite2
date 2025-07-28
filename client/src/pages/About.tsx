import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import './About.css';

const About = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <SEOHead 
        title="About S.P.E.A.R.™ Protocol - AI Commerce Innovation"
        description="Discover what makes S.P.E.A.R.™ different: AI that adapts to consumer intent, zero-friction checkout, and patent-pending protocol technology for enterprise commerce."
        keywords="SPEAR protocol, AI commerce innovation, patent pending technology, zero friction checkout, enterprise AI, checkout protocol, commerce AI technology"
      />
      <section className="about">
        <h2>What Makes S.P.E.A.R.™ Different</h2>
        <p className="sub">We don't run ads — we close them.</p>
        <ul>
          <li>✔️ AI that adapts to consumer intent</li>
          <li>✔️ Zero-friction checkout inside the DM</li>
          <li>✔️ Full IP protection: patent pending, protocol exclusive</li>
        </ul>
        <p className="cta">This isn't a product. It's a protocol.</p>
      </section>
    </>
  );
};

export default About;
