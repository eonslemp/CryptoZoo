import React from 'react'
import CoinItem from '../components/Coinitem'
import '../App.css';
import { Link } from 'react-router-dom'
import Coin from '../components/Coin'

const Coins = (props) => {
    const coins = props.coins
  return (
    <div container='container'>
        <div>
            <h1>Top 7 Currencies by Market Capitalization</h1>
            <div className='heading'>
                <p>Rank</p>
                <p className='coin-name'>Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p>Volume</p>
                <p>Market Cap</p>
            </div>

            {console.log(coins)}
            {coins.map(coin =>{
                return(
                    <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
                        <CoinItem coin={coin} />
                    </Link>
                )
            })}


        </div>
    </div>
  )
}

export default Coins