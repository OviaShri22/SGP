import React, { useState } from 'react';

const DonorForm = () => {
  const [foodItem, setFoodItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [recipient, setRecipient] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission and send data to backend
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="foodItem">
          Food Item
        </label>
        <input
          type="text"
          id="foodItem"
          placeholder="Food Item"
          value={foodItem}
          onChange={(e) => setFoodItem(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recipient">
          Recipient
        </label>
        <input
          type="text"
          id="recipient"
          placeholder="Recipient"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Donate
      </button>
    </form>
  );
};

export default DonorForm;
