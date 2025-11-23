import { useEffect, useRef } from 'react';

import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';

export function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
  }, [chatMessages])

  return (
    <div
      className="chat-messages-container"
      ref={chatMessagesRef}>
      {
        chatMessages.map((chatMessage) => {
          return (
            <ChatMessage
              message={chatMessage.message}
              sender={chatMessage.sender}
              key={chatMessage.id}>
            </ChatMessage>
          )
        })
      }
    </div>
  )
}
