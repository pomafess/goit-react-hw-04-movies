import React, {Component, lazy, Suspense} from 'react';
// import qs from "qs";

import {getTrendsMovies} from "../../components/Service/moviesService";

const MoviesList = lazy(() => import ("../../components/MoviesList"));

class HomePage extends Component {
    state = {
        movies: [],
        loading: false,
        error: null
    }

    async componentDidMount() {

        const { data } = await getTrendsMovies();
        this.setState({movies: data.results})
    
    }
    // componentDidMount() {
    //         this.setState({
    //             loading: true
    //         })
    //     }

    // async componentDidUpdate() {
    //     // const {loading} = this.state;

    //     // if (loading) {
    //     //     try {
    //     //         // const {search} = this.props.location;
    //     //         // const params = qs.parse(search.slice(1));

    //     //         const { data } = await getTrendsMovies();
    //     //         console.log(data)
    //     //         this.setState(({movies}) => {
    //     //             return {
    //     //                 movies: data.results,
    //     //                 loading: false
    //     //             }
    //     //         })
    //     //     } catch (error) {
    //     //         this.setState({
    //     //             loading: false,
    //     //             error
    //     //         })
    //     //     }
    //     // }
    // }
    render() {
        const {loading, error, movies} = this.state;

        return (
            <div>
                <h2>Trending today</h2>
                {loading && <p>Movies loading ...</p>}
                {error && <p>Не удалось загрузить фильмы</p>}
                {!loading && !error && 
                <Suspense fallback={<p>Loading ...</p>}>
                    <MoviesList movies={movies} />
                </Suspense>}
            </div>
        )
    }

}


export default HomePage;