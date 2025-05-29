import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Global Mind
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/dashboard" className="text-gray-600 hover:text-blue-600">Dashboard</Link></li>
            <li><Link to="/profile" className="text-gray-600 hover:text-blue-600">Profile</Link></li>
            <li><Link to="/submit-problem" className="text-gray-600 hover:text-blue-600">Submit Problem</Link></li>
            <li><Link to="/matching" className="text-gray-600 hover:text-blue-600">Expert Matching</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
