import React, { useState } from "react";
import "./SlotMachine.css";
import { Link } from "react-router-dom";
import Wallet from "../Wallet/Wallet";

const SlotMachine = () => {
  const [grid, setGrid] = useState([
    ["❓", "❓", "❓"],
    ["❓", "❓", "❓"],
    ["❓", "❓", "❓"]
  ]);
  const [message, setMessage] = useState("");
  const wallet = Wallet();
  const [betAmount, setBetAmount] = useState(0);

  const handleBetChange = (event) => {
    const amount = parseInt(event.target.value);
    setBetAmount(amount);
  };

  const spinReels = async () => {
    if (betAmount < 1 || betAmount > 1000) {
      alert("Sazka musí byt v rozmezi 1-1000");
      return;
    }

    if (wallet.balance < betAmount) {
      alert("Nemas prachy");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/slot/spin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ betAmount }),
      });

      if (!response.ok) {
        throw new Error("Response was not ok");
      }

      const data = await response.json();
      setGrid(data.grid);
      setMessage(data.message);

      if (data.winnings > 0) {
        wallet.add(data.winnings);
      } else {
        wallet.subtract(betAmount);
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div className="slot-machine">
      <Link to={"/scratch"}><button className="button1">Scratch cards</button></Link>
      <Link to={"/roulette"}><button className="button2">Roulette</button></Link>
      <Link to={"/guess"}><button className="button3">Guess the number</button></Link>
      <Link to={"/"}><button className="button4">Home</button></Link>
      <h1>Mr. Mystery Slot</h1>
      <div className="slots">
        <div className="slot-grid">
          {grid.flat().map((symbol, index) => (
            <div key={index} className="slot-cell">
              {symbol}
            </div>
          ))}
        </div>
        <input type="number" value={betAmount} onChange={handleBetChange} />
        <button onClick={spinReels} disabled={wallet.balance < betAmount}>Spin</button>
        <p>{message}</p>
        <p>Stav: {wallet.balance}</p>
      </div>
    </div>
  );
};

export default SlotMachine;
