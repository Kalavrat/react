import React from "react";
import styles from "./img.module.css";

function Img() {
  return (
    <div className={styles.acc}>
      <img className={styles.img} src={"user.svg"} />
      <a className={styles.a}>Henry Jabbawockiez</a>
    </div>
  );
}
export default Img;
