import { Link } from "react-router-dom";
import classes from "./GetInTouch.module.css";

import addRectHoc from "../../components/addRectHoc";

const GetInTouch = () => {
  const GetInTouchTitle = ({ children }) => (
    <p className={classes.Title}>
      How can we make a difference for you{children}
    </p>
  );
  const GetInTouchTitleComponent = addRectHoc(GetInTouchTitle);
  return (
    <div className={classes.GetInTouchWrapper}>
      <GetInTouchTitleComponent yellowRectWithoutAni />
      <h1 className={classes.GetInTouchHeading}>Let’s Talk</h1>
      <Link to="contact-us">Contact Us</Link>
    </div>
  );
};

export default GetInTouch;
