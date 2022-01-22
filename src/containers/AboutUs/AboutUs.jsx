import classes from "./AboutUs.module.css";

import addRectHoc from "../../components/addRectHoc";

import profileImage from "../../assets/about/aarti-profile.png";
import certificateImage from "../../assets/about/aarti-cert.png";

const AboutUs = () => {
  const Title = ({ children }) => (
    <p className={classes.Title}>About{children}</p>
  );
  const TitleComponent = addRectHoc(Title);

  return (
    <section>
      <div className={classes.Header}>
        <TitleComponent yellowRectWithoutAni />
        <h1 className={classes.Heading}>AARTI RAANA</h1>
      </div>
      <div className={classes.IntroWrapper}>
        <img src={profileImage} alt="Aarti Raana" />
        <div className={classes.IntroText}>
          <p>
            Aarti Raana is a certified numerologist from Vassundhara School of
            Astrology, who gives accurate future readings through a medium of
            Name, Numbers and Signature.
          </p>
          <p>
            She also uses her intution credibility to offer guidance to all of
            her clients and encourages them to move in a positive direction. She
            provides a numerological report consisting of around 5 pages of A4
            Size sheet, in detail which covers about the individual’s
            personality , how an individual thinks from heart, about the balance
            in life and others. She also provides the service of Auspicious
            Years of individual and personal year, which colour is favourable
            when going out for important meetings and various other services
            like signature analysis, 9 year cycle change, finance, health and
            career numerology.
          </p>
        </div>
      </div>
      <img
        className={classes.Center}
        src={certificateImage}
        alt="Certificate"
      />
    </section>
  );
};

export default AboutUs;
