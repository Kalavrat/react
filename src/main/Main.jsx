import React from "react";
import ChatMenu from "./ChatMenu/ChatMenu";

import styles from "./Main.module.css";

function Main() {
  return (
    <div className={styles.div}>
      <ChatMenu></ChatMenu>
    </div>
  );
}
export default Main;
