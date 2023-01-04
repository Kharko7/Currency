import ConvertCurrency from "./convert-currency/ConvertCurrency"
import './Header.css';

const Header = () => {
  return (
    <header className="appHeader">
      <div className="headerContainer" >
        <ConvertCurrency />
      </div>
    </header>
  )
}

export default Header
