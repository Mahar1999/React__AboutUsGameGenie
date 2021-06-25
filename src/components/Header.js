import React from "react";
import { IoHeartSharp } from "react-icons/io5";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <div className={classes.headerContainer}>
        
      <div className={classes.headerTitle}>
        <p>A word about us</p>
      </div>

      <div className={classes.heading}>
        <p className={classes.primaryHeading}>Game - Genie</p>
        <p className={classes.secondaryHeading}>
          We <IoHeartSharp className={classes.headerIcon} /> what we do
        </p>
      </div>
    </div>
  );
};

export default Header;
