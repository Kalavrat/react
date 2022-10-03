import React from "react";

import styles from "./LiDialog.module.css";

function Create_online({ online }) {
  if (online == true) {
    return <div className={styles.online}></div>;
  }
}

function Create_unread({ unread }) {
  if (unread > 0 && unread < 100) {
    return (
      <div className={styles.unread_mes}>
        <span className={styles.unread}>{unread}</span>
      </div>
    );
  } else if (unread > 99) {
    return (
      <div className={styles.unread_mes}>
        <span className={styles.unread}>99+</span>
      </div>
    );
  } else {
  }
}

function Create_file({ file_img }) {
  if (file_img == 0) {
  } else if (file_img == 1) {
    return (
      <div className={styles.files}>
        <img className={styles.file_img} src={"file.svg"} />
        <span className={styles.file}>File</span>
      </div>
    );
  } else {
    return (
      <div className={styles.files}>
        <img className={styles.file_img} src={"file.svg"} />
        <span className={styles.file}>File (x{file_img})</span>
      </div>
    );
  }
}

function Create_photo({ photo_img }) {
  if (photo_img == 0) {
  } else if (photo_img == 1) {
    return (
      <div className={styles.photos}>
        <img className={styles.photo_img} src="color.svg" />
        <span className={styles.photo}>Photo</span>
      </div>
    );
  } else {
    return (
      <div className={styles.photos}>
        <img className={styles.photo_img} src="color.svg" />
        <span className={styles.photo}>Photo (x{photo_img})</span>
      </div>
    );
  }
}

function Create_video({ video_img }) {
  if (video_img == 0) {
  } else if (video_img == 1) {
    return (
      <div className={styles.videos}>
        <img className={styles.video_img} src={"film.svg"} />
        <span className={styles.video}>Video</span>
      </div>
    );
  } else {
    return (
      <div className={styles.videos}>
        <img className={styles.video_img} src={"film.svg"} />
        <span className={styles.video}>Video (x{video_img})</span>
      </div>
    );
  }
}

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
  video_img,
  unread,
}) {
  return (
    <div className={styles.li}>
      <div className={styles.head}>
        <div className={styles.person}>
          <div className={styles.avatar}>
            {/* <div className={styles.online}></div> */}
            <Create_online online={online} />
            <img className={styles.ava} src={avatar} />
          </div>

          <div className={styles.dialog_name}>
            <span className={styles.name}>{name}</span>

            <div className={styles.status}>
              <img className={styles.status_img} src={status_img} />
              <span className={styles.status_text}>{status_text}</span>
            </div>
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
            <Create_file file_img={file_img} />
            <Create_photo photo_img={photo_img} />
            <Create_video video_img={video_img} />
          </div>
        </div>

        {/* <div className={styles.unread_mes}>
          <span className={styles.unread}>{unread}</span>
        </div> */}
        <Create_unread unread={unread} />
      </div>
    </div>
  );
}
export default LiDialog;
