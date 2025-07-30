import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [complaints, setComplaints] = useState([]);

  const fetchComplaints = async () => {
    try {
      const res = await axios.get("/api/admin/complaints");
      if (res.data.success) {
        setComplaints(res.data.complaints);
      } else {
        console.error(res.data.message);
      }
    } catch (err) {
      console.error("Error fetching complaints:", err);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await axios.post("/api/admin/update_status", {
        id,
        status: newStatus,
      });
      if (res.data.success) {
        setComplaints(prev =>
          prev.map(c => (c.id === id ? { ...c, status: newStatus } : c))
        );
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  const getStatusColor = status => {
    switch (status) {
      case "Resolved":
        return "bg-green-100 text-green-700";
      case "Processing":
        return "bg-yellow-100 text-yellow-700";
      case "Pending":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // Summary counts
  const total = complaints.length;
  const pending = complaints.filter(c => c.status === "Pending").length;
  const resolved = complaints.filter(c => c.status === "Resolved").length;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">
        Admin Complaint Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-blue-600 text-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-medium">Total Complaints</h2>
          <p className="text-3xl font-bold mt-2">{total}</p>
        </div>
        <div className="bg-red-500 text-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-medium">Pending Complaints</h2>
          <p className="text-3xl font-bold mt-2">{pending}</p>
        </div>
        <div className="bg-green-600 text-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-medium">Resolved Complaints</h2>
          <p className="text-3xl font-bold mt-2">{resolved}</p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-md rounded-xl bg-white">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-blue-600 text-white sticky top-0">
            <tr>
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Location</th>
              <th className="px-6 py-3 text-left">Department</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Token</th>
              <th className="px-6 py-3 text-left">Timestamp</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {complaints.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  No complaints found.
                </td>
              </tr>
            ) : (
              complaints.map(c => (
                <tr
                  key={c.id}
                  className="hover:bg-gray-50 transition duration-200"
                >
                  <td className="px-6 py-4 font-medium text-gray-800">{c.id}</td>
                  <td className="px-6 py-4">{c.name}</td>
                  <td className="px-6 py-4">{c.location}</td>
                  <td className="px-6 py-4">{c.department || "Unknown"}</td>
                  <td className="px-6 py-4">
                    <select
                      value={c.status}
                      onChange={e => handleStatusChange(c.id, e.target.value)}
                      className={`px-2 py-1 rounded-full font-medium ${getStatusColor(
                        c.status
                      )}`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 text-xs text-gray-500">{c.token}</td>
                  <td className="px-6 py-4 text-gray-500">
                    {new Date(c.timestamp).toLocaleString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
