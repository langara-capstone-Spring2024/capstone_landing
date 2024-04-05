import React from "react";
import styles from "./TopSection.module.css";
import Typography from "../Typography/Typography";
import topSectionImage from "/assets/topSection.jpeg";

const TopSection = (props) => {
  return (
    <div className={styles.topContainer}>
      <div className={styles.titleContainer}>
        <Typography variant="title-1" color="white-primary">
          From Slow Hours
        </Typography>
        <Typography variant="title-1" color="white-primary">
          to Golden Hours
        </Typography>
        <div className={styles.subtitle}>
          <Typography variant="bodylg" color="white-secondary">
            Want to boost your restaurant’s business during slow hours?
          </Typography>
          <Typography variant="bodylg" color="white-secondary">
            nom! can help you by offering time-based promos to deal-savvy
          </Typography>
          <Typography variant="bodylg" color="white-secondary">
            customers
          </Typography>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <img
          src={topSectionImage}
          alt="Top Section"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default React.memo(TopSection);
