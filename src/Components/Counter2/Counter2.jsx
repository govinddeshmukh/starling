import React, { useEffect, useState } from "react";
import styles from "./Counter2.module.scss";
export default function Counter2() {
    const [counter, setCounter] = useState(1);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (counter <= 100) {
        setCounter(counter + 1);
        setProgress(counter);
      }
    }, 10); // Adjust the interval duration as needed

    return () => clearInterval(interval);
  }, [counter]);
  return (
    <div className={styles.main}>
      <div className={styles.main__content}>
        <div className={styles.main__content__left}>
          <img
            src="https://wallpapers.com/images/featured/4k-nature-ztbad1qj8vdjqe0p.jpg"
            alt=""
          />
        </div>
        <div id="1" className={styles.main__content__right}>

        <div  className={styles.main__content__right__leftbox}>
          <h2>$1568</h2>
          <p>

          {progress}%
          </p>
        </div>
        <div
          className={styles.main__content__right__rightbox}
          style={{ width: `${progress}%` }}
          ></div>
      </div>
          </div>
    </div>
  );
}
