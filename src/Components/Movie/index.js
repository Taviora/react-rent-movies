import React, { Component } from 'react';
import  SearchMovieForm from './SearchMovie'
import { Container  } from 'react-bootstrap'
import  FoundMovies from './FoundMovies'

 export class Movie extends Component {
   state = {
    movies: []
   };

  search = async e => {
    const movieSearch = e.target.elements.movie.value;
    e.preventDefault();
    const api_fetch = await fetch(
      `https://itunes.apple.com/search?term=${movieSearch}&media=movie&country=MX`);
    
    const movies = await api_fetch.json();
    
    this.setState({movies: movies.results });
    console.log(this.state.movies);   
   
  };

  render() {
   
    return (
      <Container>
        
        <h1>Lista peliculas</h1>
        <SearchMovieForm getMovie={this.search}></SearchMovieForm>
        <FoundMovies movies={this.state.movies}></FoundMovies>
        
      </Container>
       
    );
  }
}



export default Movie;
