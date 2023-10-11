import React from "react";
import Maps from "../component/Maps";

import {
  FaPinterest,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaLocationDot,
} from "react-icons/fa6";

import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact-details">
        <div className="contact-logo">
          <FaPinterest className="logo" />
          <FaYoutube className="logo" />
          <FaInstagram className="logo" />
          <FaFacebook className="logo" />
        </div>

        <div className="contact-info">
          <div>
            <FaLocationDot />
            <p>
              3 Falahi, Falahi St, Pasdaran Ave, Shiraz, Fars Provieence Iran
            </p>
          </div>

          <div>
            <BsFillTelephoneFill />
            <p>Tel: +98 2345678987653</p>
          </div>

          <div>
            <AiOutlineMail />
            <p>Mail: teagarden@mail.com</p>
          </div>
        </div>
      </div>

      <div className="contact-map">
        <Maps />
      </div>
    </section>
  );
};

export default Contact;
