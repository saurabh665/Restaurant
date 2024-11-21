import React from 'react';

const Delivery = () => {
  return (
    <div className="delivery-info mt-6">
      <h3 className="font-bold text-xl">Delivery Information</h3>
      <p>Monday: 12:00 AM–3:00 AM, 8:00 AM–3:00 AM</p>
      <p>Tuesday: 8:00 AM–3:00 AM</p>
      <p>Wednesday: 8:00 AM–3:00 AM</p>
      <p>Thursday: 8:00 AM–3:00 AM</p>
      <p>Friday: 8:00 AM–3:00 AM</p>
      <p>Saturday: 8:00 AM–3:00 AM</p>
      <p>Sunday: 8:00 AM–12:00 AM</p>
      <p className="mt-4 text-gray-600">
        Estimated time until delivery: <span className="font-semibold">20 min</span>
      </p>
    </div>
  );
};

export default Delivery;
