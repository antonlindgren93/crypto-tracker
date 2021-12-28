import React from "react";
import "./Coin.css";

const Coin = ({
  image,
  name,
  price,
  symbol,
  volume,
  priceChange,
  marketcap,
}) => {
  const detailCoin = () => {
    alert("Hello");
  };
  return (
    <div className="coin-container">
      <div className="coin-row">
        <button onClick={detailCoin} style={{color:'#fff'}}/>
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange}%</p>
          )}
          <p className="coin-marketcap">
            Mkt cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
