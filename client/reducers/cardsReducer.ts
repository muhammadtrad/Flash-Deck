import * as types from '../constants/actionTypes';


const initialState = {
    cardStack: [ {'word': 'hello', 'definition': 'a greeting'},
                 {'word': 'bye', 'definition': 'a goodbye'} ],
    totalCards: 2,
};

const cardsReducer = (state=initialState, action) => {
  let cardStack;
  let totalCards;
  switch(action.type) {
    case types.ADD_CARD:
    // increment the number of total cards 
     totalCards = state.totalCards + 1;
    // create new card object from provided data
     let newWord = {
         word: action.payload.word,
         definition: action.payload.definition,
     }
    cardStack = state.cardStack.slice();
    cardStack.push(newWord);
    let postURL = `word=${newWord.word}&definition=${newWord.definition}`;
     fetch(`/api/addCard?${postURL}`, {
         method: 'POST',
     })
     .then(res => res.json())
     .catch((err) => console.log('ADDCARD fetch /api/addCard: ERROR:', err));
    return {
        ...state,
        cardStack,
        totalCards,
    };

    case types.MODIFY_CARD: 
    cardStack = state.cardStack.slice();
    cardStack.forEach( (el) => {
        if (el.word === action.payload.word){
            el.word = action.payload.definition;
        }
    });
    const modifyURL = `word=${action.payload.word}&definition=${action.payload.definition}`;
    fetch(`/api/updateCard?${modifyURL}`, {
        method: 'POST',
    })
    .then(res => res.json())
    .catch((err) => console.log('ADDCARD fetch /api/addCard: ERROR:', err));
    
    return {
        ...state,
        cardStack,
    };

    case types.DELETE_CARD:
    cardStack = state.cardStack.slice();
    cardStack.forEach( (el, index) => {
        if (el.word === action.payload.word){
            cardStack.splice(index, 1);
            totalCards = state.totalCards - 1;
        }
    });
    console.log(action.payload)
    const deleteURL = `word=${action.payload}`;
    fetch(`/api/deleteCard?${deleteURL}`, {
        method: 'POST',
    })
    .then(res => res.json())
    .catch((err) => console.log('ADDCARD fetch /api/addCard: ERROR:', err));

    return {
        ...state,
        cardStack,
        totalCards,
    };

    default:
        return state;
  }
};

export default cardsReducer;