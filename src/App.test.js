import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'

Enzyme.configure({adapter: new Adapter()})

describe('when the app renders', () => {
  it('it describe a header and footer', () => {

  
  const renderedApp = shallow(<App/>)
  // act
  const renderedHeader = renderedApp.find("Header")
  const renderedFooter = renderedApp.find("Footer")
  // assert
  expect(renderedHeader.length).toEqual(1)
  expect(renderedFooter.length).toEqual(1)
  })
  it('provides a route"/" to the home component', () =>{
  // arrange
  const renderedApp = shallow(<App />)
  // act
  const renderedHomeRoute = renderedApp.find('[path="/"]')
  console.log("rendered home route debug",
  renderedHomeRoute.debug())
  })
})


