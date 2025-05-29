import React from 'react';

const ExpertMatching: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Expert Matching</h1>
<div className="bg-white p-6 rounded-lg shadow-md">
  <h2 className="text-xl font-semibold mb-4">Find Experts</h2>
  <ul>
    <li className="mb-2">Expert 1: Dr. Jane Doe - Marine Biologist</li>
    <li className="mb-2">Expert 2: John Smith - Oceanographer</li>
    <li className="mb-2">Expert 3: Dr. Emily Johnson - Environmental Scientist</li>
  </ul>
</div>
      </div>
    </div>
  );
};

export default ExpertMatching;
