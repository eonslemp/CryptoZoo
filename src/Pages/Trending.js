import React from 'react'
import CoinItem from '../components/Coinitem'
import '../App.css';
import { Link } from 'react-router-dom'
import Coin from './Coin'

const Trending = (props) => {
    const trending = props.trending
    console.log(trending)
      return (
    <div container='container'>
    <div>
        <h1>Top 7 Currencies Trending on Coin Gecko</h1>
        <div className='heading'>
            <p>Rank</p>
            <p className='coin-name'>Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p>Volume</p>
            <p>Market Cap</p>
        </div>

      
        {trending.map(coins =>{
            return(
                // <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                    <CoinItem key={coins.id} coins={coins} />
                // </Link>
            )
        })}


    </div>
</div>
  )
}

export default Trending