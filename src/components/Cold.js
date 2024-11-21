import React from 'react';

const Cold = ({ title, image, description, price }) => {
  return (
    <div className="flex items-center border rounded shadow-lg p-4 mb-4">
      {/* Text Content on the Left */}
      <div className="flex-1">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <p className="text-gray-600 mt-2 text-base font-semibold">{price}</p>
      </div>
      
      {/* Image on the Right */}
      <div className="ml-4">
        <img 
          className="w-28 h-28 object-cover rounded-lg" 
          src={image} 
          alt={title} 
        />
      </div>
    </div>
  );
};

export default Cold;
