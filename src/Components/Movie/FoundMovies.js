import React  from 'react'
import { Media, Button } from 'react-bootstrap';


const FoundMovies = props => (

    <div>
        <ul className="list-unstyled">
        {props.movies.map((movie) => (
            <Media as="li" key={movie.trackId}>
               
              <img className="mr-3" src={movie.artworkUrl100} alt={movie.trackName}></img>
             
                <Media.Body>
                    <h5>{movie.trackName}
                    <small> {movie.primaryGenreName} </small>
                    <label> {movie.contentAdvisoryRating}</label>
                    </h5>
                    <p>{movie.longDescription}</p>
                    <Button bsSize="xssmall" className="mr-2" href={movie.collectionViewUrl}>Ver</Button>
                </Media.Body>
            </Media>       
        ))}
        </ul>
    </div>   
);


export default FoundMovies;