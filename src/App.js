import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Coin from "./Coin";
import LineChart from "./Chart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CoinDetail from "./CoinDetail";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <Router>
      <div className="coin-app">
        <Switch>
          <Route path="/" exact>
            <div className="coin-search">
              <h1 className="coin-text">Search a currency</h1>
              <form>
                <input
                  type="text"
                  placeholder="Search"
                  className="coin-input"
                  onChange={handleChange}
                />
              </form>
              {/* <LineChart /> */}
            </div>

            {filteredCoins.map((coin) => {
              return (
                <Coin
                  key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  volume={coin.total_volume}
                  price={coin.current_price}
                  priceChange={coin.price_change_percentage_24h}
                  marketcap={coin.market_cap}
                  priceChange24h={coin.price_change_24h}
                />
              );
            })}
          </Route>
          <Route path="/coindetail">
            <CoinDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
