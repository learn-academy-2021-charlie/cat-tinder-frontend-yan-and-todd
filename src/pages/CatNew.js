import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import {Button, Form, FormGroup, Input, Label } from 'reactstrap'

class CatNew extends Component{
    constructor(props) {
        super(props)
        this.state = {
            form: {
                name: "",
                age: "",
                enjoys: ""
            },
            submitted: false
        }
    }

    handleChange = (e) => {
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({form: form})
    }

    handleSubmit = () => {
        this.props.createCat(this.state.form)
        this.setState({submitted: true})
    }
    
    render(){
        return(
        <>
            <h3>Please create your cat's profile!</h3>
            <Form>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input 
                    type="text" 
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.form.name}
                    />
                </FormGroup>
                <br />
                <FormGroup>
                    <Label for="age">Age</Label>
                    <Input 
                        type="text" 
                        name="age"
                        onChange={this.handleChange}
                        value={this.state.form.age}
                    />
                </FormGroup>
                <br />
                <FormGroup>
                    <Label for="enjoys">Enjoys</Label>
                    <Input 
                        type="text" 
                        name="enjoys"
                        onChange={this.handleChange}
                        value={this.state.form.enjoys}
                    />
                </FormGroup>
                <br/>
                <Button name="submit" onClick={this.handleSubmit}>
                    Add New Cat
                </Button>
            </Form>
            {this.state.submitted && <Redirect to="/catindex" />}
        </>
        )
    }
}
export default CatNew