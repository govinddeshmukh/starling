import React, { useEffect, useState } from 'react'
import styles from "./Counter.module.scss"
export default function Counter() {

  const [counter, setCounter] = useState(3499890);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter <= 3499999) {
        setCounter(counter + 1);

        // Adjust interval duration based on counter value
        if (counter > 3499990) {
          setProgress(counter);
        } else {
          setProgress(counter * 2); // For example, double the speed before reaching 95
        }
      }
    }, counter > 3499990 ? 100 : 5); // Conditional interval duration

    return () => clearInterval(interval);
  }, [counter]);
 
  return (
    <div className={styles.main}>

      <div className={styles.main__content}>
      <p>Counter: {counter}</p>
      {/* <p>Progress: {progress}</p> */}
      </div>
    </div>
  )
}
