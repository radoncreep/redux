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