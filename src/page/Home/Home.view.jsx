import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Header from "../../component/base/Header/Header";
import TopSection from "../../component/base/TopSection/TopSection";
import FeatureSection from "../../component/base/FeatureSection/FeatureSection";
import TeamSection from "./../../component/base/TeamSection/TeamSection";
import VideoSection from "../../component/base/VideoSection/VideoSection";
import ContactSection from "../../component/base/ContactSection/ContactSection";
import Footer from "../../component/base/Footer/Footer";
import Typography from "../../component/base/Typography/Typography";

const HomeView = (props) => {
  const {} = props;

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Function to hide the button when scrolling
    const handleScroll = () => {
      setIsVisible(false);
      clearTimeout(handleScroll.timeoutId);
      handleScroll.timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(handleScroll.timeoutId);
    };
  }, []);

  return (
    <div>
      <Header />
      <button
        className={`${styles.proposalBtnFixed} ${
          !isVisible ? styles.hidden : ""
        }`}
        onClick={() => {}}
        style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.5s" }}
      >
        <Typography variant="bodySm" color="white">
          View Proposal
        </Typography>
      </button>
      <div id="home">
        <TopSection />
      </div>
      <div id="features">
        <FeatureSection />
      </div>
      <VideoSection />
      <div id="team">
        <TeamSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default HomeView;
