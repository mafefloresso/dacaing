import { useState } from "react";
import Masonry from "react-masonry-css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import portfolioImgs from "../data/portfolio-imgs";

function Portfolio() {
  const [index, setIndex] = useState(-1);

  const breakpoints = {
    default: 3,
    900: 2,
    600: 1,
  };

  return (
    <section id="portfolio" class="portfolio section dark-background">
      <div class="container section-title" data-aos="fade-up">
        <h2>Portafolio</h2>
        <p>Portafolio</p>
      </div>

      <div className="container">
        <>
          <Masonry
            breakpointCols={breakpoints}
            className="masonry-grid"
            columnClassName="masonry-column"
          >
            {portfolioImgs.map((img, i) => (
              <img
                key={i}
                src={img.src}
                onClick={() => setIndex(i)}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  cursor: "pointer",
                }}
              />
            ))}
          </Masonry>

          <Lightbox
            open={index >= 0}
            close={() => setIndex(-1)}
            index={index}
            slides={portfolioImgs}
          />
        </>
      </div>
    </section>
  );
}

export default Portfolio;
