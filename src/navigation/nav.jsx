import React from "react";
import NavElem from "./NavElem/NavElem";

function Navigation() {
  let array = [
    {
      href: "home",
      label: "home",
      link: "grid.svg",
    },
    { href: "chat", label: "chat", link: "IconChat.svg" },
    { href: "contact", label: "contact", link: "person.svg" },
    { href: "notifications", label: "notifications", link: "bell.svg" },
    { href: "calendar", label: "calendar", link: "calendar.svg" },
    { href: "settings", label: "settings", link: "settings.svg" },
  ];
  console.log(array);

  return (
    <nav>
      <ul>
        {
          array.map(({ href, label, link }) => (
            <li>
              <img src={link} alt="gugu" />
              <NavElem href={href} label={label} />
            </li>
          ))

          /* <li>
          <NavElem href="home" label="home" />
        </li>
        <li>
          <NavElem href="chat" label="chat" />
        </li>
        <li>
          <NavElem href="contact" label="contact" />
        </li>
        <li>
          <NavElem href="notifications" label="notifications" />
        </li>
        <li>
          <NavElem href="calendar" label="calendar" />
        </li>
        <li>
          <NavElem href="settings" label="settings" />
        </li> */
        }
      </ul>
    </nav>
  );
}
export default Navigation;
