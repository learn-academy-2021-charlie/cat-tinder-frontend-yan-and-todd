import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from '../NotFound'

Enzyme.configure({ adapter: new Adapter() })

describe('when NotFound renders', () => {
    it('has a h3.', () =>{
        const renderedNotFound = shallow(<NotFound/>)
        const renderedH3 = renderedNotFound.find('h3')
        expect(renderedH3.length).toEqual(1)
    })
})