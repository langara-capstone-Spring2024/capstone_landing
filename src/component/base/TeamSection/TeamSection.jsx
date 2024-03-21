import React from "react";
import styles from "./TeamSection.module.css";
import Typography from "../Typography/Typography";

const TeamSection = (props) => {
  return (
    <div className={styles.teamContainer}>
      <div className={styles.teamTitle}>
        <Typography variant="title-2" color="primary">
          Know the Team
        </Typography>
        <Typography variant="bodySm" color="secondary">
          and what food they love the most when dining out
        </Typography>
      </div>
      <div className={styles.teamCarousel}>Carousel</div>
    </div>
  );
};

export default React.memo(TeamSection);
