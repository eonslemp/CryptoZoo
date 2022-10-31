import React, { useEffect, useState } from 'react'
import CrpytoInput from '../components/CrpytoInput'

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false'


const Converter = () => {

  const [list, setList ] = useState()
  const [ fromCurrency, setFromCurrency ]  = useState()
  const [ toCurrency, setToCurrency ]  = useState()

  

  const getList = async () => {
    try{
      const response = await fetch(url)
      const data = await response.json()
      setList(data)
      console.log(list)
      setFromCurrency(list[0].symbol)
      setToCurrency(list[1].symbol)
    } catch(e) {
      console.log('no data')
      console.log(e)
    }
  }


  useEffect(() => {
    getList()
  },[])





  const options = list.map((item) => {
    return (
      {
      symbol: item.symbol,
      id: item.id,
      price: item.current_price
      }
    )
  })
 

  const symbols = options.map((item) => {
      return (
          item.symbol
      )
  })
  const prices = options.map((item) => {
    return (
        item.price
    )
})

const names = options.map((item) => {
    return (
        item.id
    )
})

console.log(options)
console.log(names)
console.log(prices)
console.log(symbols)
console.log(toCurrency)
console.log(fromCurrency)



  // <CrpytoInput options={options}/>

//   return (
//     <div className='converter'>
//       <h1>Convert</h1>
//       <CrpytoInput/>
//         <h2>Is equal to:</h2>
//       <CrpytoInput/>
//     </div>
//   )
// }


// export default Converter



return (
  <div className='converter'>
    <h1>Convert</h1>
    <CrpytoInput 
      symbols={symbols}
      prices={prices}
      names={names}
      selectedCurrency={fromCurrency}
      changeCurrency={event => setFromCurrency(event.target.value)}

      />
      <h2>Is equal to:</h2>
    <CrpytoInput 
      symbols={symbols} 
      prices={prices} 
      names={names}
      selectedCurrency={toCurrency}
      changeCurrency={event => setToCurrency(event.target.value)}
      />
  </div>
)
}


export default Converter