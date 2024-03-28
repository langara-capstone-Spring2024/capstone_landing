import React from "react";
import styles from "./TeamSection.module.css";
import Typography from "../Typography/Typography";
import Don from "../../../../public/assets/Don.png";
import Guia from "../../../../public/assets/Guia.png";
import Yuhwan from "../../../../public/assets/Yuhwan.png";
import Yuki from "../../../../public/assets/Yuki.png";
import Gillian from "../../../../public/assets/Gillian.png";
import Monica from "../../../../public/assets/Monica.png";
import Cassie from "../../../../public/assets/Cassie.png";
import JB from "../../../../public/assets/JB.png";

const TeamSection = (props) => {
  return (
    <div className={styles.teamContainer}>
      <div className={styles.teamTitle}>
        <Typography variant="title-2" color="primary">
          Know the Team
        </Typography>
        <Typography variant="bodySm" color="secondary">
          and what food they love the most when dining out
        </Typography>
      </div>
      <div className={styles.allMembersContainer}>
        <div className={styles.memberContainer}>
          <div>
            <img src={Don} alt="don" />
          </div>
          <Typography>Lead Full Stack Developer</Typography>
          <Typography variant="bodySm" color="gray">
            Don Cosio
          </Typography>
          <div className={styles.socialMediaContainer}>
            <a href="https://www.linkedin.com/in/don-apollo-cosio-0a41b296/">
              <Typography variant="bodyXs" color="light-gray">
                linkedin
              </Typography>
            </a>
            <a href="https://don-cosio-info.vercel.app">
              <Typography variant="bodyXs" color="light-gray">
                website
              </Typography>
            </a>
            <a href="https://github.com/dacosio">
              <Typography variant="bodyXs" color="light-gray">
                github
              </Typography>
            </a>
          </div>
        </div>
        <div className={styles.memberContainer}>
          <div>
            <img src={Guia} alt="guia" />
          </div>
          <Typography>Full Stack Developer | PM</Typography>
          <Typography variant="bodySm" color="gray">
            Guia Chavez
          </Typography>
          <div className={styles.socialMediaContainer}>
            <a href="https://www.linkedin.com/in/guia-chavez/">
              <Typography variant="bodyXs" color="light-gray">
                linkedin
              </Typography>
            </a>
            <a href="">
              <Typography variant="bodyXs" color="light-gray">
                website
              </Typography>
            </a>
            <a href="https://github.com/guiachavez">
              <Typography variant="bodyXs" color="light-gray">
                github
              </Typography>
            </a>
          </div>
        </div>
        <div className={styles.memberContainer}>
          <div>
            <img src={Yuhwan} alt="yuhwan" />
          </div>
          <Typography>Full Stack Developer</Typography>
          <Typography variant="bodySm" color="gray">
            Yuhwan Ban
          </Typography>
          <div className={styles.socialMediaContainer}>
            <a href="https://www.linkedin.com/in/yuhwan-lucas-ban/">
              <Typography variant="bodyXs" color="light-gray">
                linkedin
              </Typography>
            </a>
            <a href="">
              <Typography variant="bodyXs" color="light-gray">
                website
              </Typography>
            </a>
            <a href="https://github.com/laubana">
              <Typography variant="bodyXs" color="light-gray">
                github
              </Typography>
            </a>
          </div>
        </div>
        <div className={styles.memberContainer}>
          <div>
            <img src={Yuki} alt="yuki" />
          </div>
          <Typography>Full Stack Developer</Typography>
          <Typography variant="bodySm" color="gray">
            Hoi Yan Cheng
          </Typography>
          <div className={styles.socialMediaContainer}>
            <a href="https://www.linkedin.com/in/hoi-yan-cheng/">
              <Typography variant="bodyXs" color="light-gray">
                linkedin
              </Typography>
            </a>
            <a href="">
              <Typography variant="bodyXs" color="light-gray">
                website
              </Typography>
            </a>
            <a href="https://github.com/hchenghy">
              <Typography variant="bodyXs" color="light-gray">
                github
              </Typography>
            </a>
          </div>
        </div>
        <div className={styles.memberContainer}>
          <div>
            <img src={Monica} alt="monica" />
          </div>
          <Typography>UX Lead</Typography>
          <Typography variant="bodySm" color="gray">
            Monica Esquivel
          </Typography>
          <div className={styles.socialMediaContainer}>
            <a href="https://www.linkedin.com/in/monica-esquivel-8b02666a/">
              <Typography variant="bodyXs" color="light-gray">
                linkedin
              </Typography>
            </a>
            <a href="https://monica-esquivel.com/">
              <Typography variant="bodyXs" color="light-gray">
                website
              </Typography>
            </a>
            <a href="">
              <Typography variant="bodyXs" color="light-gray">
                behance
              </Typography>
            </a>
          </div>
        </div>
        <div className={styles.memberContainer}>
          <div>
            <img src={JB} alt="jb" />
          </div>
          <Typography>UI Lead</Typography>
          <Typography variant="bodySm" color="gray">
            JB Hernandez
          </Typography>
          <div className={styles.socialMediaContainer}>
            <a href="https://www.linkedin.com/in/jbhern/">
              <Typography variant="bodyXs" color="light-gray">
                linkedin
              </Typography>
            </a>
            <a href="">
              <Typography variant="bodyXs" color="light-gray">
                website
              </Typography>
            </a>
            <a href="https://www.behance.net/jbhern">
              <Typography variant="bodyXs" color="light-gray">
                behance
              </Typography>
            </a>
          </div>
        </div>
        <div className={styles.memberContainer}>
          <div>
            <img src={Cassie} alt="cassie" />
          </div>
          <Typography>UI/UX Designer</Typography>
          <Typography variant="bodySm" color="gray">
            Cassie Hsieh
          </Typography>
          <div className={styles.socialMediaContainer}>
            <a href="https://www.linkedin.com/in/chia-lin-hsieh/">
              <Typography variant="bodyXs" color="light-gray">
                linkedin
              </Typography>
            </a>
            <a href="">
              <Typography variant="bodyXs" color="light-gray">
                website
              </Typography>
            </a>
            <a href="https://www.behance.net/cassiehsieh">
              <Typography variant="bodyXs" color="light-gray">
                behance
              </Typography>
            </a>
          </div>
        </div>
        <div className={styles.memberContainer}>
          <div>
            <img src={Gillian} alt="gillian" />
          </div>
          <Typography>UI/UX Designer</Typography>
          <Typography variant="bodySm" color="gray">
            Gillian Kwok
          </Typography>
          <div className={styles.socialMediaContainer}>
            <a href="https://www.linkedin.com/in/gillian-kwok">
              <Typography variant="bodyXs" color="light-gray">
                linkedin
              </Typography>
            </a>
            <a href="">
              <Typography variant="bodyXs" color="light-gray">
                website
              </Typography>
            </a>
            <a href="https://www.behance.net/gilliankwok">
              <Typography variant="bodyXs" color="light-gray">
                behance
              </Typography>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.teamCarousel}>Carousel</div>
    </div>
  );
};

export default React.memo(TeamSection);
