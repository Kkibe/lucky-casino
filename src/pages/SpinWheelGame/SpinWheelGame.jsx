import { SpinWheel } from 'spin-wheel-game';
import './SpinWheelGame.scss'
import { useEffect, useState } from 'react';

const segments = [
    { segmentText: '0.10', segColor: 'red' },
    { segmentText: '0.25', segColor: 'blue' },
    { segmentText: '0.50', segColor: 'green' },
    { segmentText: '1.0', segColor: 'yellow' },
    { segmentText: '1.25', segColor: 'magenta' },
    { segmentText: '1.50', segColor: 'purple' },
    { segmentText: '1.75', segColor: 'red' },
    { segmentText: '2.00', segColor: 'blue' },
    { segmentText: '2.25', segColor: 'green' },
    { segmentText: '2.50', segColor: 'yellow' },
    { segmentText: '2.75', segColor: 'magenta' },
    { segmentText: '3.00', segColor: 'purple' },
  ];

export default function SpinWheelGame() {

    const [spinResult, setSpinResult] = useState(null);
    const [secondSpinResult, setSecondSpinResult] = useState(null);
    const [betAmount, setbetAmount]  = useState(20);
    const [secondBetAmount, setSecondBetAmount]  = useState(20);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);


    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        spinResult && setTimeout(() => {
            setSpinResult(null)
            setSecondSpinResult(null);
        }, 3000)
    }, [spinResult, secondSpinResult]);

    const handleSpinFinish = (result) => {
        const prize = parseFloat(result);
        setSpinResult(prize * betAmount);
        setSecondSpinResult(prize * secondBetAmount);
      };
    
      const spinWheelProps = {
        segments,
        onFinished: handleSpinFinish,
        primaryColor: 'black',
        contrastColor: '#90ee90',
        buttonText: 'Spin',
        isOnlyOnce: false,
        size: isMobile ? 150 : 200,
        upDuration: 100,
        downDuration: 200,
        fontFamily: 'Times',
        arrowLocation: 'top',
        showTextOnSpin: false,
        isSpinSound: true,
      };
  return (
<div className="container">
    <div className="panel">
        <div className="wheel-container">
            <SpinWheel {...spinWheelProps} className="wheel" />
        </div>
        <span>{spinResult && <h2>YOU WON {spinResult} KES</h2>}  {secondSpinResult && <h2>YOU WON {secondSpinResult} KES</h2>}</span>
        <div className="options">
            <div>
                <input type="number" value={betAmount}  min={20} 
                    style={{width: '100%',padding: '8px'}}
                    onChange={(e) => setbetAmount(e.target.value)}
                />
                <button className="active">BET {betAmount} KES</button>
            </div>
            <div>
                <input type="number" value={secondBetAmount}  min={20} 
                    style={{width: '100%',padding: '8px'}}
                    onChange={(e) => setSecondBetAmount(e.target.value)}
                />
                <button className="active">BET {secondBetAmount} KES</button>
            </div>
        </div>
    </div>
</div>
  )
}
