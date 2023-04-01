import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import MovieList from './Movies';
import Podcasts from './Podcasts';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Podcasts">Podcasts</Link>
        </li>
        <li>
          <Link to="/Movies">Movies</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Podcasts" component={Podcasts} />
        <Route path="/Movies" component={MovieList} />
      </Switch>
      {/* <div className="App">
        <HomePage />
        <MovieList />
      </div> */}
    </Router>
  );
}

export default App;
