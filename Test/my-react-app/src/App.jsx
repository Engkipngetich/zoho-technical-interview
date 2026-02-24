import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [ChangeCurrency, setChangeCurrency] = useState(0)
  const [toCurrency, setToCurrency] = useState('USD')
  const [USDCoversion, setUSDCoversionTothers] = useState(0)
  
  
 
   
  //currency converter from KES/USD to USD/K, EUR, GBP
  const convertCurrency = (amount, fromCurrency, toCurrency) => {
    const exchangeRates = {
      USD: 0.0091, // 1 KES = 0.0091 USD
      EUR: 0.0077, // 1 KES = 0.0077 EUR
      GBP: 0.0066, // 1 KES = 0.0066 GBP
    };

    if (!exchangeRates[toCurrency]) {
      throw new Error(`Unsupported currency: ${toCurrency}`);
    }


    return amount * exchangeRates[toCurrency];
  }


  return (
    <>
        <div>
          <p> Currency Converter from KES to USD, EUR, GBP</p>
        <input type="number" value={ChangeCurrency} onChange={(e) => setChangeCurrency(Number(e.target.value))} />  
        </div>   
        <div>
          <p>{ChangeCurrency} KES is equal to {convertCurrency(ChangeCurrency, 'KES', 'USD').toFixed(2)} USD</p>
          <p>{ChangeCurrency} KES is equal to {convertCurrency(ChangeCurrency, 'KES', 'EUR').toFixed(2)} EUR</p>
          <p>{ChangeCurrency} KES is equal to {convertCurrency(ChangeCurrency, 'KES', 'GBP').toFixed(2)} GBP</p>
        </div>
        <div>
          <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
      
        <div>
          <p>{ChangeCurrency} KES is equal to {convertCurrency(ChangeCurrency, 'KES', toCurrency).toFixed(2)} {toCurrency}</p>
        </div>  

              
    </>
  )
}

export default App
