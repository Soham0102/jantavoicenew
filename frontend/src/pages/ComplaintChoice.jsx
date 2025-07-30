// src/pages/ComplaintChoice.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const ComplaintChoice = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-blue-50 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-700">
        Register Your Complaint <br />
        <span className="text-base text-gray-600 font-normal">
          (शिकायत दर्ज करें | तक्रार नोंदवा)
        </span>
      </h1>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-3xl">
        {/* Voice Complaint */}
        <div
          onClick={() => navigate("/voice")}
          className="flex-1 bg-white border border-blue-300 shadow-md p-6 rounded-xl text-center cursor-pointer hover:shadow-xl transition"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-2">🎤 Voice Complaint</h2>
          <p className="text-sm text-gray-600">
            Speak your complaint in your language <br />
            (बोलकर शिकायत दर्ज करें | आवाज़ेने तक्रार)
          </p>
        </div>

        {/* Written Complaint */}
        <div
          onClick={() => navigate("/complaint")}
          className="flex-1 bg-white border border-blue-300 shadow-md p-6 rounded-xl text-center cursor-pointer hover:shadow-xl transition"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-2">📝 Written Complaint</h2>
          <p className="text-sm text-gray-600">
            Type your issue in Hindi, Marathi or English <br />
            (शिकायत लिखें | तक्रार लिहा)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComplaintChoice;
