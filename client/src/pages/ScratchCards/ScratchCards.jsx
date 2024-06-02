import React, { useState } from "react";
import "./ScratchCards.css";
import { Link } from "react-router-dom";
import Wallet from "../Wallet/Wallet";

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
  const [revealedCount, setRevealedCount] = useState(0);
  const [message, setMessage] = useState("");
  const wallet = Wallet();

  const scratchCard = (index) => {
    if (cards[index] || revealedCount >= 15) return;
    if (wallet.balance < 50) return;

    const newCards = [...cards];
    newCards[index] = getRandomPrize();
    setCards(newCards);
    setRevealedCount(revealedCount + 1);

    if (newCards[index] === "💎") {
      setMessage("Vyhra!");
      wallet.add(25);
    }
  };

  const resetGame = () => {
    if (wallet.balance < 50) return; 

    wallet.subtract(50);
    setCards(Array(15).fill(null));
    setRevealedCount(0);
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
      <p>Stav: {wallet.balance}</p>
    </div>
  );
};

export default ScratchCard;
