import React from 'react';

const players = [
  { name: "MS Dhoni", image: "/players/dhoni.jpg" },
  { name: "Ruturaj Gaikwad", image: "/players/rutu.jpg" },
  { name: "Ravindra Jadeja", image: "/players/jaddu.jpg" },
];

export default function Players() {
  return (
    <div className="text-center px-4 py-8">
      <h2 className="text-3xl font-bold text-yellow-500 mb-6">CSK Players</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {players.map((player, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="h-64 w-full overflow-hidden">
              <img
                src={player.image}
                alt={player.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-gray-100">
              <h3 className="text-xl font-semibold text-gray-800">{player.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
