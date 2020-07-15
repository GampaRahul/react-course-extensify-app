import moment from 'moment';
//getVisibleExpences
//if start date or end date is undefined we gonna exclude them in filter
const getVisibleExpences = (expenses, {text, sortBy, startDate, endDate}) =>{
    return expenses.filter((expense) =>{
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate? endDate.isSameOrAfter(createdAtMoment,'day') : true;
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


export default getVisibleExpences;