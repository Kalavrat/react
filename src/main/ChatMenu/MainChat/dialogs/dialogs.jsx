import React from "react";
import LiDialog from "./LiDialog/LiDialog";
import styles from "./dialogs.module.css";

function Dialogs() {
  let array = [
    {
      href: "first",
      online: true,
      avatar: "first.svg",
      name: "Luy Robin",
      status_img: "tochki.svg",
      status_text: "writes",
      date: "1 minute ago",
      file_img: 0,
      photo_img: 0,
      video_img: 0,
      message:
        "Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes). ",
      unread: 100,
    },
    {
      href: "second",
      online: true,
      avatar: "second.svg",
      name: "Jared Sunn",
      status_img: "Rec_icon.svg",
      status_text: "records voice message",
      date: "1 minute ago",
      micro_img: "mic.svg",
      voice_text: "Voice message (01:15)",
      file_img: 2,
      photo_img: 1,
      video_img: 0,
      unread: 3,
    },
    {
      href: "third",
      online: false,
      avatar: "third.svg",
      name: "Nika Jerrardo",
      status_text: "last online 5 hours ago",
      date: "3 days ago",
      file_img: 0,
      photo_img: 0,
      video_img: 2,
      message:
        "Cicero famously orated against his political opponent Lucius Sergius Catilina.",
      unread: 1,
    },
    {
      href: "fourth",
      online: false,
      avatar: "fourth.svg",
      name: "David Armrosa",
      status_text: "last online 5 hours ago",
      date: "3 days ago",
      file_img: 0,
      photo_img: 0,
      video_img: 0,
      message:
        "Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes). ",
      unread: 0,
    },
  ];
  return (
    <div>
      <ul className={styles.ul}>
        {array.map(
          ({
            href,
            online,
            avatar,
            name,
            status_img,
            status_text,
            date,
            message,
            micro_img,
            voice_text,
            file_img,
            photo_img,
            video_img,
            unread,
          }) => (
            <li className={styles.li} key={href}>
              <LiDialog
                href={href}
                online={online}
                avatar={avatar}
                name={name}
                status_img={status_img}
                status_text={status_text}
                date={date}
                message={message}
                micro_img={micro_img}
                voice_text={voice_text}
                file_img={file_img}
                photo_img={photo_img}
                video_img={video_img}
                unread={unread}
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
}
export default Dialogs;
