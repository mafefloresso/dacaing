import React from "react";

export default function ServiceCard({ service }) {
    return (
          <div class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay="100">
            <div class="service-item position-relative">
              <div class="icon">
                <img src={service.imagen} alt=""/>
              </div>
                              <h3>{service.nombre}</h3>

            </div>
          </div>
    )
}