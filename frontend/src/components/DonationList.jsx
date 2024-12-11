import React from 'react';
import Post from './Post';

const donations = [
  { id: 1, name: 'John Doe', item: '10kg Rice', date: '2024-07-12' },
  { id: 2, name: 'Jane Smith', item: '5kg Wheat', date: '2024-07-10' },
  { id: 3, name: 'Steve Smith', item: '5kg Wheat', date: '2024-07-10' },
  { id: 4, name: 'Jane Lewi', item: '5kg Wheat', date: '2024-07-10' }
  // Add more donations as needed
];

const DonationList = () => {
  return (
    <div className='grid grid-cols-4 gap-4'>
      {donations.map((donation) => (
        <Post key={donation.id} name={donation.name} item={donation.item} date={donation.date} type="donation" />
      ))}
    </div>
  );
};

export default DonationList;
