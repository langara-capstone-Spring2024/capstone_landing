import React from "react";
import Typography from "../Typography/Typography";
import styles from "./TeamMarquee.module.css";

const TeamMarquee = ({
  imageSrc,
  bgColor,
  textColor,
  description,
  firstName,
  lastName,
  role,
}) => {
  return (
    <div
      className={styles.teamMarqueeContainer}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div className={styles.descriptionContainer}>
        <Typography variant="title-2" style={{ color: textColor }}>
          “{description}”
        </Typography>
      </div>
      <div className={styles.teamFood}>
        <div className={styles.imageContainer}>
          <img src={imageSrc} alt="member" />
        </div>
        <div className={styles.roleContainer}>
          <Typography variant="title-3" style={{ color: textColor }}>
            {firstName} {lastName}
          </Typography>
          <Typography variant="bodySm" style={{ color: textColor }}>
            {role}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default TeamMarquee;
