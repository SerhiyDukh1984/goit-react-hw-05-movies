// import { Routes } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
// import PropTypes from 'prop-types';

const Home = () => {
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    // const BASE_URL = 'https://www.themoviedb.org/movie/';
    // const options = new URLSearchParams({
    //   key: ' 1d6ccb96bef0945cd43d51d678e594b7',
    //   // q: searchInput,
    //   // image_type: 'photo',
    //   // orientation: 'horizontal',
    //   // safesearch: 'true',
    //   // page: page,
    //   // per_page: '12',
    // });

    try {
      const response = axios.get(
        `https://api.themoviedb.org/3/movie/343611?api_key=1d6ccb96bef0945cd43d51d678e594b7&append_to_response=videos`
      );
      if (response.data === {}) {
        throw new Error('error');
      }

      return response;
    } catch (error) {
      throw error;
    }
  };

  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <button type="button" onClick={getMovies}>
        load
      </button>
    </ul>
  );
};

export default Home;
