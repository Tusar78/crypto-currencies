import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    const path = `/coins`
    navigate(path)
  }
  return (
    <section className='section home'>
      <div className="hero-section">
        <div className="hero__info">
          <h2 className='hero__title'>Fungible <span className='hero__title--yellow'>Token</span> </h2>
          <p className="hero__text">Fungible tokens or assets are divisible and non-unique. For instance, fiat currencies like the dollar are fungible: A $1 bill in New York City has the same value as a $1 bill in Miami. A fungible token can also be a cryptocurrency like Bitcoin: 1 BTC is worth 1 BTC, no matter where it is issued.</p>
          <button className='hero__btn' onClick={handleNavigate}>Explore Now</button>
        </div>
        <div className="hero__image">
          <img src="fungibletoken.jpg" alt="HeroImage" className="hero__img" />
        </div>
      </div>
    </section>
  );
};

export default Home;