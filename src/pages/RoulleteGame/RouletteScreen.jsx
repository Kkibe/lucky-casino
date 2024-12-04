import { useState } from 'react';
import { Wheel } from 'react-custom-roulette'
import './RoulleteScreen.scss';

const data = [
    { option: 'x3.5'},
    { option: 'x2.5' },
    { option: 'x0.25' },
    { option: 'x7.5' },
    { option: 'x0.75' },
    { option: 'x1' },
    { option: 'x2' },
    { option: 'x5' },
    { option: 'x0.5' },
  ]

export default function RouletteScreen() {

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
    <div className='roullette'>
      <div className="data-container">
        <h3>SPIN & WIN</h3>
        <div className="data click">ACTIVATE ACCOUNT</div>
      </div>
      <div className="data-container">
        <div className="holder">
          <div className="data">💎: 10</div>
          <div className="data click">CONVERT</div>
        </div>
        <div className="holder">
          <div className="data">💰: KSH 10</div>
          <div className="data click">WIDTHDRAW</div>
        </div>
      </div>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}

        onStopSpinning={() => {
          setMustSpin(false);
        }}
        className="wheel"
      />
      <button className='spin' onClick={handleSpinClick}>SPIN</button>
    </div>
  )
}
