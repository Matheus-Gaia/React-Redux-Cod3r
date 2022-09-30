import React from 'react'

const Aleatorio = ({ max, min }) => {
    const random = Math.round(Math.random() * (max - min) + min)
  return (
    <h2>Número Aleatorio: { random }</h2>
  )
}

export default Aleatorio