// import { Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

import { getTrendMovies } from 'Api/Api';

import MovieList from '../components/MovieList/MovieList.jsx';

//

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getTrendMovies().then(response => {
      setFilms(response.data.results);
    });
  }, []);

  return (
    <>
      <MovieList title={'Trending today'} films={films} />
    </>
  );
};

export default Home;
