import PropTypes from 'prop-types';
// import styles from './RewiewsItem.module.css';

const RewiewsItem = ({ reviews }) => {
  const itemRewiews =reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h4> Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))
  return (
    <>
      {itemRewiews}
    </>
  )
}


RewiewsItem.propTypes = {
  casts: PropTypes.array.isRequired
};

export default RewiewsItem