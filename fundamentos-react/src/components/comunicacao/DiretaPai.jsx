import DiretaFilho from './DiretaFilho'

const DiretaPai = () => {
  return (
    <div>
        <DiretaFilho nome="Marcos" idade={20} bool={true}/>
        <DiretaFilho nome="Vinicus" idade={25} bool={false}/>
    </div>
  )
}

export default DiretaPai