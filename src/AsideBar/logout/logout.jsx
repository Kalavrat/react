import React from "react";
import styles from "./logout.module.css";

function Logout() {
  return (
    <div className={styles.log}>
      <img src="power.svg" alt="" />
      <a className={styles.a}>log out</a>
    </div>
  );
}
export default Logout;
