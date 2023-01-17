import React, { useState } from "react";
import styles from "./Destination.module.css";
import data from "../../data";
function Destination() {
  const [selectedDestination, setSelectedDestination] = useState(
    data.destination[0]
  );
  function changeDestination(id) {
    const selectedItem = data.destination.find(item => item.id === id);
    setSelectedDestination(selectedItem);
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span>01</span>pick your destination
      </h1>

      <div className={styles.flex}>
        <img
          src={selectedDestination.image}
          alt={selectedDestination.name}
          className={styles.img}
        />

        <div>
          <div className={styles.btn_container}>
            {data.destination.map(item => (
              <button
                key={item.id}
                className={` ${
                  selectedDestination.id === item.id
                    ? `${styles.btn} ${styles.selected}`
                    : styles.btn
                }`}
                onClick={() => changeDestination(item.id)}
              >
                {item.name}
              </button>
            ))}
          </div>
          <h2 className={styles.name}>{selectedDestination.name}</h2>
          <p className={styles.desc}>{selectedDestination.description}</p>
          <div className={styles.stats_container}>
            <div className={styles.stats}>
              <h4>avg. distance</h4>
              <p>{selectedDestination.distance}</p>
            </div>
            <div className={styles.stats}>
              <h4>est. travel time</h4>
              <p>{selectedDestination.time}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
