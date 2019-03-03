import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Register from './Register'
import MapView from './MapView'  //the curly braces take a piece of the objeect that has the same name  /// bc there are two exports and we ony want map views from that file
import NavBar from './NavBar' 
import AqCard from './AqCard' 

class App extends Component {

  componentDidMount() {
    console.log("Components Mounted!")
  }
  render() {
    return (
      <div>
      <div className="Menu">
      <NavBar></NavBar>
      </div>
      <div><AqCard></AqCard></div>
      <div className="Form">
        <Register></Register>
        <MapView></MapView>
        
      </div>
      </div>
    )
  }
}

export default App;
