import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoinDetails = () => {
  const BASE_URL = "https://api.coingecko.com/api/v3/coins";
  const { coinId } = useParams();
  const [coinDetails, SetCoinDetails] = useState({});
  useEffect(() => {
    fetch(`${BASE_URL}/${coinId}`)
      .then((res) => res.json())
      .then((data) => SetCoinDetails(data));
  }, [coinId]);
  
  const {
    image: { large },
    name,
    market_cap_rank,
    country_origin,
    contract_address,
    hashing_algorithm,
    genesis_date,
    last_updated,
    community_score,
    developer_score,
    liquidity_score,
    public_interest_score,
    description: { en },
  } = coinDetails;

  return (
    <section className="section">
      <div className="coin-details">
        <div className="coin-details__info">
          <h2 className="coin-details__title">General Info:</h2>
          <div className="coin-details__description">
            <p className="coin-details__single-info"></p>
          </div>
        </div>
        <div className="coin-details__image">
          <img src={large} alt={name} className="coin-details__img" />
        </div>
        <h2>Hello World {coinDetails.symbol} </h2>
      </div>
    </section>
  );
};

export default CoinDetails;
