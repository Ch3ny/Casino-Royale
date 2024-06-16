let randomNumber = generateRandomNumber();

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const guessNumber = (req, res) => {
  const { guess } = req.body;
  const numberGuess = parseInt(guess, 10);

  if (numberGuess === randomNumber) {
    res.json({ message: "Spravne", correct: true });
    randomNumber = generateRandomNumber();
  } else if (numberGuess > randomNumber) {
    res.json({ message: "Moc", correct: false });
  } else {
    res.json({ message: "Malo", correct: false });
  }
};

const restartGame = (req, res) => {
  randomNumber = generateRandomNumber();
  res.json({ message: "Game restarted" });
};

module.exports = {
  guessNumber,
  restartGame,
};
