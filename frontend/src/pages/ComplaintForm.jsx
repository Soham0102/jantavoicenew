import React, { useState } from "react";
import axios from "axios";

export default function ComplaintForm() {
  const [formData, setFormData] = useState({
    name: "",
    complaint: "",
    location: "",
    urgency: "normal"
  });

  const [complaintId, setComplaintId] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Updated the URL to the new one you provided
      const res = await axios.post("http://localhost:5000/api/complaint", formData);
      setComplaintId(res.data.complaintId);  // assuming backend returns complaintId
      setSubmitted(true);
    } catch (err) {
      console.error("Submission failed:", err.message);
      alert("Complaint submission failed. Try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Complaint Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          name="complaint"
          onChange={handleChange}
          placeholder="Describe your complaint"
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          name="location"
          onChange={handleChange}
          placeholder="Location"
          required
          className="w-full border px-3 py-2 rounded"
        />
        <select
          name="urgency"
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="normal">Normal</option>
          <option value="urgent">Urgent</option>
        </select>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>

      {submitted && (
        <div className="mt-6 text-green-700 font-semibold">
          Complaint submitted successfully!<br />
          Your Complaint ID: <span className="font-bold">{complaintId}</span>
        </div>
      )}
    </div>
  );
}
