import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import CardCreator from '../components/CardCreator';
import CardDisplay from '../components/CardDisplay';

const mapStateToProps = (state) => ({
    cardStack: state.cards.cardStack,
    totalCards: state.cards.totalCards,
});

const mapDispatchToProps = (dispatch) => ({
    addCard: (wordObj) => {
        dispatch(actions.addCard(wordObj));
    },
    deleteCard: (word) => {
        dispatch(actions.deleteCard(word));
    },
    modifyCard: (wordObj) => {
        dispatch(actions.modifyCard(wordObj));
    }
});

class CardContainer extends Component {
    props: any;
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="innerBox"> 
                <CardCreator addCard={this.props.addCard} deleteCard={this.props.deleteCard} modifyCard={this.props.modifyCard} />
                <CardDisplay cardStack= {this.props.cardStack}/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);

