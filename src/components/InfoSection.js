import React from "react";

import Card from "../Ui/Card";

import classes from "./InfoSection.module.scss";

const InfoSection = () => {
  return (
    <div className={classes.infoContainer}>
      <div className={classes.contentContainer}>
        <div className={classes.infoHeading}>
          <p>
            A nearshore experience like <br /> you've never had before
          </p>
        </div>
        <div className={classes.infoContent}>
          <p>
            we are professsional,transparent team with <br />
            interest in building teams & products. Our talented teams
            <br /> craft the best code and design amazing user experiences for
            our clients <br />
            below are our prestigous member of the team
          </p>
        </div>
      </div>

      <div className={classes.memberContainer}>
        <Card title="911401" name="Saket " />
        <Card title="911339" name="Sanket " />
        <Card title="911457" name="Soumyajyoti" />
        <Card title="911547" name="Aditya " />
        <Card title="911177" name="Boopesh " />
      </div>
    </div>
  );
};

export default InfoSection;
