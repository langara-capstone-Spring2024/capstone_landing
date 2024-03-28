import React from "react";
import styles from "./TopSection.module.css";
import Typography from "../Typography/Typography";
import topSectionImage from "./../../../../public/assets/topSection.jpeg";

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
            Tired of empty seats during off-peak hours?
          </Typography>
          <Typography variant="bodylg" color="white-secondary">
            nom! helps restaurants like yours maximize revenue by offering
          </Typography>
          <Typography variant="bodylg" color="white-secondary">
            time-based deals to hungry customers.
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
