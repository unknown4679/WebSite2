import { useEffect } from 'react';

const Demo = () => {
  useEffect(() => {
    // Hide header/footer and make full screen
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const body = document.body;
    const html = document.documentElement;
    
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';
    
    body.style.margin = '0';
    body.style.padding = '0';
    body.style.overflow = 'hidden';
    html.style.overflow = 'hidden';
    
    return () => {
      if (header) header.style.display = '';
      if (footer) footer.style.display = '';
      body.style.margin = '';
      body.style.padding = '';
      body.style.overflow = '';
      html.style.overflow = '';
    };
  }, []);
  
  return (
    <iframe
      src="https://node-js-cory72.replit.app"
      title="S.P.E.A.R.™ Protocol Demo"
      allow="clipboard-write; microphone; camera"
      style={{
        border: 'none',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999
      }}
    />
  );
};

export default Demo;
