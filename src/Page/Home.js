import React from 'react';
const Home = () => {
  return (
    <div className="p-6 mx-auto px-4 max-w-7xl">

      <img
        className="w-full h-auto object-contain mb-4"
        src="https://res.cloudinary.com/dx6euyk3a/image/upload/v1731139375/Group_111_n2hawt.png"
        alt="Main Banner"
      />

      <div className="mb-4">
        <p>Order Restaurant food takeaway and groceries</p>
        <h1 className="text-2xl font-bold mt-2">Feast Your Senses, <span>Fast and Fresh</span></h1>
        <p className="mt-2">Enter the postcode to see what we deliver</p>
        <input
          type="text"
          placeholder="Food"
          className="border p-1 mt-2 rounded"
        />
        <button className="ml-2 bg-blue-500 text-white p-1 rounded">Search</button>
      </div>

      <div className="mb-6 ">
        <h3 className="text-lg font-semibold">Up to 40% Off - Order.uk Exclusive Deals</h3>
      </div>

      <div className="mb-6 ">
        <h3 className="text-xl font-bold">Order.uk Popular Categories</h3>
        <img
          className="w-full h-auto object-contain mt-2 border-gray-300"
          src="https://res.cloudinary.com/dx6euyk3a/image/upload/v1731166253/Group_112_ifn5ip.png"
          alt="Popular Categories"
        />
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold">Popular Restaurants</h2>
        <img
          className="w-full h-auto object-contain mt-2"
          src="https://res.cloudinary.com/dx6euyk3a/image/upload/v1731166252/Group_113_cejffa.png"
          alt="Popular Restaurants"
        />
      </div>

      <div className="mb-4 ">
        <h3 className="text-xl font-bold">Google Play Store</h3>
        <img
          className="w-full h-auto object-contain mt-2"
          src="https://res.cloudinary.com/dx6euyk3a/image/upload/v1731166255/Group_115_rkbknl.png"
          alt="Google Play Store"
        />
      </div>

      <div className="mb-6 ">
        <h2 className="text-xl font-bold">Partner</h2>
        <img
          className="w-full h-auto object-contain mt-8"
          src="https://res.cloudinary.com/dx6euyk3a/image/upload/v1731166254/Group_116_a942bl.png"
          alt="Partner"
        />
      </div>
      <bottom/>
    </div>
  );
};

export default Home;
