import React from "react";
import styles from "./VideoSection.module.css";
import Typography from "../Typography/Typography";

const VideoSection = (props) => {
  return <div className={styles.videoContainer}>Video</div>;
};

export default React.memo(VideoSection);
