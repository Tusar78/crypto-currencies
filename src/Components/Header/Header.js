import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="navbar">
        <nav className="nav">
          <div className="nav__logo">
            <img src="logo.png" alt="Website Logo" className="nav__logo-img" />

            <div className="nav__menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="/" className="nav__link">Home</a>
                </li>
                <li className="nav__item">
                  <a href="/" className="nav__link">Coins</a>
                </li>
                <li className="nav__item">
                  <a href="/" className="nav__link">About</a>
                </li>
                <li className="nav__item">
                  <a href="/" className="nav__link">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
