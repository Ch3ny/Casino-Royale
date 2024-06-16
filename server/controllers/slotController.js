const symbols = ["🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "7️⃣"];

const spinReels = (req, res) => {
  const { betAmount } = req.body;

  if (!betAmount || betAmount < 1 || betAmount > 1000) {
    return res.status(400).json({ message: "Invalid bet amount" });
  }

  const newGrid = [
    [symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)]],
    [symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)]],
    [symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)]]
  ];

  let message = "Prohra!";
  let winnings = 0;

  for (let i = 0; i < 3; i++) {
    if (newGrid[0][i] === "7️⃣" && newGrid[1][i] === "7️⃣" && newGrid[2][i] === "7️⃣") {
      message = "Jackpot!";
      winnings = betAmount * 100;
      break;
    }
    if (newGrid[i][0] === newGrid[i][1] && newGrid[i][1] === newGrid[i][2]) {
      message = "Vyhra!";
      winnings = betAmount * 3;
      break;
    }
  }

  res.json({ grid: newGrid, message, winnings });
};

module.exports = { spinReels };
