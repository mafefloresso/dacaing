import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import clientsImgs from "../data/clients-imgs";

function Clients() {
  return (
    <section id="clients" className="clients section">
    <div class="container section-title" data-aos="fade-up">
        <h2>Clientes</h2>
        <p>Clientes</p>
      </div>

      <div className="swi-container">
              <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 40 },
          640: { slidesPerView: 3, spaceBetween: 80 },
          992: { slidesPerView: 4, spaceBetween: 120 },
        }}
      >
        {clientsImgs.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img.src} alt="logo" />
          </SwiperSlide>
        ))}

      </Swiper>      
      </div>



    </section>
  )
}

export default Clients