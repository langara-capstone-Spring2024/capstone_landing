import React from "react";
import styles from "./Home.module.css";
import Header from "../../component/base/Header/Header";
import TopSection from "../../component/base/TopSection/TopSection";
import FeatureSection from "../../component/base/FeatureSection/FeatureSection";
import TeamSection from "./../../component/base/TeamSection/TeamSection";
import VideoSection from "../../component/base/VideoSection/VideoSection";
import ContactSection from "../../component/base/ContactSection/ContactSection";
import Footer from "../../component/base/Footer/Footer";

const HomeView = (props) => {
  const {} = props;

  return (
    <div>
      <Header />
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
