import React from "react";

import styles from "./HeadPerson.module.css";

function HeadPerson() {
  return (
    <div className={styles.head}>
      <div className={styles.person}>
        <img className={styles.ava} src="third.svg" alt="" />
        <div className={styles.dialog_name}>
          <span className={styles.name}>Nika Jerrardo</span>
          <span className={styles.online}>last online 5 hours ago</span>
        </div>
      </div>
      <div className={styles.atach}>
        <div className={styles.files}>
          <img className={styles.file} src="skrepka.svg" alt="" />
        </div>
        <div className={styles.adds}>
          <img className={styles.add} src="vert.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
export default HeadPerson;
