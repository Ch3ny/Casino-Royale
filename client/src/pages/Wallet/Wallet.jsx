import React, { useState } from "react";

const Wallet = () => {
  const [balance, setBalance] = useState(1000);

  const subtract = (amount) => {
    if (balance >= amount) {
      setBalance(balance - amount); 
      return true;
    } else {
      return false; 
    }
  };

  const add = (amount) => {
    setBalance(balance + amount);
  };

  return {
    balance,
    subtract,
    add
  };
};

export default Wallet;
