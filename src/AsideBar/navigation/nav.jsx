import React from "react";
import NavElem from "./NavElem/NavElem";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";

function Navigation() {
  const array = [
    { href: "home", label: "home", link: "grid.svg" },
    { href: "chat", label: "chat", link: "IconChat.svg" },
    { href: "contact", label: "contact", link: "person.svg" },
    { href: "notifications", label: "notifications", link: "bell.svg" },
    { href: "calendar", label: "calendar", link: "calendar.svg" },
    { href: "settings", label: "settings", link: "settings.svg" },
  ];

  return (
    <nav className="dfdf">
      <ul className={styles.ul}>
        {
          array.map(({ href, label, link }) => (
            <li className={styles.li} key={href}>
              <NavElem href={href} label={label} link={link} />
            </li>
          ))
        }
      </ul>
    </nav>
  );
}
export default Navigation;
