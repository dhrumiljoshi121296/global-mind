import React from 'react';
import { useForm } from 'react-hook-form';

const ProblemSubmission: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

const onSubmit = async (data: any) => {
  try {
    const response = await fetch('/api/problems/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to submit problem');
    }

    const problem = await response.json();
    console.log('Problem submitted:', problem);

    // Call AI service to decompose problem
    const decompositionResponse = await fetch('/api/problems/decompose', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ problemId: problem._id }),
    });

    if (!decompositionResponse.ok) {
      throw new Error('Failed to decompose problem');
    }

    const decomposition = await decompositionResponse.json();
    console.log('Problem decomposed:', decomposition);

    // Call AI service to match experts
    const matchingResponse = await fetch('/api/experts/match', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ problemDomain: problem.domain }),
    });

    if (!matchingResponse.ok) {
      throw new Error('Failed to match experts');
    }

    const matchedExperts = await matchingResponse.json();
    console.log('Experts matched:', matchedExperts);

    // Form a team with matched experts
    const teamResponse = await fetch('/api/teams/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ problemId: problem._id, members: matchedExperts }),
    });

    if (!teamResponse.ok) {
      throw new Error('Failed to form team');
    }

    const team = await teamResponse.json();
    console.log('Team formed:', team);

    // Navigate to collaboration room
    window.location.href = `/collaborate/${team._id}`;
  } catch (error) {
    console.error('Error:', error);
  }
};

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Submit a Problem</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              {...register('title', { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Problem Title"
            />
            {errors.title && <span className="text-red-500 text-xs italic">Title is required</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              {...register('description', { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              placeholder="Problem Description"
            />
            {errors.description && <span className="text-red-500 text-xs italic">Description is required</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="urgency">
              Urgency
            </label>
            <select
              {...register('urgency', { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="urgency"
            >
              <option value="">Select Urgency</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            {errors.urgency && <span className="text-red-500 text-xs italic">Urgency is required</span>}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit Problem
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProblemSubmission;
