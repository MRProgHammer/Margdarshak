import React from 'react';
import { Home, Search, MapPin, Ticket, Menu } from 'lucide-react';
import TicketComponent from './TicketComponent';
import SearchBar from './SearchBar';


const Footer: React.FC = () => {
 
  return (
    <footer className="bg-white border-t fixed bottom-0 left-0 right-0">
      <div className="container mx-auto flex justify-around py-2">
        <button className="flex flex-col items-center text-blue-600">
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button onClick={()=><SearchBar/>} className="flex flex-col items-center text-gray-600">
          <Search size={24} />
          <span className="text-xs mt-1">Search</span>
        </button>
        <button onClick={()=>alert("chutad")} className="flex flex-col items-center text-gray-600">
          <MapPin size={24} />
          <span className="text-xs mt-1">Nearby</span>
        </button>
        <button onClick={()=>(<TicketComponent/>)} className="flex flex-col items-center text-gray-600">
          <Ticket size={24} />
          <span  className="text-xs mt-1">Tickets</span>
        </button>
        <button  className="flex flex-col items-center text-gray-600">
          <Menu size={24} />
          <span className="text-xs mt-1">More</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;