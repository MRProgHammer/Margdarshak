import  { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MapComponent from './components/MapComponent';
import SearchBar from './components/SearchBar';
import NearbyStops from './components/NearbyStops';
import LiveUpdates from './components/LiveUpdates';
import TicketComponent from './components/TicketComponent';
import RouteComponent from './components/RouteComponent';
import ChatMessage from './components/ChatMessage';
import InputArea from './components/InputArea';
import { MessageSquare} from 'lucide-react';



interface Message {
  text: string;
  isUser: boolean;
}



function App() {

  const [activeTab, setActiveTab] = useState('plan');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput('');
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "I'm a chatbot. How can I assist you today?", isUser: false }]);
      }, 1000);
    }
  };

  return (
    
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      
      <main className="flex-grow flex flex-col md:flex-row pb-16">
        <div className="w-full md:w-1/3 bg-white p-4 overflow-y-auto">
          <SearchBar />
          <div className="mt-4 flex border-b">
            <button
              className={`flex-1 py-2 ${activeTab === 'plan' ? 'border-b-2 border-blue-500' : ''}`}
              onClick={() => setActiveTab('plan')}
            >
              Plan
            </button>
            <button
              className={`flex-1 py-2 ${activeTab === 'lines' ? 'border-b-2 border-blue-500' : ''}`}
              onClick={() => setActiveTab('lines')}
            >
              Lines
            </button>
            <button
              className={`flex-1 py-2 ${activeTab === 'tickets' ? 'border-b-2 border-blue-500' : ''}`}
              onClick={() => setActiveTab('tickets')}
            >
              Tickets
            </button>
          </div>
          {activeTab === 'plan' && (
            <>
              <NearbyStops />
              <LiveUpdates />
            </>
          )}
          {activeTab === 'lines' && (
            <div className="mt-4">
              <h2 className="text-lg font-semibold mb-2">All Routes</h2>
              <RouteComponent />
            </div>
          )}
          {activeTab === 'tickets' && (
            <div className="mt-4">
              <h2 className="text-lg font-semibold mb-2">Book a Ticket</h2>
              <TicketComponent />
            </div>
          )}
        </div>
        <div className="w-full md:w-2/3 h-[calc(100vh-4rem-4rem)]">
          <MapComponent />
        </div>
        <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center">
          <MessageSquare className="h-8 w-8 text-blue-500 mr-2" />
          <h1 className="text-2xl font-bold text-gray-900">Chat With Us</h1>
        </div>
      </header>
      <main className="flex-grow flex flex-col max-w-7xl w-full mx-auto px-4  sm:px-6 lg:px-8 py-8">
        <div className="flex-grow overflow-y-auto mb-2 space-y-4">
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message.text} isUser={message.isUser} />
          ))}
        </div>
        <InputArea
          input={input}
          setInput={setInput}
          handleSendMessage={handleSendMessage}
        />
      </main>
    </div>
      </main>
      <Footer />
      
    </div>
   
  );
}

export default App;