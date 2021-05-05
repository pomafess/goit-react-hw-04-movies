import PropTypes from 'prop-types';

import styles from "./FilmCard.module.css"

const FilmCard = ({ movie }) => {
  const {
    title = 'Фильм не найден...',
    poster_path = '',
    vote_average = 0,
    overview = '',
    genres = [],
  } = movie;
  return (
    <div className={styles.filmCard}>
      <h1>{title}</h1>
      <img src={poster_path ? `https://image.tmdb.org/t/p/w342/${poster_path}` : "Постер не найден"} alt={title} />
      <p>User Score: {vote_average > 0 ? vote_average * 10 : 0}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      {genres.length > 0 && (
        <ul>
          {genres.map((gender, index) => (
            <li key={index}>{gender.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

FilmCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default FilmCard;