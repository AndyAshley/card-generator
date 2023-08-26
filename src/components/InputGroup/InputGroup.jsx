import classes from "./InputGroup.module.scss";

const InputGroup = ({ children, full }) => {
  return (
    <div
      className={classes.inputGroup}
      style={{ "--group-width": full ? "100%" : "50%" }}
    >
      {children}
    </div>
  );
};

export default InputGroup;
