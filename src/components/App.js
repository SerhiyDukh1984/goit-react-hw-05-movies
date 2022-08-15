import { React, lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
const Container = lazy(() => import('./Container/Container'));
const Navigation = lazy(() => import('./Navigation/Navigation'));
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));

export default function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Container>
  );
}
