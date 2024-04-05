import React from "react";
import styles from "./TeamSection.module.css";
import Typography from "../Typography/Typography";
import Don from "/assets/Don.webp";
import Guia from "/assets/Guia.webp";
import Yuhwan from "/assets/Yuhwan.webp";
import Yuki from "/assets/Yuki.webp";
import Gillian from "/assets/Gillian.webp";
import Monica from "/assets/Monica.webp";
import Cassie from "/assets/Cassie.webp";
import JB from "/assets/JB.webp";
import TeamMarquee from "../TeamMarquee/TeamMarquee";
import YukiRound from "/assets/Yuki-round.png";
import YuhwanRound from "/assets/Yuhwan-round.png";
import DonRound from "/assets/Don-round.png";
import GuiaRound from "/assets/Guia-round.png";
import GillianRound from "/assets/Gillian-round.png";
import MonicaRound from "/assets/Monica-round.png";
import JBRound from "/assets/JB-round.png";
import CassieRound from "/assets/Cassie-round.png";
import Marquee from "react-fast-marquee";
import TeamProfile from "../TeamProfile/TeamProfile";

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
        <TeamProfile
          imageSrc={Don}
          name="Don Cosio"
          position="Lead Full Stack Developer"
          linkedInUrl="https://www.linkedin.com/in/don-apollo-cosio-0a41b296/"
          websiteUrl="https://don-cosio-info.vercel.app"
          githubUrl="https://github.com/dacosio"
        />
        <TeamProfile
          imageSrc={Guia}
          name=" Guia Chavez"
          position="Full Stack Developer | PM"
          linkedInUrl="https://www.linkedin.com/in/guia-chavez/"
          websiteUrl=""
          githubUrl="https://github.com/guiachavez"
        />
        <TeamProfile
          imageSrc={Yuhwan}
          name="Yuhwan Ban"
          position="Full Stack Developer"
          linkedInUrl="https://www.linkedin.com/in/yuhwan-lucas-ban/"
          websiteUrl=""
          githubUrl="https://github.com/laubana"
        />
        <TeamProfile
          imageSrc={Yuki}
          name="Yuki Cheng"
          position="Full Stack Developer"
          linkedInUrl="https://www.linkedin.com/in/hoi-yan-cheng/"
          websiteUrl=""
          githubUrl="https://github.com/hchenghy"
        />
        <TeamProfile
          imageSrc={Monica}
          name="Monica Esquivel"
          position="UX Lead"
          linkedInUrl="https://www.linkedin.com/in/monica-esquivel-8b02666a/"
          websiteUrl="https://monica-esquivel.com/"
          behanceUrl="/"
        />
        <TeamProfile
          imageSrc={JB}
          name="JB Hernandez"
          position="UI Lead"
          linkedInUrl="https://www.linkedin.com/in/jbhern/"
          websiteUrl="/"
          behanceUrl="https://www.behance.net/jbhern"
        />
        <TeamProfile
          imageSrc={Cassie}
          name="Cassie Hsieh"
          position="UI/UX Designer"
          linkedInUrl="https://www.linkedin.com/in/chia-lin-hsieh/"
          websiteUrl="/"
          behanceUrl="https://www.behance.net/cassiehsieh"
        />
        <TeamProfile
          imageSrc={Gillian}
          name="Gillian Kwok"
          position="UI/UX Designer"
          linkedInUrl="https://www.linkedin.com/in/gillian-kwok"
          websiteUrl="/"
          behanceUrl="https://www.behance.net/gilliankwok"
        />
      </div>

      <div className={styles.teamCarousel}>
        <Marquee pauseOnHover speed={70} className={styles.marqueeContainer}>
          <TeamMarquee
            imageSrc={YukiRound}
            bgColor="#FFC42B"
            textColor="var(--primary)"
            description="Spicy food is always the BEST! 🌶️ 🔥"
            firstName="Yuki"
            lastName="Cheng"
            role="Full Stack Developer"
          />
          <TeamMarquee
            imageSrc={YuhwanRound}
            bgColor="#3785F9"
            textColor="var(--white-primary)"
            description="Hotpot, the perfect food for socializing and dining simultaneously 🥘🥘"
            firstName="Yuhwan"
            lastName="Ban"
            role="Full Stack Developer"
          />
          <TeamMarquee
            imageSrc={MonicaRound}
            bgColor="#C0E9C9"
            textColor="var(--primary)"
            description="Love places with good coffee, tea, and desserts! ☕️ 🫖 🍰"
            firstName="Monica"
            lastName="Esquivel"
            role="UX Lead"
          />
          <TeamMarquee
            imageSrc={JBRound}
            bgColor="#FFADC6"
            textColor="var(--primary)"
            description="Why not, Doughnut 🍩 🍩"
            firstName="JB"
            lastName="Hernandez"
            role="UI Lead"
          />
          <TeamMarquee
            imageSrc={GuiaRound}
            bgColor="#F75252"
            textColor="var(--primary)"
            description="Pizza time is always a good time 😂"
            firstName="Guia"
            lastName="Chavez"
            role="Full Stack Developer | PM"
          />
          <TeamMarquee
            imageSrc={GillianRound}
            bgColor="#494949"
            textColor="var(--white-primary)"
            description="Can't go wrong with wings 😎✌🏼"
            firstName="Gillian"
            lastName="Kwok"
            role="UI/UX Designer"
          />
          <TeamMarquee
            imageSrc={DonRound}
            bgColor="#D3D3D3"
            textColor="var(--primary)"
            description="I love burgers the most. 
            Especially with bacon!🥓"
            firstName="Don"
            lastName="Cosio"
            role="Lead Full Stack Developer"
          />
          <TeamMarquee
            imageSrc={CassieRound}
            bgColor="#B3F281"
            textColor="var(--primary)"
            description="Taco is the answer, regardless of the question! 🌮🌮"
            firstName="Cassie"
            lastName="Hsieh"
            role="UI/UX Designer"
          />
        </Marquee>
      </div>
    </div>
  );
};

export default React.memo(TeamSection);
