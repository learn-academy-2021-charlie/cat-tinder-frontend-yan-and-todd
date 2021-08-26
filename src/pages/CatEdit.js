import React,{Component} from 'react'
import { Button, Form, FormGroup, Label, Input}  from 'reactstrap'
import { Redirect } from 'react-router-dom'

class CatEdit extends Component{
    constructor(props){
        super(props)
        this.state = {
            form: {
                name: this.props.cat ? this.props.cat.name : " ",
                age: this.props.cat ? this.props.cat.age : " ",
                enjoys: this.props.cat ? this.props.cat.enjoys : " ",
            },
            submitted: false
        }
    }
    
    handleChange = (event) =>{
        let { form } = this.state
        form[event.target.name] = event.target.value
        this.setState({form: form})
    }

    handleSubmit = () =>{
        this.props.updateCat(this.state.form, this.props.cat.id)
        this.setState({sumbitted: true})
    }

    render(){
        return(        
        <div className="page-body">
            <h3>Edit your cat's profile</h3>
            <br/>
            <Form>
                <FormGroup>
                    <label for="name">What is your cat's name?</label>
                    <input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.form.name}
                    />
                </FormGroup>
                <br/>
                <FormGroup>
                    <label for="age">How old is your cat?</label>
                    <input
                        type="text"
                        min="0"
                        max="20"
                        name="age"
                        onChange={this.handleChange}
                        value={this.state.form.age}
                    />
                </FormGroup>
                <br/>
                <FormGroup>
                    <label for="enjoys">What does your cat enjoy?</label>
                    <input
                        type="text"
                        name="enjoys"
                        onChange={this.handleChange}
                        value={this.state.form.enjoys}
                    />
                </FormGroup>
                <br/>
                <button name="submit" onClick={this.handleSubmit}>
                    Edit Cat
                </button>
            </Form>
            {this.state.submitted && <Redirect to={`/catshow/${this.props.cat.id}`} />}
        </div>)
    }
}
export default CatEdit