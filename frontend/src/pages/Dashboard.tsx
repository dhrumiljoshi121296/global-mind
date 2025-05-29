import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Mission Control</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-lg shadow-md">
  <h2 className="text-xl font-semibold mb-4">Active Challenges</h2>
  <ul>
    <li className="mb-2">Challenge 1: Save the Great Barrier Reef</li>
    <li className="mb-2">Challenge 2: Reduce Plastic Pollution</li>
    <li className="mb-2">Challenge 3: Protect Coral Reefs</li>
  </ul>
</div>
<div className="bg-white p-6 rounded-lg shadow-md">
  <h2 className="text-xl font-semibold mb-4">Live Activity Feed</h2>
  <ul>
    <li className="mb-2">Team A has joined the Great Barrier Reef challenge</li>
    <li className="mb-2">Team B has submitted a new solution for the Plastic Pollution challenge</li>
    <li className="mb-2">Team C has completed the Coral Reefs challenge</li>
  </ul>
</div>
<div className="bg-white p-6 rounded-lg shadow-md">
  <h2 className="text-xl font-semibold mb-4">Global Impact</h2>
  <p>Total Challenges Completed: 15</p>
  <p>Total Teams Participating: 10</p>
  <p>Total Impact: 500,000 people helped</p>
</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
