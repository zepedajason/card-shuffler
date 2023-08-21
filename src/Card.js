import { useState, useEffect } from "react";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";
//https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2

const Card = ({cardImage}) => {
    
    
    return (
        <div className="card-container"
        style={{
        position: "relative", 
        margin: "1em"}}
        >
            <img 
            src={cardImage} 
            alt=""
            style={{
            position: "absolute",
            margin: "auto",
            left: '0',
            right: '0'
            }}
            >
            </img>
        </div>
    )
}

export default Card;
