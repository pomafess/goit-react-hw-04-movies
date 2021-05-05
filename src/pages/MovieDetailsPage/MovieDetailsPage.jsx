import React, { Component, Suspense, lazy } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import FilmCard from "../../components/FilmCard";
import Button from "../../components/Button"

import { getMovieById } from "../../components/Service/moviesService"

import styles from "./MovieDetailsPage.module.css"

const CastPage = lazy(() =>
  import('../CastPage'),
);

const ReviewsPage = lazy(() =>
  import('../ReviewsPage'),
);

class MovieDetailsPage extends Component {
    state = {
      movie: {},
       error: null
    };

     async componentDidMount() {
        const {movieId} = this.props.match.params
        const { data } = await getMovieById(movieId);
         this.setState({ movie: data})
        
  }
  
  onButtonClickReturn = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || {pathname: `/`});
  };
  
  render() {
    console.log(this.props.match.url);
    const {
        movie
    } = this.state
    
    const {
        onButtonClickReturn
    } = this
      return (
        < div >
          <Button text="Вернуться назад" onClick={onButtonClickReturn}/>
            <FilmCard movie={movie} />
            <div>
            <h3>Additional information</h3>

            <ul className={styles.list}>
              <li className={styles.listItem}>
                <NavLink
                  to={{
                    pathname: `${this.props.match.url}/cast`,
                    // state: { ...this.props.location.state },
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
            <Suspense fallback={<h2>Loading...</h2>}>
              <Switch>
                <Route
                  exact
                  path={`${this.props.match.path}/cast`}
                  component={CastPage}
                />
                <Route
                  exact
                  path={`${this.props.match.path}/reviews`}
                  component={ReviewsPage}
                />
              </Switch>
            </Suspense>
          </div>
        </div>)
    }
    }

 
export default MovieDetailsPage;
