import PropTypes from 'prop-types';
import { useState } from 'react';
import s from './SearhcBar.module.css';

const Searchbar = ({ setSearch }) => {
  const [searchInput, setSearchInput] = useState('');

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

    setSearch({ query: searchInput });
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
  setSearch: PropTypes.func.isRequired,
};

export default Searchbar;
