import React from 'react';

const Contect = () => {
  return (
    <div className="contact-info mt-6">
      <h3 className="font-bold text-xl">Contact Information</h3>
      <p className="text-gray-600">
        If you have allergies or other dietary restrictions, please contact the restaurant. 
        The restaurant will provide food-specific information upon request.
      </p>
      <p className="mt-4">
        <span className="font-semibold">Phone number:</span> +934443-43
      </p>
      <p>
        <span className="font-semibold">Website:</span>{' '}
        <a href="http://mcdonalds.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
          http://mcdonalds.uk/
        </a>
      </p>
    </div>
  );
};

export default Contect;
