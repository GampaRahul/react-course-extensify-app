import {createStore} from 'redux';

// state = {count: 0} represent default value for state parameter
// Action Generators

const incrementCount = ({incerementBy =1}={}) =>({
    type:'INCREMENT',
    incerementBy
});

const decrementCount = ({decrementBy =1}={}) =>({
    type:'DECREMENT',
    decrementBy
});

const resetCount = () =>({
    type:'RESET',
});

const setCount = ({count}) =>({
    type:'SET',
    count
});

//Reducers

const countReduser = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count+action.incerementBy
            };
        case 'DECREMENT':
        return {
            count: state.count-action.decrementBy
        };
        case 'SET':
            return { 
                count:action.count
            };
        case 'RESET':
            return { 
                count:0 
            };
        default:
            return state;
    }
};


const store = createStore(countReduser);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({incerementBy : 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(decrementCount());

store.dispatch(setCount({count: 101}));