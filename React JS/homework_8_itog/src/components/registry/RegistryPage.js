import React from "react";
import Header from "../basis/header/Header";
import Footer from "../basis/footer/Footer";
import Subscribe from "../basis/subscribe/Subscribe";
import RegistryForm from "./RegistryForm";
import BreadCrumbs from "../basis/BreadCrumbs";

const RegistryPage = () => {
  return (
    <div>
      <Header />
      <BreadCrumbs title={"REGISTRATION"} />
      <RegistryForm />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default RegistryPage;
