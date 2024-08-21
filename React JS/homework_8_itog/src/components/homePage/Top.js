import React from "react";
import top_img from "../../img/brand_man.png";

const Top = () => {
  return (
    <section className="top">
      <div className="top__wrap center">
        <img
          src={top_img}
          alt="for men"
          className="top__img display_none_768"
        />
        <h1 className="top__title">
          THE BRAND <br />
          <span className="top__title-small">
            OF LUXERIOUS
            <span className="top__title-small-pink">FASHION</span>
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Top;
