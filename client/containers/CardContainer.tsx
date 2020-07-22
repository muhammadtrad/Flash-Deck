import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import CardCreator from '../components/CardCreator';
import CardDisplay from '../components/CardDisplay';

const mapStateToProps = (state) => ({
    

});

const mapDispatchToProps = (dispatch) => ({
    addCard: (wordObj) => {
        dispatch(actions.addCard(wordObj));
    },
    deleteCard: (name) => {
        dispatch(actions.deleteCard(name));
    },
    modifyCard: (wordObj) => {
        dispatch(actions.modifyCard(wordObj));
    },
    getCards: () => {
        dispatch(actions.getCards());
    }
});

class CardContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="innerBox"> 
                <CardCreator />
                <CardDisplay />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);

