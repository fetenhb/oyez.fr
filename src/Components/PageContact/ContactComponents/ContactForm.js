import React from "react";
// import ReCAPTCHA from "https://cdn.skypack.dev/react-google-recaptcha@2.1.0";
import styled from "styled-components";
import { ButtonContact } from "../../PageExpertises/ExpertisesComponents/CommerceUnifie";

const Contact = styled.div`
  width: 30%;
  display: inline-flex;
  flex-direction: column;
  margin-right: 3%;
  margin-bottom: 100px;
  label {
    color: #777777;
    font-size: 15px;
  }
  input {
    margin-top: 20px;
    font-family: Manrope !important;
    height: 30px;
    font-size: 15px;
    border: 0;
    outline: 0;
    border-bottom: 1px solid #ddd;
    background: transparent;
  }
`;
const Label = styled.label`
  font-family: Manrope !important;
  color: #777777;
  font-size: 15px;
`;
const Message = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  margin-bottom: 120px;
  textarea {
    font-family: Manrope;
    margin-top: 20px;

    height: auto;
    font-size: 15px;
    border: 0;
    outline: 0;
    border-bottom: 1px solid #ddd;
    background: transparent;
    resize: none;
  }
`;
const ContactForm = () => {
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <Contact>
        <Label>Nom et prénom</Label>
        <input type="text" />
      </Contact>
      <Contact>
        <Label>E-mail</Label>
        <input type="text" />
      </Contact>
      <Contact>
        <Label>Téléphone</Label>
        <input type="text" />
      </Contact>
      <Message>
        <Label>Message</Label>
        <textarea type="text" />
      </Message>{" "}
      <div>
        {/* <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" /> */}
        <font size="1" color="#777">
          tous les champs sont obligatoires
        </font>
      </div>
      <ButtonContact
        theme={{ wh: "white", bl: "black" }}
        style={{ fontWeight: "400", marginTop: "40px", marginBottom: "20px" }}
      >
        {" "}
        ENVOYER
      </ButtonContact>
    </div>
  );
};

export default ContactForm;
