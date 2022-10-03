import React, {Component} from 'react'

class Contador extends Component {
    
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    deInc = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input id="passoInput" type="number" values={this.state.passo} onChange={this.setPasso}/>
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.deInc}>-</button>
            </div>
        )
    }
}

export default Contador