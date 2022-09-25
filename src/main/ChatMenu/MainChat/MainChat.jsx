import React from "react";
import Search from "./search/search";
import Dialogs from "./dialogs/dialogs";

import styles from "./MainChat.module.css";

function MainChat() {
  return (
    <div>
      <Search />
      <Dialogs />
    </div>
  );
}
export default MainChat;
