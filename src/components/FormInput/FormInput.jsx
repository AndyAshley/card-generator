import InputGroup from "../InputGroup/InputGroup";
import classes from "./FormInput.module.scss";

/**
 * A basic input component that can be customized with a label, type, value, onChange, and onBlur.
 * @param {string} name - The name of the input.
 * @param {string} label - The label for the input.
 * @param {string} type - The type of input. Defaults to "text".
 * @param {string} value - The value of the input.
 * @param {function} onChange - The function to run when the input changes.
 * @param {function} onBlur - The function to run when the input loses focus.
 * @example
 * <FormInput name="name" label="Name" type="text" value={name} onChange={handleNameChange} onBlur={handleNameBlur} />
 * @returns {JSX.Element} Rendered FormInput component
 */

const FormInput = ({
  name,
  label,
  type = "text",
  value,
  onChange,
  onBlur,
  required,
  full,
}) => {
  return (
    <InputGroup full={full}>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={classes.input}
        placeholder=" "
        required={required}
      />
      <label htmlFor={name} className={classes.label}>
        {label}
      </label>
    </InputGroup>
  );
};

export default FormInput;
