import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './DetailsInfo.module.css';

const DetailsInfo = ({ movie }) => {
  const location = useLocation();
  const date = [movie.release_date];
  let release_date = 0;

  if (date[0] !== undefined) {
    const release = date[0].split('-')[0];
    release_date = release;
  }
  return (
    <>
      {movie.length !== 0 && (
        <section>
          <Link to={location.state ?? '/movies'}>
            <button className={s.button}>Go Back</button>
          </Link>

          <div className={s.info}>
            {movie.poster_path && (
              <img
                className={s.image}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            )}
            <div className={s.text}>
              <h2 className={s.title}>
                {movie.title} <span className={s.date}>({release_date})</span>
              </h2>
              <p>
                <span className={s.description}>User Score: </span>{' '}
                <span className={s.score}>
                  {(movie.vote_average * 10).toFixed(0)} %
                </span>
              </p>
              <p className={s.description}>Overview:</p>
              <p className={s.textInfo}>{movie.overview}</p>
              <div>
                <p className={s.description}>Genres: </p>
                <ul>
                  {movie.genres &&
                    movie.genres.map(genre => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

DetailsInfo.propTypes = PropTypes.array.isRequired;

export default DetailsInfo;
