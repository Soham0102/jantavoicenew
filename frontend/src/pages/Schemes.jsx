import React from "react";
import Navbar from "../components/Navbar";

const schemes = [
  {
    title: "Pradhan Mantri Awas Yojana",
    description: "Affordable housing for all by 2022. Focuses on urban and rural housing needs.",
    image: "/images/scheme1.jpg",
  },
  {
    title: "Swachh Bharat Abhiyan",
    description: "Nationwide cleanliness campaign to improve sanitation and hygiene.",
    image: "/images/scheme2.jpg",
  },
  {
    title: "Ayushman Bharat",
    description: "Health insurance scheme providing financial protection for medical care.",
    image: "/images/scheme3.jpg",
  },
];

export default function Schemes() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="py-10 px-6">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-10">Government Schemes</h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {schemes.map((scheme, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={scheme.image}
                alt={scheme.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-blue-800 mb-2">{scheme.title}</h2>
                <p className="text-gray-600 text-sm">{scheme.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
