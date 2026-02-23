import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <Featured />
      <SpecialOffer />
      <AntiAging />
      <Premium />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;