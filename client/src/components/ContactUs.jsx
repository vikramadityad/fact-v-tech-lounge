import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import "../styles/ContactUs.css";
import { useMutation, gql } from "@apollo/client";

const ADD_CONTACT_FORM = gql`
  mutation AddContactForm($name: String!, $email: String!, $message: String!) {
    addContactForm(name: $name, email: $email, message: $message) {
      _id
    }
  }
`;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [addContactForm] = useMutation(ADD_CONTACT_FORM);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addContactForm({
        variables: {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      });
      // console.log("Form data submitted:", data);
    } catch (error) {
      // console.log("Error submitting form data:", error);
    }
  };

  return (
    <div className="contact-us">
      <h2 className="text-center" style={{ color: "var(--primary-dark)" }}>
        Contact Us
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" style={{ color: "var(--grey)" }}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" style={{ color: "var(--grey)" }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" style={{ color: "var(--grey)" }}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <PrimaryButton
          label="Submit"
          action={handleSubmit}
          type="btn-primary"
        />
      </form>
    </div>
  );
};

export default ContactUs;
