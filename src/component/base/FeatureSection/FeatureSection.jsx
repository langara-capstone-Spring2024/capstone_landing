import React from "react";
import styles from "./FeatureSection.module.css";
import Typography from "../Typography/Typography";
import featureImg from "./../../../../public/assets/featureImg.png";
import featureImg1 from "./../../../../public/assets/featureImg-1.png";
import featureImg2 from "./../../../../public/assets/featureImg-2.png"

const FeatureSection = (props) => {
  return (
    <div className={styles.featureContainer}>
      <div className={styles.featureText}>
        <div className={styles.featureTitle}>
          <Typography variant="title-2">Set targeted deals</Typography>
        </div>
        <Typography variant="bodySm" color="secondary">
          Create irresistible offers for specific times of the day, attracting
          new customers and filling those empty seats
        </Typography>
      </div>
      <div className={styles.featureDisplay}>
        <div>
          <img src={featureImg} className={styles.image} />
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
          Use our ad-maker with customizable templates and AI-assisted ad text
          generator to create attractive in-app banners.
        </Typography>
      </div>
      <div className={styles.featureDisplay}>
        <img src={featureImg} className={styles.image} />
        <img src={featureImg1} className={styles.image} />
      </div>
      <div className={styles.featureText}>
        <div className={styles.featureTitle}>
          <Typography variant="title-2" color="primary">
            Brand Experience For Every Palate
          </Typography>
        </div>
        <div className={styles.featurePara}>
          <Typography variant="bodySm" color="secondary">
            Customer will have a feast in their eyes, showcasing mouthwatering
            photos and menus that make browsing a pleasure. We also capitalized
            on custom elements with clear filters to help users find the best
            promos for them.
          </Typography>
        </div>

        <Typography variant="bodySm" color="secondary">
          Merchants success is our priority. Our UI is designed with you in
          mind. Strategically placed controls and clear data visualization allow
          you to manage orders efficiently, update menus with ease, and track
          performance at a glance. Focus on what matters most - creating amazing
          dishes - while our UI takes care of the rest.
        </Typography>
      </div>
    </div>
  );
};

export default React.memo(FeatureSection);
