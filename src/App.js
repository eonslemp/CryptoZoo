import React , { useState, useEffect } from 'react'
import Coins from './components/Coins'
import Navbar from './components/Navbar'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Coin from './Routes/Coin'
import Converter from './Routes/Converter';


function App() {
  const [coins, setCoins ] = useState([])

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=7&page=1&sparkline=false`

  const getCoin = async () => {
    try{
    const response = await fetch(url)
    const data = await response.json()
    setCoins(data)
    } catch(err) {console.log(err)
    }
}
  useEffect(() => {

    getCoin()
    
  }, [])
  console.log(coins)
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Coins  coins={coins}/>}/>
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinid' element={<Coin />}/>
        </Route>
        <Route path='/converter' element={<Converter />}/>
      </Routes>
      

    </div>
  );
}

export default App;
