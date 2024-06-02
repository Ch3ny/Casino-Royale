import React, { useState } from "react";
import "./SlotMachine.css";

const symbols = ["🍎", "🍐", "🍊", "🍋", "🍌", "🍉"," 7️⃣"];

const SlotMachine = () => {
  const [grid, setGrid] = useState([
    [symbols[0], symbols[1], symbols[2]],
    [symbols[3], symbols[4], symbols[5]],
    [symbols[6], symbols[0], symbols[1]]
  ]);
  const [message, setMessage] = useState("");

  const spinReels = () => {
    const newGrid = [
      [symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)]],
      [symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)]],
      [symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)]]
    ];
    setGrid(newGrid);
    checkWin(newGrid);
  };

  const checkWin = (grid) => {
    for (let i = 0; i < 3; i++) {
      if (grid[0][i] === "7️⃣" && grid[1][i] === "7️⃣" && grid[2][i] === "7️⃣") {
        setMessage("Jackpot!");
        return;
      }
      if (grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]) {
        setMessage("Vyhra!");
        return;
      }
    }
    setMessage("Prohra!");
  };
console.log(message);
  return (
    <div className="slot-machine">
      <h1>Mr. Mystery Slot</h1>
      <div className="slot-grid">
        {grid.flat().map((symbol, index) => (
          <div key={index} className="slot-cell">
            {symbol}
          </div>
        ))}
      </div>
      <button onClick={spinReels}>Spin</button>
      <p>{message}</p>
    </div>
    
  );
};

export default SlotMachine;
