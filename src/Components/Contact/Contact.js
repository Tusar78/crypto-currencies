import React from 'react';

const Home = () => {
  return (
    <section className='section home'>
      <div className="hero-section">
        <div className="hero__info">
          <h2 className='hero__title'>Contact <span className='hero__title--yellow'>Us</span> </h2>
          <p className="hero__text">If you have any question, please feel free to drop me a line. If you don't get and answer immediately. I might just be traveling through the middle of nowhere. I'll get back to you as soon as i can. That's a promise!</p>
          <button className='hero__btn'>BD Address</button>
          <button className='hero__btn'>US Address</button>
        </div>
        <div className="hero__image">
          <img src="contact.svg" alt="ContactImage" className="hero__img" />
        </div>
      </div>
    </section>
  );
};

export default Home;