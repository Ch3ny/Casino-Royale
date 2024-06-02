import React, { useState } from 'react';
import "./GuessingGame.css";
import { Link } from 'react-router-dom';

const GuessingGame = () => {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuess = () => {
    const numberGuess = parseInt(guess, 10);
    if (numberGuess === randomNumber) {
      setMessage("Spravne");
    } else if (numberGuess > randomNumber) {
      setMessage("Moc");
    } else {
      setMessage("Malo");
    }
  };

  const handleRestart = () => {
    setRandomNumber(generateRandomNumber());
    setGuess('');
    setMessage('');
  };

  

  return (

    
    <>
    


      

      <h1>Hadej cislo</h1>
      
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      
      
      <button onClick={handleGuess}>Hadej</button>
      <p>{message}</p>
      <button onClick={handleRestart}>Zacit znovu</button>

      <Link to={"/slot"}><button className="button1">Slot</button></Link>
      <Link to={"/roulette"}><button className="button2">Roulette</button></Link>
      <Link to={"/scratch"}><button className="button3">Scratch cards</button></Link>
      <Link to={"/"}><button className="button4">Home</button></Link>
    </>

    
  );
};

export default GuessingGame;
