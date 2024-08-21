import React from "react";
import single from "../../img/single.jpg";

const Slider = () => {
  return (
    <div id="singleExample" className="single slide">
      <div className="single-inner">
        <div className="single-item active">
          <img src={single} className="d-block" alt="single" />
        </div>
        <div className="single-item">
          <img src={single} className="d-block" alt="single" />
        </div>
        <div className="single-item">
          <img src={single} className="d-block" alt="single" />
        </div>
      </div>
      <button
        className="single-control single-control-prev"
        type="button"
        data-bs-target="#singleExample"
        data-bs-slide="prev"
      >
        <span
          className="single-control-icon single-control-prev-icon"
          aria-hidden="true"
        >
          <svg
            width="13"
            height="23"
            viewBox="0 0 13 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.7 3.7499L4.95005 11.4999L12.7 19.2499L11.15 22.3499L0.300049 11.4999L11.15 0.649902L12.7 3.7499Z"
              fill="black"
            />
          </svg>
        </span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="single-control single-control-next"
        type="button"
        data-bs-target="#singleExample"
        data-bs-slide="next"
      >
        <span
          className="single-control-icon single-control-next-icon"
          aria-hidden="true"
        >
          <svg
            width="13"
            height="23"
            viewBox="0 0 13 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.7 3.7499L4.95005 11.4999L12.7 19.2499L11.15 22.3499L0.300049 11.4999L11.15 0.649902L12.7 3.7499Z"
              fill="black"
            />
          </svg>
        </span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
