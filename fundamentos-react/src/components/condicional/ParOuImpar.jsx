import React from 'react'

const ParOuImpar = ({ numero }) => {

    const parImpar = (valor) => {
        return valor % 2 === 0 ? <span>Par</span> : <span>Impar</span>
    } 

  return (
    <div>
        {parImpar(numero)}
    </div>
  )
}

export default ParOuImpar