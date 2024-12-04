import './app.scss'
//import MainPage from './components/MainPage/MainPage'
import Sidebar from './components/Sidebar/Sidebar'
import SpinWheelGame from './pages/SpinWheelGame/SpinWheelGame'
import Account from './pages/Account/Account';
import Home from './pages/Home/Home';
import Leagues from './components/Leagues/Leagues';

import { Route, Routes } from 'react-router-dom';
import RouletteScreen from './pages/RoulleteGame/RouletteScreen';

function App() {

  return (
    <div className='App'>
      <Sidebar />
      <div className='main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roullette" element={<RouletteScreen />} />
          <Route path="/spin-to-win" element={<SpinWheelGame />} />
          <Route path="/sports" element={<Leagues />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </div>
    
  )
}

export default App
