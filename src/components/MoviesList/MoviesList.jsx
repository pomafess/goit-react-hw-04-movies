import React from 'react';
import PropTypes from 'prop-types';
import MoviesListItem from "../MoviesListItem"

import styles from "./MoviesList.module.css"

const MoviesList = ({ movies }) => {
    const moviesElements = movies.map((movie) =>
    <MoviesListItem key={movie.id} movie={movie} />);
  
    return (
        <ul className={styles.list}>
            {moviesElements}
            </ul>
        )
}
   
MoviesList.defaultProps = {
  movie: [],
  
}

MoviesList.propTypes = {
  movie: PropTypes.array
};
 
export default MoviesList;
