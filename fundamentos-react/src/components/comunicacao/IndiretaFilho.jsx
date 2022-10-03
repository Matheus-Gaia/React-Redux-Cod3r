const IndiretaFilho = ({ fornecerInformacoes }) => {
    
    const gerarIdade = () => parseInt(Math.random() * (20)) + 50
    const gerarNerd = () => Math.random() > 0.5

  return (
    <div>
        <div>Filho</div>
        <button onClick={() => fornecerInformacoes("João", gerarIdade(), gerarNerd())}>
            Fornercer Informações
        </button>
    </div>
  )
}

export default IndiretaFilho