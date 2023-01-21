import React, { useState } from "react";
import data from "../../data";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Technology.module.css";
function Technology() {
  const [selectedTerminology, setSelectedTerminology] = useState(
    data.technology[0]
  );
  function changeTerminology(id) {
    const selectedItem = data.technology.find(item => item.id === id);
    setSelectedTerminology(selectedItem);
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
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTerminology.id}
              variants={contentVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h2 className={styles.subtitle}>THE TERMINOLOGY…</h2>
              <h3 className={styles.terminology}>
                {selectedTerminology.terminology}
              </h3>
              <p className={styles.explanation}>
                {selectedTerminology.explanation}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}

export default Technology;
