
import ServiceCard from "../components/ServiceCard";

function Services({ services }) {
  return (
    <section id="services" class="services section">
      <div class="container section-title" data-aos="fade-up">
        <h2>Nuestros Servicios</h2>
        <p>Servicios</p>
      </div>

      <div class="container">
        <div class="row gy-4">
          {services.map((service) => (
            <ServiceCard key = {service.id} service= {service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
