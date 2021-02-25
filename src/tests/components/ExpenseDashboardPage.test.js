import React from 'react'

import {shallow} from 'enzyme'
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'

test('shoul render exp list item',()=>{
    const wrapper = shallow(<ExpenseDashboardPage />)

    expect(wrapper).toMatchSnapshot()
})