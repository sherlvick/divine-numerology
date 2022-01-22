import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

import Logo from "../../assets/layout/logo.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <section className={classes.Row}>
        <img src={Logo} alt="Logo" />
        <div className={classes.ListView}>
          <h3>Quick Links</h3>
          <Link to="/" className={classes.Link}>
            Home
          </Link>
          <Link to="services" className={classes.Link}>
            Services
          </Link>
          <Link to="about-us" className={classes.Link}>
            About Us
          </Link>
          <Link to="contact-us" className={classes.Link}>
            Contact Us
          </Link>
        </div>
        <div className={classes.ListView}>
          <h3>Contact With Us</h3>
          <a href="tel:+9199880 94999" className={classes.Link}>+91 99880 94999</a>
          <a href="mailto: xyz@example.com" className={classes.Link}>xyz@example.com</a>
          <div className={`${classes.Row} ${classes.Pdtop1em}`}>
            <img src={facebook} alt="Logo" />
            <img src={twitter} alt="Logo" />
            <img src={instagram} alt="Logo" />
          </div>
        </div>
      </section>
      <p className={classes.Copyright}>&copy; 2021 All Rights Reserved by lorem.ipsem</p>
    </footer>
  );
};

export default Footer;
