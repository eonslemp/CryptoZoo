import React from 'react'
import Graph from '../components/Graph'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react' 
import axios from 'axios'

const Buy = ({ username }) => {
    // const username = props.username
    console.log(username)
    const params = useParams()

    const [ coin, setCoin ] = useState({})
    const [ graph, setGraph] = useState({})
    const [ graphInfo, setGraphInfo] = useState([])
    let quantityRef = useRef()
// console.log(coin)

    const url = `https://api.coingecko.com/api/v3/coins/${params.coinid}`


    const getCoin = async () => {
        try {
        const response = await fetch(url)
        console.log(response)
        const data = await response.json()
        console.log(data)
        setCoin(data)
    // console.log(coin, )
    } catch(e) {
        console.log('no data')
        console.log(e)
    } 
    }
    const histURL = `https://api.coingecko.com/api/v3/coins/${params.coinid}/market_chart?vs_currency=usd&days=7`

    const getData = async () => {
        try{
        // console.log('running')
            const response = await fetch(histURL)
            const histData = await response.json()
            setGraph(histData)
        // console.log(graph)
            const graphData = histData.prices.map((price) => {
            const [timestamp, p] = price
            const date = new Date(timestamp).toLocaleDateString('en-us')
            return {
              Date: date,
              Price: p
            }
        })
      setGraphInfo(graphData)
      // console.log(graphData)

    } catch(e) {
        console.log(e)
    }


}

useEffect(() => {
    getData()
    getCoin()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    let buyCrypto = {
        quantity: quantityRef.current.value,
        username
    }
    axios.post('')
  }

  return (
    <div className='show'>
        <form className='buy' onSubmit={handleSubmit}>
             <h1>{coin.name}</h1>
             <input type='number' ref={quantityRef}></input>
             <br />
             <button>Buy Crypto</button>
        </form>
        <div className='coin-display'>
            <h1 className='rank'>Rank:  {coin.market_cap_rank}</h1>
            {coin.image ? <img src={coin.image.small} alt=''/> : null}
            <br />
            <h1>{coin.symbol}</h1>
            {coin.market_data ? <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
        
        </div>
        <h1>{coin.name} price for last 7 days</h1>
        <div >
          <Graph data={graphInfo}/>
        </div>

        
        
    </div>
  )
}

export default Buy