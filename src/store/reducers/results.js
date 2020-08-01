import * as actionTypes from '../actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => { // action arg is a object that receives an action from the dispatc method
    // Using switch statements instead of multiple ifs

    switch (action.type) {
        case actionTypes.STORE_RESULT:
            console.log(action.type)
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.value }) // so the counter value is being stored in the array or concatenated each time it is being updated
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


