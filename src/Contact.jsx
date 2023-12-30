import React from "react";
import Footer from "./Footer";
import Wrapper from "./Wrapper";

const Contact = () => {
  return (
    <footer>
      <div className="contact">
        <div className="contact-top">
          <div className="left-contact">
            <div className="contact-details">
              <h3>Contact</h3>
              <p>
                I would love to hear about your project and how
                <br /> I could help. Please fill in the form, I'll get back
                <br /> to you as soon as possible.
              </p>
            </div>
          </div>
          <div className="right-contact">
            <form className="contact-input">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Message" />
              <p>
                <span>SEND MESSAGE</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
