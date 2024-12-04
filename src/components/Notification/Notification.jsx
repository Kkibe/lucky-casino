import { useState } from 'react'
import './Notification.scss';
import { Clear } from '@mui/icons-material';

export default function Notification() {
    const [visible, setVisible] = useState("flex");
    const handleVisibility = () => {
      setVisible("none");
    }
  return (
    <div className='notification' style={{display: visible}}>
        <div>Deposit KSH. 100 to receive free 100% bonus</div>
        <span onClick={handleVisibility}><Clear/></span>
      </div>
  )
}
