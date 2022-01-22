import classes from "./ContactUs.module.css";

import contactBg from "../../assets/contact/conatct-bg-crop.png";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";

const ContactUs = () => {
  return (
    <section className={classes.Row}>
      <div className={classes.InfoWrapper}>
        <h1 className={classes.GetInTouchHeading}>LET'S TALK</h1>
        <p>Reach us with your problems and we will give you the best solution</p>
        <p>Or send us an email:</p>
        <a href="mailto: xyz@example.com" className={classes.Link}>xyz@example.com</a>
        <div className={`${classes.Row} ${classes.PdRt10vw}`}>
        <div className={classes.ListView}>
        <h3 className={classes.TextUnderline}>STAY IN TOUCH</h3>
            <img className={classes.Pdtop1em} src={facebook} alt="Logo" />
            <img className={classes.Pdtop1em} src={twitter} alt="Logo" />
            <img className={classes.Pdtop1em} src={instagram} alt="Logo" />
          </div>
          <div className={classes.ListView}>
          <h3 className={classes.TextUnderline}>ADDRESS</h3>
            <p className={classes.RmParaMg}>Lorem ipsum dolor</p>
            <p className={classes.RmParaMg}>sit amet,</p>
            <p className={classes.RmParaMg}>PIN 327482</p>
          </div>
        </div>

      </div>
      <div className={classes.BgWrapper}>
        <img src={contactBg} className={classes.Bg} alt="contact-bg" />
      </div>
    </section>
  );
};

export default ContactUs;
