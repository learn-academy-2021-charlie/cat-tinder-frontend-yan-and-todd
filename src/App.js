import React,{Component} from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import CatNew from './pages/CatNew'
import CatShow from './pages/CatShow'
import CatEdit from './pages/CatEdit'
import NotFound from './pages/NotFound'

import {BrowserRouter as Router,
  Route,
  Switch
}from 'react-router-dom'

import cats from './mockCats.js'
import './App.css'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      cats:cats
    }
  }

  render(){
    console.log(this.state.cats)
    return(
        <Router>
          <Header/>
  
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/catindex" component={CatIndex} />
            <Route path="/catshow" component={CatShow} />
            <Route path="/catedit" component={CatEdit} />
            <Route path="/catnew" component={CatNew} />
            <Route component={NotFound} />
          </Switch>
  
          <Footer />
        </Router>
    )
  }  
}

export default App
