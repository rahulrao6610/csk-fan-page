import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-yellow-500 text-black py-4 px-6 flex justify-between">
      <h1 className="font-bold text-xl">CSK Fan Page</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/players">Players</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}
