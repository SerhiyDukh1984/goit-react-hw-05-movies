import { React } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Container from './Container/Container';
import Navigation from './Navigation/Navigation';
import Home from '../pages/Home.jsx';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';

export default function App() {
  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}
