import React from "react";
import "./Header.css";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import DehazeOutlinedIcon from "@material-ui/icons/DehazeOutlined";

const Header = () => {
  return (
    <>
      <nav className="header">
        <DehazeOutlinedIcon className="header__nav" />
        <img
          src="https://cdn.shopify.com/s/files/1/1078/8124/files/ezgif.com-gif-maker_2.gif?v=1607336903"
          alt="Logo"
          className="header__logo"
        />
        <ShoppingCartOutlinedIcon className="header__shopping" />
      </nav>
    </>
  );
};

export default Header;
