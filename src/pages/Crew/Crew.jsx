import React, { useEffect, useRef, useState } from "react";
import data from "../../data";
import styles from "./Crew.module.css";
import Slider from "react-slick";
function Crew() {
  const [slider, setSlider] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setSlideIndex(next),
  };
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        <span>02</span>meet your crew
      </h1>

      <Slider ref={slider => setSlider(slider)} {...sliderSettings}>
        {data.crew.map(item => (
          <div className={styles.flex} key={item.id}>
            <img className={styles.img} src={item.image} alt={item.name} />
            <div className={styles.info_wrapper}>
              <h3 className={styles.occupation}>{item.occupation}</h3>
              <h2 className={styles.name}>{item.name}</h2>
              <p className={styles.bio}>{item.bio}</p>
              <div className={styles.indicators_wrapper}>
                {data.crew.map(item => (
                  <button
                    key={item.id}
                    onClick={() => slider.slickGoTo(item.id - 1)}
                    className={
                      item.id - 1 === slideIndex
                        ? `${styles.indicator} ${styles.selected}`
                        : styles.indicator
                    }
                  ></button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Crew;
