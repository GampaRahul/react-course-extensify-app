import {createStore, combineReducers} from 'redux';
import {v4 as uuid} from 'uuid';

// --Actions--
// ADD_EXPENCE

const addExpence =  ({
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0
    }={}
    ) => ({
    type: 'ADD_EXPENCE',
    expence:{
                id: uuid(),
                description,
                note,
                amount,
                createdAt
    }
});
// REMOVE_EXPENCE
const removeExpence = ({id}={}) =>({
    type:'REMOVE_EXPENCE',
    id
});
// EDIT_EXPENCE
const editExpence = (id,update) =>({
    type:'EDIT_EXPENCE',
    id,
    update
});
// SET_TEXT_FILTER
const setTextFilter = (text="") =>({
    type:"SET_TEXT_FILTER",
    text
});
// SORT_BY_DATE
const sortByDate = () => ({
    type: "SORT_BY_DATE",
});
// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
});
// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
    //even if we dont give undefined as default value, 
    //it works as arguments are assigend undefined by default implicitly
    type:"SET_START_DATE",
    startDate 
});
// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
    type:"SET_END_DATE",
    endDate 
});

//expenseReducer
const expenceReduserDefaultState = [];

const expenceReduser = (state = expenceReduserDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENCE':
            return [
                ...state,
                action.expence
            ];
        case 'REMOVE_EXPENCE':
            return state.filter((expence) => expence.id !== action.id); 
        case 'EDIT_EXPENCE':
            return state.map((expence) =>{
                if(expence.id === action.id){
                    return {
                        ...expence,
                        ...action.update
                    }
                }
                else return expence
            });
        default:
            return state;
    }

};


//filterReducer
const filterReducerDefaultState = {
    text:'',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text:action.text
            };
        case "SORT_BY_AMOUNT":
            return{
                ...state,
                sortBy: "amount"
            }
        case "SORT_BY_DATE":
            return{
                ...state,
                sortBy: "date"
            }
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            }
        case "SET_END_DATE":
            return{
                ...state,
                endDate: action.endDate
            }    
        default:
            return state;
    }
};

//getVisibleExpences
//if start date or end date is undefined we gonna exclude them in filter
const getVisibleExpences = (expenses, {text, sortBy, startDate, endDate}) =>{
    return expenses.filter((expense) =>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((expense1, expense2) =>{
        if(sortBy == 'date'){
            return expense1.createdAt < expense2.createdAt ?1:-1
        }
        else if(sortBy == 'amount'){
            return expense1.amount < expense2.amount ?1:-1
        }
    });
};


// store creation

const store = createStore(
    combineReducers({
        expenses: expenceReduser,
        filters: filterReducer
    })
    );

store.subscribe(() =>{
    const state = store.getState();
    const visibleExpences = getVisibleExpences(state.expenses, state.filters);
    console.log(visibleExpences);

});

const expence1 = store.dispatch(addExpence({description:'Rent', amount: 100, createdAt:-21000}));// dispatch method return action object
const expence2 = store.dispatch(addExpence({description:'Movie', amount: 300, createdAt:-1000}));
// store.dispatch(removeExpence({ id: expence1.expence.id}));
// store.dispatch(editExpence(expence2.expence.id,{amount:500}));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

const demoState = {
    expenses: [{
        id: 'sfsdfggsfgad',
        description: 'Mobile recharge',
        note: 'mobile recharge for 9999999999',
        amount: 300,
        createdAt: 0
    }],
    // used for filtering data in various ways
    filters: {
        text: 'recharge', // filter by text
        sortBy: 'amount',//date or amount
        startDate: undefined, // use this for fitering by date
        endDate: undefined // use this for fitering by date
    }
};
