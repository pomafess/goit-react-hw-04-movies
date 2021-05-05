import React, {Component, lazy, Suspense} from 'react';

import { getSearchsMovies } from "../../components/Service/moviesService"
import SearchForm from "../../components/SearchForm"

const MoviesList = lazy(() => import ("../../components/MoviesList"));

class MoviesPage extends Component {
    state = {
        movies: [],
        error: null,
        loading: false
    }

    onChangeQuery = query => {
        getSearchsMovies(query).then(response => { this.setState({movies: response.data.results})})
        }
   

    render() {

        const {loading, error, movies} = this.state;

        return (
            <div>
                <SearchForm onSubmit={this.onChangeQuery} />
                 <div>
                {loading && <p>Movies loading ...</p>}
                {error && <p>Не удалось загрузить фильмы</p>}
                {!loading && !error && 
                <Suspense fallback={<p>Loading ...</p>}>
                    <MoviesList movies={movies} />
                </Suspense>}
                </div>
            </div>
        )
    }

}


export default MoviesPage;