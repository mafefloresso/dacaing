import React from 'react'
import aboutImg from '../assets/img/Equipo.jpg'

function About() {
  return (
    <section id="about" class="about section">

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4">
          <div class="col-lg-6 order-1 order-lg-2">
            <img src={aboutImg} class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-6 order-2 order-lg-1 content">
            <h3>Nuestra Empresa</h3>
            <p>
              Somos una empresa Queretana, especializada en la ejecución de proyectos de ingeniería, experiencia palpable y servicio a la medida, con altos estándares en calidad, excelentes tiempos de ejecución y costo muy competente, esforzándonos 
              para ser la mejor opción para la realización de sus proyectos y trámites.
            </p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default About