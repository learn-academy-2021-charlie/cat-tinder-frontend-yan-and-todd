import React, { Component } from 'react'
import { Button } from 'reactstrap'
import {NavLink} from 'react-router-dom'
import '../App.css'

class Home extends Component{
    render(){
        return(
        <div className="page-body">
            <h3>Weclome to Cat Tinder!</h3>
                <h5>Love Live Life</h5>
                <ul>We built a Tinder for cats. </ul>
                <ul> The app lets you swipe through </ul>
                <ul>Cute profiles of cats looking for a home. </ul> 
                <NavLink to={`/info`}><Button>Read more</Button></NavLink>      
                <br/>
                <br/>
                <br/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <ul class="icons">
					<li><a href="#" class="fa fa-facebook"><span class="label">Facebook</span></a></li>
				    <li><a href="#" class="fa fa-twitter"><span class="label">Twitter</span></a></li>
				</ul>
        </div>
        )
    }
}
export default Home