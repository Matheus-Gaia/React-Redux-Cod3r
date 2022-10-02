import produtos from "../../data/produtos"
import "./TabelaProdutos.css"

const TabelaProdutos = () => {
    const tabela = produtos.map((produto => {
        return (
            <tr key={produto.id} className={produto.id % 2 === 0 ? "par" : "impar"}>
                <td>{produto.id}</td>
                <td>{produto.nome} </td>
                <td>R$ {produto.preco.toFixed(2).replace(".", ",")}</td>
            </tr>
        )
    }))

  return (
    <div>
        <table className="TabelaProdutos">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>PREÇO</th>
                </tr>
            </thead>
            <tbody>
                {tabela}
            </tbody>
        </table>
    </div>
  )
}

export default TabelaProdutos