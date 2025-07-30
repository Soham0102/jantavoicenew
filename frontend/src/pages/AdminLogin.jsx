import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // clear error before new request
    try {
      const res = await axios.post(
        "http://localhost:5000/api/admin/login",
        { username, password },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.success) {
        localStorage.setItem("isAdmin", "true");
        navigate("/admin"); // proper React routing
      } else {
        setError(res.data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      setError("Login failed. Server not responding.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Admin Login</h2>
      <form onSubmit={handleLogin} className="w-80 p-6 bg-white rounded shadow">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
