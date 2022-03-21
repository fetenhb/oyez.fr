import React from "react";
import FooterAdresse from "../HomePage/Footer/FooterAdresse";
import Navbar from "../HomePage/Navbar/Navbar";
import ContactForm from "./ContactComponents/ContactForm";
import ContactHeader from "./ContactComponents/ContactHeader";

const PageContact = () => {
  return (
    <div>
      <Navbar />
      <ContactHeader />
      <ContactForm />
      <FooterAdresse />
    </div>
  );
};

export default PageContact;
