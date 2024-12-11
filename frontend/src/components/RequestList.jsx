import React from 'react';
import Post from './Post';

const requests = [
  { id: 1, name: 'Charity A', item: '20kg Rice', date: '2024-07-12' },
  { id: 2, name: 'Charity B', item: '10kg Wheat', date: '2024-07-10' },
  // Add more requests as needed
];

const RequestList = () => {
  return (
    <div className='grid grid-cols-4 gap-4'>
      {requests.map((request) => (
        <Post key={request.id} name={request.name} item={request.item} date={request.date} type="request" />
      ))}
    </div>
  );
};

export default RequestList;
