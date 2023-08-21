import { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';

const DeckOfCards = () => {
    const [cards, setCards] = useState([]);
    const [drawn, setDrawn] = useState([]);
 
    useEffect(() => {
        const url = "https://deckofcardsapi.com/api/deck/new/shuffle/"

        async function getCards() {
            axios.get(url).then(res => {
                setCards(res.data)
            }).catch(error => {
                console.log('error', error)
            });
        }
        getCards()
        
    },[])
    
    async function drawCard() {
        const cardRes = await axios.get(`https://deckofcardsapi.com/api/deck/${cards.deck_id}/draw/`)

        if(cardRes.data.remaining === 0){
            alert("No cards left!")
        }
        console.log(cardRes.data.remaining)
        const firstCard = cardRes.data.cards[0];
        
        setDrawn(card => [
            ...card,{
              id: firstCard.code,
              image: firstCard.image  
            },
        ])
    }

    async function shuffle() {
        await axios.get(`https://deckofcardsapi.com/api/deck/${cards.deck_id}/shuffle/`);
        setDrawn([]);
    }
    
    return (
        <>
        <button className='card-btn' onClick={drawCard}>Draw Card</button>
        <button
        onClick={shuffle}
        style={{margin: "1em", position: "relative"}}>Shuffle Cards</button>
        <div>
            {
                drawn.map(card => (
                    <Card key={card.id} cardImage={card.image}/>
                ))
            }
            
        </div>
        </>
    )
    
}

export default DeckOfCards;