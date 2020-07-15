import {createStore, combineReducers} from 'redux';
import expenceReduser from '../reducers/expenses';
import filterReducer from "../reducers/filters";


// store creation

// we enclose store in anpther function as , when we import the store in other components to use it,
// we directly get the store as we are returning the store
export default  () => {
    const store = createStore(
        combineReducers({
            expenses: expenceReduser,
            filters: filterReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );

        return store;
};

