import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "9f716f4578fffd91065817179e197459"
    }
})

// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
export const getTrendsMovies = () => {
  return instance.get(`trending/all/day`);
};

export const getSearchsMovies = (query) => {
  return instance.get(`search/movie?query=${query}`);
};

export const getMovieById = (movieId) => {
  return instance.get(`movie/${movieId}`);
};

export const getCastById = (movieId) => {
  return instance.get(`movie/${movieId}/credits`);
};

export const getReviewsById = (movieId) => {
  return instance.get(`movie/${movieId}/reviews`);
};



