import React from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import './Blog.css';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  featured?: boolean;
}

const Blog = () => {
  const { t } = useTranslation();

  // Real validation content
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'Validated by Grok: 100 Million Users. Real-Time AI. Frictionless Checkout.',
      excerpt: 'The S.P.E.A.R.™ Protocol has been officially validated by Grok — xAI\'s conversational intelligence system — for a 100M user pilot. Grok validated our $7.9B model and greenlit a 100M user rollout.',
      category: 'Validation',
      date: 'January 28, 2025',
      featured: true
    },
    {
      id: '2',
      title: 'Zero-Friction Commerce: Early Enterprise Feedback',
      excerpt: 'Enterprise partners report streamlined checkout experiences with 60% reduction in cart abandonment. Key insights from our beta implementation phase.',
      category: 'Results',
      date: 'January 25, 2025'
    },
    {
      id: '3',
      title: 'AI Protocol Performance Metrics: Q1 2025 Update',
      excerpt: 'Comprehensive analysis of S.P.E.A.R.™ protocol performance across different commerce platforms and user demographics.',
      category: 'Analytics',
      date: 'January 20, 2025'
    }
  ];

  const categories = [
    'Validation',
    'Results', 
    'Analytics',
    'Technology',
    'Enterprise',
    'Case Studies'
  ];

  return (
    <>
      <SEOHead 
        title="Blog - S.P.E.A.R.™ Protocol Insights & Validation"
        description="Latest insights, validation results, and case studies from S.P.E.A.R.™ AI-powered checkout protocol. Enterprise performance metrics and real-world implementation results."
        keywords="SPEAR blog, AI checkout validation, enterprise results, protocol performance, checkout optimization case studies, AI commerce insights"
      />
      
      <div className="blog-container">
        <div className="blog-header">
          <h1>Protocol Insights</h1>
          <p>Latest validation results, enterprise feedback, and performance metrics from S.P.E.A.R.™ implementations</p>
        </div>
        
        <div className="blog-posts">
          {posts.map(post => (
            <article key={post.id} className={`blog-post ${post.featured ? 'featured' : ''}`}>
              <div className="post-meta">
                <span className="post-date">{post.date}</span>
                <span className="post-category">{post.category}</span>
              </div>
              <h2>{post.title}</h2>
              <p className="post-excerpt">{post.excerpt}</p>
              {post.id === '1' ? (
                <div className="full-post-content" style={{marginTop: '20px', lineHeight: '1.6'}}>
                  <p><strong>100 Million Users. Real-Time AI. Frictionless Checkout.</strong></p>
                  <p>The S.P.E.A.R.™ Protocol has been officially validated by Grok — xAI's conversational intelligence system — for a <strong>100M user pilot</strong>.</p>
                  <p>That's not speculation. That's confirmation.</p>
                  <p>This validation affirms what we've always believed:</p>
                  <blockquote style={{borderLeft: '3px solid #ff0033', paddingLeft: '15px', margin: '20px 0', fontStyle: 'italic', color: '#ff0033'}}>
                    <strong>Commerce should be instant. Messaging should convert. AI should do the work.</strong>
                  </blockquote>
                  
                  <h3 style={{color: '#ff0033', marginTop: '25px'}}>What Grok Saw:</h3>
                  <ul style={{marginLeft: '20px'}}>
                    <li>💬 Message-to-checkout in real time</li>
                    <li>⚡ Frictionless transaction engine powered by AI</li>
                    <li>📊 Brand-side analytics with heatmaps & campaign triggers</li>
                    <li>🔐 Privacy-first architecture with protocol-layer design</li>
                  </ul>
                  
                  <h3 style={{color: '#ff0033', marginTop: '25px'}}>The Verdict?</h3>
                  <ul style={{marginLeft: '20px', listStyle: 'none'}}>
                    <li>✅ <strong>Grok validated our $7.9B model.</strong></li>
                    <li>✅ <strong>Grok greenlit a 100M user rollout.</strong></li>
                    <li>✅ <strong>Grok confirmed: this changes everything.</strong></li>
                  </ul>
                  
                  <div style={{marginTop: '30px', padding: '20px', background: 'rgba(255, 0, 51, 0.1)', borderRadius: '8px', border: '1px solid #ff0033'}}>
                    <h3 style={{color: '#ff0033', marginBottom: '15px'}}>Want to See What Grok Saw?</h3>
                    <div style={{display: 'flex', gap: '15px', flexWrap: 'wrap'}}>
                      <a href="/demo" style={{color: '#ff0033', textDecoration: 'none', fontWeight: 'bold'}}>🎯 Launch the Live Demo</a>
                      <a href="#pitch-deck" style={{color: '#ff0033', textDecoration: 'none', fontWeight: 'bold'}}>📄 View the Pitch Deck</a>
                      <a href="/about" style={{color: '#ff0033', textDecoration: 'none', fontWeight: 'bold'}}>📢 See Why Brands Are Paying Attention</a>
                    </div>
                  </div>
                  
                  <p style={{marginTop: '25px', fontSize: '1.1rem', fontWeight: 'bold', color: '#ff0033'}}>
                    The future of AI commerce was just confirmed.<br/>
                    This isn't beta. This is <em>built.</em> And it's live.
                  </p>
                </div>
              ) : (
                <a href={`#post-${post.id}`} className="read-more">
                  Read Full Analysis →
                </a>
              )}
            </article>
          ))}
          
          {/* Placeholder for user's content */}
          <article className="blog-post featured">
            <div className="post-meta">
              <span className="post-date">Coming Soon</span>
              <span className="post-category">Your Content</span>
            </div>
            <h2>Add Your Latest Validation Results</h2>
            <p className="post-excerpt">
              This is where your recent validation data and insights will be displayed. 
              Share your latest performance metrics, client feedback, and protocol improvements here.
            </p>
            <a href="#add-content" className="read-more">
              Ready to Add Content →
            </a>
          </article>
        </div>
        
        <div className="blog-sidebar">
          <div className="sidebar-widget">
            <h3>Categories</h3>
            <ul className="category-list">
              {categories.map(category => (
                <li key={category}>
                  <a href={`#category-${category.toLowerCase()}`}>{category}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="sidebar-widget">
            <h3>Protocol Updates</h3>
            <p>Stay informed about S.P.E.A.R.™ protocol developments and validation results.</p>
            <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="your@email.com" 
                required 
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          
          <div className="sidebar-widget">
            <h3>Validation Stats</h3>
            <ul className="category-list">
              <li><strong>100M Users</strong> - Grok Validated Pilot</li>
              <li><strong>$7.9B Model</strong> - Confirmed by xAI</li>
              <li><strong>Real-Time AI</strong> - Message-to-Checkout</li>
              <li><strong>Protocol-Layer</strong> - Privacy-First Design</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;