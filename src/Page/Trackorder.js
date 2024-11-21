import React from "react";
import Banner from "../components/Banner";
import Weely from "../components/Weely";
import Burger1 from "../components/Burger1";
import Pizza from "../components/Pizza";
import Basket from "../components/Basket";

const reviews = [
  {
    image:
      "https://res.cloudinary.com/dx6euyk3a/image/upload/v1731550262/Ellipse_3_ijtqtv.svg",
    title: "St Glx South London",
    description:
      "The positive aspect was undoubtedly the efficiency of the service...",
  },
  {
    image:
      "https://res.cloudinary.com/dx6euyk3a/image/upload/v1731550262/Ellipse_3_ijtqtv.svg",
    title: "St Glx South London",
    description:
      "The positive aspect was undoubtedly the efficiency of the service...",
  },
  {
    image:
      "https://res.cloudinary.com/dx6euyk3a/image/upload/v1731550262/Ellipse_3_ijtqtv.svg",
    title: "St Glx South London",
    description:
      "The positive aspect was undoubtedly the efficiency of the service...",
  },
];

const basketItems = [
  {
    title: "12'' Vegetarian Pizza",
    description: "No mushrooms + green peppers",
    quantity: 1,
    price: "£27.90",
  },
  {
    title: "12'' Tandoori Pizza",
    description: "No mushrooms + green peppers",
    quantity: 1,
    price: "£17.90",
  },
  {
    title: "Coke Coca Cola",
    description: "",
    quantity: 2,
    price: "£4.90",
  },
];

const Trackorder = () => {
  return (
    <div className="relative p-6 mx-auto max-w-7xl rounded-md">
      {/* Banner Section */}
      <div className="mb-6 shadow-xl">
        <Banner
          title="Track Your Order"
          description="Get real-time updates on your order."
          image="https://res.cloudinary.com/dx6euyk3a/image/upload/v1731139375/Group_111_n2hawt.png"
          button="Track Now"
        />
      </div>

      <h2 className="text-xl font-bold mb-4">Order from Tandoori Pizza London</h2>
      <input
        type="text"
        placeholder="Search from menu"
        className="mb-6 p-2 w-full border border-gray-300 rounded-md"
      />

      {/* Layout with Menu, Pizza Cards, and Basket */}
      <div className="flex">
        {/* Menu Section */}
        <div className="w-1/4 bg-gray-100 p-4 rounded-md shadow-md">
          <h2 className="text-lg font-bold mb-4">Menu</h2>
          <ul className="space-y-2">
            {[
              "Pizza",
              "Garlic Bread",
              "Calzone",
              "Kebabs",
              "Salads",
              "Cold Drink",
              "Happy Meal",
              "Special Offer",
              "Dessert",
            ].map((item, index) => (
              <li
                key={index}
                className="hover:bg-gray-200 p-2 rounded cursor-pointer transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Pizza Cards Section */}
        <div className="flex-1">
          {[
            {
              title: "Farm House Xtreme Pizza",
              description: "Loaded with veggies and cheese.",
              image: "https://via.placeholder.com/300",
            },
            {
              title: "Deluxe Pizza",
              description: "Delicious combination of meats and veggies.",
              image: "https://via.placeholder.com/300",
            },
            {
              title: "Tandoori Pizza",
              description: "Spicy and flavorful tandoori base.",
              image: "https://via.placeholder.com/300",
            },
          ].map((pizza, index) => (
            <Pizza key={index} {...pizza} button="Order Now" />
          ))}
        </div>

        {/* Basket Section */}
        <div className="w-1/4 p-4">
          <Basket
            items={basketItems}
            subtotal={127.9}
            discounts={3.0}
            deliveryFee={2.5}
            total={127.9 - 3.0 + 2.5}
          />
        </div>
      </div>

      {/* Weekly Promo Section */}
      <div className="mt-6">
        <Weely image="https://res.cloudinary.com/dx6euyk3a/image/upload/v1731671197/Group_125_mwtz4l.png" />
      </div>

      {/* Customer Reviews Section */}
      <div className="my-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Burger1 key={index} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trackorder;
