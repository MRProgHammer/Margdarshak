import React from 'react';
import { Menu, MapPin, Bell, User } from 'lucide-react';



const Header: React.FC = () => {
  return (
    <header className="bg-white text-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Menu className="mr-4" size={24} />
          <h1 className="text-2xl font-bold text-blue-600"> Marg </h1>
          <h1 className='text-2xl font-bold text-black-600'>दर्शक</h1>
         
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><MapPin size={24} /></li>
            <li><Bell size={24} /></li>
            <a href='/SignUp' > 
              <User size={24}  />
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;