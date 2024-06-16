const prizes = ["🏅", "🥈", "🥉", "💎"];

const getRandomPrize = () => {
  const randomIndex = Math.floor(Math.random() * prizes.length);
  return prizes[randomIndex];
};

const scratchCard = (req, res) => {
  const { index } = req.body;

  if (index === undefined || index < 0 || index >= 15) {
    return res.status(400).json({ message: "Invalid index provided" });
  }

  const prize = getRandomPrize();
  res.json({ prize });
};

const resetScratchCards = (req, res) => {
  try {
    const initialCards = Array(15).fill(null);
    res.json({ cards: initialCards });
  } catch (error) {
    console.error("Error resetting scratch cards:", error);
    res.status(500).json({ message: "Error resetting scratch cards." });
  }
};

module.exports = {
  scratchCard,
  resetScratchCards,
};
