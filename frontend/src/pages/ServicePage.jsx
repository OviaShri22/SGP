import React, { useState } from 'react';
import DonationList from '../components/DonationList';
import RequestList from '../components/RequestList';

const ServicePage = () => {
  const [activeTab, setActiveTab] = useState('donations');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8">Service Page</h1>
      <div className="flex justify-center mb-8">
        <button
          className={`px-4 py-2 mr-2 font-semibold ${
            activeTab === 'donations' ? 'bg-green-500 text-white' : 'bg-gray-200'
          } rounded`}
          onClick={() => setActiveTab('donations')}
        >
          Donations
        </button>
        <button
          className={`px-4 py-2 ml-2 font-semibold ${
            activeTab === 'requests' ? 'bg-green-500 text-white' : 'bg-gray-200'
          } rounded`}
          onClick={() => setActiveTab('requests')}
        >
          Requests
        </button>
      </div>
      <div className="bg-white shadow-md rounded p-4">
        {activeTab === 'donations' ? <DonationList /> : <RequestList />}
      </div>
    </div>
  );
};

export default ServicePage;
