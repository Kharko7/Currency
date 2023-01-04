import { useEffect, useState } from "react"
import { UAH } from "../constants/currency"

export const useCurrency = () => {
  const [currencies, setCurrencies] = useState([])

  useEffect(() => {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .then(response => response.json())
      .then(data => {
        const filterCurrencies = data.filter(currency => {
          return currency.cc === 'USD' || currency.cc === 'EUR' || currency.cc === 'GBP'
        })
        setCurrencies([...filterCurrencies, UAH])
      })
  }, [])

  return currencies
}