import './Sidebar.scss';
import Profile from '../../assets/photo.jpg';
import { ArrowForwardIos, Casino, Diamond, Home, QuestionMark, Sports, SportsFootball, Wallet} from '@mui/icons-material';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="logo">
        <h1>Upcider </h1>
        <div className="close-btn"><ArrowForwardIos className='closed'/></div>
      </div>
        
        <div className='menus'>
        <a href='/' className='active'><div className='item'><Home className='menu-icon'></Home> <span>HOME</span></div></a>
        <a href='/roullette'><div className='item'><Diamond className='menu-icon'></Diamond> <span>CASINO</span></div> <div className="badge primary">new</div></a>
        <a href='/spin-to-win'><div className='item'><Casino className='menu-icon'></Casino> <span>CANLI CASINO</span></div> </a>
        <a href='/sports'><div className='item'><SportsFootball className='menu-icon'></SportsFootball> <span>SPORTS BETTING</span></div> <div className="badge primary">comming</div></a>
        <hr />
        <a href='/account'><div className='item'><Wallet className='menu-icon'></Wallet> <span>DEPOSIT</span></div> </a>
        <a href='/'><div className='item'><QuestionMark className='menu-icon'></QuestionMark> <span>Help</span></div></a>
        </div>
        <a className='profile'  href='/account'>
          <img className='profile-img' src={Profile}/>
          <div className='profile-name'>
            <h4>Albert Einstein</h4>
            <p>Data Science</p>
          </div>
        </a>
    </div>
  )
}