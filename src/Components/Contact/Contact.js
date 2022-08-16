import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <section className="section home">
      <div className="hero-section relative">
        <div className="hero__info">
          <h2 className="hero__title">
            Contact <span className="hero__title--yellow">Us</span>{" "}
          </h2>
          <p className="hero__text mb-8">
            If you have any question, please feel free to drop me a line. If you
            don't get and answer immediately. I might just be traveling through
            the middle of nowhere. I'll get back to you as soon as i can. That's
            a promise!
          </p>
          <Link to="bd-address" className="hero__btn">
            BD Address
          </Link>
          <Link to="us-address" className="hero__btn">
            US Address
          </Link>
        </div>
        <div className="hero__image">
          <img src="contact.svg" alt="ContactImage" className="hero__img" />
        </div>
        <div className="contact__variant">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Home;
