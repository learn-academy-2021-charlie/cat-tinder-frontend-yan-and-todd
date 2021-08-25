import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatShow from './CatShow'

Enzyme.configure({ adapter: new Adapter() })

describe('when CatShow renders', () => {
    let cat = {
        id: 3,
        name: "Toast",
        age: 1,
        enjoys: "getting all the attention"
    }
    it('displays a list of cats', () =>{
        // Arrange
        const renderedCatShow = shallow(<CatShow cat={cat} />)
        // Act
        const catShow= renderedCatShow.find("p")
        expect(catShow.length).toEqual(3)

    })
})