import React , { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MapComponent from './components/MapComponent';
import SearchBar from './components/SearchBar';
import NearbyStops from './components/NearbyStops';
import LiveUpdates from './components/LiveUpdates';
import TicketComponent from './components/TicketComponent';
import RouteComponent from './components/RouteComponent';

function App() {
  const [activeTab, setActiveTab] = useState('plan');

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
      </main>
      <Footer />
    </div>
  );
}

export default App;