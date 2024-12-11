import React, { useState } from 'react';

const ContributionForm = () => {
  const [contributionType, setContributionType] = useState('one-time');
  const [amount, setAmount] = useState('');

  const handleTypeChange = (type) => {
    setContributionType(type);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleAmountClick = (value) => {
    setAmount(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ contributionType, amount });
  };

  const oneTimeAmounts = [15, 25, 45, 100, 250, 500];
  const monthlyAmounts = [15, 25, 45, 100, 250, 500];

  return (
    <div className="p-8 bg-white shadow-xl hover:shadow-slate-700 rounded-lg">
      <div className="text-center text-xl font-bold mb-4">Take Action</div>
      <div className="flex justify-center mb-4">
        <button
          type="button"
          className={`px-4 py-2 rounded-md mx-2 ${contributionType === 'one-time' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleTypeChange('one-time')}
        >
          One Time Only
        </button>
        <button
          type="button"
          className={`px-4 py-2 rounded-md mx-2 ${contributionType === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => handleTypeChange('monthly')}
        >
          Monthly
        </button>
      </div>

      <div className="text-center mb-4">
        <img src="/path/to/donation-form-tag.svg" alt="Monthly gifts help save lives all year long." className="mx-auto" />
      </div>

      <div>
        {contributionType === 'one-time' && (
          <div className="flex flex-wrap justify-center mb-4">
            {oneTimeAmounts.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => handleAmountClick(value)}
                className="bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md m-1 hover:bg-gray-300"
              >
                ₹{value}
              </button>
            ))}
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Other"
              className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
        )}

        {contributionType === 'monthly' && (
          <div className="flex flex-wrap justify-center mb-4">
            {monthlyAmounts.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => handleAmountClick(value)}
                className="bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md m-1 hover:bg-gray-300"
              >
                ₹{value}
              </button>
            ))}
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Other"
              className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
        )}

        <div className="text-center mt-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Donate Now
          </button>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-gray-600">Secure Payment</p>
      </div>
      <div className="text-center mt-4">
        <chariot-connect style={{ width: '100%' }} id="chariot" cid="live_9522595bd69d4908abb8caee07fdade5600b421ae9bb09747248198af74399de" theme="ActionAgainstHungerTheme"></chariot-connect>
      </div>
      <div className="text-center mt-4">
        <img src="/path/to/91-percent.svg" alt="91%" className="mx-auto" />
        <p className="text-sm text-gray-600">91% of your donation goes to help those in need.</p>
      </div>
    </div>
  );
};

export default ContributionForm;
