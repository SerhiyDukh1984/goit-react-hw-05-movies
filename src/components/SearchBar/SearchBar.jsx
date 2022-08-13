import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import s from './SearhcBar.module.css';

const Searchbar = ({ getSearchInput }) => {
  const [searchInput, setSearchInput] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = e => {
    const { value } = e.target;

    setSearchInput(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`?query=${searchInput}`, {
      state: location,
    });

    if (searchInput.trim() === '') {
      alert('what are you want?');
      return;
    }

    getSearchInput(searchInput);
  };

  return (
    <>
      <div className={s.nav}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search film..."
            autoComplete="off"
            autoFocus
            onChange={handleChange}
            value={searchInput}
            className={s.input}
          />

          <button type="submit" className={s.button}>
            <span>Search</span>
          </button>
        </form>
      </div>
    </>
  );
};

Searchbar.propTypes = {
  getSearchInput: PropTypes.func.isRequired,
};

export default Searchbar;
