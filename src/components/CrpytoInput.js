

function CrpytoInput(props) {
    
    const { names, prices, symbols, selectedCurrency, changeCurrency } = props

    console.log(names)
    console.log(prices)
    console.log(symbols)

  return (
    <div>
        
        <input type='number'/>
        <select value={selectedCurrency} onChange={changeCurrency}>
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