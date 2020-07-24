const redux = require('redux');
const createStore = redux.createStore; // createStore is a function but do not execute it yet


// initialize state
const initialState = { // this is a Js object but it can be any data type like a number
    counter: 0,
};

// Reducer
const rootReducer = (state = initialState, action) => { // this receives 2 args, first is the current state(old state) to be update, 2nd is the action
    // the function should return the updated state
    if (action.type === 'INC_COUNTER') {
        return {
            ...state, // clones the original state
            counter: state.counter + 1 // overwriting the property we want to adjust
        };
    };

    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    };

    return state;
};


// Store
// this wont do much, a store needs to be initialized with a reducer 
// because the reducer is strongly connected to the store, it's the only thing that may update the state in the end
const store = createStore(rootReducer);  
console.log(store.getState()); 


// Subscription
store.subscribe(() => { // this is triggered whenever an action is dispcatch
    console.log('[Subcription]', store.getState()); // gets triggered whenever the state gets updated
});

// Dispatching Action
store.dispatch( {type: 'INC_COUNTER'} ); // increments it by one by default
store.dispatch( {type: 'ADD_COUNTER', value: 10} ); // this takes in a obj arg which is an action
console.log(store.getState());


// rootReducer returns state which is the initialState object 
// the state which is an object is then passed into the createStore method
// this method will now create a store which is going to contain the object state
// and store it in the store constant 
// so this store constant is a store that now contains the current state of the application
// now the getState() method is now called on the store to get the state in the store
// so the state is being returned and then logged to the console using console.log() method