import CardItems from '../../components/CardItems/CardItems'
import GameCard from '../../components/GameCard/GameCard'
import Notification from '../../components/Notification/Notification'
import './Home.scss'

import Image1 from '../../assets/1.jpg';
import Image2 from '../../assets/2.jpg';
import Image3 from '../../assets/3.png';
import Image4 from '../../assets/4.png';
import Image5 from '../../assets/5.png';

const data = [
  {
    title: "Lucky Wheel",
    image: Image4,
    ratings: 900, 
    users: 1368,
    url: "/spin-to-win",
    type: "trending"
  },
  {
    title: "Roullette",
    image: Image5,
    ratings: 120, 
    users: 522,
    url: "/roullette",
    type: "new"
  },
  /*{
    title: "Spin & Win",
    image: Image3,
    ratings: 387, 
    users: 1000,
    url: "/spin-to-win",
    type: "hot"
  }*/
]


export default function Home() {
  return (
    <div className='home'>
      <Notification />
      <div className="customer-logos">
            <div className="logo-track">
                <img src={Image1} alt="Logo 1"/>
                <img src={Image2} alt="Logo 1"/>
                <img src={Image3} alt="Logo 1"/>
                <img src={Image4} alt="Logo 1"/>
                <img src={Image5} alt="Logo 1"/>
            </div>
        </div>
      <div className="cards-container">
        {
          data.map(item => {
            return <GameCard key={data[item]} details={item}/>
          })
        }
      </div>

        <CardItems />
    </div>
  )
}
