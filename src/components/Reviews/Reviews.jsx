import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'Api/Api';
import s from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(response => {
      setReviews(response.data.results);
      console.log(response.data.results);
    });
  }, [movieId]);

  return (
    <div className={s.review}>
      {reviews.length === 0 ? (
        <p className={s.alert}>We don't have any reviews for this movie.</p>
      ) : (
        <ul>
          {reviews.map(review => (
            <li key={review.id} className={s.item}>
              <h3 className={s.title}>Author: {review.author}</h3>
              <p className={s.text}>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
