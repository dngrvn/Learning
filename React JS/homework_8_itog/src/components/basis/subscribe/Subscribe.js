import React from "react";
import photo from "../../../img/subscribe_img.png";

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="subscribe__content center">
        <div className="subscribe__content-left">
          <img
            src={photo}
            alt="photo"
            className="subscribe__content-left__img"
          />
          <p className="subscribe__content-left__reply">
            “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
            <span>a pulvinar purus condimentum</span>“
          </p>
        </div>
        <div className="subscribe__content-right">
          <h3 className="subscribe__content-right__title">SUBSCRIBE</h3>
          <p className="subscribe__content-right__subtitle">
            FOR OUR NEWLETTER AND PROMOTION
          </p>
          <div className="subscribe__content-right__form">
            <input
              type="text"
              className="subscribe__content-right__form-input"
              placeholder="Enter Your Email"
            />
            <button className="subscribe__content-right__form-button">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
