import { useState, useEffect } from "react";
import logoImg from '../assets/img/logo.jpg';
function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }, 
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className={`navbar ${scrolled ? "solid" : "transparent"}`}>
      <a href="index.html" className="logo ">
        <img src={logoImg} alt=""/>
      </a>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <a href="#hero" className= {active === "hero" ? "active" : ""} >Inicio</a>
        <a href="#services" className= {active === "services" ? "active" : ""} >Servicios</a>
        <a href="#about" className= {active === "about" ? "active" : ""} >Nosotros</a>
        <a href="#portfolio" className= {active === "portfolio" ? "active" : ""} >Portafolio</a>
        <a href="#clients" className= {active === "clients" ? "active" : ""} >Clientes</a>
        <a href="#contact" className= {active === "contact" ? "active" : ""} >Contacto</a>
      </div>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
          <i className="bi bi-list" ></i>
      </div>
    </header>
  );
}

export default Navbar;
