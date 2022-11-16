import React from 'react'

const TrendingCoins = (props) => {
    console.log(props)
  return (
     <div container='container'>
        <h1>Top 7 Currencies Trending on Coin Gecko</h1>
            <div className='heading'>
                <p>Rank</p>
                <p className='coin-name'>Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p>Volume</p>
                <p>Market Cap Rank</p>
            </div>
    </div>
  )
}

export default TrendingCoins