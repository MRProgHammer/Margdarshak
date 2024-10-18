import React from 'react';
import { Send } from 'lucide-react';

interface InputAreaProps {
  input: string;
  setInput: (input: string) => void;
  handleSendMessage: () => void;
}

const InputArea: React.FC<InputAreaProps> = ({ input, setInput, handleSendMessage }) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md flex items-center p-2">
      <textarea
        className="flex-grow resize-none outline-none"
        rows={1}
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button
        className="ml-2 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-colors"
        onClick={handleSendMessage}
      >
        <Send className="h-5 w-5" />
      </button>
     </div>
  );
};

export default InputArea;