import React, {Component, lazy, Suspense} from 'react';

import { getSearchsMovies } from "../../components/Service/moviesService"
import SearchForm from "../../components/SearchForm"

const MoviesList = lazy(() => import ("../../components/MoviesList"));

class MoviesPage extends Component {
    state = {
        query: "",
        movies: [],
        error: null,
        loading: false
    }

    componentDidUpdate() {
        const { query, loading } = this.state;
        console.log(query)
        if (loading) {
            getSearchsMovies(query)
                .then(response => {
                    this.setState({
                        movies: response.data.results,
                        loading: false
                    })
                })
                .catch(error => {
                    this.setState({
                        loading: false,
                        error
                    })
                })
        }
    }

    onChangeQuery = (query) => {
        const { history } = this.props;
             this.setState({
                query,
                movies: [],
                 loading: true
             })
        history.push({
            pathname: this.props.location.pathname,
            search: `query=${query}`
            });
        }
   

    render() {
        const {loading, error, movies} = this.state;
        return (
            <>
                <SearchForm onSubmit={this.onChangeQuery} />
                 <div>
                {loading && <p>Movies loading ...</p>}
                {error && <p>Не удалось загрузить фильмы</p>}
                {!loading && !error && 
                <Suspense fallback={<p>Loading ...</p>}>
                    <MoviesList movies={movies} />
                </Suspense>}
                </div>
            </>
        )
    }

}


export default MoviesPage;