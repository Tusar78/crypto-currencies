import React from "react";

const Coin = ({ coin }) => {
  const { image, name, symbol } = coin;
  return (
    <div class="coin">
      <img src={image} alt={name} className="coin__img" />
      <div class="coin__info">
        <h2 class="coin__name">{name}</h2>
        <p className="coin__symbol">{symbol}</p>
      </div>
    </div>
  );
};

export default Coin;
