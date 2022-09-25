import React from "react";

import styles from "./search.module.css";

function Search() {
  return (
    <div className={styles.div}>
      <img className={styles.img} src="search.svg" />
      {/* <span className={styles.span}>Search</span> */}
      <input className={styles.inp} placeholder="Search" type="text" />
    </div>
  );
}
export default Search;
