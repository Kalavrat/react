import React from "react";
import CreateChat from "./CreateChat/CreateChat";

import styles from "./HeadChat.module.css";
function HeadChat() {
  return (
    <div className={styles.div}>
      <span className={styles.span}>Chats</span>
      <CreateChat />
    </div>
  );
}
export default HeadChat;
