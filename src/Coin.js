import React, { useEffect, useState } from "react";
import "./Coin.css";
import { Link, useHistory } from "react-router-dom";
import CoinDetail from "./CoinDetail";

const Coin = ({
  image,
  name,
  price,
  symbol,
  volume,
  priceChange,
  marketcap,
  priceChange24h,
}) => {
  const history = useHistory();

  const detailCoin = () => {
    let path = `/coindetail`;
    //history.push(path);
    if (priceChange24h > 0) {
      alert(`${name} is up $${priceChange24h} in the last day`);
    } else {
      alert(`${name} is down $${priceChange24h} in the last day`);
    }
  };

  return (
    <div className="coin-container">
      <div className="coin-row" onClick={detailCoin}>
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
