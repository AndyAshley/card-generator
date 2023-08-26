"use client";
import { useState } from "react";

import FormInput from "../FormInput/FormInput";
import FormSelect from "../FormSelect/FormSelect";
import FormGroup from "../FormGroup/FormGroup";
import departments from "@/app/constants/departments";

const CardForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    department: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  const handleReset = () => {
    for (const key in formData) {
      setFormData((prev) => ({ ...prev, [key]: "" }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <FormInput
          name="firstName"
          label="First Name"
          onChange={handleChange}
          value={formData.firstName}
          required
        />
        <FormInput
          name="lastName"
          label="Last Name"
          onChange={handleChange}
          value={formData.lastName}
        />
      </FormGroup>

      <FormGroup>
        <FormInput
          name="email"
          label="Email"
          type="email"
          onChange={handleChange}
        />
        <FormInput
          name="phone"
          label="Phone"
          onChange={handleChange}
          value={formData.email}
        />
      </FormGroup>

      <FormGroup>
        <FormInput
          name="company"
          label="Company"
          onChange={handleChange}
          value={formData.company}
          full
        />
      </FormGroup>

      <FormGroup>
        <FormSelect
          name="department"
          label="Department"
          options={departments}
          onChange={handleChange}
          value={formData.department}
          full
        />
      </FormGroup>

      <button>Submit</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
};

export default CardForm;
