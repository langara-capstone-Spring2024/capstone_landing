import React from "react";
import styles from "./Header.module.css";
import Typography from "../Typography/Typography";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <img src="./../../../../public/assets/logo.png" alt="logo" />
      <nav className={styles.navigation}>
        <Typography variant="bodySm" color="black">
          <a href="#home">About</a>
        </Typography>
        <Typography variant="bodySm" color="black">
          <a href="#features">Features</a>
        </Typography>
        <Typography variant="bodySm" color="black">
          <a href="#team">The Team</a>
        </Typography>
        <Typography variant="bodySm" color="black">
          <a href="#contact">Contact Us</a>
        </Typography>
        <button className={styles.proposalBtn} onClick={() => {}}>
          <Typography variant="bodySm" color="white">
            View Proposal
          </Typography>
        </button>
      </nav>
    </div>
  );
};

export default React.memo(Header);
