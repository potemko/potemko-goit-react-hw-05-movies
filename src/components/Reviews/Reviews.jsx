import React, { useEffect, useState } from 'react';
import { getReviews } from '../../services/services';
import { useParams } from 'react-router-dom';


const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getinfo = async () => {
      try {
        const info = await getReviews(movieId);
        setReviews(info);
      } catch (error) {
        console.error(error);
      }
    };
    getinfo();
  }, [movieId]);

  return (
    <div>
      Reviews: <p>{reviews.map(reviews => reviews.content).join(', ')}</p>
    </div>
  );
};

export default Reviews;
