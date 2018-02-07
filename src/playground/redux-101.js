import { createStore } from 'redux';

// action generators - functions that return action objects

// increment function that handles how much to increment
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy // same as incrementBy: incrementBy
});

// decrement function that handles how much to decrement
const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

// set function that handles how to set count
const setCount = ({count = 1} = {}) => ({
    type: 'SET',
    count
});

// reset function that handles setting count to 0
const resetCount = () => ({
    type: 'RESET'
});

/* 
    Reducers:
    1. Reducers are pure functions
    2. Never change state or action
*/
const countReducer = (state = {count: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };

        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };

        case 'RESET':
            return {
                count: 0
            };

        case 'SET':
            return {
                count: action.count
            };

        default:
            return state;
    }
};

// creating store using createStore from redux
const store = createStore(countReducer);

// subscribing for the variable changes in state object
store.subscribe(() => {
    console.log(store.getState());
});

//increment with certain value
store.dispatch(incrementCount({incrementBy: 7}));

// increment with default 1
store.dispatch(incrementCount());

// reset count to 0
store.dispatch(resetCount());

// decrement with default 1
store.dispatch(decrementCount());

// decrement with certain value
store.dispatch(decrementCount({decrementBy: 10}));

// set value of count to certain value or default to 1
store.dispatch(setCount({count: 100}));
store.dispatch(setCount());


















// previous - code
// const incrementCount = (payload = {}) => ({
//     type: 'INCREMENT',
//     incrementBy : typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });
// const unsubscribe = store.subscribe(() => {
//     console.log(store.getState());
// });
// unsubscribe();

// store.dispatch({
//     type: 'INCREMENT'
// });



