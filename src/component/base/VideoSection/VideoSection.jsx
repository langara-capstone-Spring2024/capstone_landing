import React, { useState } from "react";
import styles from "./VideoSection.module.css";
import Typography from "../Typography/Typography";
import videoImg from "/assets/videoImg.png";

const VideoSection = (props) => {
  const [isVideo, serIsVideo] = useState(true);
  const videoSrc = "https://www.youtube.com/embed/9B5CqoOaCTM?rel=0";

  return isVideo ? (
    <div>
      <div className={styles.videoContainer}>
        <iframe
          width="1505"
          height="569"
          src={videoSrc}
          title="nom! app"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  ) : (
    <div>
      <img
        src={videoImg}
        alt="nom!"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default React.memo(VideoSection);
