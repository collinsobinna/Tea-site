import React from "react";

import { BsCupHot, BsStopwatch, BsFillCircleFill } from "react-icons/bs";
import { FaTemperatureLow } from "react-icons/fa";

const DetailsHero = () => {
  return (
    <section className="details-hero">
      <div className="detailsHero-detail">
        <h2>Steeping instrustions</h2>

        <p>
          <BsCupHot className="icon" />
          SERVING TIME : <span>2 tsp per cup, 6 tsp per pot</span>
        </p>

        <p>
          <FaTemperatureLow className="icon" />
          WATER TEMPERATURE : <span>100&deg;C</span>
        </p>

        <p>
          <BsStopwatch className="icon" />
          STEEPING TIME : <span>3-5 minutes</span>
        </p>

        <p>
          <BsFillCircleFill className="icon" />
          COLOR AFTER 3 MINUTES
        </p>
      </div>

      <div className="detailsHero-about">
        <h2>About this tea</h2>

        <div className="detailsHero-info">
          <div>
            <h3>FLAVOR</h3>
            <p>Spicy</p>
          </div>

          <div>
            <h3>QUALITIES</h3>
            <p>Smoothing</p>
          </div>

          <div>
            <h3>CAFEFINE</h3>
            <p>Medium</p>
          </div>

          <div>
            <h3>ALLERGENS</h3>
            <p>Nuts-free</p>
          </div>
        </div>

        <div>
          <h2>Ingredient</h2>

          <p>
            Black Ceylon tea, Green tea, Ginger root, Cloves, Black pepper,
            Cinnamon sticks, Cardamom, Cinnamon pieces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailsHero;
