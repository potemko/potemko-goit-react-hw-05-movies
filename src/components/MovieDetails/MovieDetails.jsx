import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import css from './movieDetails.module.css';
import {getMovieDetails} from '../../services/services'


const MovieDetails = () => {
  const [look, setLook] = useState({});
  const [imageUrl, setImageUrl] = useState('');
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1); // повернення на попередню сторінку
  };

useEffect(() => {
  const getDetails = async () => {
    try{
      const details = await getMovieDetails(movieId);
      setLook(details);
    } catch (error) {
      console.error(error)
    }
  };
  getDetails()
}, [movieId])


  useEffect(() => {
    if (look.poster_path) {
      setImageUrl(`https://image.tmdb.org/t/p/w300${look.poster_path}`);
    }
  }, [look]);

  useEffect(() => {
    if (look.genres) {
      setGenres(look.genres);
    }
  }, [look]);

  return (
    <div>
      <div className={css.container}>
        <button onClick={handleClick} className={css.back}>
          Назад
        </button>
        <ul className={css.infoItem}>
          <li className={css.infoList}>
            <img src={imageUrl} alt={look.title} />
          </li>
          <li className={css.infoList}>
            <h1>{look.title}</h1>
            <p>Overview: {look.overview}</p>
            <p>Rating: {look.vote_average}</p>
            <p>Genres: {genres.map(genre => genre.name).join(', ')}</p>
          </li>
        </ul>
      </div>
      <div>
        <ul className={css.ListItem}>
          <li>
            <Link to="cast" className={css.link}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" className={css.link}>
              Reviews
            </Link>
          </li>
        </ul>

        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
