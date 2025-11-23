import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('')

  function saveInputText(event) {
    setInputText(event.target.value)
  }

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages, {
        id: crypto.randomUUID(),
        message: inputText,
        sender: 'user'
      }
    ]

    setChatMessages(newChatMessages)

    const res = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages, {
        id: crypto.randomUUID(),
        message: res,
        sender: 'robot'
      }
    ])

    setInputText('');
  }

  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        placeholder="Send a message to Chatbot"
        size="30"
        value={inputText}
        onChange={saveInputText} />
      <button className="send-button" onClick={sendMessage}>send</button>
    </div>
  )
}
