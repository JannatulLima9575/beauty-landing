import React from "react";

const AntiAging: React.FC = () => {
  return (
    <section className="bg-white px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Product Image */}
        <div className="flex justify-center mb-10">
          <img
            src="/antiaging.png"
            alt="Anti Aging Cream"
            className="w-[220px] md:w-[320px] object-contain"
          />
        </div>

        {/* Content */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Anti-Aging Cream
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution.
        </p>

        <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
          Read More →
        </button>
      </div>
    </section>
  );
};

export default AntiAging;