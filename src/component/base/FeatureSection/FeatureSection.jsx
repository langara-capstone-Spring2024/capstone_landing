import React from "react";
import styles from "./FeatureSection.module.css";
import Typography from "../Typography/Typography";
import featureImg from "/assets/featureImg.png";
import featureImg1 from "/assets/featureImg-1.png";
import featureImg2 from "/assets/featureImg-2.png";
import featureImg3 from "/assets/featureImg-3.png";

const FeatureSection = (props) => {
  return (
    <div className={styles.featureContainer}>
      <div className={styles.featureText}>
        <div className={styles.featureTitle}>
          <Typography variant="title-2">Set time-targeted deals</Typography>
        </div>
        <Typography variant="bodySm" color="secondary">
          Create irresistible offers for specific times of the day. Attract new
          customers and fill in those empty seats!
        </Typography>
      </div>
      <div className={styles.featureDisplay}>
        <div>
          <img src={featureImg3} className={styles.image} />
        </div>
        <img src={featureImg2} className={styles.image} />
      </div>
      <div className={styles.featureText}>
        <div className={styles.featureTitle}>
          <Typography variant="title-2">
            Customize in-app promo materials
          </Typography>
        </div>
        <Typography variant="bodySm" color="secondary">
          Use our ad-maker with customizable templates and an AI-assisted ad
          text generator to create attractive and on-brand in-app banners.
        </Typography>
      </div>
      <div className={styles.featureDisplay}>
        <img src={featureImg} className={styles.image} />
        <img src={featureImg1} className={styles.image} />
      </div>
      <div className={styles.featureText}>
        <div className={styles.featureTitle}>
          <Typography variant="title-2" color="primary">
            Brand Experience For All Tastes
          </Typography>
        </div>
        <div className={styles.featurePara}>
          <Typography variant="bodySm" color="secondary">
            Customers will have feast with their eyes with our showcase of
            mouthwatering photos and menus that make browsing restaurants’
            profiles a pleasure. We also capitalized on custom elements with
            clear filters to help users find the best promos for them.
          </Typography>
        </div>

        <Typography variant="bodySm" color="secondary">
          For merchants, we strategically placed controls and clear data
          visualization that allow easy and efficient promo creation, menu
          management, and performance tracking.
        </Typography>
      </div>
    </div>
  );
};

export default React.memo(FeatureSection);
