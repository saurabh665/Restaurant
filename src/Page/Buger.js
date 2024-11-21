import React from 'react'

const Buger =({ image, title, description }) => {
    return (

    <div className="flex items-start border rounded shadow-lg p-4">
    <img
      src={image}
      alt={title}
      className="w-12 h-12 object-cover rounded-full mr-4"
    />
    <div>
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  </div>
    );
  };

export default Buger