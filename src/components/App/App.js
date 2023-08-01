import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; 

import Main from '../Main/Main'
import './App.css';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies'
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

function App() {
  const location= useLocation();
  const routeWithHeder = ['/', '/movies', '/saved-movies', '/profile']
  const routeWithFooter = ['/', '/movies', '/saved-movies']
  return (
    <div className="page">
      {routeWithHeder.includes(location.pathname) ? <Header /> : ""}
      <div className='main'>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element ={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      {routeWithFooter.includes(location.pathname) ? <Footer /> : ""}
      <Navigation />
    </div>
  );
}

export default App;
