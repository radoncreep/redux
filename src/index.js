import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import reducer from './store/reducer';
import counterReducer from './store/reducers/counter';
import resultsReducer from './store/reducers/results';

// Merging different reducers into one root reducer
const rootReducer = combineReducers({
    ctr: counterReducer,
    rlt: resultsReducer
});

// the state will look like this 
// const state = {
//     ctr: ctr.counterReducer,
//     counterReult: rlt.counterReducer 
// }

const store = createStore(rootReducer);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();


// Provider is a helper component 
// which allows us to kind of inject our store into the react component

// combineReducers is a helper function from the redux package 
// this is a function which takes a JS object mapping our reducers to diff slices of our state as input
// and merges everything into one state and one reducer for us
