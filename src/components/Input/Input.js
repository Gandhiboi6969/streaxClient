import React from 'react';
import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form-fixed">
    <div className="input-div">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="sendButton" onClick={e => sendMessage(e)}><i className="mail-icon fas fa fa-paper-plane"></i></button>
    </div>
  </form>
)

export default Input;