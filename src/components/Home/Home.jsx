import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import css from './Home.module.css'
import {getTrendingMovie} from '../../services/services'

// const API_KEY = '3a2e2bc23fb9726ad0f136c292eff3a7';
// const TRENDING_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
   const getHome = async () => {
    try {
      const home = await getTrendingMovie();
      setMovies(home);
    } catch(error){
      console.error(error)
    }
   };
   getHome()
  }, [])
  

  // useEffect(() => {
  //   axios
  //     .get(TRENDING_URL)
  //     .then(response => {
  //       setMovies(response.data.results);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <div>
      <ul>
        {movies.map(movie => (
          <Link
            key={movie.id}
            to={`/movies/${movie.id}`}
            className={css.itemMovie}
          >
            <li key={movie.id}>{movie.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Home;
