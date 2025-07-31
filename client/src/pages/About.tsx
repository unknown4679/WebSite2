import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import './About.css';

const About = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <SEOHead 
        title="About S.P.E.A.R.™ Protocol - Dual AI Validated Technology"
        description="Learn about the S.P.E.A.R.™ Protocol, validated by both Grok (xAI) and ChatGPT (OpenAI) for 100M user rollout. Revolutionary dual AI-approved checkout technology from SPEAR Holdings."
        keywords="about SPEAR protocol, dual AI validation, Grok xAI, ChatGPT OpenAI, 100M users, SPEAR Holdings, Cory Schaub, AI checkout technology, patent pending protocol"
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
