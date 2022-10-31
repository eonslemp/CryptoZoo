

function CrpytoInput(props) {
    
    const {symbols, selectedCurrency, changeCurrency, amount, changeAmount } = props



  return (
    <div>
       
        {/* <input type='number' className="input" value={amount} onChange={changeAmount}/>
        <select value={selectedCurrency} onChange={changeCurrency}>
            {symbols.map(option => {
                return (
                <option key={option} value={option}>{option}</option>
            )})
                
            }
            
        </select> */}
    </div>
  )
}

export default CrpytoInput