import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component{
  render(){
    return(
      <footer className='App-footer'>
        <ul>
          <NavLink to="/">&copy; 2021 Yan & Todd</NavLink>
        </ul>
        <ul>
          <NavLink to="/catindex">Subscribe &#x1F4EB;</NavLink>
        </ul>
      </footer>
    )
  }
}
export default Footer
