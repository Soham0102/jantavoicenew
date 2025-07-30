// import React, { useState } from "react";
// import axios from "axios";

// export default function VoiceComplaint() {
//   const [logs, setLogs] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [complaintId, setComplaintId] = useState(null);
//   const [submitted, setSubmitted] = useState(false);

//   const appendLog = (line) => {
//     setLogs((prev) => [...prev, line]);
//   };

//   const handleVoiceComplaint = async () => {
//     setLoading(true);
//     setLogs(["🎙️ Voice complaint started..."]);
//     setSubmitted(false);
//     setComplaintId(null);

//     try {
//       // 1. Trigger the Python voice bot and get structured data
//       const voiceRes = await axios.get("http://localhost:5000/api/voice-complaint");
//       if (voiceRes.data.status !== "success") {
//         appendLog("❌ Voice bot error: " + voiceRes.data.message);
//         return;
//       }

//       const complaintData = voiceRes.data.data;
//       appendLog("✅ Voice bot finished. Data:");
//       appendLog(JSON.stringify(complaintData, null, 2));

//       // 2. Send that same data to the complaints endpoint
//       const formRes = await axios.post(
//         "http://localhost:5000/api/complaint",
//         {
//           name: complaintData["शिकायतकर्ता का नाम"] || complaintData.name,
//           complaint: complaintData["शिकायत"] || complaintData.complaint,
//           location: complaintData["स्थान"] || complaintData.location,
//           // map any other fields if needed
//         }
//       );

//       // 3. Capture and display the Complaint ID
//       const newId = formRes.data.complaintId || formRes.data.complaintId;
//       setComplaintId(newId);
//       setSubmitted(true);
//       appendLog(`📬 Complaint submitted. ID: ${newId}`);
//     } catch (err) {
//       appendLog("❌ Error: " + err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
//       <h2 className="text-2xl font-semibold mb-4">Voice Complaint</h2>
//       <button
//         onClick={handleVoiceComplaint}
//         disabled={loading}
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
//       >
//         {loading ? "Processing..." : "Start Voice Complaint"}
//       </button>

//       <div className="mt-6 bg-gray-900 text-green-200 p-4 rounded font-mono h-48 overflow-y-scroll">
//         {logs.map((line, i) => (
//           <div key={i}>{line}</div>
//         ))}
//       </div>

//       {submitted && (
//         <div className="mt-6 text-green-700 font-semibold">
//           Complaint submitted successfully!<br />
//           Your Complaint ID: <span className="font-bold">{complaintId}</span>
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useState } from "react";
import axios from "axios";

export default function VoiceComplaint() {
  // 1. State mirrors ComplaintForm
  const [formData, setFormData] = useState({
    name: "",
    complaint: "",
    location: "",
    urgency: "normal",
  });

  const [complaintId, setComplaintId] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  // helper to append to console‑style logs
  const appendLog = (line) => setLogs((prev) => [...prev, line]);

  const handleVoiceComplaint = async () => {
    setLoading(true);
    setLogs(["🎙️ Starting voice complaint..."]);
    setSubmitted(false);
    setComplaintId(null);

    try {
      // 2. Trigger your backend voice route
      const voiceRes = await axios.get("http://localhost:5000/api/voice-complaint");
      if (voiceRes.data.status !== "success") {
        appendLog("Thank You!");
        return;
      }

      // 3. Pull out structured data
      const data = voiceRes.data.data;
      appendLog("✅ Voice data received:");
      appendLog(JSON.stringify(data, null, 2));


      // // 4. Map it into the exact same formData shape
      // const mapped = {
      //   name: data["शिकायतकर्ता का नाम"] || "",
      //   location: data["स्थान"] || "",
      //   department: data["विभाग"] || "",
      //   description: data["शिकायत"] || "",
      //   urgency: "normal",
      // };

      const aiData = voiceRes.data.data;

      const payload = {
        name: aiData["शिकायतकर्ता का नाम"] || "",
        location: aiData["स्थान"] || "",
        department: aiData["विभाग"] || "",
        description: aiData["शिकायत"] || "",
      };

      await axios.post("http://localhost:5000/api/complaint", payload);


      setFormData(mapped);

      // 5. POST to the same endpoint as ComplaintForm
      const res = await axios.post("http://localhost:5000/api/complaint", mapped);
      setComplaintId(res.data.complaintId);
      setSubmitted(true);
      appendLog(`📬 Complaint submitted. ID: ${res.data.complaintId}`);
    } catch (err) {
      appendLog("❌ Submission error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Voice Complaint</h2>

      {/* Start button */}
      <button
        onClick={handleVoiceComplaint}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Processing..." : "Start Voice Complaint"}
      </button>

      {/* Console logs */}
      <div className="mt-4 bg-gray-900 text-green-200 p-4 rounded font-mono h-48 overflow-y-scroll">
        {logs.length === 0 ? <div>Logs will appear here...</div> : logs.map((l, i) => <div key={i}>{l}</div>)}
      </div>

      {/* Confirmation */}
      {submitted && (
        <div className="mt-6 text-green-700 font-semibold">
          Complaint submitted successfully!<br />
          Your Complaint ID: <span className="font-bold">{complaintId}</span>
        </div>
      )}
    </div>
  );
}
