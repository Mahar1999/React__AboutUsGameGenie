import React from "react";

import ContactUser from "../Ui/ContactUser";

import classes from "./ContactSection.module.scss";

const ContactSection = () => {
 

  return (
    <div className={classes.contactContainer}>
      <div className={classes.contactInfo}>
        <div className={classes.contactHeadingContainer}>
          <p className={classes.contactHeadingPrimary}>Contact Details</p>
          <p className={classes.contactHeadingTagline}>
            For more queries contact anyone of us anytime !
          </p>
        </div>

        <div className={classes.ContactUserContainer}>
          <ContactUser title={"Saket Mahar"} email={"911401@cognizant.com"} />
          <ContactUser
            title={"Sanket kulkarni"}
            email={"911339@cognizant.com"}
          />
          <ContactUser
            title={"Soumyajyoti Dutta"}
            email={"911457@cognizant.com"}
          />
          <ContactUser title={"Aditya Roy"} email={"911547@cognizant.com"} />
          <ContactUser
            title={"Boopesh Anbalagan"}
            email={"911177@cognizant.com"}
          />
        </div>
      </div>
      <div className={classes.contactImage}></div>
    </div>
  );
};

export default ContactSection;
