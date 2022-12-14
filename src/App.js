import React , { useState, useEffect } from 'react'
import Coins from './Pages/Coins'
import Navbar from './components/Navbar'
import Trending from './Pages/Trending';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Coin from './components/Coin'
import Profile from './Pages/Profile'
import Register from './Pages/Register'
import Login from './Pages/Login';
import Buy from './Pages/Buy'


function App() {
  const [user, setUser ] = useState({})
  const [coins, setCoins ] = useState([])
  const [trending, setTrending] = useState([])

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=7&page=1&sparkline=false`

  const trending_url = 'https://api.coingecko.com/api/v3/search/trending'

  const getTrending = async () => {
    try {
    const response = await fetch(trending_url)
    const data = await response.json()
    setTrending(data.coins)
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
  
  // const trendingCoins = trending.coins
  const trendingCoins = trending.map(coin =>({
    id: coin.item.id,
    name: coin.item.name,
    symbol: coin.item.symbol,
    image: coin.item.large,
    cap_rank: coin.item.market_cap_rank,
  }))


  const [state, setState] = useState()
    
  const [list, setList] = useState()

// console.log(usd)
  const menuUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'


  const getList = async () => {
    try {
    const response = await fetch(menuUrl)
    console.log(response)
    const data = await response.json()
    console.log(data)
    setList(data)

    } catch(e) {
    console.log('no data')
    console.log(e)
    } 
  }
  useEffect(() => {
    getList()
  }, [])
  console.log(list)
  const menuArray = list?.map(coin => ({
    id: coin.id,
    image: coin.image,
    symbol: coin.symbol
  }))

  console.log(menuArray)


  // console.log(trendingCoins)
  let homeRoutes;
  console.log(user.usd)
  if (user.username) {
    homeRoutes = (
      <Routes>
        <Route path='/' element={<Coins  coins={coins}/>}/>
        <Route path='/coin/:coinid' element={<Coin />}/>
        
        <Route path='/profile' element={
            <Profile 
              username={user.username} 
              usd={user.usd}
              menuArray={menuArray}
              />}
            />
        <Route path='/profile/buy/:coinid' element={<Buy username={user.username} />}/>
        <Route path='/trending' element={<Trending trending={trendingCoins}/>}/>
        <Route path='/trending/coin/:coinid' element={<Coin />}/>

      </Routes>
    )
  } else {
    homeRoutes = (
      <Routes>
        <Route path="/" element={<Coins coins={coins}/>} />
        <Route path="/login" element={<Login setUser={setUser}/>} />
        <Route path="/register" element={<Register setUser={setUser}/>} />
      </Routes>
    )
}
  return (

    <div className="App">
      <Navbar user={user.username} setUser={setUser}/>
        {homeRoutes}

    </div>
  );
}

export default App;


