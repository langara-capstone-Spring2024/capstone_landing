import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Typography from "../Typography/Typography";

const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [activeSection, setActiveSection] = useState("home");

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "features", "team", "contact"];
      const bottomThreshold = 50;

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - bottomThreshold;

      if (nearBottom) {
        setActiveSection("contact");
      } else {
        const currentSection = sections.find((section) => {
          const element = document.getElementById(section);
          if (element) {
            return (
              window.scrollY >= element.offsetTop - bottomThreshold &&
              window.scrollY <
                element.offsetTop + element.offsetHeight - bottomThreshold
            );
          }
          return false;
        });

        if (currentSection) {
          setActiveSection(currentSection);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const openPdf = () => {
    const pdfPath = "/assets/nom-proposal.pdf";
    window.open(pdfPath, "_blank");
  };

  return (
    <div className={styles.header}>
      <img
        src="/assets/logo.png"
        alt="logo"
        className={styles.logo}
        onClick={scrollToTop}
      />
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
        <div
          className={`${styles.navItem} ${
            activeSection === "home" ? styles.active : ""
          }`}
        >
          <Typography variant="bodySm" color="link-gray">
            <a
              href="#home"
              onClick={() => {
                closeMenu();
                setActiveSection("home");
              }}
            >
              Home
            </a>
          </Typography>
        </div>
        <div
          className={`${styles.navItem} ${
            activeSection === "features" ? styles.active : ""
          }`}
        >
          <Typography variant="bodySm" color="link-gray">
            <a
              href="#features"
              onClick={() => {
                closeMenu();
                setActiveSection("features");
              }}
            >
              Features
            </a>
          </Typography>
        </div>
        <div
          className={`${styles.navItem} ${
            activeSection === "team" ? styles.active : ""
          }`}
        >
          <Typography variant="bodySm" color="white-primary">
            <a
              href="#team"
              onClick={() => {
                closeMenu();
                setActiveSection("team");
              }}
            >
              The Team
            </a>
          </Typography>
        </div>
        <div
          className={`${styles.navItem} ${
            activeSection === "contact" ? styles.active : ""
          }`}
        >
          <Typography variant="bodySm" color="link-gray">
            <a
              href="#contact"
              onClick={() => {
                closeMenu();
                setActiveSection("contact");
              }}
            >
              Contact Us
            </a>
          </Typography>
        </div>
        <div className={styles.navItem}>
          <div className={styles.proposalBtnFixed}>
            <button className={styles.proposalBtn} onClick={openPdf}>
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
