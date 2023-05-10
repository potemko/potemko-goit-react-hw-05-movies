import axios from 'axios';

const API_KEY = '3a2e2bc23fb9726ad0f136c292eff3a7';
const BASE_URL = 'https://api.themoviedb.org/3';


const getMovieCast = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

const getTrendingMovie = async () => {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    return response.data.results;
};

const getMovieDetails = async (movieId) => {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return response.data
}

const getMovies = async (movieID) => {
    
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${movieID}`
  );
  return response.data.results;
};

const getReviews = async (movieId) => {

    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data.results;
}

export {
  getReviews,
  getMovieCast,
  getTrendingMovie,
  getMovieDetails,
  getMovies,
};