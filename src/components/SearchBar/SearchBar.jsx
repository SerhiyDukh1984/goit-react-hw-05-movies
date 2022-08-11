// import PropTypes from 'prop-types';
import { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import s from './Searchbar.module.css';
import { getMoviesBySearch } from 'Api/Api';
import MovieList from '../MovieList/MovieList';

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchMovie, setSearchMovie] = useState([]);

  const handleChange = e => {
    const { value } = e.target;

    setSearchInput(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchInput.trim() === '') {
      alert('what are you want?');
      return;
    }
    getMoviesBySearch(searchInput).then(response => {
      setSearchMovie(response.data.results);
    });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search film"
            autoComplete="off"
            autoFocus
            onChange={handleChange}
            value={searchInput}
          />

          <button type="submit">
            <span>Search</span>
          </button>
        </form>
      </div>

      <MovieList films={searchMovie} />
    </>
  );
};

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default Searchbar;
