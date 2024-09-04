// pages/index.tsx
import React from 'react';

const PhoneLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl mb-4">Solutions</h1>
      <h2 className="text-xl mb-8">SBazars Innovative</h2>
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <div className="flex flex-col items-center md:w-1/4 mx-4 mb-4">
          <div className="w-48 h-96 bg-gray-800 rounded-lg mb-4"></div>
          <div className="w-48 h-96 bg-gray-800 rounded-lg"></div>
        </div>
        <div className="flex flex-col md:w-3/4 mx-4">
          <div className="bg-gray-800 text-white p-4 rounded mb-4">
            <h3 className="text-lg">Digital Ticket Booking</h3>
            <p>Streamlines the process, reducing reliance on manual operations.</p>
          </div>
          <div className="bg-gray-800 text-white p-4 rounded mb-4">
            <h3 className="text-lg">Digital Ticket Booking</h3>
            <p>Streamlines the process, reducing reliance on manual operations.</p>
          </div>
          <div className="bg-gray-800 text-white p-4 rounded">
            <h3 className="text-lg">Digital Ticket Booking</h3>
            <p>Streamlines the process, reducing reliance on manual operations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneLayout;