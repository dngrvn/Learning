import React from "react";

const BreadCrumbs = ({ title }) => {
  return (
    <section className="breadcrumbs">
      <div className="breadcrumbs__wrap center">
        <h2 className="breadcrumbs__title">{title}</h2>
        <div className="breadcrumbs__links">
          <a href="index.html" className="breadcrumbs__link">
            HOME{" "}
          </a>{" "}
          /
          <a href="#" className="breadcrumbs__link">
            {" "}
            MEN
          </a>{" "}
          /
          <a href="#" className="breadcrumbs__link breadcrumbs__link-current">
            {" "}
            NEW ARRIVALS
          </a>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbs;
