import React from 'react';

const Burger1 = ({ title, image, description, price }) => {
  return (
    <div className="flex items-center border rounded shadow-lg p-4 mb-4">
      {/* Text Content on the Left */}
      <div className="flex-1">
        <h5 className="text-base font-bold">{title}</h5>
        <p className="text-gray-600 mt-2">{description}</p>
        <p className="text-gray-600 mt-2">{price}</p>
      </div>
      
      {/* Centered Image on the Right */}
      <img 
        className="w-28 h-28 object-cover rounded-lg ml-4" 
        src={image} 
        alt={title} 
      />
    </div>
  );
};

export default Burger1;
