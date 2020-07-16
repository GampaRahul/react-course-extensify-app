const expenseTotal = (expenses) => {
    return expenses.map((expense) => expense.amount)
    .reduce(amountTotal,0);
};

const amountTotal = (total, num) => {
    return total + num;
};

export default expenseTotal;