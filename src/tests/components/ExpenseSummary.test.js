import {shallow} from 'enzyme';
import React from 'react';
import {ExpenseSummary} from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';


test('should render summary of 2 expenses', () => {
    const exp=[expenses[0],expenses[1]];
    const wrapper = shallow(<ExpenseSummary expenses={exp}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render summary of 1 expense', () => {
    const exp=[expenses[0]];
    const wrapper = shallow(<ExpenseSummary expenses={exp}/>);
    expect(wrapper).toMatchSnapshot();
});