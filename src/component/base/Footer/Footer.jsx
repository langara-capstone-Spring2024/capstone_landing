import React from "react";
import styles from "./Footer.module.css";
import Typography from "../Typography/Typography";

const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <div className="footerCredit">
        <Typography variant="bodySm-bold" color="white-primary">
          © Nom! 2024
        </Typography>
      </div>
      <div className="footerCredit">
        <Typography variant="bodySm-bold" color="white-primary">
          Vancouver, BC
        </Typography>
      </div>
    </div>
  );
};

export default React.memo(Footer);
