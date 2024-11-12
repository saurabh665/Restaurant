import React from 'react';

const Bottom = () => {
  return (
    <div className="relative p-4 mx-auto max-w-7xl text-center">
      <div 
        className="relative bg-cover bg-no-repeat h-[400px]"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dx6euyk3a/image/upload/v1731403703/Group_121_rpflka.png')`
        }}
      >
        <div className="absolute inset-0 bg-black/15 flex flex-col items-center justify-center text-gray-800">
          <h3 className="text-xl font-semibold mb-2">Get Exclusive Deals in your Inbox</h3>
          <div className="flex justify-end gap-10 mb-4">
            <div>
              <h4 className="font-medium">Legal Pages</h4>
              <ul className="text-gray-800 mt-2 list-none pl-8">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
                <li>Disclaimer</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Important Links</h4>
              <ul className="text-gray-800 mt-2 list-none pl-8">
                <li>Get help</li>
                <li>Add your restaurant</li>
                <li>Sign up to deliver</li>
                <li>Create a business account</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-800 mb-6 text-left ml-2">Company # 490039-445, Registered with <p/> House of Companies</p>
          <div className="flex justify-center gap-6">
            <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://res.cloudinary.com/dx6euyk3a/image/upload/v1731405041/Snapchat_elcrwb.svg" 
                alt="Snapchat" 
                className="w-8 h-8 transition-transform transform group-hover:scale-110"
              />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://res.cloudinary.com/dx6euyk3a/image/upload/v1731405042/Facebook_wzogbw.svg" 
                alt="Facebook" 
                className="w-8 h-8 transition-transform transform group-hover:scale-110"
              />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://res.cloudinary.com/dx6euyk3a/image/upload/v1731405041/Instagram_v1ynrq.svg" 
                alt="Instagram" 
                className="w-8 h-8 transition-transform transform group-hover:scale-110"
              />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://res.cloudinary.com/dx6euyk3a/image/upload/v1731405161/TikTok_guzrip.png" 
                alt="TikTok" 
                className="w-8 h-8 transition-transform transform group-hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
