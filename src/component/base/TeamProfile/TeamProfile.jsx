import React from "react";
import styles from "./TeamProfile.module.css";
import Typography from "../Typography/Typography";

const TeamProfile = ({
  imageSrc,
  name,
  position,
  linkedInUrl,
  websiteUrl,
  githubUrl,
  behanceUrl,
}) => {
  return (
    <div className={styles.memberContainer}>
      <div>
        <img src={imageSrc} alt={name} />
      </div>
      <div className={styles.positionContainer}>
        <Typography variant="positionBody" color="primary">
          {position}
        </Typography>
      </div>
      <Typography variant="bodySm" color="gray">
        {name}
      </Typography>
      <div className={styles.socialMediaContainer}>
        <a href={linkedInUrl}>
          <Typography variant="bodyXs" color="light-gray">
            linkedin
          </Typography>
        </a>
        <a href={websiteUrl}>
          <Typography variant="bodyXs" color="light-gray">
            website
          </Typography>
        </a>
        {githubUrl && (
          <a href={githubUrl}>
            <Typography variant="bodyXs" color="light-gray">
              github
            </Typography>
          </a>
        )}
        {behanceUrl && (
          <a href={behanceUrl}>
            <Typography variant="bodyXs" color="light-gray">
              behance
            </Typography>
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamProfile;
