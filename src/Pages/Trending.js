import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom'
import TrendingCoins from '../components/TrendingCoins'
import TrendingCoinItem from '../components/TrendingCoinIitem'

const Trending = (props) => {
    const trending = props.trending
    console.log(trending)
      return (
    <div container='container'>
    <div>
        <h1>Top 7 Currencies Trending on Coin Gecko</h1>
        <div className='heading'>
            <h2 className='coin-name'>Image/Symbol</h2>
            <h2>Coin Id</h2>
            <h2>Market Cap Rank</h2>
            {/* <p>Rank</p> */}
            
        </div>

      
        {trending.map(coin =>{
            return(
                <Link to={`/coin/${coin.id}`} element={<TrendingCoins />} key={coin.id}>
                    <TrendingCoinItem  coin={coin} />
                </Link>
            )
        })}


    </div>
</div>
  )
}

export default Trending