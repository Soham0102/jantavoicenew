// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: "url('/images/banner.jpg')" }}
    >
      {/* Clean dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-300/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-1/4 w-2 h-2 bg-blue-200/20 rounded-full animate-ping"></div>
      </div>

      {/* Top navigation bar */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">JV</span>
            </div>
            <h1 className="text-white text-3xl font-bold">
              Janta Voice
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-white/80 text-sm">
            <span className="hover:text-white transition-colors cursor-pointer">About</span>
            <span className="hover:text-white transition-colors cursor-pointer">Contact</span>
            <span className="hover:text-white transition-colors cursor-pointer">Help</span>
          </div>
        </div>
      </nav>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <div className="mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Welcome to the
              <br />
              <span className="text-blue-400">Voice of the People</span>
            </h2>
            
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl text-gray-200 max-w-2xl mb-12 leading-relaxed">
            Raise your voice, file your complaints, and bring the change you want to see.
            <br />
            <span className="text-gray-300 text-lg">Your voice matters. Your complaints drive action.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => navigate('/user-login')}
              className="group bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-xl text-xl font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[200px]"
            >
              <span className="flex items-center justify-center">
                User Login
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>

            <button
              onClick={() => navigate('/admin-login')}
              className="group bg-green-600 hover:bg-green-700 px-10 py-4 rounded-xl text-xl font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[200px]"
            >
              <span className="flex items-center justify-center">
                Admin Login
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
            </button>
          </div>

          {/* Feature highlights */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎤</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Voice Complaints</h3>
              <p className="text-gray-300 text-sm">Speak in your language</p>
            </div>

            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Quick Resolution</h3>
              <p className="text-gray-300 text-sm">Fast-track your issues</p>
            </div>

            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Real-time Tracking</h3>
              <p className="text-gray-300 text-sm">Monitor complaint status</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 text-white/5" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Home;