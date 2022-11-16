import React from 'react'

const TrendingCoinIitem = (props) => {
    const coin = props.coin
    console.log(coin)
  return (
    <div className='coin-row'>
    <div className='img-symbol'>
        <img src={coin.image} alt='no symbol available'/>
        <p>{coin.symbol.toUpperCase()}</p>
    </div>
    <p>{coin.name}</p>
    <p>{coin.cap_rank}</p>
    {/* <p>${props.coin.current_price.toLocaleString()}</p>
    <p>{props.coin.price_change_percentage_24h.toFixed(2)}</p>
    <p>${props.coin.total_volume.toLocaleString()}</p>
    <p>${props.coin.market_cap.toLocaleString()}</p> */}
</div>
  )
}

export default TrendingCoinIitem