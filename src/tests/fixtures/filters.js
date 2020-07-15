import moment from 'moment';

const emtFilter = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const dataFilter = {
    text: 'bills',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
}

export {emtFilter, dataFilter};