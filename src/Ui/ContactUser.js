import React from "react";

import classes from "./ContactUser.module.scss";

const ContactUser = (props) => {
  return (
    <div className={classes.UserConatiner}>
      <p className={classes.title}>{props.title} </p>
      <p className={classes.email}>{props.email}</p>
    </div>
  );
};

export default ContactUser;
