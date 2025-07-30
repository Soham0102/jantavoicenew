// src/pages/VoiceComplaint.jsx
import React, { useState } from "react";
import axios from "axios";

export default function VoiceComplaint() {
  const [complaintId, setComplaintId] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [transcript, setTranscript] = useState("");

  const handleVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser does not support Speech Recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "hi-IN";
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;
      console.log("Transcript:", voiceText);
      setTranscript(voiceText);
    };

    recognition.onerror = (err) => {
      console.error("Speech recognition error:", err);
      alert("Mic error or something went wrong.");
    };

    recognition.start();
  };

  const handleSubmit = async () => {
    if (!transcript.trim()) {
      alert("Please record a complaint before submitting.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/voice-complaint", {
        voiceInput: transcript,
      });
      setComplaintId(res.data.complaintId || "N/A");
      setSubmitted(true);
      setTranscript("");
    } catch (err) {
      console.error("Voice Complaint Failed", err.message);
      alert("Submission failed. Try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700">🎙 Voice Complaint</h2>

      <div className="mb-4">
        <button
          onClick={handleVoiceInput}
          className="px-4 py-2 rounded bg-green-600 text-white hover:opacity-90"
        >
          Start Voice Input
        </button>

        <button
          onClick={() => setTranscript("")}
          className="ml-4 px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
        >
          Reset
        </button>
      </div>

      <div className="border p-3 min-h-[100px] rounded bg-gray-100 text-gray-800 mb-4">
        <p className="font-semibold">Recorded Complaint:</p>
        <p>{transcript || "..."}</p>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit Complaint
      </button>

      {submitted && (
        <div className="mt-6 text-green-700 font-semibold">
          Complaint Submitted!<br />
          Complaint ID: <span className="font-bold">{complaintId}</span>
        </div>
      )}
    </div>
  );
}
