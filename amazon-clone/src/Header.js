import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const Header = () => {
  return (
    <>
      <nav className="header">
        {/* logo */}
        <Link to="/">
          <img
            className="header__logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon Logo"
          />
        </Link>

        {/* Search box */}
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="headerNav">
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Hello!! Safal</span>
              <span className="header__optionLineTwo">Sign In</span>
            </div>
          </Link>

          <Link to="/checkout" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">Orders</span>
            </div>
          </Link>

          <Link to="/login" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link>

          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
              {/* shopping basket icon */}
              <ShoppingCartOutlinedIcon />
              {/* number of items in the basket */}
              <span className="header__optionLineTwo header__basketCount">
                0
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
