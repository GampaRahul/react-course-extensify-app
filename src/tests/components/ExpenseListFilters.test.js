import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {emtFilter, dataFilter} from '../fixtures/filters';
import { DateRangePicker } from 'react-dates';
import moment from 'moment'; 

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
setTextFilter = jest.fn();
sortByDate = jest.fn();
sortByAmount = jest.fn();
setStartDate = jest.fn();
setEndDate = jest.fn();
wrapper = shallow(
    <ExpenseListFilters 
        filters={emtFilter}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}    
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
    />)
});

test('should refer ExpenseListFilters correctly empty Filters', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should refer ExpenseListFilters correctly dta filters', () => {
    wrapper.setProps({
        filters: dataFilter
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value= 'test';
    wrapper.find('input').simulate('change', {
        target:{ value } 
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
    const value= 'date';
    wrapper.setProps({
        filters: dataFilter
    });
    wrapper.find('select').simulate('change', {
        target: {value}
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    const value= 'amount';
    wrapper.find('select').simulate('change', {
        target: {value}
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle on date change', () => {
    const startDate = moment(0);
    const endDate = moment(0).add(3, 'day');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle Date focus change', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});

