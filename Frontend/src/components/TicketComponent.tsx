import React, { useState } from 'react';

const TicketComponent: React.FC = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Ticket booked from ${from} to ${to}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="from" className="block mb-1">From:</label>
        <input
          type="text"
          id="from"
          value={from}
          placeholder='Aali Village'
          onChange={(e) => setFrom(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="to" className="block mb-1">To:</label>
        <input
          type="text"
          id="to"
          value={to}
          placeholder='Kashmiri Gate'
          onChange={(e) => setTo(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Book Ticket
      </button>
    </form>
  );
};

export default TicketComponent;