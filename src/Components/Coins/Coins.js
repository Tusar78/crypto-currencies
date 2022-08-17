import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import Coin from "./Coin";

const Coins = () => {
  const BASE_URL = "https://api.coingecko.com/api/v3/coins";
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `${BASE_URL}/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false`
    )
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="section crypto-section">
          <div className="crypto-currencies">
            <div className="crypto__info">
              <h2 className="crypto__title">All Cryptocurrencies</h2>
              <p className="crypto__text">
                A cryptocurrency is a digital or virtual currency that is
                secured by cryptography.
              </p>
            </div>
            <div className="crypto__container">
              {coins.map((coin) => (
                <Coin key={coin.id} coin={coin} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Coins;
