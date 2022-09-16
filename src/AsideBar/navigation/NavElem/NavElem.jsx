import React from "react";
import styles from "./NavElem.module.css";

function NavElem({ href, label }) {
  return (
    <a className={styles.a} href={href}>
      {label}
    </a>
  );
}
export default NavElem;
