import React from 'react';

const CollaborationRoom: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Collaboration Room</h1>
<div className="bg-white p-6 rounded-lg shadow-md">
  <h2 className="text-xl font-semibold mb-4">Real-time Collaboration</h2>
  <ul>
    <li className="mb-2">Team A: Working on the Great Barrier Reef challenge</li>
    <li className="mb-2">Team B: Discussing solutions for the Plastic Pollution challenge</li>
    <li className="mb-2">Team C: Finalizing the Coral Reefs challenge</li>
  </ul>
</div>
      </div>
    </div>
  );
};

export default CollaborationRoom;
