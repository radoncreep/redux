import React, { Component } from 'react';
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    // state = {
    //     counter: 0
    // } not using this approach here

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    };

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.counterResult.map(storedResult => {
                      return <li key={storedResult.id} onClick={() => this.props.onDeleteResult(storedResult.id)}>{storedResult.value}</li> 
                    })}
                </ul>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        counterResult: state.results
    };
};

// You can dispatch actions that dont get used in the reducer
const mapDispatchToProps = dispatch => { // takes in dispatch which is a helper function
    return { // these obj properties are available to the props object of this container because mapDispatchToProps function is connected to the container using th connect function
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT, val: 1 }), 
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT, value: 1 }),
        onAddCounter: () => dispatch({ type: actionTypes.ADD , value: 10 }), // value could be used inside a payload obj but here it is a payload itself, an addtional data passed into action
        onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, value: 15 }),
        onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultId: id })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// when the component element is clicked 
// the function available to props is fired or gets executed
// it is available to props because the connect function connects mapDispatch function to the container
// so the function returns this object and it's proprerties as properties to the container's prop object
// so when a prop in the mapDispatch gets executed which depends on the component element clicked on
// because each hold distinct reference to properties on mapToDispatch
// so, when any of these property function is being executed
// it returns a dispatch method, which dispatches an action which is an obj to the reducer
// the reducer checks what kind of action is being passed by accessing the type from the action object
// and then does some logic with it
// and then updates the state and returns the updated state