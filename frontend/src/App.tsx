import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import MovieList from './Movies';
import Podcasts from './Podcasts';
import Navbar from './Navbar';
import MovieList2 from './movie/MovieList';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Joel's Movie Site
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/podcasts">
                    Podcasts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/movies">
                    Movies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/movie/MovieList">
                    Movies2
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/podcasts" Component={Podcasts} />
          <Route path="/movies" Component={MovieList} />
          <Route path="/movie/MovieList" Component={MovieList2} />
        </Routes>
      </div>
    </>
  );
}

export default App;
