import AntiAging from "./components/AntiAging";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Premium from "./components/Premium";
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