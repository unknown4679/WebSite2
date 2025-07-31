import { useState, useEffect, useRef } from 'react';
import { Send, ShoppingCart, CreditCard, Package, Home, X, Minimize2 } from 'lucide-react';
import { Link } from 'wouter';

const Demo = () => {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Welcome to S.P.E.A.R.™ Assistant! 🎯\n\nI'm your AI-powered product discovery companion from Score™ powered by S.P.E.A.R.™ Protocol! I can help you:\n\n• Find Tesla Cybertrucks with live pricing 🚗\n• Discover Apple AirPods with current offers 🎧\n• Shop Nike Air Max with real-time stock 👟\n• Complete voice commands - click 🎤 Voice Commands to speak naturally\n\nSay \"Hey Spear\" to get started or click any option below!", 
      sender: 'ai', 
      timestamp: new Date().toLocaleTimeString() 
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const products = [
    { id: 1, name: "Nike Air Max 270", price: 150, image: "👟" },
    { id: 2, name: "Apple AirPods Pro 2", price: 249, image: "🎧" },
    { id: 3, name: "Tesla Model 3", price: 35000, image: "🚗" }
  ];

  const aiResponses = [
    "Here are some Tesla options with live pricing! The Model 3 starts at $35,000. Would you like me to find specific configurations?",
    "I found Nike Air Max 270 in stock for $150! They're available in multiple colors. Should I add them to your cart?",
    "Apple AirPods Pro 2 are available for $249 with active noise cancellation. Perfect for music lovers! Ready to purchase?",
    "Great choice! I'll help you complete this purchase with S.P.E.A.R.™ Protocol's zero-friction checkout.",
    "Processing your order... S.P.E.A.R.™ Protocol is optimizing the best payment method and delivery options for you!",
    "Voice command recognized! What product are you looking for today?",
    "I can help you find the perfect product. Try saying 'Hey Spear, find me wireless headphones' or 'Show me electric cars'",
    "S.P.E.A.R.™ Protocol active! Real-time inventory and pricing updated. What would you like to explore?"
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
    const successMessage = {
      id: Date.now(),
      text: `✅ ${product.name} added to cart! S.P.E.A.R.™ Protocol has optimized your checkout experience.`,
      sender: 'ai',
      timestamp: new Date().toLocaleTimeString()
    };
    setMessages(prev => [...prev, successMessage]);
  };

  const quickCommands = [
    "Hey Spear Cybertrucks",
    "Hey Spear white pods",
    "Hey Spear Nike red",
    "Hey Spear checkout",
    "Hey Spear deals",
    "Hey Spear gaming systems"
  ];

  return (
    <div style={{ 
      background: '#000', 
      color: '#fff', 
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #ff0033, #cc0029)',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '2px solid #ff0033'
      }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '1.5rem', textShadow: '0 0 10px #ff0033' }}>Score™ powered by S.P.E.A.R.™ Protocol</h1>
          <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>S.P.E.A.R.™ Assistant</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button 
            onClick={() => setShowCart(!showCart)}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: '#fff',
              padding: '0.5rem',
              borderRadius: '8px',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            <ShoppingCart size={20} />
            {cart.length > 0 && (
              <span style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                background: '#ff0033',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                fontSize: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {cart.length}
              </span>
            )}
          </button>
          <Link href="/">
            <button style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: '#fff',
              padding: '0.5rem',
              borderRadius: '8px',
              cursor: 'pointer'
            }}>
              <Home size={20} />
            </button>
          </Link>
        </div>
      </div>

      <div style={{ display: 'flex', height: 'calc(100vh - 80px)' }}>
        {/* Main Chat Area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Chat Messages */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '1rem',
            background: 'linear-gradient(135deg, #111, #222)'
          }}>
            {messages.map(message => (
              <div key={message.id} style={{
                marginBottom: '1rem',
                display: 'flex',
                justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start'
              }}>
                <div style={{
                  maxWidth: '70%',
                  padding: '1rem',
                  borderRadius: '12px',
                  background: message.sender === 'user' 
                    ? 'linear-gradient(135deg, #ff0033, #cc0029)' 
                    : 'linear-gradient(135deg, #333, #444)',
                  border: message.sender === 'ai' ? '1px solid #ff0033' : 'none',
                  boxShadow: message.sender === 'ai' ? '0 0 20px rgba(255, 0, 51, 0.3)' : 'none'
                }}>
                  <div style={{ whiteSpace: 'pre-line', lineHeight: '1.4' }}>
                    {message.text}
                  </div>
                  <div style={{
                    fontSize: '0.8rem',
                    opacity: 0.7,
                    marginTop: '0.5rem'
                  }}>
                    {message.timestamp}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Voice Commands Section */}
          <div style={{
            background: '#111',
            padding: '1rem',
            borderTop: '1px solid #333'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <button 
                onClick={() => setIsVoiceMode(!isVoiceMode)}
                style={{
                  background: isVoiceMode ? '#ff0033' : 'rgba(255, 0, 51, 0.2)',
                  border: '1px solid #ff0033',
                  color: '#fff',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 0 10px rgba(255, 0, 51, 0.3)'
                }}
              >
                🎤 Voice Commands
              </button>
              <span style={{ color: '#999', fontSize: '0.9rem' }}>
                {isVoiceMode ? 'Voice mode active' : 'Click to enable voice commands'}
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
              {quickCommands.map((command, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setInputMessage(command);
                    handleSendMessage();
                  }}
                  style={{
                    background: 'rgba(255, 0, 51, 0.1)',
                    border: '1px solid rgba(255, 0, 51, 0.3)',
                    color: '#ff0033',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontSize: '0.8rem'
                  }}
                >
                  {command}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Input */}
          <div style={{
            background: '#111',
            padding: '1rem',
            borderTop: '1px solid #333',
            display: 'flex',
            gap: '1rem'
          }}>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message here..."
              style={{
                flex: 1,
                background: '#222',
                border: '1px solid #333',
                color: '#fff',
                padding: '1rem',
                borderRadius: '8px',
                outline: 'none'
              }}
            />
            <button 
              onClick={handleSendMessage}
              style={{
                background: 'linear-gradient(135deg, #ff0033, #cc0029)',
                border: 'none',
                color: '#fff',
                padding: '1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Send size={20} />
            </button>
          </div>
        </div>

        {/* Product Catalog Sidebar */}
        <div style={{
          width: '300px',
          background: '#111',
          borderLeft: '1px solid #333',
          padding: '1rem',
          overflowY: 'auto'
        }}>
          <h3 style={{ 
            color: '#ff0033', 
            marginBottom: '1rem',
            textShadow: '0 0 10px #ff0033'
          }}>🛍️ Product Catalog</h3>
          
          {products.map(product => (
            <div key={product.id} style={{
              background: '#222',
              border: '1px solid #333',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1rem'
            }}>
              <div style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '0.5rem' }}>
                {product.image}
              </div>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#fff' }}>{product.name}</h4>
              <p style={{ margin: '0 0 1rem 0', color: '#ff0033', fontSize: '1.2rem', fontWeight: 'bold' }}>
                ${product.price.toLocaleString()}
              </p>
              <button
                onClick={() => addToCart(product)}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #ff0033, #cc0029)',
                  border: 'none',
                  color: '#fff',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                <Package size={16} />
                Add to Cart
              </button>
            </div>
          ))}

          {showCart && (
            <div style={{
              position: 'fixed',
              top: '80px',
              right: '20px',
              width: '300px',
              background: '#111',
              border: '2px solid #ff0033',
              borderRadius: '8px',
              padding: '1rem',
              zIndex: 1000,
              boxShadow: '0 0 30px rgba(255, 0, 51, 0.5)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ color: '#ff0033', margin: 0 }}>Shopping Cart ({cart.length})</h3>
                <button 
                  onClick={() => setShowCart(false)}
                  style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
                >
                  <X size={20} />
                </button>
              </div>
              
              {cart.length === 0 ? (
                <p style={{ color: '#999' }}>Cart is empty</p>
              ) : (
                <>
                  {cart.map((item, index) => (
                    <div key={index} style={{
                      padding: '0.5rem',
                      borderBottom: '1px solid #333',
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}>
                      <span>{item.name}</span>
                      <span>${item.price}</span>
                    </div>
                  ))}
                  <div style={{
                    marginTop: '1rem',
                    padding: '1rem',
                    background: 'rgba(255, 0, 51, 0.1)',
                    borderRadius: '6px',
                    textAlign: 'center'
                  }}>
                    <p style={{ margin: '0 0 1rem 0', color: '#ff0033', fontWeight: 'bold' }}>
                      Total: ${cart.reduce((sum, item) => sum + item.price, 0).toLocaleString()}
                    </p>
                    <button style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, #ff0033, #cc0029)',
                      border: 'none',
                      color: '#fff',
                      padding: '1rem',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}>
                      <CreditCard size={16} />
                      Checkout with S.P.E.A.R.™
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Powered by footer */}
      <div style={{
        position: 'fixed',
        bottom: '10px',
        right: '10px',
        background: 'rgba(0, 0, 0, 0.8)',
        color: '#ff0033',
        padding: '0.5rem 1rem',
        borderRadius: '20px',
        fontSize: '0.8rem',
        border: '1px solid rgba(255, 0, 51, 0.3)',
        textShadow: '0 0 10px #ff0033'
      }}>
        Powered by S.P.E.A.R.™ Protocol
      </div>
    </div>
  );
};

export default Demo;
