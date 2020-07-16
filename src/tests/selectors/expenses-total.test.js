import expenses from '../fixtures/expenses';
import expenseTotal from '../../selectors/expenses-total';

test('should return the amount total to be 0 for no expenses', () => {
    const total = expenseTotal([]);
    expect(total).toBe(0);
});

test('should render value of total amount for 1 expense', () => {
    const total = expenseTotal([expenses[0]]);
    expect(total).toBe(expenses[0].amount); 
});

test('should render value of total amount for all expenses', () => {
    const total = expenseTotal(expenses);
    expect(total).toBe(10210); 
});
