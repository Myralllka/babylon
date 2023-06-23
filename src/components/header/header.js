import React from "react";
import "./Header.scss";
import MenuAccount from "../MenuAccount/MenuAccount";

const Header = () => {
  return (
    <header className="header__nav">
      <div className="header__container">
        <MenuAccount></MenuAccount>
      </div>
    </header>
  );
};

export default Header;
