import React, { Component } from 'react'
import {  
    FormGroup, 
    FormControl,
    FormLabel,   
    Button
  } from 'react-bootstrap'


export class GreetingForm extends Component {

    sendForm = e => {
        let data = {};
        const name = e.target.name.value;
        const message = e.target.message.value;

        e.preventDefault();

        if((typeof name === "string" && name.length > 0) && (typeof message === "string" && message.length > 0)){
            data.name = name;
            e.target.name.value = " ";
            data.message = message;
            e.target.message.value = " ";
        }

        this.props.getNewName(data);
    };

    render(){
        return(
            <form onSubmit={this.sendForm}>
                <FormGroup>
                    <FormLabel>Nombre:</FormLabel>
                    <FormControl type="text" id="name" name="name"/>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Mensaje:</FormLabel>
                    <FormControl as="textarea" id="message" name="message"/>
                </FormGroup>
                <Button type="submit">Enviar</Button>
            </form>    
        );
    }
}

export default GreetingForm