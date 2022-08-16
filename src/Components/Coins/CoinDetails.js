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
    image,
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
    description,
  } = coinDetails;

  return (
    <section className="section">
      <div className="coin-details">
        <div className="coin-details__info">
          <h2 className="coin-details__title">General Info:</h2>
          <div className="coin-details__description">
            <p className="coin-details__single-info">Coin Name: {name}</p>
            <p className="coin-details__single-info">
              Market Cap Rank: {market_cap_rank}
            </p>
            <p className="coin-details__single-info">
              Origin: {country_origin ? country_origin : "Not-available"}
            </p>
            <p className="coin-details__single-info">
              Contract Address:{" "}
              {contract_address ? contract_address : "Not-available"}
            </p>
            <p className="coin-details__single-info">
              Hashing Algorithm:{" "}
              {hashing_algorithm ? hashing_algorithm : "Not-available"}
            </p>
            <p className="coin-details__single-info">
              Genesis Date: {genesis_date ? genesis_date : "Not-available"}
            </p>
            <p className="coin-details__single-info">
              Last Updated: {last_updated ? last_updated : "Not-available"}
            </p>
          </div>
          {/* -------- */}
          <h2 className="coin-details__title">Scores:</h2>
          <div className="coin-details__description">
            <p className="coin-details__single-info">
              Community Score:{" "}
              {community_score ? community_score : "Not-available"}
            </p>
            <p className="coin-details__single-info">
              Developer Score:{" "}
              {developer_score ? developer_score : "Not-available"}
            </p>
            <p className="coin-details__single-info">
              Liquidity Score:{" "}
              {liquidity_score ? liquidity_score : "Not-available"}
            </p>
            <p className="coin-details__single-info">
              Public Interest Score:
              {public_interest_score ? public_interest_score : "Not-available"}
            </p>
          </div>
        </div>
        <div className="coin-details__image">
          <img src={image?.large} alt={name} className="coin-details__img" />
        </div>
      </div>
      <div className="coin-details">
        <div className="coin-details__desc">
          <h2 className="coin-details__title">Description:</h2>
          <div className="coin-details__description">
            <p className="coin-details__single-info" title={description?.en.length > 600 ? description?.en : ''}>
              {description?.en.length > 600 ? description?.en.substr(0, 600) + '...' : description?.en} 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoinDetails;
