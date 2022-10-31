import React , { useState, useEffect } from 'react'
import Coins from './components/Coins'
import Navbar from './components/Navbar'
import Trending from './Routes/Trending';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Coin from './Routes/Coin'
import Converter from './Routes/Converter';


function App() {
  const [coins, setCoins ] = useState([])
  const [trending, setTrending] = useState([])

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=7&page=1&sparkline=false`

  const trending_url = 'https://api.coingecko.com/api/v3/search/trending'

  const getTrending = async () => {
    try {
    const response = await fetch(trending_url)
    const data = await response.json()
    setTrending(data)
    } catch (err) {
    console.log(err)
  }
  }


  const getCoin = async () => {
    try{
    const response = await fetch(url)
    const data = await response.json()
    setCoins(data)
    } catch(err) {console.log(err)
    }
}
  useEffect(() => {
    getTrending()
    getCoin()
    
  }, [])
  
  const trendingCoins = trending.coins
  console.log(trendingCoins)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Coins  coins={coins}/>}/>
        <Route path='/coin/:coinid' element={<Coin />}/>
        <Route path='/converter' element={<Converter />}/>
        <Route path='/trending' element={<Trending trending={trendingCoins}/>}/>
        {/* <Route path='/trending/'/> */}
      </Routes>
      

    </div>
  );
}

export default App;


