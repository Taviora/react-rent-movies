import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

 export class Menu extends Component {


  render() {
   
    return (
      <Navbar>
        <Nav>
          <Nav.Link as={Link} href="/" to="/" active={window.location.pathname === "/"}>Principal</Nav.Link>
          <Nav.Link as={Link} href="/greeting" to="/greeting" active={window.location.pathname === "greeting"}>Saludar</Nav.Link>
          <Nav.Link as={Link} href="/movies" to="/movies" active={window.location.pathname === "movies"}>Movies</Nav.Link>
        </Nav>
      </Navbar>
       
    );
  }
}



export default Menu;