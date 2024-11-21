import React from "react";

const Basket = ({ items, subtotal, discounts, deliveryFee, total }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 w-80">
      <h2 className="text-xl font-bold text-green-600 flex items-center gap-2 mb-4">
        <span>🏠</span> My Basket
      </h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b pb-2"
          >
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">{item.quantity}x</span>
              <p className="text-lg font-bold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <div className="flex justify-between text-gray-600">
          <span>Sub Total:</span>
          <span>£{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Discounts:</span>
          <span>-£{discounts.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Delivery Fee:</span>
          <span>£{deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-xl font-bold text-green-600 mt-4">
          <span>Total to pay:</span>
          <span>£{total.toFixed(2)}</span>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <select
          className="w-full border border-gray-300 p-2 rounded-md"
          placeholder="Choose your free item"
        >
          <option>Choose your free item</option>
          <option>Garlic Bread</option>
          <option>Drink</option>
        </select>
        <input
          type="text"
          placeholder="Apply Coupon Code here"
          className="w-full border border-gray-300 p-2 rounded-md"
        />
      </div>
      <div className="flex justify-between mt-4 text-sm text-gray-600">
        <span>🚚 Delivery starts at 17:00</span>
        <span>📦 Collection starts at 16:00</span>
      </div>
      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 mt-4 rounded-md">
        Checkout!
      </button>
    </div>
  );
};

export default Basket;
