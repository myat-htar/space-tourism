import React, { useState } from "react";
import data from "../../data";
import styles from "./Technology.module.css";
function Technology() {
  const [selectedTerminology, setSelectedTerminology] = useState(
    data.technology[0]
  );
  function changeTerminology(id) {
    const selectedItem = data.technology.find(item => item.id === id);
    setSelectedTerminology(selectedItem);
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span>03</span> SPACE LAUNCH 101
      </h1>
      <div className={styles.flex}>
        <picture>
          <source
            className={styles.img}
            media="(min-width: 70rem)"
            srcSet={selectedTerminology.image.portrait}
          />
          <img
            className={styles.img}
            src={selectedTerminology.image.landscape}
            alt={selectedTerminology.terminology}
          />
        </picture>
        <div className={styles.info_wrapper}>
          <div className={styles.btn_container}>
            {data.technology.map(item => (
              <button
                key={item.id}
                className={`${
                  item.id === selectedTerminology.id
                    ? `${styles.btn} ${styles.selected}`
                    : styles.btn
                }`}
                onClick={() => changeTerminology(item.id)}
              >
                {item.id}
              </button>
            ))}
          </div>
          <div>
            <h2 className={styles.subtitle}>THE TERMINOLOGY…</h2>
            <h3 className={styles.terminology}>
              {selectedTerminology.terminology}
            </h3>
            <p className={styles.explanation}>
              {selectedTerminology.explanation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
