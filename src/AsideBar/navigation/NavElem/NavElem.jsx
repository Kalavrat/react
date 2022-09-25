import React from "react";
import styles from "./NavElem.module.css";
import { NavLink } from "react-router-dom";

function NavElem({ href, label, link }) {
  return (
    <NavLink
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
  );
}
export default NavElem;
