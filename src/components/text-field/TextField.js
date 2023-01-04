
import './TextField.css'


const TextField = ({ value, onChange }) => {
  return (
    <div className='body' >
      <input
        value={value}
        onChange={onChange}
      />
    </div >
  )
}

export default TextField