import React,{Component} from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import CatNew from './pages/CatNew'
import CatShow from './pages/CatShow'
import CatEdit from './pages/CatEdit'
import NotFound from './pages/NotFound'
import Info from './pages/Info'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
}from 'react-router-dom'

//import cats from './mockCats.js'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      // remove the mockCats-->[]empty array
      cats: []
    }
  }

  componentDidMount(){
    this.readCat()
  }

  readCat = () =>{
    fetch("http://localhost:3000/cats")
    .then(response => response.json())
    // get the catArray object form db
    .then(catArray => this.setState({cats: catArray}))
    // handle the error
    .catch(errors => console.log("Cat read errors:",errors))
  }

  createCat = (newCat) =>{
    fetch("http://localhost:3000/cats",{
      body: JSON.stringify(newCat),
      headers: {
        "Content-Type": "application/json"
      },
      method:"POST"
    })
    .then(response => response.json())
    .then(payload => this.readCat())
    //include the new thing we just create
    .then(errors => console.log("Cat create errors:", errors))
  }

  updateCat = (editCat, id) =>{
    fetch(`http://localhost:3000/cats/${id}`,{
      body: JSON.stringify(editCat),
      headers:{
        "Content-Type": "application/json"
      },
      method:"PATCH"
    })
    .then(response => response.json())
    .then(payload => this.readCat())
    .catch(errors => console.log("Cat update errors:", errors))
  }

  deleteCat = (id) =>{
    fetch(`http://localhost:3000/cats/${id}`,{
      headers:{
        "Content-Type": "application/json"
      },
      method:"DELETE"
    })
    .then(response => response.json())
    .then(payload => this.readCat())
    .catch(errors => console.log("Cat delete errors:", errors))
  }
  
  render(){
    return(
        <Router>
          <Header/>
          <Switch>
            {/* Read Functionality */}
            <Route exact path="/" component={Home} />

            <Route exact path="/info" component={Info} />

            <Route path="/catindex" render={(props) => <CatIndex cats={this.state.cats} />} />

            <Route path="/catshow/:id" render={(props) =>{
              let id = props.match.params.id
              let cat = this.state.cats.find(cat =>cat.id === +id)
              return <CatShow cat={cat} deleteCat={this.deleteCat} />
            }} />
            
            <Route path="/catedit/:id" render={(props) =>{
              let id = props.match.params.id
              let cat = this.state.cats.find(cat => cat.id === +id)
              return <CatEdit updateCat={this.updateCat} cat={cat} />
            }}/>

            <Route path="/catnew" render={(props) => <CatNew createCat={this.createCat} />} />
            
            <Route component={NotFound} />
          </Switch>
  
          <Footer />
        </Router>
    )
  }  
}

export default App
