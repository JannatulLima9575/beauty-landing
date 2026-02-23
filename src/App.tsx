import AntiAging from "./components/AntiAging";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import SpecialOffer from "./components/SpecialOffer";


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