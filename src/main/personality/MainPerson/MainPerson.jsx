import React from "react";

import styles from "./MainPerson.module.css";

function MainPerson() {
  return (
    <div className={styles.main}>
      <div className={styles.chat}></div>
      <div className={styles.lower}></div>
    </div>
  );
}
export default MainPerson;
