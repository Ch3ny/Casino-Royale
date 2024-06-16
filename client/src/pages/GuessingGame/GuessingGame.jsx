import React, { useState } from "react";
import "./GuessingGame.css";
import { Link } from "react-router-dom";
import Wallet from "../Wallet/Wallet";

const GuessingGame = () => {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const wallet = Wallet();

  const handleGuess = async () => {
    if (guess === "") {
      setMessage("Prosím zadejte číslo");
      return;
    }if (parseInt(guess) <= 0) {
      setMessage("Prosím zadejte kladné číslo");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/guess/guess", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ guess }),
      });

      if (!response.ok) {
        throw new Error("Response was not ok");
      }

      const data = await response.json();
      setMessage(data.message);

      if (data.correct) {
        wallet.add(120);
      } else {
        wallet.subtract(10);
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  const handleRestart = async () => {
    try {
      const response = await fetch("http://localhost:5000/guess/restart", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Response was not ok");
      }

      setGuess("");
      setMessage("");
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <>
      <div className="guessing">
        <h1>Hadej číslo</h1>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button onClick={handleGuess}>Hadej</button>
        <p>{message}</p>
        <button onClick={handleRestart}>Začít znovu</button>
        <p>Stav: {wallet.balance}</p>
      </div>

      <Link to={"/slot"}><button className="button1">Slot</button></Link>
      <Link to={"/roulette"}><button className="button2">Roulette</button></Link>
      <Link to={"/scratch"}><button className="button3">Scratch cards</button></Link>
      <Link to={"/"}><button className="button4">Home</button></Link>
    </>
  );
};

export default GuessingGame;
