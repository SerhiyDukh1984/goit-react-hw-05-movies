import { useState, useEffect } from 'react';
import { useParams, Routes, Route } from 'react-router-dom';
import { getMovieInfo } from 'Api/Api';
import DetailsInfo from 'components/DetailsInfo/DetailsInfo';
import Additional from 'components/Additional/Additional';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

const MoviesInfo = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieInfo(movieId)
      .then(response => {
        setMovie(response.data);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <>
      {movie && <DetailsInfo movie={movie} />}
      <Additional />
      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </>
  );
};

export default MoviesInfo;
