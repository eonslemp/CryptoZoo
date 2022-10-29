import React from 'react'
import CoinItem from './Coinitem'
import '../App.css';
import { Link } from 'react-router-dom'
import Coin from '../Routes/Coin'

const Coins = (props) => {
  return (
    <div container='container'>
        <div>
            <h1>Top 7 Cryptos by Market Capitalization</h1>
            <div className='heading'>
                <p>Rank</p>
                <p className='coin-name'>Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p>Volume</p>
                <p>Market Cap</p>
            </div>

            {/* {console.log(props.coins)} */}
            {props.coins.map(coins =>{
                return(
                    <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                        <CoinItem coins={coins} />
                    </Link>
                )
            })}


        </div>
    </div>
  )
}

export default Coins