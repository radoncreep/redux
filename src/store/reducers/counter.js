import * as actionTypes from '../actions';

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => { // action arg is a object that receives an action from the dispatc method
    // Using switch statements instead of multiple ifs

    switch (action.type) {
        case actionTypes.INCREMENT: 
            // another approach to immutably update an existing state object
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
           // the "break" keyword isnt needed bcos of the return keyword
        case actionTypes.DECREMENT: 
            return {
                ...state,
                counter: state.counter - action.value // this is just like accessing counter using setState
            };
        case actionTypes.ADD: 
            return {
                ...state,
                counter: state.counter + action.value
            };
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            };
    };

    // if none of these action types are met then it return the default or current state
    return state;
};

export default reducer;


