"use client";
import { useEffect, useState } from "react";
import InputGroup from "../InputGroup/InputGroup";
import classes from "./FormSelect.module.scss";

const FormSelect = ({ name, label, value, options, onChange, full }) => {
  const [isLifted, setIsLifted] = useState(false);

  // When the user focuses on the input, lift the label
  const handleLabel = () => {
    setIsLifted(true);
  };

  // If the user made no selection, return the label to its original position
  const handleBlur = (e) => {
    if (value === "") {
      setIsLifted(false);
    }
  };

  // If the value changes to an empty string (reset), return the label to its original position
  useEffect(() => {
    if (value === "") {
      setIsLifted(false);
    }
  }, [value]);

  return (
    <InputGroup full={full}>
      <select
        id={name}
        name={name}
        className={classes.input}
        onFocus={handleLabel}
        value={value}
        onBlur={handleBlur}
        onChange={onChange}
      >
        <option value="" disabled hidden />
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <label
        htmlFor={name}
        className={`${classes.label} ${isLifted && classes.lift}`}
      >
        {label}
      </label>
    </InputGroup>
  );
};

export default FormSelect;
