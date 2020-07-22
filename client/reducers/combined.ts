import { combineReducers } from 'redux';

import cardsReducer from './cardsReducer';


const reducers = combineReducers({
    cards: cardsReducer,
});

export default reducers;