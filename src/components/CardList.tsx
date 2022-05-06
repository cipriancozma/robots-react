import React from 'react'
import CardItem from './CardItem.tsx';
import "../styles/CardList.css"
import { Robots } from "../App";

interface CardListProps {
    robots: Robots[]
}

function CardList({ robots }: CardListProps) {
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
