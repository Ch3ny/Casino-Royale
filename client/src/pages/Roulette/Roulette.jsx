import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import { Link } from 'react-router-dom';
import "./Roulette.css";


const data = [
  { option: '0', style: { backgroundColor: 'green' } },
  { option: '28', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '9', style: { backgroundColor: 'red' } },
  { option: '26', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '30', style: { backgroundColor: 'red' } },
  { option: '11', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '7', style: { backgroundColor: 'red' } },
  { option: '20', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '32', style: { backgroundColor: 'red' } },
  { option: '17', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '5', style: { backgroundColor: 'red' } },
  { option: '22', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '34', style: { backgroundColor: 'red' } },
  { option: '15', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '3', style: { backgroundColor: 'red' } },
  { option: '24', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '36', style: { backgroundColor: 'red' } },
  { option: '13', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '1', style: { backgroundColor: 'red' } },
  { option: '00', style: { backgroundColor: 'green' } },
  { option: '27', style: { backgroundColor: 'red' } },
  { option: '10', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '25', style: { backgroundColor: 'red' } },
  { option: '29', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '12', style: { backgroundColor: 'red' } },
  { option: '8', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '19', style: { backgroundColor: 'red' } },
  { option: '31', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '18', style: { backgroundColor: 'red' } },
  { option: '6', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '21', style: { backgroundColor: 'red' } },
  { option: '33', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '16', style: { backgroundColor: 'red' } },
  { option: '4', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '23', style: { backgroundColor: 'red' } },
  { option: '35', style: { backgroundColor: 'black', textColor: 'white' } },
  { option: '14', style: { backgroundColor: 'red' } },
  { option: '2', style: { backgroundColor: 'black', textColor: 'white' } }
];


export default  () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }

  return (
    <>
<Link to={"/slot"}><button className="button1">Slot</button></Link>
      <Link to={"/scratch"}><button className="button2">Scratch cards</button></Link>
      <Link to={"/guess"}><button className="button3">Guess the number</button></Link>
      <Link to={"/"}><button className="button4">Home</button></Link>

      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
      
        onStopSpinning={() => {
          setMustSpin(false);
          console.log(prizeNumber);
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>
    </>
  )
}