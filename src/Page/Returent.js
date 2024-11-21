import React from 'react';
import Buger from './Buger';
import Burger1 from '../components/Burger1';
import Fries from '../components/Fries';
import Cold from '../components/Cold';
import Weely from '../components/Weely';
import Banner from '../components/Banner';

// Sample data for burger items
const burgers = Array(6).fill({
  title: 'Royal Cheese Burger with extra Fries',
  image: 'https://res.cloudinary.com/dx6euyk3a/image/upload/v1731560602/Rectangle_46_i2ssv3.svg',
  description: '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium',
  price: 'GBP 23.10'
});

// Sample data for fries items
const fries = Array(6).fill({
  title: 'Royal Cheese Burger with extra Fries',
  image: 'https://res.cloudinary.com/dx6euyk3a/image/upload/v1731562171/Group_123_dg6jp4.png',
  description: '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium',
  price: 'GBP 23.10'
});

// Sample data for cold items
const colds = [
  {
    title: "Royal Cheese Burger with extra Fries",
    image: "https://example.com/image1.jpg",
    description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
    price: "GBP 23.10"
  },
  {
    title: "The classics for 3",
    image: "https://example.com/image2.jpg",
    description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium-sized French Fries, 3 cold drinks",
    price: "GBP 35.50"
  },
  {
    title: "The classics for 3",
    image: "https://example.com/image2.jpg",
    description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium-sized French Fries, 3 cold drinks",
    price: "GBP 35.50"
  },
  {
    title: "The classics for 3",
    image: "https://example.com/image2.jpg",
    description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium-sized French Fries, 3 cold drinks",
    price: "GBP 35.50"
  },
  {
    title: "The classics for 3",
    image: "https://example.com/image2.jpg",
    description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium-sized French Fries, 3 cold drinks",
    price: "GBP 35.50"
  },
  {
    title: "The classics for 3",
    image: "https://example.com/image2.jpg",
    description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium-sized French Fries, 3 cold drinks",
    price: "GBP 35.50"
  }
  // Add more items as needed
];

// Sample data for customer reviews
const reviews = [
  {
    image: "https://res.cloudinary.com/dx6euyk3a/image/upload/v1731550262/Ellipse_3_ijtqtv.svg",
    title: "St Glx South London",
    description: "The positive aspect was undoubtedly the efficiency of the service..."
  },
  {
    image: "https://res.cloudinary.com/dx6euyk3a/image/upload/v1731550262/Ellipse_3_ijtqtv.svg",
    title: "St Glx South London",
    description: "The positive aspect was undoubtedly the efficiency of the service..."
  },
  {
    image: "https://res.cloudinary.com/dx6euyk3a/image/upload/v1731550262/Ellipse_3_ijtqtv.svg",
    title: "St Glx South London",
    description: "The positive aspect was undoubtedly the efficiency of the service..."
  }
  // Add more reviews as needed
];

// Section component to structure each menu section
const Section = ({ title, children }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {children}
    </div>
  </div>
);

// Main Restaurant component
const Restaurant = () => {
  return (
    <div className="container mx-auto p-6 max-w-7xl">
    {/* Banner and Restaurant Info */}
    <div className="mb-4">
     <Banner
     title=''
     desciotionn=''
     image="https://res.cloudinary.com/dx6euyk3a/image/upload/v1731166929/Group_112_1_e27ijt.png"
     button=''
     
     />
      <p className="text-gray-600">I'm loving it!</p>
      <h2 className="text-2xl font-bold mt-2">McDonald’s East London</h2>
      <div className="flex gap-2 justify-center mt-2">
        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">
          Minimum order
        </button>
        <button className="bg-green-500 text-white px-3 py-1 rounded">
          Delivery in 20 mins
        </button>
      </div>
    </div>

      {/* Map and Location Info */}
      

      {/* Menu Sections */}
      <Section title="Burger">
        {burgers.map((burger, index) => (
          <Burger1 key={index} {...burger} />
        ))}
      </Section>

      <Section title="Fries">
        {fries.map((fry, index) => (
          <Fries key={index} {...fry} />
        ))}
      </Section>

      <Section title="Cold">
        {colds.map((cold, index) => (
          <Cold key={index} {...cold} />
        ))}
      </Section>

      <Weely
      image='https://res.cloudinary.com/dx6euyk3a/image/upload/v1731671197/Group_125_mwtz4l.png'/>

      <div className="mb-6 relative">
        <img 
          className="w-full h-auto object-contain mt-2" 
          src="https://res.cloudinary.com/dx6euyk3a/image/upload/v1731166931/Group_116_1_adzobk.png" 
          alt="Map" 
          loading="lazy"
        />
        <div className="absolute top-0 left-0 h-full ml-40 flex flex-col justify-center p-4 text-white">
          <h2 className="text-2xl font-bold">McDonald’s</h2>
          <h3 className="text-lg text-[#FC8A06]">South London</h3>
          <p className="mt-2">Tooley St, London Bridge,<p/> London SE1 2TF, United Kingdom</p>
          <h2 className="mt-2">Phone number</h2>  
          <h2 className="mt-2 text-[#FC8A06]">+934443-43</h2>
          <h3 className="mt-2">Website</h3>
          <p className="mt-2 text-[#FC8A06]">www.mcdonalds.co.uk</p>
        </div>
      </div>

      {/* Additional Info */}
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
          loading="lazy"
        />
      </div>

      {/* Customer Reviews */}
      <h1 className="text-ul font-bold"></h1>
      <Section title="Customer Reviews">
        {reviews.map((review, index) => (
          <Buger key={index} {...review} />
        ))}
      </Section>
    </div>
  );
};

export default Restaurant;

