import React, { useEffect, useState } from 'react'
import CrpytoInput from '../components/CrpytoInput'

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false'


const Converter = () => {

  const [list, setList ] = useState()

  

  const getList = async () => {
    try{
      const response = await fetch(url)
      const data = await response.json()
      setList(data)
      console.log(list)
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
  console.log(options)

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
    <CrpytoInput options={options}/>
      <h2>Is equal to:</h2>
    <CrpytoInput options={options}/>
  </div>
)
}


export default Converter