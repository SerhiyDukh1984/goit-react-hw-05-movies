import { NavLink } from 'react-router-dom';
import s from './Additional.module.css';

const Additional = () => {
  return (
    <section className={s.section}>
      <h2 className={s.title}>Additional information</h2>
      <ul>
        <li className={s.item}>
          <NavLink to="cast" className={s.link}>
            Cast
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="reviews" className={s.link}>
            Reviews
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Additional;
