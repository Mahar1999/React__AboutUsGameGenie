import React from "react";

import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <p class="copyright">
        &copy; Copyright by INTADM21DN010 - POD 7 . Use for learning or your
        portfolio. Don't use to teach. Don't claim as your own.
      </p>
    </div>
  );
};

export default Footer;
