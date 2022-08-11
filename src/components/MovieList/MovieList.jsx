import { Link } from 'react-router-dom';

const MovieList = ({ title, films }) => {
  return (
    <>
      <h1>{title}</h1>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
