import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const containerVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
    },
  };
  const contentVariant = {
    hidden: {
      y: 150,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      y: 150,
      opacity: 0,
    },
  };
  return (
    <motion.section
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={styles.container}
    >
      <h1 className={styles.title}>
        <span>01</span>pick your destination
      </h1>

      <div className={styles.flex}>
        <motion.img
          whileInView={{ rotate: 360 }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
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
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDestination.id}
              variants={contentVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
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
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}

export default Destination;
