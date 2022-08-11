import { useEffect, useState } from 'react';
import { getCredits } from 'Api/Api';
// import { useParams } from 'react-router-dom';
// import s from './Cast.module.css';

const Cast = movie => {
  const [cast, setCast] = useState([]);
  console.log('🚀 ~ cast', cast);

  //   const { movieId } = useParams();

  useEffect(() => {
    getCredits(movie.id)
      .then(data => setCast(data))
      .catch(error => console.log(error));
  }, [movie.id]);

  return (
    <>
      {cast.length !== 0 && (
        <ul>
          {cast.map(
            el =>
              el.profile_path && (
                <li key={el.credit_id}>
                  {el.profile_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                      alt={el.name}
                    />
                  )}
                  <h3>{el.name}</h3>
                  <p>Character: {el.character}</p>
                </li>
              )
          )}
        </ul>
      )}
    </>
  );
};

export default Cast;
