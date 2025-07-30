import React from "react";

const policies = [
  {
    title: "National Education Policy 2020",
    description: "Reforms education structure, focuses on holistic learning and flexibility.",
    image: "/images/policy1.jpg",
  },
  {
    title: "Digital India Policy",
    description: "Transform India into a digitally empowered society and knowledge economy.",
    image: "/images/policy2.jpg",
  },
  {
    title: "National Health Policy",
    description: "Aims to provide universal access to quality healthcare services.",
    image: "/images/policy3.jpg",
  },
];

export default function Policies() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-10">Public Policies</h1>
      <div className="grid gap-8 md:grid-cols-3">
        {policies.map((policy, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            <img src={policy.image} alt={policy.title} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-purple-800 mb-2">{policy.title}</h2>
              <p className="text-gray-600 text-sm">{policy.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
