import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#e9edf6] px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold mb-4 italic">
            Beautify
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            We provide premium skincare and beauty products to enhance your
            natural glow.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">Blog</li>
            <li className="hover:text-black cursor-pointer">Contact</li>
            <li className="hover:text-black cursor-pointer">Services</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-gray-600 text-sm">support@beautify.com</p>
          <p className="text-gray-600 text-sm">+1 234 567 890</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-10">
        © 2026 Beautify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;