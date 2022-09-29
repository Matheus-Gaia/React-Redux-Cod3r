import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Aleatorio from "./components/basicos/Aleatorio";

const App = () => {
  return (
    <>     
    <h1>Fundamentos React 2</h1>
        <Aleatorio 
            max={20}
            min={1}
            />
        <ComParametro 
            titulo="Situação do Aluno"
            aluno="Pedro Silva"
            nota={6.3}

        />
        <Primeiro/>
    </>
  )
}

export default App