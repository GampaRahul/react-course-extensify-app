import {addExpense, 
        startAddExpense,
        editExpense, 
        removeExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should set up remove expense action object' , () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});


test('should set up edit expense action object',() => {
    const action = editExpense('123abc',{note:"abc"});
    expect(action).toEqual({
        type:"EDIT_EXPENSE",
        id: "123abc",
        update: {
            note: "abc"
        }
    });
});

test('should set up add expense object with provided values',() => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]
    });
});

test('should add expense to database and store',(done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'tea',
        amount: 20,
        note: '',
        createdAt: 10000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                 ...expenseData
            }
        });
        database.ref(`expenses/${actions[0].expense.id}`)
        .once('value').then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
    });
});

test('should add expense with defaults to database and store',(done) => {
    const store = createMockStore({});
    const expenseDefault = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                 ...expenseDefault
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefault);
        done();
    });
});


// test('should set up add expense object with default values',() => {
//     const result = addExpense({});
//     expect(result).toEqual({
//         type:"ADD_EXPENSE",
//         expense: {
//             id: expect.any(String),
//             description:'', 
//             note:'', 
//             amount:0, 
//             createdAt:0
//         }
//     });
// });