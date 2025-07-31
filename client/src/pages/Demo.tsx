import { useEffect } from 'react';

const Demo = () => {
  useEffect(() => {
    // Set full page styling for demo
    document.body.style.margin = '0';
    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.backgroundColor = '#000';
    document.body.style.color = '#fff';
    
    // Cleanup on unmount
    return () => {
      document.body.style.margin = '';
      document.body.style.fontFamily = '';
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, []);
  
  return (
    <div style={{ margin: 0, height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{
        padding: '20px',
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        backgroundColor: '#111',
        color: '#ff0033'
      }}>
        Welcome to the S.P.E.A.R.™ Demo
      </header>

      <iframe 
        src="https://node-js-cory72.replit.app" 
        title="SPEAR Protocol Live Demo"
        allow="clipboard-write; microphone; camera"
        style={{
          width: '100%',
          flex: 1,
          border: 'none'
        }}
      />
    </div>
  );
};

export default Demo;
