import React from 'react'
import './Account.scss'

export default function Account() {
  return (
    <div className='account'>
      <div className="deposit-container">
        <h1>Deposit Funds</h1>
        <div id="last-score">
          <ol>
            <li><div className="score black"><p>14</p></div></li>
            <li><div className="score red"><p>1</p></div></li>
            <li><div className="score black"><p>36</p></div></li>
            <li><div className="score black"><p>18</p></div></li>
            <li><div className="score green"><p>0</p></div></li>
            <li><div className="score red"><p>6</p></div></li>
            <li><div className="score black"><p>32</p></div></li>
          </ol>
        </div>
        <div id="bet-controler">
          <input type="number" className="input-controler" value="10" />
        </div>
        <div className="bet-button">
          <button className="button bet">MIN</button>
          <button className="button bet">+10</button>
          <button className="button bet">+100</button>
          <button className="button bet">+1K</button>
          <button className="button bet">1/2</button>
          <button className="button bet">x2</button>
          <button className="button bet">MAX</button>
        </div>
        <div className="color-button">
          <button className="button color black">x2</button>
          <button className="button color green">x14</button>
          <button className="button color red">x2</button>
        </div>
      </div>
    </div>
  )
}
