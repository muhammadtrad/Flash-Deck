import React from 'react';
const { useState, useEffect } = React;

const CardDisplay = (props) => {
    const initialDeck = Object.freeze({ toggle: 'Shuffle Cards',
                                        cardStack: props.cardStack,
                                        totalCards: null,
                                        curr: 0});
    
    const [deckState, updateDeck] = useState(initialDeck);
    

    useEffect(function effectFunction(){
    fetch(`/api/getCards`)
    .then((response) => response.json())
    .then(data => {
            let cardStack = [];
            data.forEach((el) => {
                let obj = { word: el.word, definition: el.definition}
                cardStack.push(obj);
            });
            let totalCards = cardStack.length;
            let show = cardStack[0].word;
            updateDeck({
                ...deckState,
                cardStack,
                totalCards,
                show,
            });
    });
    }, []);

    const shuffle = () => {
       let cardStack = deckState.cardStack.slice();
       cardStack.sort(() => Math.random() - 0.5);
       let curr = 0;
       let show = cardStack[0].word;
        updateDeck({
            ...deckState,
            cardStack,
            show,
            curr,
        });
    }

    const flip = () => {
        let currObj = deckState.cardStack[deckState.curr];
        if (deckState.show === currObj.word){
            updateDeck({
                ...deckState,
                show: currObj.definition,
            });
        }
        else {
            updateDeck({
                ...deckState,
                show: currObj.word,
            });
        }
    }

    const nextCard = () => {
        let curr = deckState.curr + 1;
        if (curr >= deckState.cardStack.length){
            curr = 0;
        }
        let show = deckState.cardStack[curr].word;
        updateDeck({
            ...deckState,
            curr,
            show,
        })
    }

    const previousCard = () => {
        let curr = deckState.curr - 1;
        if (deckState.curr === 0){
            curr = deckState.cardStack.length-1;
        }
        let show = deckState.cardStack[curr].word;
        updateDeck({
            ...deckState,
            curr,
            show,
        })
    }

    return (
        <div className= "cardDisplay">
            <div>
                <button onClick={shuffle}>{deckState.toggle}</button>
                <div>
                    <div>
                      <h3>Total Cards: {deckState.totalCards}</h3>
                    </div>
                    <div className="card">
                    <p className = "wordDisplay" onClick={flip}>{deckState.show}</p>
                    <button onClick={previousCard}>Previous</button>
                    <button onClick={nextCard}>Next</button> 
                      <h3>Current Card: {deckState.curr+1}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CardDisplay;