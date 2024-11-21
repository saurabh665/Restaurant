import React from 'react';

const Pizaa = ({ items }) => {
  // Check if items is an array
  if (!Array.isArray(items)) {
    return <div>No items available</div>; // Fallback if items are not passed correctly
  }

  return (
    <div className="my-10">
      {/* Section Title */}
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Popular Pizzas
      </h1>

      {/* Flex Container */}
      <div className="flex flex-wrap justify-center gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-40 p-4 border rounded-lg shadow-md hover:shadow-lg"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title || 'Pizza'} // Fallback alt text
              className="w-20 h-20 object-contain mb-3"
            />
            {/* Title */}
            <h2 className="text-md font-medium text-gray-700 text-center">
              {item.title || 'Untitled'} {/* Fallback title */}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pizaa;
