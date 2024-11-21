import React from 'react';
import Banner from '../components/Banner';
import Pizaa from '../components/Pizaa';
import Restorent from '../components/Restorent';

// Reusable Section Component
const Section = ({ title, subtitle, imgSrc, altText }) => (
  <div className="mb-12 text-center">
    {title && <h3 className="text-xl font-bold text-[#03081F]">{title}</h3>}
    {subtitle && <p className="text-lg mt-2 text-[#03081F]">{subtitle}</p>}
    {imgSrc && (
      <img
        className="w-full h-auto object-contain mt-4 border-gray-300 rounded-lg"
        src={imgSrc}
        alt={altText}
      />
    )}
  </div>
);

const Home = () => {
  // Pizza Items Data
  const pizzaItems = [
    {
      title: '',
      image: 'https://res.cloudinary.com/dx6euyk3a/image/upload/v1732007172/Group_16_sz8udu.svg',
    },
    {
      title: '',
      image: 'https://res.cloudinary.com/dx6euyk3a/image/upload/v1732007173/Group_17_jv0j3i.png',
    },
    {
      title: '',
      image: 'https://res.cloudinary.com/dx6euyk3a/image/upload/v1732007173/Group_18_axvgqk.png',
    },
    {
      title: '',
      image: 'https://res.cloudinary.com/dx6euyk3a/image/upload/v1732007174/Group_21_vrczum.png',
    },
    {
      title: '',
      image: 'https://res.cloudinary.com/dx6euyk3a/image/upload/v1732007174/Group_21_vrczum.png',
    },
    {
      title: '',
      image: 'https://res.cloudinary.com/dx6euyk3a/image/upload/v1732007174/Group_21_vrczum.png',
    },
  ];

  return (
    <div className="p-6 mx-auto max-w-7xl">
      {/* Main Banner Section */}
      <Banner
        title="Popular Restaurants"
        description=""
        image="https://res.cloudinary.com/dx6euyk3a/image/upload/v1731139375/Group_111_n2hawt.png"
        button=""
      />

      {/* Popular Pizzas Section */}
      <div className="flex justify-center gap-8 px-4 py-10">
        <Pizaa items={pizzaItems} />
      </div>

      {/* Popular Categories Section */}
      <div className="flex justify-center gap-8 px-4 py-10">
        <Restorent
          title="Order.uk Popular Categories"
          altText="Popular Categories"
          image="https://res.cloudinary.com/dx6euyk3a/image/upload/v1732007311/Rectangle_13_1_moovad.png"
        />
        <Restorent
          title="Order.uk Popular Categories"
          altText="Popular Categories"
          image="https://res.cloudinary.com/dx6euyk3a/image/upload/v1732007318/Rectangle_15_ay6hbd.png"
        />
        <Restorent
          title="Order.uk Popular Categories"
          altText="Popular Categories"
          image="https://res.cloudinary.com/dx6euyk3a/image/upload/v1732007317/Rectangle_17_sa9u9o.png"
        />
        <Restorent
          title="Order.uk Popular Categories"
          altText="Popular Categories"
          image="https://res.cloudinary.com/dx6euyk3a/image/upload/v1732007318/Rectangle_21_1_kgpxfj.png"
        />
        <Restorent
          title="Order.uk Popular Categories"
          altText="Popular Categories"
          image="https://res.cloudinary.com/dx6euyk3a/image/upload/v1732007323/Rectangle_23_wuysax.png"
        />
      </div>

      {/* Google Play Store Section */}
      <Section
        title="Google Play Store"
        imgSrc="https://res.cloudinary.com/dx6euyk3a/image/upload/v1731166255/Group_115_rkbknl.png"
        altText="Google Play Store"
      />

      {/* Partner Section */}
      <Section
        title="Partner"
        imgSrc="https://res.cloudinary.com/dx6euyk3a/image/upload/v1731166254/Group_116_a942bl.png"
        altText="Partner"
      />
    </div>
  );
};

export default Home;
