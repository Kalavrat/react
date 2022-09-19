import React from "react";

import styles from "./CreateChat.module.css";
function CreateChat() {
  return (
    <div className={styles.div}>
      <img className={styles.img} src="plus.svg" alt="" />
      <span className={styles.span}>Create New Chat</span>
    </div>
  );
}
export default CreateChat;
