import React from 'react';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex items-start space-x-2 max-w-3xl ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
        <div className={`rounded-full p-2 ${isUser ? 'bg-blue-500' : 'bg-gray-300'}`}>
          {isUser ? <User className="h-6 w-6 text-white" /> : <Bot className="h-6 w-6 text-gray-600" />}
        </div>
        <div className={`rounded-lg px-4 py-2 ${isUser ? 'bg-blue-100 text-blue-900' : 'bg-white text-gray-900'}`}>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;