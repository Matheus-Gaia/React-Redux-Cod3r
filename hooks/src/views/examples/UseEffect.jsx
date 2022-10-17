import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseEffect = (props) => {

    const [number, setNumber] = useState("1")
    const [fat, setFat] = useState(1)
    const [status, setStatus] = useState("")

    useEffect(() => {
        
        function oddEven(num) {
            return num % 2 === 0 ? "Par" : "Ímpar"
        }

        function factorialize(num) {
            const n = parseInt(num)
            if (n < 0) return -1;
            if (n === 0) return 1;
            return (n * factorialize(num - 1));
        }
        
        setFat(factorialize(number))
        setStatus(oddEven(number))

    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red">{number < 0 ? "Não existe" : fat}</span>
                </div>
                <input className="input" type="number" value={number} onChange={e => setNumber(e.target.value)} />
            </div>
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{isNaN(fat) ? "Ops..." : status}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
