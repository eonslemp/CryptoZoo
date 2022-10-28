import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import '../App.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Coin = () => {

const params = useParams()

const [ coin, setCoin ] = useState({})
const [ graph, setGraph] = useState({})
console.log(coin)

const url = `https://api.coingecko.com/api/v3/coins/${params.coinid}`

// console.log(params)
// console.log(params.coinid)
// const getCoin = async () => {
//     try{
//     const response = await fetch(url)
//     const data = await response.json()
//     setCoin(data)
//     } catch(err) {console.log(err)
//     }
// }
const getCoin = async () => {
    try {
    const response = await fetch(url)
    console.log(response)
    const data = await response.json()
    console.log(data)
    setCoin(data)
    console.log(coin, )
} catch(e) {
    console.log('no data')
    console.log(e)
} 
}
const histURL = `https://api.coingecko.com/api/v3/coins/${params.coinid}/market_chart?vs_currency=usd&days=7`

const getData = async () => {
    try{
        const response = await fetch(histURL)
        const histData = await response.json()
        setGraph(histData)
        console.log(graph)

    } catch(e) {
        console.log(e)
    }


}

useEffect(() => {
    getData()
    getCoin()
  }, [])
  console.log(coin)
  console.log(graph.prices)

const graphData = graph.prices.map((price) => {
    const [timestamp, p] = price
    const date = new Date(timestamp).toLocaleDateString('en-us')
    return {
        Date: date,
        Price: p
    }
})
console.log(graphData)

  return (
    <div className='show'>
        <div>
             <h1>{coin.name}</h1>
        </div>
        <div className='coin-display'>
            <h1 className='rank'>Rank:  {coin.market_cap_rank}</h1>
            {coin.image ? <img src={coin.image.small} alt=''/> : null}
            <h2>{coin.name}</h2>
            <br />
            <h2>{coin.symbol}</h2>
            {coin.market_data ? <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
        
        </div>
        <h1>{coin.name} price for last 7 days</h1>
        <div className='graph'>
        <LineChart
          width={500}
          height={300}
          data={graphData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" stroke="white" tick={{ fill: 'white' }} tickLine={{ stroke: 'white' }}/>
          <YAxis stroke="white" tick={{ fill: 'white' }} tickLine={{ stroke: 'white' }} />
          <Tooltip stroke='black'/>
          <Legend />
          <Line type="monotone" dataKey="Price" stroke="#f4f4ea" />
        </LineChart>
        </div>
        
    </div>
  )
}

export default Coin