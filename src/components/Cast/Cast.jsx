import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css'
import noImg from '../../Photo/rick.png'
import {getMovieCast} from '../../services/services'

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

useEffect(() => {
  const getCast = async () => {
    try {
      const cast = await getMovieCast(movieId);
      setCast(cast);
    } catch (error) {
      console.error(error);
    }
  };
  getCast();
}, [movieId]);

  return (
    <div>
      <ul className={css.photoItem}>
        {cast.map(actor => (
          <li key={actor.id} className={css.photoList}>
            <div className="card" style={{ width: '18rem' }}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    :  noImg 
                }
                className="card-img-top"
                alt={actor.name}
              />
              <div className="card-body">
                <p className="card-text">{actor.name}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
