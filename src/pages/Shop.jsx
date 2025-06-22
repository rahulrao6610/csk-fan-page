import React from 'react';

const products = [
  { name: "CSK Cap", price: "₹499", image: "/shop/cap.jpg" },
  { name: "T-Shirt", price: "₹799", image: "/shop/tshirt.jpg" },
  { name: "Mug", price: "₹299", image: "/shop/cup.jpg" },
];

export default function Shop() {
  return (
    <div className="text-center px-4">
      <h2 className="text-3xl font-bold text-yellow-500 mb-6">Fan Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md">
            <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-green-600 mt-2">{item.price}</p>
              <button className="mt-4 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 rounded">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
