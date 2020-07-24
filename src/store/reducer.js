import React from 'react';

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => { // action arg is a object that receives an action from the dispatc method
    // Using switch statements instead of multiple ifs

    switch (action.type) {
        case 'INCREMENT': 
            return {
                counter: state.counter + action.val
            }; // the break keyword isnt needed bcos of the return keyword
        case 'DECREMENT': 
            return {
                counter: state.counter - action.value // this is just like accessing counter using setState
            };
        case ('ADD'): 
            return {
                counter: state.counter + action.value
            };
        case ('SUBTRACT'):
            return {
                counter: state.counter - action.value
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
