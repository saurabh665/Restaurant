import React from 'react';

const Bottom = () => {
  return (
    <div className="relative p-4 mx-auto max-w-7xl rounded-md">
      {/* Background Section */}
      <div
        className="relative bg-cover bg-no-repeat h-[450px] flex items-center justify-between"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dx6euyk3a/image/upload/v1731678140/Group_119_jbfj9s.svg')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-between w-full px-8" style={{ color: '#03081F' }}>
          {/* Left: Company Info */}
          <div className="text-left">
            <p className="text-sm mb-4">
              <img
                className="mb-4"
                src="https://res.cloudinary.com/dx6euyk3a/image/upload/v1731674375/LOGO_1_ovo0ls.svg"
                alt="Company Logo"
              />
              Company #490039-445, Registered with<br />House of Companies
            </p>
          </div>

          {/* Center: Call-to-Action with Social Media */}
          <div className="text-center w-1/2">
            <h3 className="text-2xl font-bold mb-4">Get Exclusive Deals in Your Inbox</h3>
            <div className="flex flex-col items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 rounded-lg text-black w-72 outline-none"
                />
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition">
                  Subscribe
                </button>
              </div>

              {/* Social Media Links */}
              <div className="flex justify-center gap-6 mt-4">
                <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://res.cloudinary.com/dx6euyk3a/image/upload/v1731405041/Snapchat_elcrwb.svg"
                    alt="Snapchat"
                    className="w-8 h-8 transition-transform transform hover:scale-110"
                  />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://res.cloudinary.com/dx6euyk3a/image/upload/v1731405042/Facebook_wzogbw.svg"
                    alt="Facebook"
                    className="w-8 h-8 transition-transform transform hover:scale-110"
                  />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://res.cloudinary.com/dx6euyk3a/image/upload/v1731405041/Instagram_v1ynrq.svg"
                    alt="Instagram"
                    className="w-8 h-8 transition-transform transform hover:scale-110"
                  />
                </a>
                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://res.cloudinary.com/dx6euyk3a/image/upload/v1731405161/TikTok_guzrip.png"
                    alt="TikTok"
                    className="w-8 h-8 transition-transform transform hover:scale-110"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Legal Pages and Important Links */}
          <div className="flex space-x-12">
            <div>
              <h4 className="text-lg font-semibold mb-2">Legal Pages</h4>
              <ul className="">
                <li className="hover:text-orange-500 transition cursor-pointer">Privacy Policy</li>
                <li className="hover:text-orange-500 transition cursor-pointer">Terms of Service</li>
                <li className="hover:text-orange-500 transition cursor-pointer">Cookie Policy</li>
                <li className="hover:text-orange-500 transition cursor-pointer">Disclaimer</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Important Links</h4>
              <ul className="">
                <li className="hover:text-orange-500 transition cursor-pointer">Get Help</li>
                <li className="hover:text-orange-500 transition cursor-pointer">Add Your Restaurant</li>
                <li className="hover:text-orange-500 transition cursor-pointer">Sign Up to Deliver</li>
                <li className="hover:text-orange-500 transition cursor-pointer">Create a Business Account</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
