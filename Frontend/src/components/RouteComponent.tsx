import React from 'react';

const RouteComponent: React.FC = () => {
  const routes = [
    { id: 1, name: 'Route A', stations: ['Station 1', 'Station 2', 'Station 3'] },
    { id: 2, name: 'Route B', stations: ['Station 4', 'Station 5', 'Station 6'] },
    { id: 3, name: 'Route C', stations: ['Station 7', 'Station 8', 'Station 9'] },
  ];

  return (
    <div className="space-y-4">
      {routes.map((route) => (
        <div key={route.id} className="bg-gray-100 p-4 rounded">
          <h3 className="font-semibold">{route.name}</h3>
          <p className="text-sm text-gray-600">{route.stations.join(' → ')}</p>
        </div>
      ))}
    </div>
  );
};

export default RouteComponent;