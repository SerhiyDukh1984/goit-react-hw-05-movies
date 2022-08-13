import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const setLinkStyle = ({ isActive }) =>
  isActive
    ? { color: 'rgb(255, 77, 0)', borderBottom: '4px solid rgb(255, 77, 0)' }
    : { color: 'blue' };

const Navigation = ({ children }) => {
  return (
    <>
      <nav className={s.nav}>
        <NavLink to="/" className={s.link} style={setLinkStyle}>
          Home
        </NavLink>
        <NavLink to="/movies" className={s.link} style={setLinkStyle}>
          Movies
        </NavLink>
      </nav>
      {children}
    </>
  );
};

export default Navigation;
