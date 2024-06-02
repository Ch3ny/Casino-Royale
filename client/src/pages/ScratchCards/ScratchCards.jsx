import React, { useState } from "react";
import "./ScratchCards.css";

const prizes = ["🏅", "🥈", "🥉", "💎"];

const getRandomPrize = () => {
  const randomIndex = Math.floor(Math.random() * prizes.length);
  if (prizes[randomIndex] === "💎") {
    return "💎";
  } else {
    return prizes[randomIndex];
  }
};

const GuessingGame = () => {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const wallet = Wallet();

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuess = () => {
    const numberGuess = parseInt(guess, 10);
    if (numberGuess === randomNumber) {
      setMessage("Spravne");
      wallet.add(120);
    } else if (numberGuess > randomNumber) {
      setMessage("Moc");
      wallet.subtract(10); 
    } else {
      setMessage("Malo");
      wallet.subtract(10); 
    }
  };

  const handleRestart = () => {
    setRandomNumber(generateRandomNumber());
    setGuess('');
    setMessage('');
  };

  return (
    <div>
      <h1>Stírací losy</h1>
      <div className="scratch-card-container">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => scratchCard(index)}
            className={`scratch-card ${revealed && "scratch-card-revealed"}`}
          >
            {card || "❓"}
          </div>
        ))}
      </div>
      <button onClick={resetGame} className="reset-btn">Novy los</button>
      <p>{message}</p>
    </div>
  );
};

export default GuessingGame;
