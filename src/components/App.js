import { React } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import Movies from './Movies/Movies';

export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
      </Routes>
    </div>
  );
};
