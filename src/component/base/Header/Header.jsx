import React, { useState } from "react";
import styles from "./Header.module.css";
import Typography from "../Typography/Typography";

const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.header}>
      <img src="/assets/logo.png" alt="logo" className={styles.logo} />
      <div className={styles.hamburger} onClick={toggleMenu}>
        &#9776;
      </div>
      <nav
        className={`${styles.navigation} ${isMenuOpen ? styles.menuOpen : ""}`}
      >
        <div className={styles.navItem}>
          <Typography variant="bodySm" color="black">
            <a href="#home">About</a>
          </Typography>
        </div>
        <div className={styles.navItem}>
          <Typography variant="bodySm" color="black">
            <a href="#features">Features</a>
          </Typography>
        </div>
        <div className={styles.navItem}>
          <Typography variant="bodySm" color="black">
            <a href="#team">The Team</a>
          </Typography>
        </div>
        <div className={styles.navItem}>
          <Typography variant="bodySm" color="black">
            <a href="#contact">Contact Us</a>
          </Typography>
        </div>
        <div className={styles.navItem}>
          <button className={styles.proposalBtn} onClick={() => {}}>
            <Typography variant="bodySm" color="white">
              View Proposal
            </Typography>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default React.memo(Header);
