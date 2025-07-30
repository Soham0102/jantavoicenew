// src/pages/UserOptions.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserOptions() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center px-4 py-12">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-5xl p-10">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Choose Your Complaint Option
        </h2>

        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* Voice Complaint */}
          <div
            onClick={() => navigate("/voice")}
            className="flex-1 bg-white border border-indigo-300 shadow-md p-6 rounded-xl text-center cursor-pointer hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">🎤 Voice Complaint</h2>
            <p className="text-sm text-gray-600">
              Speak your complaint in your language <br />
              (बोलकर शिकायत दर्ज करें | आवाज़ेने तक्रार)
            </p>
          </div>

          {/* Written Complaint */}
          <div
            onClick={() => navigate("/complaint")}
            className="flex-1 bg-white border border-green-300 shadow-md p-6 rounded-xl text-center cursor-pointer hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-green-600 mb-2">📝 Written Complaint</h2>
            <p className="text-sm text-gray-600">
              Fill out a form and register complaint <br />
              (लिखित शिकायत करें | लेखी तक्रार)
            </p>
          </div>

          {/* Track Complaint */}
          <div
            onClick={() => navigate("/trackstatus")}
            className="flex-1 bg-white border border-yellow-300 shadow-md p-6 rounded-xl text-center cursor-pointer hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-yellow-600 mb-2">🔍 Track Complaint</h2>
            <p className="text-sm text-gray-600">
              Check current status of complaint <br />
              (शिकायत की स्थिति देखें | तक्रारी स्थिति)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
