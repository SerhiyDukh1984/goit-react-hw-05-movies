import { useEffect, useState } from 'react';
import { getTrendMovies } from 'Api/Api';
import MovieList from '../components/MovieList/MovieList.jsx';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getTrendMovies()
      .then(response => {
        setFilms(response.data.results);
      })
      .catch(error => console.log('error'));
  }, []);

  return (
    <>
      <MovieList title={'Trending today'} films={films} />
    </>
  );
};

export default Home;
