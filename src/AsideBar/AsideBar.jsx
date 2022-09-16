import React from "react";
import Navigation from "./navigation/nav";
import Img from "./img/img";
import Logout from "./logout/logout";

import styles from "./AsideBar.module.css";

function AsideBar() {
  return (
    <aside className={styles.AsideBar}>
      <Img />
      <Navigation />
      <Logout />
      {/* <button /> */}
    </aside>
  );
}
export default AsideBar;
