import { useEffect, useState } from 'react';
import { getCredits } from 'Api/Api';
import { useParams } from 'react-router-dom';
import s from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCredits(movieId)
      .then(response => setCast(response.data.cast))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      {cast !== [] && (
        <ul className={s.list}>
          {cast.map(
            el =>
              el.profile_path && (
                <li key={el.id} className={s.card}>
                  {el.profile_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                      alt={el.name}
                    />
                  )}
                  <h3 className={s.title}>{el.name}</h3>
                  <p className={s.character}>
                    Character: <span className={s.text}> {el.character}</span>
                  </p>
                </li>
              )
          )}
        </ul>
      )}
    </>
  );
};

export default Cast;
