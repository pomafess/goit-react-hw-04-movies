import React, { Component} from 'react';
import { NavLink} from 'react-router-dom';

import FilmCard from "../../components/FilmCard";
import Button from "../../components/Button"

import { getMovieById } from "../../components/Service/moviesService"

import styles from "./MovieDetailsPage.module.css"


class MovieDetailsPage extends Component {
    state = {
      movie: {},
      error: null
  };

     async componentDidMount() {
       const { movieId } = this.props.match.params
       try {
         const { data } = await getMovieById(movieId);
         this.setState({ movie: data })
       }
       catch  (error) {
                this.setState({
                    error
                })
            }
      }
  
  onButtonClickReturn = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || {pathname: `/`});
  };
  
  render() {
    console.log(this.props.match.url);
    const {
      movie,
      error
    } = this.state
    
    const {
      onButtonClickReturn
    } = this
    return (
      <>
        {error && <p>Не удалось загрузить страницу</p>}
         {!error &&
        < div >
          <Button text="Вернуться назад" onClick={onButtonClickReturn} />
          <FilmCard movie={movie} />
          <div>
            <h3>Additional information</h3>

            <ul className={styles.list}>
              <li className={styles.listItem}>
                <NavLink
                  to={{
                    pathname: `${this.props.match.url}/cast`,
                  }}
                  className={styles.link}
                  activeClassName={styles.active}
                >
                  Cast
                </NavLink>
              </li>
              <li className={styles.listItem}>
                <NavLink
                  to={{
                    pathname: `${this.props.match.url}/reviews`,

                  }}
                  className={styles.link}
                  activeClassName={styles.active}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
      
          </div>
        </div>
        }
      </>
    )
    }
    }

 
export default MovieDetailsPage;
