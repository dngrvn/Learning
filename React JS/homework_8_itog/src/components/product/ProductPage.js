import React, { useEffect } from "react";
import Header from "../basis/header/Header";
import Footer from "../basis/footer/Footer";
import Subscribe from "../basis/subscribe/Subscribe";
import ProductsForPage from "./ProductsForPage";
import Description from "./Description";
import Slider from "./Slider";

const ProductPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
    script.integrity =
      "sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Header />
      <Slider />
      <Description />
      <ProductsForPage />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default ProductPage;
