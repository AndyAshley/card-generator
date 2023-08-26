import classes from "./HeaderCard.module.scss";

const HeaderCard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.bubble} style={{ "--datawidth": "200px" }} />
        <div className={classes.bubble} style={{ "--datawidth": "150px" }} />
        <div className={classes.bubble} style={{ "--datawidth": "150px" }} />
      </div>
    </div>
  );
};

export default HeaderCard;
