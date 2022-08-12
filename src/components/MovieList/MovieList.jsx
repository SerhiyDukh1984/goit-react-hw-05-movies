import { Link } from 'react-router-dom';
import s from './MovieList.module.css';

const MovieList = ({ title, films }) => {
  return (
    <section className={s.section}>
      <h1 className={s.title}>{title}</h1>
      <ul>
        {films.map(film => (
          <li key={film.id} className={s.item}>
            <Link to={`/movies/${film.id}`} className={s.link}>
              <p className={s.text}>
                <span className={s.decor}>- </span>
                {film.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MovieList;
