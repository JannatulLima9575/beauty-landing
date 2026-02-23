import React from "react";

const SpecialOffer: React.FC = () => {
  return (
    <section className="bg-[#e9edf6] px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Special Offer!
          </h2>

          <p className="text-2xl text-gray-700 mb-6">
            30% Discount
          </p>

          <button className="text-lg font-medium underline underline-offset-4 hover:text-black transition">
            Order Now →
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/offer.png"
            alt="Special Offer Products"
            className="w-[300px] md:w-[420px] object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default SpecialOffer;