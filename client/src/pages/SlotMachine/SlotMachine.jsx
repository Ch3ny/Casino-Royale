import React, { useState } from "react";
import "./SlotMachine.css";
import { Link } from "react-router-dom";
import Wallet from "../Wallet/Wallet";

const symbols = ["🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "7️⃣"];

const SlotMachine = () => {
  const [grid, setGrid] = useState([
    [symbols[0], symbols[1], symbols[2]],
    [symbols[3], symbols[4], symbols[5]],
    [symbols[6], symbols[0], symbols[1]]
  ]);
  const [message, setMessage] = useState("");
  const wallet = Wallet();
  const [betAmount, setBetAmount] = useState(0);

  const handleBetChange = (event) => {
    const amount = parseInt(event.target.value);
    setBetAmount(amount);
  };

  const spinReels = () => {
    if (betAmount < 1 || betAmount > 1000) {
      alert("Sazka musí byt v rozmezi 1-1000");
      return;
    }

    const canSubtract = wallet.subtract(betAmount);
    if (!canSubtract) {
      alert("Nemas prachy");
      return;
    }

    const newGrid = [
      [symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)]],
      [symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)]],
      [symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)]]
    ];
    setGrid(newGrid);
    checkWin(newGrid, betAmount);
  };

  const checkWin = (grid, betAmount) => {
    for (let i = 0; i < 3; i++) {
      if (grid[0][i] === "7️⃣" && grid[1][i] === "7️⃣" && grid[2][i] === "7️⃣") {
        setMessage("Jackpot!");
        wallet.add(betAmount * 100);
        return;
      }
      if (grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]) {
        setMessage("Vyhra!");
        wallet.add(betAmount * 3);
        return;
      }
    }
    setMessage("Prohra!");
  };

console.log(message);
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
