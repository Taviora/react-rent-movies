import React, { Component } from 'react';
//import logo from './logo.svg';
import Container from 'react-bootstrap/Container'


import './App.css';

class App extends Component {
  render() {
    const {name, message} = this.props;
    return (
     <Container>
      
       <h1>Hola {name}</h1>
       <p>{message}</p>
           
     </Container>
      
   
    );
  }
}

App.defaultProps = {
 name: "Gustavo",
 message: "Aprendiendo react en 1,2,3"
 
};

export default App;
