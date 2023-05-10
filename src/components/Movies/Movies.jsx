import { useEffect, useState } from 'react';
import css from './Movies.module.css';
import {  Link, useSearchParams } from 'react-router-dom';
import {getMovies} from '../../services/services'

const Movies = () => {
  const [film, setFilm] = useState([]);
  const [searchMovie, setSearchMovie] = useSearchParams();

  const movieID = searchMovie.get('movieID') ?? '';

useEffect(() => {
  const getFilm = async () => {
    try {
      const movie = await getMovies(movieID)
      setFilm(movie)
    }catch (error) {
      console.error(error)
    } 
  };
  getFilm();
}, [movieID])

  const updateQuery = e => {
    if (e.target.value === '') {
      return setSearchMovie({});
    }
    setSearchMovie({ movieID: e.target.value });
  };

  const handleSearch = e => {
    e.preventDefault();
    setSearchMovie({ movieID: movieID });
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSearch}>
        <label className={css.labelPosition}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            onChange={updateQuery}
            value={movieID}
            className={css.input}
          ></input>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormLabel}>Search</span>
          </button>
        </label>
      </form>
      <ul>
        {film.map(movie => 
        {return (
          <Link key={movie.id} to={`${movie.id}`} className={css.itemMovie}>
            <li>{movie.title}</li>
          </Link>
        );}
        
        )}
      </ul>
    </div>
  );
};

export default Movies;
