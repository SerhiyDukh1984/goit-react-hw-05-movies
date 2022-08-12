import { useState, useEffect } from 'react';
import Searchbar from 'components/SearchBar/SearchBar';
import { getMoviesBySearch } from 'Api/Api';
import MovieList from '../components/MovieList/MovieList';

const Movies = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const getSearchInput = value => {
    setSearchInput(value);
  };

  useEffect(() => {
    if (searchInput !== '') {
      getMoviesBySearch(searchInput).then(response => {
        setSearchMovie(response.data.results);
      });
    }
  }, [searchInput]);

  return (
    <>
      <Searchbar getSearchInput={getSearchInput} />
      {searchMovie && <MovieList films={searchMovie} />}
    </>
  );
};

export default Movies;
