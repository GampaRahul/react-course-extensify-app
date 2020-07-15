import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from'./store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpences from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore();

store.dispatch(addExpense({description:"water Bill",amount:500, createdAt:500}));
store.dispatch(addExpense({description:"Rent",amount:10000}));
store.dispatch(addExpense({description:"Gas Bill",amount:1000}));

const state = store.getState();
console.log(getVisibleExpences(state.expenses, state.filters));
//console.log(store.getState());

const jsx = (
    <Provider store = {store}>
    	<AppRouter />
    </Provider>
);

ReactDOM.render(jsx , document.getElementById('app'));
