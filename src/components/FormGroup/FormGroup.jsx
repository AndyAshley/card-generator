import classes from "./FormGroup.module.scss";

const FormGroup = ({ children}) => {
  return (
    <div
      className={classes.formGroup}
    >
      {children}
    </div>
  );
};

export default FormGroup;
