import "./DesafioMega.css"
import { useState } from 'react'

const DesafioMega = () => {

  const [quantidade, setQuantidade] = useState(6)
  const [numeros, setNumeros] = useState(Array(quantidade).fill(0))

  const sorteador = (qtd) => {
    let array = []

    while (array.length < qtd) {
      let valor = Math.floor(Math.random() * (60 - 1) + 1)
      if (array.indexOf(valor) === -1) {
        array.push(valor)
      }
    }

    const result = array.sort((a, b) => a - b)

    qtd < 6 || qtd > 15 ? alert("Mínimo 6 números e Máximo 15 números") : setNumeros(result)
  }

  const exibir = (array) => {
    return array.map(e => <span className="numero"> {e} </span>)
  }

  return (
    <div className="Mega">
      <h2>Mega-Sena</h2>
      <h3>{exibir(numeros)}</h3>
      <div>
        <label>Quantidade de Números</label>
        <input min={6} max={15} type="number" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
      </div>
      <button onClick={() => sorteador(quantidade)}>Gerar Números</button>
    </div>
  )
}

export default DesafioMega