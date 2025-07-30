import React from "react";

export default function Trackstatus() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Track Your Complaint
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Enter Complaint ID"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Track
          </button>
        </form>
      </div>
    </div>
  );
}
