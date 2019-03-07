import React, { Component } from 'react';
//import logo from './logo.svg';
import {  
  Container 
} from 'react-bootstrap'
import { Greeting } from './Greeting'
import { GreetingForm } from './GreetingForm'
import './App.css';

class App extends Component {
  state = {
    name: this.props.name,
    message: this.props.message
  };
 
 /* //declaramos la funcion que utilizamos en el evento de boton
  pushButton = e =>{

    const name =  e.target.name.value;
    e.preventDefault();
    //con este if controlamos que no se envie vacio
    if(typeof name == "string" && name.length > 0){
      
      //cambiar el estado del nombre
      this.setState({
        name: name
      });

      //volver el input a vacio
      e.target.name.value = "";
    }
    
  };*/

  useNewGreeting = data => {
     this.setState(data);
  }

  render() {
    const { name,message } = this.state;
    
    return (
     <Container>
     
      <Greeting name={name} message={message}></Greeting>
      <GreetingForm getNewName={this.useNewGreeting}></GreetingForm>
      
     </Container>
      
   
    );
  }
}

App.defaultProps = {
 name: "Gustavo",
 message: "Aprendiendo react en 1,2,3"
 
};

export default App;
