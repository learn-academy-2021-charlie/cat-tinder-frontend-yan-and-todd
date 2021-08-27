import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import CatEdit from "../CatEdit"

Enzyme.configure({ adapter: new Adapter() })

describe("When CatEdit renders", () => {
  it("should render a label with the value of Cats name", () => {
    const catEdit = shallow(<CatEdit />)
    const formGroup = catEdit.find("FormGroup")
    expect(formGroup.length).toEqual(3)
    const label = catEdit.find("label")
    expect(label.length).toEqual(3)
    const input = catEdit.find("input")
    expect(input.length).toEqual(3)
    const button = catEdit.find("button")
    expect(button.length).toEqual(1)
  })
})