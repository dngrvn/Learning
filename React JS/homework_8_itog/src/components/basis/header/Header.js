import React from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

const Header = () => {
  return (
    <header className="header">
      <div className="header_wrap center">
        <HeaderLeft />
        <HeaderRight />
      </div>
    </header>
  );
};

export default Header;
