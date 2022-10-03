import React from "react";
import ChatMenu from "./ChatMenu/ChatMenu";
import Person from "./personality/personality";

import styles from "./Main.module.css";

function Main() {
  return (
    <div className={styles.div}>
      <ChatMenu></ChatMenu>
      <Person></Person>
    </div>
  );
}
export default Main;
