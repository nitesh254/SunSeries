import React from 'react';
import './App.css';
import Home from 'components/Home'
import About from 'components/About';
import 'bootstrap/dist/css/bootstrap.css';
import {Route, BrowserRouter, Router, Switch, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Home />
      <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <a class="navbar-brand">Lakshmi Priya Associates</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <link to="/">Home</link>
            </li>
            <li class="nav-item">
              <link to="/about">Home</link>
            </li>
          </ul>
        </div>
      </nav>

    <Switch> 
      <Route path="/" exact component={Home}></Route>
      <Route path="/About" exact component={About}></Route>
    </Switch>
      </Router>
  );
}

export default App;
