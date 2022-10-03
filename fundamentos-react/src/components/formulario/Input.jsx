import "./Input.css"
import { useState } from 'react'

const Input = () => {
    
    const [valor, setValor] = useState("Inicial")

  return (
    <div className='Input'>
        <h2>{valor}</h2>
        <input value={valor} onChange={e => setValor(e.target.value)} type="text" />
    </div>
  )
}

export default Input