import * as types from '../constants/actionTypes';

export const addCard = (wordObj) => ({
    type: types.ADD_CARD,
    payload: wordObj,
});

export const deleteCard = (word) => ({
    type: types.DELETE_CARD,
    payload: word,
});

export const modifyCard = (wordObj) => ({
    type: types.MODIFY_CARD,
    payload: wordObj,
});

export const getCards = () => ({
    type: types.GET_CARDS,
    payload: null,
});

