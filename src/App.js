import React from 'react';
import './App.css';
import Home from './Components/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Components/NoMatch/NotFound';
import UserDetails from './Components/UserDetails/UserDetails';
import Header from './Components/Header/Header';

function App() {

  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/user/:userId">
          <UserDetails />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
