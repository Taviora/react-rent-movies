import React from 'react'
import { FormControl,
         Form,
         FormGroup,  
         Button,
         Row,
         Col } from 'react-bootstrap';


const SearchMovieForm = props => ( 

        <form onSubmit={props.getMovie}>
        <Form  as={Row}>
            <FormGroup as={Col}>
             <FormControl type="text" name="movie" placeholder="¿Qùe pelicula buscas?"/>
            </FormGroup>
            <FormGroup as={Col}>
            <Button type="submit">Buscar</Button>
            </FormGroup>
        </Form>
        </form>
);

export default SearchMovieForm;