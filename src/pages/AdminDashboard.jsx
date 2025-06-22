import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="px-4 py-6">
      <h2 className="text-3xl font-bold text-center text-yellow-500 mb-6">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Total Visitors</h3>
          <p className="text-2xl font-bold text-blue-600">5,243</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Orders</h3>
          <p className="text-2xl font-bold text-green-600">812</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Feedbacks</h3>
          <p className="text-2xl font-bold text-red-600">96</p>
        </div>
      </div>
    </div>
  );
}
