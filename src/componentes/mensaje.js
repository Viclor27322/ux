// Message.js
import React from 'react';

const Message = ({ sender, text, style }) => {
  return (
    <div className={`message ${sender}`} style={style}>
      <div className="message-container">
        <p className="message-text">{text}</p>
      </div>
    </div>
  );
};

export default Message;
