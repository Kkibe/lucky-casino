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



/*
import { BottomNavigation } from  "reactjs-bottom-navigation";
import { IoHome} from "react-icons/io5";
import { HiHome } from "react-icons/hi";
import { AiFillProfile } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { BiMoney, BiWallet } from "react-icons/bi";


function  Home() {

const  bottomNavItems = [
	{
		title:  "Home",
		onClick: ({ id }) =>  alert("menu clicked " + id),
		icon: <HiHome />, // just for example
		activeIcon: <IoHome color="#fff" />
	},

	// items can have either title, icon or both or neither!
	{
		title:  "Explore",
		onClick: ({ id }) =>  alert("menu clicked " + id),
		icon: <MdExplore />, // just for example
		activeIcon: <MdExplore color="#fff" />
	},
	{
		title:  "Withdraw",
		onClick: ({ id }) =>  alert("menu clicked " + id),
		icon: <BiMoney />, // just for example
		activeIcon: <BiMoney  color="#fff" />
	},
	{
		title:  "Deposit",
		onClick: ({ id }) =>  alert("menu clicked " + id),
		icon: <BiWallet />, // just for example
		activeIcon: <BiWallet  color="#fff" />
	},
	{
		title:  "Account",
		onClick: ({ id }) =>  alert("menu clicked " + id),
		icon: <AiFillProfile />, // just for example
		activeIcon: <AiFillProfile color="#fff" />
	},
	// the render method enables custom item content
	{
		render: ({ isActive, id }) =>  isActive ? <strong>{id}</strong> : <span>{id}</span>,
	},
];

  

return (
<div>
	<BottomNavigation
		items={bottomNavItems}
		selected={0}
		onItemClick={(item) =>  console.log(item)}
		activeBgColor="slateBlue"
		activeTextColor="white"
	/>
</div>
);

}
export  default  Home;
*/
