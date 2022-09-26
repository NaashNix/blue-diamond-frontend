import React, { useState } from 'react';
import './App.css';
import GuestPage from './GuestPage/GuestPage';
import LoginPage from './LoginPage/LoginPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BookNow from './MainApplication/BookNow';
import Signup from './SignupPage/Signup';

function App() {

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path="/" >
              <GuestPage />
          </Route>
          <Route path="/login" >
              <LoginPage />
          </Route>
          <Route path="/booking">
            <BookNow />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
