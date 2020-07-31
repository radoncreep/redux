import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
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
        case actionTypes.STORE_RESULT:
            console.log(action.type)
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter}) // so the counter value is being stored in the array or concatenated each time it is being updated
            };
        case actionTypes.DELETE_RESULT:
            // 1st approach to updating an array immutably 
            // const id = action.resultId;
            // const newArray = [...state.result];
            // newArray.splice(id, 1)

            // Second approach
            const updateArray = state.results.filter(result => result.id !== action.resultId) // if no equal then it should be passed into the new array and returned at the end of the operation
            return {
                ...state,
                results: updateArray
            };
    };

    // if none of these action types are met then it return the default or current state
    return state;
};

export default reducer;


// if (action.type === 'INCREMENT') {
       
// };

// if (action.type === 'DECREMENT') {
//     return {
//         counter: state.counter - action.value // this is just like accessing counter using setState
//     };
// };

// if (action.type === 'ADD') {
//     return {
//         counter: state.counter + action.value
//     };
// };

// if (action.type === 'SUBTRACT') {
//     return {
//         counter: state.counter - action.value
//     };
// };


// What the spread operator does 
// Tells javascript to return a JS object
// Take all the properties and values of the state argument "...state" which is our old state
// Distribute these props with their values in this new object
// and then since we define an additional property, add this property to the object
// or if it already was present due to us distributing the old state
// overwrite this and only this
// that's how we should update the old state immutably
// dont touch the old state like let newState = oldstate
// dont just return a new obj without covering all the properties of the old state
// or you are about to delete props from the old state