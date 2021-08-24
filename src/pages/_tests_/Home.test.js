import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from '../Home'

Enzyme.configure({ adapter: new Adapter() })

describe('when Home renders', () => {
    it('has a ul.', () =>{
        const renderedHome = shallow(<Home/>)
        const renderedUl = renderedHome.find('ul')
        expect(renderedUl.length).toEqual(2)
    })

    it('has a img.', () =>{
        const renderedHome = shallow(<Home/>)
        const renderedPic = renderedHome.find('img')
        expect(renderedPic.length).toEqual(1)
    })
})