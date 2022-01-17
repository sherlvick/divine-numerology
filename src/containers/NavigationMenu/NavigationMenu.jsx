import classes from "./NavigationMenu.module.css";
import Logo from "../../assets/layout/logo.svg";

const NavigationMenu = () => {
    return (
        <div className={classes.NavContainer}>
            <div className={classes.Logo}>
                <img src={Logo} alt="Logo"/>
            </div>
            <div className={classes.MenusWrapper}>

            </div>
        </div>
    )
}

export default NavigationMenu