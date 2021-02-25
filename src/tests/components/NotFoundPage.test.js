import React from 'react'

import {shallow} from 'enzyme'
import NotFoundPage from '../../components/NotFoundPage'

test('shoul render exp list item',()=>{
    const wrapper = shallow(<NotFoundPage />)

    expect(wrapper).toMatchSnapshot()
})