import classes from "./Footer.module.scss";

const Footer = () => {
  const handleYear = () => {
    const date = new Date().getFullYear().toString();
    if (date === "2023") {
      return date;
    } else {
      return `2023-${date}`;
    }
  };

  const year = handleYear();

  return (
    <div className={classes.container}>
      <small>
        &copy; {year} |{" "}
        <a
          href="https://www.linkedin.com/in/andy-ashley-b70539204/"
          rel="noreferrer"
          target="_blank"
        >
          Andy Ashley
        </a>
      </small>
    </div>
  );
};

export default Footer;
