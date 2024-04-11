import React, { useState } from "react";
import styles from "./VideoSection.module.css";
import { FaYoutube } from "react-icons/fa";

const VideoSection = (props) => {
  const [isVideo, setIsVideo] = useState(false);
  const videoSrc = "https://www.youtube.com/embed/9B5CqoOaCTM?rel=0&autoplay=1";

  const handleVideoPlay = () => {
    setIsVideo(true); // When the thumbnail is clicked, set isVideo to true to display the video
  };

  return (
    <div>
      <div className={styles.videoContainer}>
        {isVideo ? (
          <iframe
            width="1505"
            height="569"
            src={videoSrc}
            title="nom! app"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            name="landingVideo"
          ></iframe>
        ) : (
          <div onClick={handleVideoPlay} className={styles.videoThumbContainer}>
            <FaYoutube className={styles.icon} />
            <img
              src="/assets/Videothumb.jpg"
              alt="Play Video"
              className={styles.videoThumbnail}
              style={{ cursor: "pointer" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(VideoSection);
