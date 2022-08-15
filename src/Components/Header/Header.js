import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <header className="header">
      <div className="navbar">
        <nav className="nav">
          <img src="logo.png" alt="Website Logo" className="nav__logo" />

          <div className={toggle ? "nav__menu" : "nav__menu right-0"}>
            <ul className="nav__list">
              <li className="nav__item">
                <a href="/" className="nav__link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="/" className="nav__link">
                  Coins
                </a>
              </li>
              <li className="nav__item">
                <a href="/" className="nav__link">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="/" className="nav__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <MdMenu className="nav__toggle-icon" />
            ) : (
              <MdClose className="nav__toggle-icon" />
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
