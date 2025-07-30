// // src/pages/UserOptions.jsx

// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function UserOptions() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center px-4 py-12">
//       <div className="bg-white shadow-lg rounded-2xl w-full max-w-5xl p-10">
//         <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
//           Choose Your Complaint Option
//         </h2>

//         <div className="flex flex-col md:flex-row gap-8 w-full">
//           {/* Voice Complaint */}
//           <div
//             onClick={() => navigate("/voice")}
//             className="flex-1 bg-white border border-indigo-300 shadow-md p-6 rounded-xl text-center cursor-pointer hover:shadow-xl transition"
//           >
//             <h2 className="text-xl font-semibold text-indigo-600 mb-2">🎤 Voice Complaint</h2>
//             <p className="text-sm text-gray-600">
//               Speak your complaint in your language <br />
//               (बोलकर शिकायत दर्ज करें | आवाज़ेने तक्रार)
//             </p>
//           </div>

//           {/* Written Complaint */}
//           <div
//             onClick={() => navigate("/complaint")}
//             className="flex-1 bg-white border border-green-300 shadow-md p-6 rounded-xl text-center cursor-pointer hover:shadow-xl transition"
//           >
//             <h2 className="text-xl font-semibold text-green-600 mb-2">📝 Written Complaint</h2>
//             <p className="text-sm text-gray-600">
//               Fill out a form and register complaint <br />
//               (लिखित शिकायत करें | लेखी तक्रार)
//             </p>
//           </div>

//           {/* Track Complaint */}
//           <div
//             onClick={() => navigate("/trackstatus")}
//             className="flex-1 bg-white border border-yellow-300 shadow-md p-6 rounded-xl text-center cursor-pointer hover:shadow-xl transition"
//           >
//             <h2 className="text-xl font-semibold text-yellow-600 mb-2">🔍 Track Complaint</h2>
//             <p className="text-sm text-gray-600">
//               Check current status of complaint <br />
//               (शिकायत की स्थिति देखें | तक्रारी स्थिति)
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// src/pages/UserOptions.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserOptions() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl w-full max-w-6xl p-12 border border-white/20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Choose Your Complaint Option
          </h1>
          <p className="text-gray-600 text-lg">Select the most convenient way to register your complaint</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Voice Complaint */}
          <div
            onClick={() => navigate("/voice")}
            className="group relative bg-gradient-to-br from-white to-indigo-50/50 border-2 border-indigo-200/50 shadow-lg hover:shadow-2xl p-8 rounded-2xl text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:border-indigo-300 overflow-hidden"
          >
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/0 via-indigo-400/5 to-indigo-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                🎤
              </div>
              <h2 className="text-2xl font-bold text-indigo-700 mb-4 group-hover:text-indigo-800 transition-colors">
                Voice Complaint
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Speak your complaint in your language<br />
                <span className="text-sm font-medium text-indigo-600 mt-2 block">
                  बोलकर शिकायत दर्ज करें | आवाज़ेने तक्रार
                </span>
              </p>
              <div className="mt-6 inline-flex items-center text-indigo-600 font-medium group-hover:text-indigo-700 transition-colors">
                Get Started
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Written Complaint */}
          <div
            onClick={() => navigate("/complaint")}
            className="group relative bg-gradient-to-br from-white to-green-50/50 border-2 border-green-200/50 shadow-lg hover:shadow-2xl p-8 rounded-2xl text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:border-green-300 overflow-hidden"
          >
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/5 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                📝
              </div>
              <h2 className="text-2xl font-bold text-green-700 mb-4 group-hover:text-green-800 transition-colors">
                Written Complaint
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Fill out a form and register complaint<br />
                <span className="text-sm font-medium text-green-600 mt-2 block">
                  लिखित शिकायत करें | लेखी तक्रार
                </span>
              </p>
              <div className="mt-6 inline-flex items-center text-green-600 font-medium group-hover:text-green-700 transition-colors">
                Get Started
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Track Complaint */}
          <div
            onClick={() => navigate("/trackstatus")}
            className="group relative bg-gradient-to-br from-white to-amber-50/50 border-2 border-amber-200/50 shadow-lg hover:shadow-2xl p-8 rounded-2xl text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:border-amber-300 overflow-hidden"
          >
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/5 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                🔍
              </div>
              <h2 className="text-2xl font-bold text-amber-700 mb-4 group-hover:text-amber-800 transition-colors">
                Track Complaint
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Check current status of complaint<br />
                <span className="text-sm font-medium text-amber-600 mt-2 block">
                  शिकायत की स्थिति देखें | तक्रारी स्थिति
                </span>
              </p>
              <div className="mt-6 inline-flex items-center text-amber-600 font-medium group-hover:text-amber-700 transition-colors">
                Get Started
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Footer help text */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Need help? Our support team is available 24/7 to assist you with your complaint process.
          </p>
        </div>
      </div>
    </div>
  );
}