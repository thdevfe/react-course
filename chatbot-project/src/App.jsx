import { useState } from 'react';

import './App.css'
import { ChatInput } from './components/ChatInput';
import { ChatMessages } from './components/ChatMessages';

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: 'Hello chatbox',
      sender: 'user',
      id: 'id1',
    }, {
      message: 'Hello, How can I help you?',
      sender: 'robot',
      id: 'id2',
    },
    {
      message: 'Can you get me todays date?',
      sender: 'user',
      id: 'id3',
    }, {
      message: 'Today is November 17',
      sender: 'robot',
      id: 'id4',
    }
  ])

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages}></ChatMessages>
      <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages}></ChatInput>
    </div>
  )
}

export default App
