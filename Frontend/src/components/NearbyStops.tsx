import React from 'react';
import { MapPin } from 'lucide-react';

const NearbyStops: React.FC = () => {
  const stops = [
    { id: 1, name: 'Virat Cinema', distance: '200m' },
    { id: 2, name: 'Nala Road', distance: '450m' },
    { id: 3, name: 'Kashmiri Gate', distance: '700m' },
  ];

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Nearby Stops</h2>
      <div className="space-y-3">
        {stops.map((stop) => (
          <div key={stop.id} className="flex items-center bg-gray-100 p-3 rounded-lg">
            <MapPin className="mr-3 text-blue-500" size={20} />
            <div>
              <h3 className="font-medium">{stop.name}</h3>
              <p className="text-sm text-gray-600">{stop.distance}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearbyStops;