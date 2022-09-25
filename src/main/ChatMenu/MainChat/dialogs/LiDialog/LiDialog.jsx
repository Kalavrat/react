import React from "react";

import styles from "./LiDialog.module.css";

function LiDialog({
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
  unread,
}) {
  return (
    <div className={styles.li}>
      <div className={styles.head}>
        <div className={styles.avatar}>
          <div className={styles.online}></div>
          <img className={styles.ava} src={avatar} />
        </div>

        <div className={styles.dialog_name}>
          <span className={styles.name}>{name}</span>

          <div className={styles.status}>
            <img className={styles.status_img} src={status_img} />
            <span className={styles.status_text}>{status_text}</span>
          </div>
        </div>

        <div className={styles.date}>
          <span className={styles.dialog_date}>{date}</span>
        </div>
      </div>

      <div className={styles.message}>
        <div className={styles.message_prev}>
          <span className={styles.text}>{message}</span>

          <div className={styles.voice}>
            <img className={styles.micro} src={micro_img} />
            <span className={styles.voice_mes}>{voice_text}</span>
          </div>

          <div className={styles.add}>
            <div className={styles.files}>
              <img className={styles.file_img} src={file_img} />
              <span className={styles.file}>Files (x2)</span>
            </div>

            <div className={styles.photos}>
              <img className={styles.photo_img} src={photo_img} />
              <span className={styles.photo}>Photo</span>
            </div>
          </div>
        </div>

        <div className={styles.unread_mes}>
          <span className={styles.unread}>{unread}</span>
        </div>
      </div>
    </div>
  );
}
export default LiDialog;
