import React, { useState } from 'react';

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
    <div>
      <h1>Hadej cislo</h1>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={handleGuess}>Hadej</button>
      <p>{message}</p>
      <button onClick={handleRestart}>Zacit znovu</button>
    </div>
  );
};

export default GuessingGame;
