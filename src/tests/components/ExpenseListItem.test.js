import React from 'react'
import expenses from '../fixtures/expenses'
import {shallow} from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem'

test('shoul render exp list item',()=>{
    const wrapper = shallow(<ExpenseListItem {...expenses[1]}/>)

    expect(wrapper).toMatchSnapshot()
})