import React from 'react';

const matches = [
  { opponent: "MI", date: "2025-04-02", venue: "Chennai" },
  { opponent: "RCB", date: "2025-04-06", venue: "Bengaluru" },
  { opponent: "GT", date: "2025-04-10", venue: "Ahmedabad" },
];

export default function Schedule() {
  return (
    <div className="px-4">
      <h2 className="text-3xl font-bold text-center text-yellow-500 mb-6">Match Schedule</h2>
      <table className="min-w-full bg-white shadow-md rounded-md">
        <thead>
          <tr className="bg-yellow-300 text-black">
            <th className="py-2 px-4">Opponent</th>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Venue</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match, idx) => (
            <tr key={idx} className="text-center border-t">
              <td className="py-2 px-4">{match.opponent}</td>
              <td className="py-2 px-4">{match.date}</td>
              <td className="py-2 px-4">{match.venue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
