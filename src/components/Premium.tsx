import React from "react";

const Premium: React.FC = () => {
  return (
    <section className="bg-[#e9edf6] px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Premium Quality Products
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable content of a page like readable English.
          </p>

          <div className="flex gap-6 mt-6 text-gray-700 text-sm">
            <span>✔ Aloe Vera</span>
            <span>✔ Organic</span>
            <span>✔ Jojoba Extract</span>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/premium.png"
            alt="Premium Products"
            className="w-[260px] md:w-[380px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Premium;