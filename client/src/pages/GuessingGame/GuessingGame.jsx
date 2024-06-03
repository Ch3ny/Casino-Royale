import React, { useState } from 'react';
import "./GuessingGame.css";
import { Link } from 'react-router-dom';
import Wallet from "../Wallet/Wallet";

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
      setRandomNumber(generateRandomNumber);
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
    <>
    <div className='guessing'>
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
