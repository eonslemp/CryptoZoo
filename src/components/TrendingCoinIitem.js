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
</div>
  )
}

export default TrendingCoinIitem