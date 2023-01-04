import { useState } from 'react';

import { useCurrency } from '../../../hooks/get-currency';
import SelectorAndInput from '../../../components/selector-and-input/SelectorAndInput'
import './ConvertCurrency.css'
import { regExp } from '../../../constants/currency';

const ConvertCurrency = () => {
  const [amountFirstInput, setAmountFirstInput] = useState(0);
  const [amountSecondInput, setAmountSecondInput] = useState(0);
  const [selectedFirst, setSelectedFirst] = useState({});
  const [selectedSecond, setSelectedSecond] = useState({});
  const currencies = useCurrency()

  const handleChangeFirstAmount = (event) => {
    const value = event.target.value
    if (regExp.regNumAndDot.test(value)) {
      setAmountFirstInput(value)

      selectedFirst.cc === "UAH"
        ? setAmountSecondInput(value / selectedSecond.rate)
        : setAmountSecondInput(value * selectedFirst.rate / selectedSecond.rate)
    }
  }
  const handleChangeSecondAmount = (event) => {
    const value = event.target.value
    if (regExp.regNumAndDot.test(value)) {
      setAmountSecondInput(value)

      selectedSecond.cc === "UAH"
        ? setAmountFirstInput(value / selectedFirst.rate)
        : setAmountFirstInput(value * selectedSecond.rate / selectedFirst.rate)
    }
  }

  const handleChangeFirstSelector = (currency) => {
    setSelectedFirst(currency)

    currency.cc === "UAH"
      ? setAmountFirstInput(amountSecondInput * selectedSecond.rate)
      : setAmountFirstInput(amountSecondInput * selectedSecond.rate / currency.rate)
  }
  const handleChangeSecondSelector = (currency) => {
    setSelectedSecond(currency)

    currency.cc === "UAH"
      ? setAmountSecondInput(amountFirstInput * selectedFirst.rate)
      : setAmountSecondInput(amountFirstInput * selectedFirst.rate / currency.rate)
  }

  return (
    <div className='bodyCurrency' >
      <SelectorAndInput
        disabled={!Boolean(selectedFirst.cc && selectedSecond.cc)}
        selectorValue={selectedFirst}
        inputValue={amountFirstInput}
        onChangeInput={handleChangeFirstAmount}
        onChangeSelector={handleChangeFirstSelector}
        data={currencies}
      />
      <SelectorAndInput
        disabled={!Boolean(selectedFirst.cc && selectedSecond.cc)}
        selectorValue={selectedSecond}
        inputValue={amountSecondInput}
        onChangeInput={handleChangeSecondAmount}
        onChangeSelector={handleChangeSecondSelector}
        data={currencies}
      />
    </div >
  )
}

export default ConvertCurrency