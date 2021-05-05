import PropTypes from 'prop-types';
import styles from './CastItem.module.css';

const CastItem = ({ casts }) => {
  const itemCast = casts.map(({ id, name, character, profile_path }) => (
    <li key={id} className={styles.castGalleryItem}>
     <img
       src={
         profile_path
           ? `https://image.tmdb.org/t/p/w92/${profile_path}`
           : "Фото не найдено"
       }
       alt={name}
       width="92"
       className={styles.castGalleryItemImage}
      />
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  ))
  return (
    <>
      {itemCast}
    </>
  )
}


CastItem.propTypes = {
  casts: PropTypes.array.isRequired
};

export default CastItem