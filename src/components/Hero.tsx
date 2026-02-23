const Hero: React.FC = () => {
  return (
    <section className="bg-[#e9edf6] px-12 py-20 grid md:grid-cols-2 items-center">
      <div>
        <h2 className="text-5xl font-light mb-6">
          Enhance <br />
          <span className="font-bold text-gray-900">
            your Natural Radiance
          </span>
        </h2>

        <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
          Order Now
        </button>
      </div>

      <div className="flex justify-center">
        <img
          src="/products.png"
          alt="Products"
          className="w-[400px]"
        />
      </div>
    </section>
  );
};

export default Hero;