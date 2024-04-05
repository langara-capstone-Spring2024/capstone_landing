import React, { useState } from "react";
import styles from "./ContactSection.module.css";
import Typography from "../Typography/Typography";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with:", { email, name });
    setEmail("");
    setName("");
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.formContainer}>
        <Typography variant="title-2">Connect With Us!!</Typography>
        <form onSubmit={handleSubmit} className={styles.formDataContainer}>
          <div className={styles.emailContainer}>
            <label htmlFor="email">
              <Typography variant="bodySm-bold" color="neutrals">
                Email
              </Typography>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.inputContainer}
            />
          </div>
          <div className={styles.nameContainer}>
            <label htmlFor="email">
              <Typography variant="bodySm-bold" color="neutrals">
                Your Name
              </Typography>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.inputContainer}
            />
          </div>
          <button type="submit" className={styles.btnContainer}>
            <Typography variant="bodySm" color="white">
              Connect with us
            </Typography>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
