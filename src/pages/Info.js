import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'

class Info extends Component{
    render(){
        return(
        <div className="page-body">
            <h3>Thank you for joining us and</h3>
            <h3>supporting the cat community!</h3>
                <ul>Chat with the cats you are interested in.</ul>
                <ul>Meet those you'd be interested in adopting.</ul>
                <ul>It was a charity project for Pesaleidja, a shelter for homeless cats.</ul>
                <ul>We are here all to help the more cats into responsible homes</ul>
            <br/>
            <br/>
            <br/>
            <h3>&#128157;Please feel free to contact us &#128157;</h3>
            <Form>
                <FormGroup>
                    <Label for="name"><h4>Contact Name</h4></Label>
                    <Input type="text" placeholder="first name last name"/>
                </FormGroup>
                
                <FormGroup>
                    <Label><h4>Subject</h4></Label>
                    <Input type="text" />
                </FormGroup>
                
                <FormGroup>
                    <Label><h4>Contact Email</h4></Label>
                    <Input type="text"/>
                </FormGroup>
                <br/>
                <NavLink to={`/home`}><Button>Submit</Button></NavLink>   
            </Form>
        </div>
        )
    }
}
export default Info