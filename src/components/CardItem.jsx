import React from 'react'
import "../styles/CardItem.css"

function CardItem({ robot }) {
    return (
        <div className="container">
            <img alt={`robot ${robot.name}`} src={`https://robohash.org/${robot.id}?set=set1&size=180x180`} />
            <h2>{robot.name}</h2>
            <p>{robot.email}</p>
        </div>
    )
}

export default CardItem
