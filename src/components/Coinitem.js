import React from 'react'
import '../App.css'

const CoinItem = (props) => {
  return (
    <div className='coin-row'>
        <p>{props.coin.market_cap_rank}</p>
        <div className='img-symbol'>
            <img src={props.coin.image} alt='no symbol available'/>
            <p>{props.coin.symbol.toUpperCase()}</p>

        </div>
        <p>${props.coin.current_price.toLocaleString()}</p>
        <p>{props.coin.price_change_percentage_24h.toFixed(2)}</p>
        <p>${props.coin.total_volume.toLocaleString()}</p>
        <p>${props.coin.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default CoinItem