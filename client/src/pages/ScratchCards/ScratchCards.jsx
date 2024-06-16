import React, { useState } from "react";
import "./ScratchCards.css";
import { Link } from "react-router-dom";
import Wallet from "../Wallet/Wallet";

const ScratchCard = () => {
  const [cards, setCards] = useState(Array(15).fill(null));
  const [revealedCount, setRevealedCount] = useState(0);
  const [message, setMessage] = useState("");
  const wallet = Wallet();

  const scratchCard = async (index) => {
    if (cards[index] || revealedCount >= 15) return;
    if (wallet.balance < 30) {
      setMessage("Nedostatek peněz v peněžence");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/scratch/scratch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ index }),
      });

      if (!response.ok) {
        throw new Error("Response was not ok");
      }

      const data = await response.json();
      const newCards = [...cards];
      newCards[index] = data.prize;
      setCards(newCards);
      setRevealedCount(revealedCount + 1);

      if (data.prize === "💎") {
        setMessage("Vyhra!");
        wallet.add(25);
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  const resetGame = async () => {
    if (wallet.balance < 30) {
      setMessage("Nedostatek peněz v peněžence.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/scratch/reset", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Response was not ok");
      }

      wallet.subtract(30);
      setCards(Array(15).fill(null));
      setRevealedCount(0);
      setMessage("");
    } catch (error) {
      setMessage("Error: " + error.message);
    }
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
      <button onClick={resetGame} className="reset-btn" disabled={wallet.balance < 30}>Novy los</button>
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
