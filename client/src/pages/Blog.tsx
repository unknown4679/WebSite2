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

  // Sample validation/insights posts - replace with your real content
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'S.P.E.A.R.™ Protocol Validation: 47% Checkout Completion Increase',
      excerpt: 'Initial pilot testing reveals significant improvements in checkout completion rates across multiple enterprise clients. Our AI-driven approach shows measurable impact on conversion optimization.',
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
              <a href={`#post-${post.id}`} className="read-more">
                Read Full Analysis →
              </a>
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
            <h3>Quick Stats</h3>
            <ul className="category-list">
              <li><strong>47%</strong> - Checkout Improvement</li>
              <li><strong>60%</strong> - Cart Abandonment Reduction</li>
              <li><strong>Enterprise</strong> - Ready Protocol</li>
              <li><strong>AI-Powered</strong> - Zero Friction</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;