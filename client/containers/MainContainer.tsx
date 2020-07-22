import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardContainer from './CardContainer';
// import reducer from '../reducers/combined';


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});


class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

    render() {
        return (
            <div>
                <CardContainer/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);