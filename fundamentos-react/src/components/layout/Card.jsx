import "./Card.css"

const Card = (props) => {
    
    const cardStyle  = {
        backgroundColor: props.color || "rgb(84, 87, 87)",
        borderColor: props.color || "rgb(84, 87, 87)"
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">{props.children}</div>
        </div>
    )
}

export default Card;