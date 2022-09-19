import React from "react";
import styles from "./NavElem.module.css";
import { NavLink } from "react-router-dom";

function NavElem({ href, label, link }) {
  return (
    // <div>
    <NavLink
      // className={styles.link}
      to={href}
      className={({ isActive }) =>
        isActive ? `${styles.link} ${styles.selected}` : `${styles.link}`
      }
    >
      <img src={link} />
      <span className={styles.a} to={href}>
        {label}
      </span>
    </NavLink>
    // <img src={link} />

    // </div>
  );
}
export default NavElem;
