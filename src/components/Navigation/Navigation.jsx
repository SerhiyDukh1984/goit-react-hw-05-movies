import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = ({ children }) => {
  return (
    <>
      <nav className={s.nav}>
        <NavLink to="/" className={s.link} activeclassname={s.activeLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={s.link} activeclassname={s.activeLink}>
          Movies
        </NavLink>
      </nav>
      {children}
    </>
  );
};

export default Navigation;
