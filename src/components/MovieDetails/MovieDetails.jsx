import { Link } from 'react-router-dom';
import Additional from 'components/Additional/Additional';

const DetailsInfo = ({ movie }) => {
  const date = [movie.release_date];
  let release_date = 0;

  if (date[0] !== undefined) {
    const release = date[0].split('-')[0];
    release_date = release;
  }
  return (
    <>
      {movie.length !== 0 && (
        <>
          <Link to={'/'}>
            <button>Go Back</button>
          </Link>
          <section>
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            )}
            <div>
              <h2>
                {movie.title} ({release_date})
              </h2>
              <p>User Score: {(movie.vote_average * 10).toFixed(0)} %</p>
              <p>Overview:</p>
              <p>{movie.overview}</p>
              <div>
                <p>Genres: </p>
                <ul>
                  {movie.genres &&
                    movie.genres.map(genre => (
                      <li key={genre.id}>{genre.name}</li>
                    ))}
                </ul>
              </div>
            </div>
          </section>
          <section>
            <Additional movie={movie} />
          </section>
        </>
      )}
    </>
  );
};

export default DetailsInfo;
