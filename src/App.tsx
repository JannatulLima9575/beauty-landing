import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import SpecialOffer from "./components/SpecialOffer";
import AntiAging from "./components/AntiAging";
import Premium from "./components/Premium";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

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