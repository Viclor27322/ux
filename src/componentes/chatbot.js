// Chatbot.js
import React, { useState } from 'react';
import Message from './mensaje';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleUserMessage = (message) => {
    const reply = getChatbotReply(message);
    setMessages([...messages, { text: message, sender: 'user' }, { text: reply, sender: 'chatbot' }]);
  };

  const getChatbotReply = (userMessage) => {
    if (userMessage.toLowerCase().includes('hola')) {
      return '¡Hola! ¿En qué puedo ayudarte?';
    } else if (userMessage.toLowerCase().includes('adiós')) {
      return 'Hasta luego. ¡Que tengas un buen día!';
    }else if (userMessage.toLowerCase().includes('gei')) {
        return 'En efecto carlos es el mas gei';
      }else {
      return 'Lo siento, no entendí. ¿Puedes ser más específico?';
    }
  };

  return (
    <div>
      <div className="position-fixed bottom-0 end-0 p-3">
        <button
          className={`btn btn-${isOpen ? 'secondary' : 'primary'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Cerrar Chat' : 'Abrir Chat'}
        </button>
      </div>
      {isOpen && (
        <div className="position-fixed bottom-0 end-0 p-3 mb-5" style={{ zIndex: '1000' }}>
          <div className="card" style={{ maxWidth: '300px' }}>
            <div className="card-header bg-primary text-white">
              <h5>Mi Chatbot</h5>
            </div>
            <div className="card-body" style={{ maxHeight: '300px', overflowY: 'auto' }}>
              <ul className="list-group">
                {messages.map((msg, index) => (
                  <Message
                    key={index}
                    sender={msg.sender}
                    text={msg.text}
                    style={{
                      textAlign: msg.sender === 'user' ? 'right' : 'left',
                      backgroundColor: msg.sender === 'user' ? '#d4edda' : '#f8f9fa',
                      border: msg.sender === 'user' ? '1px solid #c3e6cb' : '1px solid #ccc',
                      borderRadius: msg.sender === 'user' ? '10px 0 10px 10px' : '0 10px 10px 10px',
                      margin: '5px',
                      padding: '10px',
                      maxWidth: '80%',
                    }}
                  />
                ))}
              </ul>
            </div>
            <div className="card-footer">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Escribe un mensaje..."
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleUserMessage(e.target.value);
                      e.target.value = '';
                    }
                  }}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => handleUserMessage(document.querySelector('input').value)}
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
