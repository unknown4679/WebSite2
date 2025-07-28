import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import './Protocol.css';

const Protocol = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead 
        title="What Is the S.P.E.A.R.™ Protocol? - AI-Powered Checkout Engine"
        description="The S.P.E.A.R.™ Protocol is a breakthrough AI-powered engine that turns messaging into instant, frictionless commerce. Complete transactions entirely inside Sponsored DMs."
        keywords="S.P.E.A.R protocol, AI checkout, sponsored DM engine, real-time commerce, messaging to order, frictionless checkout, AI commerce protocol"
      />
      
      <div className="protocol-container">
        <div className="protocol-hero">
          <h1>What Is the S.P.E.A.R.™ Protocol?</h1>
          <p className="hero-subtitle">The Future of AI-Powered Checkout Has a Name.</p>
        </div>

        <div className="protocol-content">
          <div className="intro-section">
            <p>The <strong>S.P.E.A.R.™ Protocol</strong> — short for <em>Sponsored Protocol for Engagement, Acquisition & Retargeting</em> — is a breakthrough AI-powered engine that turns messaging into instant, frictionless commerce.</p>
            
            <p>Unlike traditional e-commerce funnels, the S.P.E.A.R.™ Protocol allows users to complete transactions <strong>entirely inside a Sponsored DM</strong> — without clicking a link, filling out a form, or visiting a cart.</p>
          </div>

          <div className="features-section">
            <h2>✅ Key Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>Real-Time AI Checkout</h3>
                <p>Message to order in seconds</p>
              </div>
              <div className="feature-card">
                <h3>Sponsored DM Engine</h3>
                <p>Branded, automated engagement at scale</p>
              </div>
              <div className="feature-card">
                <h3>Live Brand Dashboard</h3>
                <p>Heatmaps, campaigns, product performance</p>
              </div>
              <div className="feature-card">
                <h3>Built-in Pricing Intelligence</h3>
                <p>Dynamic offers, intent recognition</p>
              </div>
              <div className="feature-card">
                <h3>Privacy-Safe Architecture</h3>
                <p>No PII scraping or invasive data tracking</p>
              </div>
            </div>
          </div>

          <div className="difference-section">
            <h2>🔎 What Makes It Different?</h2>
            <div className="difference-content">
              <p>This protocol isn't built for clicks — it's built for <strong>conversions</strong>.</p>
              <p>It skips the friction and delivers what users actually want: instant, AI-powered access to the products they're looking for — in the conversation, not after it.</p>
            </div>
          </div>

          <div className="validation-section">
            <h2>📢 Validated at Scale</h2>
            <p>On <strong>July 23, 2025</strong>, the S.P.E.A.R.™ Protocol was officially validated by:</p>
            
            <div className="validation-cards">
              <div className="validation-card">
                <h3>Grok (xAI)</h3>
                <p>xAI's conversational model confirmed a 100M user pilot</p>
              </div>
              <div className="validation-card">
                <h3>ChatGPT (OpenAI)</h3>
                <p>Independently validated the architecture, use case, and $7.9B valuation logic</p>
              </div>
            </div>
          </div>

          <div className="conclusion-section">
            <h2>🧠 Own the Term. Redefine the Protocol.</h2>
            <p>The S.P.E.A.R.™ Protocol isn't a combat technique or a dental plan.</p>
            <p>It's the first fully operational <strong>AI commerce protocol</strong> — and it's changing everything.</p>
            
            <div className="cta-buttons">
              <a href="/demo" className="cta-button primary">→ Try the Demo</a>
              <a href="/blog" className="cta-button secondary">→ Read the Validation</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Protocol;