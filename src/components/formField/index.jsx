import React from "react";
import FormInput from "../formInput";
import "./index.css";

const FormField = ({
  label,
  id,
  inputType = "text",
  name,
  value,
  placeholder,
  errorText,
  handleChange = () => {},
  required,
  inputStyle,
}) => {
  return (
    <div className="formField">
      <label className="formField__label" htmlFor={id}>
        {label}
      </label>
      <FormInput
        type={inputType}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        style={inputStyle}
      />
      {errorText ? <p className="formField__error">{errorText}</p> : null}
    </div>
  );
};

export default FormField;
