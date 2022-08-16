import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <header className="header">
      <div className="navbar">
        <nav className="nav">
          <Link to="/">
            <img
              src={
                "./logo.png"
                  ? "./logo.png"
                  : "https://raw.githubusercontent.com/Tusar78/crypto-currencies/main/public/logo.png"
              }
              alt="Website Logo"
              className="nav__logo"
            />
          </Link>

          <div className={toggle ? "nav__menu" : "nav__menu right-0"}>
            <ul className="nav__list">
              <li className="nav__item">
                <ActiveLink
                  to="/home"
                  className="nav__link"
                  onClick={() => setToggle(true)}
                >
                  Home
                </ActiveLink>
              </li>
              <li className="nav__item">
                <ActiveLink
                  to="/coins"
                  className="nav__link"
                  onClick={() => setToggle(true)}
                >
                  Coins
                </ActiveLink>
              </li>
              <li className="nav__item">
                <ActiveLink
                  to="/about"
                  className="nav__link"
                  onClick={() => setToggle(true)}
                >
                  About
                </ActiveLink>
              </li>
              <li className="nav__item">
                <ActiveLink
                  to="/contact"
                  className="nav__link"
                  onClick={() => setToggle(true)}
                >
                  Contact
                </ActiveLink>
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
