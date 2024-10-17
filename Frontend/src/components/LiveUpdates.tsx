import React from 'react';
import { Clock } from 'lucide-react';

const LiveUpdates: React.FC = () => {
  const updates = [
    { id: 1, line: 'Bus 405 ', status: 'On time', time: '3 min' },
    { id: 2, line: 'Violet Line', status: 'Delayed', time: '7 min' },
    { id: 3, line: 'Bus 419', status: 'On time', time: '12 min' },
  ];

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Live Updates</h2>
      <div className="space-y-3">
        {updates.map((update) => (
          <div key={update.id} className="flex items-center justify-between bg-gray-100 p-3 rounded-lg">
            <div className="flex items-center">
              <Clock className="mr-3 text-green-500" size={20} />
              <div>
                <h3 className="font-medium">{update.line}</h3>
                <p className="text-sm text-gray-600">{update.status}</p>
              </div>
            </div>
            <span className="font-bold">{update.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveUpdates;