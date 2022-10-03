import React from "react";
import HeadPerson from "./HeadPerson/HeadPerson";
import MainPerson from "./MainPerson/MainPerson";

import styles from "./personality.module.css";

function Person() {
  return (
    <div className={styles.div}>
      <HeadPerson />
      <MainPerson />
    </div>
  );
}
export default Person;
