import './GameCard.scss';
import {MdStarRate } from 'react-icons/md';
import { GiFlame } from 'react-icons/gi';
import { GrGroup } from 'react-icons/gr';


export default function GameCard({details}) {

    function convertToFiveStarRating(rating, maxRating = 1233) {
        const fiveStarRating = (rating / maxRating) * 5;
        return parseFloat(fiveStarRating.toFixed(1));
      }
  return (
            <div className="product">
                <img src={details.image} alt="" />

                {details.type === "hot" && <GiFlame className='like-btn'/>}
                
            
                <div className="info">
                    <span>
                        <MdStarRate className='rate'/>
                        {convertToFiveStarRating(details.ratings,details.users)}
                    </span>
                    <span>{details.ratings}</span>
                    
                    <span>{details.type}</span>
                </div>
                <div className="content">
                    <h1>{details.title}</h1>
                </div>
                
                <div className='btn-container'>
                    <button disabled><GrGroup/> {details.users}</button>
                    <a href={details.url}><button className="intaSendPayButton" data-amount="10" data-currency="KES">PLAY &raquo;</button></a>
                </div>
                
            </div>
  )
}