
import './App.css';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Clients from './sections/Clients';
import Contact from './sections/Contact';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import services  from './data/services';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: true       
    });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services services={services} />
      <About />
      <Portfolio />
      <Clients />
      <Contact />

    </div>
  );
}

export default App;
