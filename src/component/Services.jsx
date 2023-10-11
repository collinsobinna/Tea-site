import React from "react";
import { Link } from "react-router-dom";

import { RiCupLine } from "react-icons/ri";
import { BsHandbag, BsTag } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";

const Services = () => {
  return (
    <section className="services-container">
      <div className="services-grid">
        <div>
          <RiCupLine className="service-icon" />
          <p>450+ KIND OF LOOSEF TEA</p>
        </div>

        <div>
          <BsHandbag className="service-icon" />
          <p>CERTIFICATED ORGANIC TEAS</p>
        </div>

        <div>
          <CiDeliveryTruck className="service-icon" />
          <p>FREE DELIVERY</p>
        </div>

        <div>
          <BsTag className="service-icon" />
          <p>SAMPLE FOR ALL TEAS</p>
        </div>
      </div>

      <div className="service-btn">
        <Link to="/contact" className="btn2 ">
          LEARN MORE
        </Link>
      </div>
    </section>
  );
};

export default Services;
