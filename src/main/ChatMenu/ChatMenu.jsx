import React from "react";
import HeadChat from "./HeadChat/HeadChat";
import MainChat from "./MainChat/MainChat";

import styles from "./ChatMenu.module.css";

function ChatMenu() {
  return (
    <div className={styles.div}>
      <HeadChat />
      <MainChat />
    </div>
  );
}
export default ChatMenu;
