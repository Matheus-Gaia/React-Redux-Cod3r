import "./App.css";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Aleatorio from "./components/basicos/Aleatorio";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Card from "./components/layout/Card";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import Usuario from "./components/condicional/Usuario";


const App = () => {
  return (
    <div className="App">     
      <h1>Fundamentos React</h1>
        <div className="Cards">
      
          <Card titulo="#07 - Renderização Condicional" color="#707B7C"> 
              <ParOuImpar numero={20}/>
              <Usuario usuario={{nome: "Fernando"}}/>
              <Usuario usuario={{}}/>
          </Card>

          <Card titulo="#06 - Repetição" color="#CACFD2"> 
              <TabelaProdutos/>
          </Card>

          <Card titulo="#05 - Repetição" color="#909497"> 
              <ListaAlunos/>
          </Card>

          <Card titulo="#04 - Componente Filho" color="#707B7C"> 
              <Familia sobrenome="Ferreira">
                  <FamiliaMembro nome="Matheus"/>
                  <FamiliaMembro nome="Maria"/>
                  <FamiliaMembro nome="José"/>             
              </Familia>
            </Card>
          
          <Card titulo="#03 - Desafio Aleatório" color="#CACFD2"> 
              <Aleatorio 
                  max={20}
                  min={1}
                />
            </Card>

            <Card titulo="#02 - Com Paramentro" color="#707B7C"> 
              <ComParametro 
                  titulo="Situação do Aluno"
                  aluno="Pedro Silva"
                  nota={6.3}
                />
            </Card>

            <Card titulo="#01 - Primeiro" color="#909497">
              <Primeiro/>
            </Card>
        </div>
    </div>
  )
}

export default App