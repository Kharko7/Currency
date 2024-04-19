import { useEffect, useState } from "react";
import classNames from 'classnames/bind';

import styles from './SelectorAndInput.css'

const cn = classNames.bind(styles)

const Selector = ({ data, inputValue, selectorValue, disabled, onChangeSelector, onChangeInput }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleOpenDropdown = () => {
    setOpenDropdown(prev => !prev)
  }

  const handleChoose = (currency) => {
    handleOpenDropdown(false)
    onChangeSelector(currency);
  }

  const aa = useMemo(() => {
    return 'aaa'
  }, [])

  return (
    <div className={cn('dropdown')}>
      <div className={cn('inputBody')} >
        <input
          disabled={disabled}
          value={inputValue || ''}
          placeholder={0}
          onChange={onChangeInput}
        />
      </div >
      <div
        onClick={handleOpenDropdown}
        className={cn('textFieldCurrency')}>
        {selectorValue.cc || ''}
        <div className={cn('icon', openDropdown && 'open')} />
      </div>
      <div className={cn('popUp', openDropdown && 'active')}>
        <ul >
          {data.length
            ? data.map((currency) => (
              <li
                key={currency.cc}
                onClick={() => handleChoose(currency)}
                className={cn('item')}
              >
                {currency.cc}
              </li>
            ))
            : <li onClick={handleOpenDropdown} className={cn('itemLoading')} >...Loading</li>
          }
        </ul>
      </div>
      <div onClick={handleOpenDropdown} className={cn(openDropdown && 'paper')} />
    </div >
  )
}

export default Selector