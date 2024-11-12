import React from 'react';

const Returent = () => {
  return (
    <div className="p-6 mx-auto px-4 max-w-7xl">
      
      {/* McDonald's Section */}
      <div className="mb-4">
        <img 
          className="w-full h-auto object-contain mb-2"
          src="https://res.cloudinary.com/dx6euyk3a/image/upload/v1731166929/Group_112_1_e27ijt.png" 
          alt="McDonald's Banner" 
        />
        <p className="text-gray-600">I'm loving it!</p>
        <h2 className="text-2xl font-bold mt-2">McDonald’s East London</h2>
        <div className="flex gap-2 justify-center mt-2">
          <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">Minimum order</button>
          <button className="bg-green-500 text-white px-3 py-1 rounded">Delivery in 20 mins</button>
        </div>
      </div>

      {/* Map Section with Background Image and Text Overlay */}
      <div className="mb-6 relative">
        <img 
          className="w-full h-auto object-contain mt-2" 
          src="https://res.cloudinary.com/dx6euyk3a/image/upload/v1731166931/Group_116_1_adzobk.png" 
          alt="Map" 
        />
        <div className="absolute top-0 left-0  h-full ml-40  flex flex-col justify-center p-4">
          <h2 className="text-2xl font-bold text-white">McDonald’s</h2>
          <h3 className="text-lg text-[#FC8A06]">South London</h3>
          <p className="mt-2 text-white">Tooley St, London Bridge, <p/>London SE1 2TF, United Kingdom</p>
          <h2 className="mt-2 text-white">Phone number</h2>  
          <h2 className="mt-2 text-[#FC8A06] ">+934443-43</h2>
          <h3 className="mt-2 text-white">Website</h3>
          <p className="mt-2 text-[#FC8A06]">www.mcdonalds.co.uk</p>
        </div>
      </div>

      {/* Rest of the Sections */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Burgers</h3>
        <img 
          className="w-full h-auto object-contain mt-2" 
          src="https://res.cloudinary.com/dx6euyk3a/image/upload/v1731166930/Group_114_pbcwgn.png" 
          alt="Burgers" 
        />
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold" style={{ color: '#FC8A06' }}>Fries</h3>
        <img 
          className="w-full h-auto object-contain mt-2" 
          src="https://res.cloudinary.com/dx6euyk3a/image/upload/v1731166930/Group_115_1_vjzb0s.png" 
          alt="Fries" 
        />
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold" style={{ color: '#FC8A06' }}>Cold Drinks</h3>
        <img 
          className="w-full h-auto object-contain mt-2" 
          src="https://res.cloudinary.com/dx6euyk3a/image/upload/v1731166931/Group_117_1_j1rtf0.png" 
          alt="Cold Drinks" 
        />
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-bold">Google Play Store</h3>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-bold">Delivery Info</h2>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold">Similar Restaurants</h2>
        <img 
          className="w-full h-auto object-contain mt-2" 
          src="https://res.cloudinary.com/dx6euyk3a/image/upload/v1731166252/Group_113_cejffa.png" 
          alt="Similar Restaurants" 
        />
      </div>

    </div>
  );
};

export default Returent; 