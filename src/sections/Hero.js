import backgroundImg from '../assets/img/hero-bkg.jpg';
import logoImg from '../assets/img/logo.jpg';

function Hero() {
  return (
    <section id="hero" className="hero section dark-background">

      <img src={backgroundImg} alt="" className="img-back"/>

      <div className="container">
        <div className="row justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
          <div className="col-xl-6 col-lg-8">
            <img src={logoImg} alt="Logo empresa" className="img-front"/> 
            <h2>DACA Proyectos de Ingeniería<span>.</span></h2>
            <p>"Si lo puedes imaginar, lo podemos proyectar"</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;