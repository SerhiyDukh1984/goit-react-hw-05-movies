import { NavLink } from 'react-router-dom';

const Additional = ({ movie }) => {
  return (
    <>
      <h2>Additional information</h2>
      <NavLink to={`/movies/${movie.id}/cast`}>Cast</NavLink>
      <NavLink to={`/movies/${movie.id}/reviews`}>Reviews</NavLink>
    </>
  );
};

export default Additional;
