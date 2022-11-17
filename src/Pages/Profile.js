
import Portfolio from '../components/Portfolio'
import '../App.css';
import { Link } from 'react-router-dom'
import Buy from '../Pages/Buy'



function Profile ({ username, usd, menuArray }) {
  
//   const [state, setState] = useState()
    
//   const [list, setList] = useState()

// // console.log(usd)
//   const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'


//   const getList = async () => {
//     try {
//     const response = await fetch(url)
//     console.log(response)
//     const data = await response.json()
//     console.log(data)
//     setList(data)

//     } catch(e) {
//     console.log('no data')
//     console.log(e)
//     } 
//   }
//   useEffect(() => {
//     getList()
//   }, [])
//   console.log(list)
//   const menuArray = list?.map(coin => ({
//     id: coin.id,
//     image: coin.image,
//     symbol: coin.symbol
//   }))

console.log(menuArray)


  return (
    <div>
      <h1>Hello {username[0].toUpperCase() + username.substring(1)}</h1>
      <h2>you have one bitcoin or ${usd} to invest</h2>
      <Portfolio/>
      <h1>Available Coins</h1>
      <div className='menu-container'>

        {menuArray?.map(coin => {
          return(
          <Link to={`/profile/buy/${coin.id}`} element={<Buy coin={coin}/>} key={coin.id}>
              <div className='coin-item'>
                <p>{coin.id}</p>
                <img src={coin.image} alt='no symbol available'/>
              </div>
          </Link>
          )

// {coins.map(coin =>{
//   return(
//       <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
//           <CoinItem coin={coin} />
//       </Link>
//   )
// })}

        })}
      </div>
    </div>
  )
}

export default Profile