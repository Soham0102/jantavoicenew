import React from "react";

const acts = [
  {
    title: "Right to Information Act",
    description: "Empowers citizens to request information from public authorities.",
    image: "/images/act1.jpg",
  },
  {
    title: "The Consumer Protection Act",
    description: "Protects consumers' rights and provides a dispute resolution mechanism.",
    image: "/images/act2.jpg",
  },
  {
    title: "The Environment Protection Act",
    description: "Framework for environmental safety and pollution control.",
    image: "/images/act3.jpg",
  },
];

export default function Acts() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-10">Important Acts</h1>
      <div className="grid gap-8 md:grid-cols-3">
        {acts.map((act, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            <img src={act.image} alt={act.title} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-green-800 mb-2">{act.title}</h2>
              <p className="text-gray-600 text-sm">{act.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
