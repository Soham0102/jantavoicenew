// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/banner.jpg')" }}
    >
      {/* Top-left logo */}
      <div className="absolute top-4 left-6">
        <h1 className="text-white text-4xl font-extrabold drop-shadow-md tracking-wide">Janta Voice</h1>
      </div>

      {/* Center content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
        <h2 className="text-5xl font-bold mb-4">Welcome to the Voice of the People</h2>
        <p className="text-lg max-w-xl mb-8">
          Raise your voice, file your complaints, and bring the change.
        </p>
        <div className="flex gap-6">
          <button
            onClick={() => navigate('/user-login')}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full text-lg font-semibold shadow-md transition"
          >
            User Login
          </button>
          <button
            onClick={() => navigate('/admin-login')}
            className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full text-lg font-semibold shadow-md transition"
          >
            Admin Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
