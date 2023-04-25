import React, { useState, useEffect, useRef } from "react";
import "../ContactUs/ContactUs.css"; // <-- Import the CSS file
import phoneIcon from "../../assets/kindpng_3406718.png";
import emailIcon from "../../assets/emailIcon.png";
import houseIcon from "../../assets/houseIcon.png";
import Helmet from "../Helmet/Helmet";
import CommonSection from "../UI/CommonSection.jsx";
import emailjs from "@emailjs/browser";

function ContactAdminForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const [contacts, setContacts] = useState([]);
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/contactAdmin/getAll"
        );
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContacts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if token is present
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You need to be logged in to send a message.");
      return;
    }
    // Check if all form fields are filled out
    if (!name || !email || !phoneNumber || !message) {
      setSubmitStatus(
        <span style={{ color: "red" }}>Please fill out all fields.</span>
      );
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmitStatus(
        <span style={{ color: "red" }}>
          Please enter a valid email address.
        </span>
      );
      return;
    }
    if (!/^\d+$/.test(phoneNumber)) {
      setSubmitStatus(
        <span style={{ color: "red" }}>Please enter a valid phone number.</span>
      );
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/api/contact/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include token in header
        },
        body: JSON.stringify({ name, email, phoneNumber, message }),
      });
      const data = await response.json();
      console.log(data);
      // Display success message and error message
      setSubmitStatus(
        <span style={{ color: "green" }}>
          Success! Your message has been sent.
        </span>
      );
    } catch (error) {
      console.error(error);
      setSubmitStatus(
        <span style={{ color: "red" }}>
          Error! There was an issue submitting your message.
        </span>
      );
    }
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gg4wxis",
        "template_0efkpj5",
        form.current,
        "KoYDxQnMSIaCkMjHr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    sendEmail(e);
    handleSubmit(e);
  };

  return (
    <Helmet title="Cars">
    <CommonSection title="Contact Us" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>

      <div className="all-contactUs-space">
        <div className="contact-us">
          <div className="contact-info">
            <h1 className="contact-info-title">Need additional information?</h1>
            <br />
            <br />
            <p className="contact-info-p">
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.{" "}
            </p>
            <ul>
              {contacts.map((contact) => (
                <li className="contact-info-list" key={contact._id}>
                  <p className="phone-number">
                    <img className="phone-img" src={phoneIcon} alt="icon 1" />
                    {contact.adminPhoneNumber}
                  </p>
                  <p className="email">
                    <img className="email-img" src={emailIcon} alt="icon 2" />
                    {contact.adminEmail}
                  </p>
                  <p className="location">
                    <img className="house-img" src={houseIcon} alt="icon 3" />{" "}
                    {contact.streetLocation}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-form">
            <h2 className="contact-form-title">Get in touch</h2>
            <p className="contact-form-p">
              Feel free to browse our massive inventory online, set up a test
              drive with a sales associate, or inquire about financing!
            </p>
            {submitStatus && <p>{submitStatus}</p>}

            <form ref={form} onSubmit={handleFormSubmit} class="form">
              <div class="form-group">
                <label class="form-label">
                  <input
                    type="text"
                    class="form-input"
                    placeholder="your name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="email-phoneNumber">
                <div class="form-group-email">
                  <label class="form-label">
                    <input
                      type="email"
                      class="form-input-email-phoneNumber"
                      placeholder="your email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </label>
                </div>

                <div class="form-group-phoneNumber">
                  <label class="form-label">
                    <input
                      type="tel"
                      class="form-input-email-phoneNumber"
                      placeholder="your phone"
                      name="phoneNumber"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </label>
                </div>
              </div>
              <div class="form-group-message">
                <label class="form-label-message">
                  <textarea
                    class="form-input"
                    name="message"
                    placeholder="your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </label>
              </div>

              <button type="submit" class="form-button">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      </Helmet>

  );
}

export default ContactAdminForm;
