import classes from "./Header.module.scss";
import HeaderCard from "./HeaderCard";

const Header = () => {
  return (
    <div className={classes.container}>
      <h1>Company Card Generator</h1>
      <HeaderCard />
    </div>
  );
};

export default Header;
