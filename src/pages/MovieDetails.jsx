import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieInfo } from 'Api/Api';
import DetailsInfo from 'components/MovieDetails/MovieDetails';

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
      {/* <AdditionalInfoNav /> */}
      {/* <Suspense fallback={<Loader />}>
        <Outlet /> */}
      {/* </Suspense> */}
    </>
  );
};

export default MoviesInfo;
