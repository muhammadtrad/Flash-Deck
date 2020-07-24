import React from 'react';
const { useState, useEffect } = React;

interface StateNode {
    toggle: string,
    cardStack: Array<object>,
    totalCards: null | number,
    curr: number,
    show: string,
    side: string, 
}
const CardDisplay: React.FC = (props) => {
    const initialDeck = Object.freeze<StateNode>({ toggle: 'Shuffle Cards',
                                        cardStack: props.cardStack,
                                        totalCards: null,
                                        curr: 0,
                                        show: props.cardStack[0].word,
                                        side: 'Word',});
    
    const [deckState, updateDeck] = useState<StateNode>(initialDeck);

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
            let side = 'Word';
            updateDeck({
                ...deckState,
                cardStack,
                totalCards,
                show,
                side,
            });
    });
    }, []);

    const shuffle = () => {
       let cardStack = deckState.cardStack.slice();
       cardStack.sort(() => Math.random() - 0.5);
       let curr = 0;
       let show = cardStack[0].word;
       let side = 'Word';
        updateDeck({
            ...deckState,
            cardStack,
            show,
            curr,
            side,
        });
    }

    const flip = () => {
        let currObj = deckState.cardStack[deckState.curr];
        if (deckState.show === currObj.word){
            updateDeck({
                ...deckState,
                show: currObj.definition,
                side: 'Definition',
            });
        }
        else {
            updateDeck({
                ...deckState,
                show: currObj.word,
                side: 'Word',
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
            side: 'Word',
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
            side: 'Word',
        })
    }

    return (
        <div className= "cardDisplay">
            <div>
                <div className="totalShuffle">
                <h3>Total Cards: {deckState.totalCards}</h3>
                <button onClick={shuffle}>{deckState.toggle}</button>
                </div>
                <div className="cardWrapper">
                <div className="cardContainer">
                    <div className="card">
                            <div className="titleBlock">
                             <h3 className="currCard">Current Card: {deckState.curr+1}</h3>
                             <h3>{deckState.side}</h3>
                            </div>
                            <div className="wordBox" onClick={flip}>
                                <div className="wordDisplay">
                                <p >{deckState.show}</p>
                            </div>
                        </div>
                        <div className="cardButtons">
                            <button onClick={previousCard}>Previous</button>
                            <button onClick={nextCard}>Next</button> 
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
};

export default CardDisplay;