import React, { useEffect, useState } from 'react'
import CrpytoInput from '../components/CrpytoInput'

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false'


const Converter = () => {

  const [list, setList ] = useState()
  const [ fromCurrency, setFromCurrency ]  = useState()
  const [ toCurrency, setToCurrency ]  = useState()
  const [ exchangeRate, setExchangeRate ] = useState()
  const [ amount, setAmount ] = useState()
  const [ fromCurrencyAmount, setFromCurrencyAmount ] = useState(true)



  

  const getList = async () => {
    try{
      const response = await fetch(url)
      const data = await response.json()
      setList(data)
      console.log(list)
      setFromCurrency(list[0].symbol)
      setToCurrency(list[1].symbol)
      setExchangeRate(list[0].current_price/list[1].current_price)
      setFromCurrencyAmount(1)

    } catch(e) {
      console.log('no data')
      console.log(e)
    }
  }


  useEffect(() => {
    getList()
  },[])





  // const options = list.map((item) => {
  //   return (
  //     {
  //     symbol: item.symbol,
  //     id: item.id,
  //     price: item.current_price
  //     }
  //   )
  // })
 

//   const symbols = options.map((item) => {
//       return (
//           item.symbol
//       )
//   })
//   const prices = options.map((item) => {
//     return (
//         item.price
//     )
// })

// const names = options.map((item) => {
//     return (
//         item.id
//     )
// })

// const fromAmount = amount
// const toAmount =  fromAmount*exchangeRate

// console.log(fromCurrency)
// console.log(toCurrency)
// console.log(exchangeRate)
// console.log(fromAmount)
// console.log(toAmount)



// useEffect(() => {
//   setExchangeRate(prices[symbols.indexOf(fromCurrency)]/prices[symbols.indexOf(toCurrency)])

// },[fromCurrency, toCurrency])

// console.log(prices[symbols.indexOf(fromCurrency)]/prices[symbols.indexOf(toCurrency)])
// console.log(exchangeRate)

// function handleFromAmountChange(event){
//   setAmount(event.target.value)
//   setFromCurrencyAmount(true)

// }
// function handleToAmountChange(event){
//   setAmount(event.target.value)
//   setFromCurrencyAmount(false)

// }


  // <CrpytoInput options={options}/>

  return (
    <div className='converter'>
      <h1>Convert</h1>
      <CrpytoInput/>
        <h2>Is equal to:</h2>
      <CrpytoInput/>
    </div>
  )
}


export default Converter


// return (
//   <div className='converter'>
//     <h1>Convert</h1>
//     <CrpytoInput 
//       symbols={symbols}
//       prices={prices}
//       names={names}
//       selectedCurrency={fromCurrency}
//       changeCurrency={event => setFromCurrency(event.target.value)}
//       amount={fromAmount}
//       changeAmount={handleFromAmountChange}

//       />
//       <h2>Is equal to:</h2>
//     <CrpytoInput 
//       symbols={symbols} 
//       prices={prices} 
//       names={names}
//       selectedCurrency={toCurrency}
//       changeCurrency={event => setToCurrency(event.target.value)}
//       amount={toAmount}
//       changeAmount={handleToAmountChange}
//       />
//   </div>
// )
// }


// export default Converter