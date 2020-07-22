import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';
import CardCreator from '../components/CardCreator';
import CardDisplay from '../components/CardDisplay';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

class CardContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div> 
                <CardCreator />
                <CardDisplay />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);

