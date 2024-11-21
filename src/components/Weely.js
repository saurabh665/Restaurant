import React from 'react';

const Weely = ({ title, descrption, image }) => {
  return (
    <div
    className="relative w-full h-[500px] bg-cover bg-center font-medium"
    style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay Section */}
      <div className="absolute inset-0  flex justify-center items-center">
        <div className="grid grid-cols-3 gap-6 w-[90%] text-black">
          {/* Delivery Information */}
          <div>
            <h3 className="text-2xl  mb-4 flex items-center">
              <span className="mr-2">🚚</span> Delivery Information
            </h3>
            <p className="mb-2">
              <strong>Monday:</strong>12:00 AM–3:00 AM,8:00 AM–3:00 AM
            </p>
            <p className="mb-2">
              <strong>Tuesday:</strong> 8:00 AM–3:00 AM
            </p>
            <p className="mb-2">
              <strong>Wednesday:</strong> 8:00 AM–3:00 AM
            </p>
            <p className="mb-2">
              <strong>Thursday:</strong> 8:00 AM–3:00 AM
            </p>
            <p className="mb-2">
              <strong>Friday:</strong> 8:00 AM–3:00 AM
            </p>
            <p className="mb-2">
              <strong>Saturday:</strong> 8:00 AM–3:00 AM
            </p>
            <p className="mb-2">
              <strong>Sunday:</strong> 8:00 AM–3:00 AM
            </p>
            <p>
              <strong>Estimated time until delivery:</strong> 20 min
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="mr-2">📞</span> Contact Information
            </h3>
            <p className="mb-4">
              If you have allergies or other dietary restrictions, please
              contact the restaurant. The restaurant will provide food-specific
              information upon request.
            </p>
            <p>
              <strong>Phone number:</strong> +934443-43
            </p>
            <p>
              <strong>Website:</strong>{' '}
              <a
                href="http://mcdonalds.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-400"
              >
                http://mcdonalds.uk/
              </a>
            </p>
          </div>

          {/* Operational Times */}
          {/* Operational Times */}
<div className="pl-20 text-white">
<h3 className="text-2xl font-bold mb-4 flex items-center">
  <span className="mr-2">⏰</span> Operational Times
</h3>
<p className="mb-2">
  <strong>Monday:</strong> 8:00 AM–3:00 AM
</p>
<p className="mb-2">
  <strong>Tuesday:</strong> 8:00 AM–3:00 AM
</p>
<p className="mb-2">
  <strong>Wednesday:</strong> 8:00 AM–3:00 AM
</p>
<p className="mb-2">
  <strong>Thursday:</strong> 8:00 AM–3:00 AM
</p>
<p className="mb-2">
  <strong>Friday:</strong> 8:00 AM–3:00 AM
</p>
<p className="mb-2">
  <strong>Saturday:</strong> 8:00 AM–3:00 AM
</p>
<p>
  <strong>Sunday:</strong> 8:00 AM–3:00 AM
</p>
</div>

        </div>
      </div>
    </div>
  );
};

export default Weely;
