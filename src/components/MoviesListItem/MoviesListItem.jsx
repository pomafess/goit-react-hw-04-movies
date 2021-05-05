
import React from 'react';
import {Link} from "react-router-dom"
import PropTypes from 'prop-types';

import styles from "./MoviesListItem.module.css"

const MoviesListItem = ({movie}) => {
    return (
        <>
        <li className={styles.item}>
            <Link to={`movies/${movie.id}`} className={styles.link}>{movie.original_name || movie.title}</Link>
        </li>
        </>
    );
};

MoviesListItem.propTypes = {
    movie: PropTypes.object.isRequired,
};

export default MoviesListItem;