import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Typography from "../Typography/Typography";

const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth < 768;
      setIsMobileView(mobileView);

      if (!mobileView && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <div className={styles.header}>
      <img src="/assets/logo.png" alt="logo" className={styles.logo} />
      {isMobileView && (
        <div
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      <nav
        className={`${styles.navigation} ${isMenuOpen ? styles.menuOpen : ""}`}
      >
        <div className={styles.navItem}>
          <Typography variant="bodySm" color="link-gray">
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </Typography>
        </div>
        <div className={styles.navItem}>
          <Typography variant="bodySm" color="link-gray">
            <a href="#features" onClick={closeMenu}>
              Features
            </a>
          </Typography>
        </div>
        <div className={styles.navItem}>
          <Typography variant="bodySm" color="white-primary">
            <a href="#team" onClick={closeMenu}>
              The Team
            </a>
          </Typography>
        </div>
        <div className={styles.navItem}>
          <Typography variant="bodySm" color="link-gray">
            <a href="#contact" onClick={closeMenu}>
              Contact Us
            </a>
          </Typography>
        </div>
        <div className={styles.navItem}>
          <div className={styles.proposalBtnFixed}>
            <button className={styles.proposalBtn} onClick={() => {}}>
              <Typography variant="bodySm" color="white">
                View Proposal
              </Typography>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default React.memo(Header);
