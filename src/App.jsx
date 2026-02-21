import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Pricing from "./Components/Pricing";
import Testimonioles from "./Components/Testimonioles";
import Footer from "./Components/Footer";
//<></>
//{}
function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonioles />
      <Footer />
    </div>
  );
}

export default App;
