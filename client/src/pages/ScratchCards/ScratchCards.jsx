import React, { useState } from "react";
import "./ScratchCards.css";
import { Link } from "react-router-dom";

const prizes = ["🏅", "🥈", "🥉", "💎"];

const getRandomPrize = () => {
  const randomIndex = Math.floor(Math.random() * prizes.length);
  if (prizes[randomIndex] === "💎") {
    return "💎";
  } else {
    return prizes[randomIndex];
  }
};

const ScratchCard = () => {
  const [cards, setCards] = useState(Array(15).fill(null));
  const [revealed, setRevealed] = useState(false);
  const [message, setMessage] = useState("");

  const scratchCard = (index) => {
    if (revealed) return;
    const newCards = [...cards];
    newCards[index] = getRandomPrize();
    setCards(newCards);

    if (newCards.every(card => card !== null)) {
      checkWin(newCards);
      setRevealed(true);
    }
  };

  const checkWin = (cards) => {
    const rows = 5;
    const cols = 3;

    for (let i = 0; i < rows; i++) {
      const start = i * cols;
      const row = cards.slice(start, start + cols);
      if (row.every(card => card === row[0])) {
        setMessage("Vyhra!");
        return;
      }
    }

    for (let j = 0; j < cols; j++) {
      const column = [cards[j], cards[j + cols], cards[j + 2 * cols]];
      if (column.every(card => card === column[0])) {
        setMessage("Vyhra!");
        return;
      }
    }

    const diagonal1 = [cards[0], cards[6], cards[12]];
    const diagonal2 = [cards[4], cards[6], cards[8]];

    if (diagonal1.every(card => card === diagonal1[0]) || diagonal2.every(card => card === diagonal2[0])) {
      setMessage("Vyhra!");
      return;
    }
  };

  const resetGame = () => {
    setCards(Array(15).fill(null));
    setRevealed(false);
    setMessage("");
  };

  return (
    <div>
      <h1>Stírací losy</h1>
      <div className="scratch-card-container">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => scratchCard(index)}
            className={`scratch-card ${card ? "scratch-card-revealed" : ""}`}
          >
            {card || "❓"}
          </div>
        ))}
      </div>
      <button onClick={resetGame} className="reset-btn" disabled={wallet.balance < 50}>Novy los</button>
      <p>{message}</p>
      <Link to={"/slot"}><button className="button1">Slot</button></Link>
      <Link to={"/roulette"}><button className="button2">Roulette</button></Link>
      <Link to={"/guess"}><button className="button3">Guess the number</button></Link>
      <Link to={"/"}><button className="button4">Home</button></Link>
    </div>
  );
};

export default GuessingGame;
