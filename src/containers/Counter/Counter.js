import React, { Component } from 'react';
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

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
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

const mapDispatchToProps = dispatch => { // takes in dispatch which is a helper function
    return {
        onIncrementCounter: () => dispatch({ type: 'INCREMENT', val: 1 }),
        onDecrementCounter: () => dispatch({ type: 'DECREMENT', value: 1 }),
        onAddCounter: () => dispatch({ type: 'ADD' , value: 10 }), // value could be used inside a payload obj but here it is a payload itself, an addtional data passed into action
        onSubtractCounter: () => dispatch({ type: 'SUBTRACT', value: 15 })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// when the component element is clicked 
// the function available to props is fired or gets executed
// it is available to props because the connect function connects mapDispatch  function to the container
// so the function returns this object and it's proprerties as properties to the container's prop object
// so when a prop in the mapDispatch gets executed which depends on the component element clicked on
// because each hold distinct reference to properties on mapToDispatch
// so, when any of these property function is being executed
// it returns a dispatch method, which dispatches an action which is an obj to the reducer
// the reducer checks what kind of action is being passed by accessing the type from the action object
// and then does some logic with it
// and then updates the state and returns the updated state