import axios from 'axios';
import PropTypes from 'prop-types';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '1d6ccb96bef0945cd43d51d678e594b7';

export const getTrendMovies = () => {
  try {
    const response = axios.get(
      `${BASE_URL}/trending/movie/week?api_key=${KEY}`
    );
    if (response.results === {}) {
      throw new Error('error');
    }

    return response;
  } catch (error) {
    throw error;
  }
};

export const getMoviesBySearch = query => {
  return axios(`${BASE_URL}search/movie`, {
    params: {
      api_key: KEY,
      query: query,
    },
  });
};

export const getMovieInfo = id => {
  try {
    const response = axios.get(`${BASE_URL}/movie/${id}?api_key=${KEY}`);
    if (response.results === {}) {
      throw new Error('error');
    }

    return response;
  } catch (error) {
    throw error;
  }
};

export const getCredits = id => {
  try {
    const response = axios.get(`${BASE_URL}movie/${id}/credits?api_key=${KEY}`);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getReviews = id => {
  try {
    const response = axios.get(`${BASE_URL}movie/${id}/reviews?api_key=${KEY}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

getMoviesBySearch.propTypes = PropTypes.string.isRequired;
getMovieInfo.propTypes = PropTypes.number.isRequired;
getCredits.propTypes = PropTypes.number.isRequired;
getReviews.propTypes = PropTypes.number.isRequired;
