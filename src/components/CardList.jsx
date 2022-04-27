import React from 'react'
import CardItem from './CardItem';
import "../styles/CardList.css"

function CardList({ robots }) {
    return (
        <div className="list">
            {
                robots.map((robot) => {
                    return <CardItem robot={robot} key={robot.id} />;
                })
            }
        </div>
       
    )
}

export default CardList
