import React from "react";
import { useNavigate } from "react-router-dom";

const Coin = ({ coin }) => {
  const { image, name, symbol, id } = coin;
  const navigate = useNavigate();
  const handleNavigate = () => {
    const path = `/coin/${id}`;
    navigate(path)
  }
  return (
    <div className="coin" onClick={handleNavigate}>
      <img src={image} alt={name} className="coin__img" />
      <div className="coin__info">
        <h2 className="coin__name">{name}</h2>
        <p className="coin__symbol">{symbol}</p>
      </div>
    </div>
  );
};

export default Coin;
