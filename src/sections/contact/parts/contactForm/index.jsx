import { useState } from "react";
import FormField from "../../../../components/formField";
import "./index.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    serviceType: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validate = (data) => {
    const errors = {};
    const entries = Object.entries(data);
    for (const [key, value] of entries) {
      if (!value) {
        errors[key] = "This field is required";
      }
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formData));
    console.log(formData);
  };

  return (
    <div className="contactForm">
      <form onSubmit={handleSubmit}>
        <FormField
          label="First Name"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          handleChange={handleChange}
          placeholder="First Name"
          errorText={errors.firstName}
        />
        <FormField
          label="Last Name"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          handleChange={handleChange}
          placeholder="Last Name"
          errorText={errors.lastName}
        />
        <FormField
          label="Phone Number"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          handleChange={handleChange}
          placeholder="Phone Number"
          inputStyle="full"
          inputType="tel"
          errorText={errors.phoneNumber}
        />
        <FormField
          label="What Service are you interested in?"
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          handleChange={handleChange}
          inputStyle="full"
          placeholder="What Service are you interested in?"
          errorText={errors.serviceType}
        />
        <input
          className="contactForm__submit"
          type="submit"
          value="Submit Now"
        />
      </form>
    </div>
  );
};

export default ContactForm;
