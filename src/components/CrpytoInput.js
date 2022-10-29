
// import React, { useState, useEffect} from 'react'


function CrpytoInput(props) {

    
// const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false'

// const [list, setList ] = useState()

  

// const getList = async () => {
//   try{
//     const response = await fetch(url)
//     const data = await response.json()
//     setList(data)
//     console.log(list)
//   } catch(e) {
//     console.log('no data')
//     console.log(e)
//   }
// }



// useEffect(() => {
//   getList()
// },[])




// const options = list.map((item) => {
//   return (
//     {
//     symbol: item.symbol,
//     id: item.id,
//     price: item.current_price
//     }
//   )
// })
// console.log(options)
// const currencies = options.map((item) => {
//     return(
//     {
//         symbol: item.symbol
//     }
//     )
// })
// console.log(currencies)

    // console.log(props.options)


    const options = props.options

    console.log(options)

    console.log(options)
    const symbols = options.map((item) => {
        return (
            item.symbol
        )
    })

    console.log(symbols)
  return (
    <div>
        
        <input type='number'/>
        <select>
            {symbols.map(option => {
                return (
                <option key={option} value={option}>{option}</option>
            )})
                
            }
            
        </select>
    </div>
  )
}

export default CrpytoInput