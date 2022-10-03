const DiretaFilho = (props) => {
  return (
    <div>
        <span>{props.nome} </span>
        <span><strong>{props.idade} </strong> </span>
        <span>{props.bool ? "Verdadeiro" : "Falso"}!</span>
    </div>
  )
}

export default DiretaFilho