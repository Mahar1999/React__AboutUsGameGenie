import React from "react";

import { IoPersonSharp } from "react-icons/io5";
import classes from "./Card.module.scss";

const Card = (props) => {
  return (
    <div className={classes.CardContainer}>
      <div className={classes.card}>
        <p className={classes.card__title}>{props.title}</p>
        <IoPersonSharp className={classes.card__icon} />
        <p className={classes.card__name}>{props.name}</p>
      </div>
    </div>
  );
};

export default Card;
