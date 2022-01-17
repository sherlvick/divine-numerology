import { Link } from "react-router-dom";
import classes from "./NavigationMenu.module.css";
import Logo from "../../assets/layout/logo.svg";

const NavigationMenu = () => {
    return (
        <div className={classes.NavContainer}>
            <div className={classes.Logo}>
                <img src={Logo} alt="Logo" />
            </div>
            <nav>
                <Link to="/" className={classes.Menus}>Home</Link>
                <Link to="services" className={classes.Menus}>Services</Link>
                <Link to="about-us" className={classes.Menus}>About Us</Link>
                <Link to="contact-us" className={classes.Menus}>Contact Us</Link>
            </nav>
        </div>
    )
}

export default NavigationMenu